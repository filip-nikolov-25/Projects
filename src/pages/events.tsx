import AppButton from "@/components/base/AppButton";
import AppWrapper from "@/components/base/AppWrapper";
import CurrentOpenedPage from "@/components/base/CurrentOpenedPage";
import EventListSection from "@/components/base/EventListSection/EventListSection";
import CalendarText from "@/components/eventlistingpage/CalendarText";
import HeroSection from "@/components/eventlistingpage/HeroSection";
import SearchSection from "@/components/eventlistingpage/SearchSection";
import Calendar from "@/components/userDashboardPage/Calendar/Calendar";
import {
  EventCarouselType,
  EventListingStaticContentType,
  EventsListingType,
} from "@/types/typesNew";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface Props {
  allEvents: EventCarouselType[];
  eventsList: EventsListingType[];
  staticContent: EventListingStaticContentType;
}

const EventListingPage = ({ allEvents, eventsList, staticContent }: Props) => {
  const router = useRouter();

  // Filter events by category
  const filterEventsByCategory = (category: keyof EventsListingType) => {
    return eventsList
      .filter((event) => event[category] !== undefined)
      .slice(0, 4);
  };
  const hrWebinarEvents = filterEventsByCategory("hrWebinar");
  const hrConferencesEvents = filterEventsByCategory("hrConferences");
  const hrWeekendEvents = filterEventsByCategory("hrWeekend");
  const hrCoffeeEvents = filterEventsByCategory("hrCoffee");

  const [categoryTerm, setCategoryTerm] = useState("all");
  const [searchTerm, setSearchTerm] = useState(""); // New state for search input

  const hrWebinarParagraph = { en: "HR Webinar", mk: "HR Вебинар" };
  const hrWeekend = { en: "HR Weekend", mk: "HR Викенд" };
  const hrCoffee = { en: "HR Coffee", mk: "HR кафе" };
  const hrConferences = { en: "HR Conferences", mk: "HR Конференции" };

  const allFilteredEvents = [
    ...hrCoffeeEvents,
    ...hrWeekendEvents,
    ...hrWebinarEvents,
    ...hrConferencesEvents,
  ];

  // Filter events by eventName search input
  const filteredEvents = (events: EventsListingType[]) => {
    if (searchTerm === "") return events; // If no search term, return all events
    return events.filter((event) =>
      event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getHeading = (category: string) => {
    switch (category) {
      case "hrCoffee":
        return router.locale === "en" ? hrCoffee.en : hrCoffee.mk;
      case "hrWeekend":
        return router.locale === "en" ? hrWeekend.en : hrWeekend.mk;
      case "hrWebinar":
        return router.locale === "en"
          ? hrWebinarParagraph.en
          : hrWebinarParagraph.mk;
      case "hrConferences":
        return router.locale === "en" ? hrConferences.en : hrConferences.mk;
      default:
        return "";
    }
  };

  // Determine events to display based on category selection and search input
  const eventsToDisplay =
    categoryTerm === "all"
      ? filteredEvents(allFilteredEvents)
      : filteredEvents(
          filterEventsByCategory(categoryTerm as keyof EventsListingType)
        );

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-[7.45%]   z-[-99]">
        <Image
          src={"/eventListingDots/eventListingHeroDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <div className="absolute top-[16.6%]   z-[-99]">
        <Image
          src={"/eventListingDots/eventListingLeftDots.png"}
          className="w-full"
          width={2053}
          height={400}
          alt="dots"
        />
      </div>
      <AppWrapper>
        <HeroSection staticContent={staticContent.heroSection} />
        <CurrentOpenedPage data={staticContent.currentOpenedPage} />
        <div className="flex mt-20 rounded-xl mb-48">
          <CalendarText staticContent={staticContent.calendarSection} />
          <Calendar events={allEvents} />
        </div>
        <AppWrapper>
          <SearchSection
            buttonText={staticContent.filterSection}
            categoryTerm={categoryTerm}
            setCategoryTerm={setCategoryTerm}
          />

          {/* Show the heading and input only when 'all' category is selected */}
          {categoryTerm === "all" && (
            <div className="flex justify-between mt-12 mb-20">
              <h2 className="text-5xl">
                {staticContent.filterSection.allText}
              </h2>
              <input
                type="text"
                placeholder={staticContent.filterSection.inputText}
                className="w-1/4 rounded-full pl-5 outline-2 outline-orange-500 shadow-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
              />
            </div>
          )}

          {categoryTerm === "all" ? (
            <>
              {filteredEvents(hrCoffeeEvents).length > 0 && (
                <EventListSection
                  eventList={filteredEvents(hrCoffeeEvents)}
                  headingParagraph={getHeading("hrCoffee")}
                />
              )}
              {filteredEvents(hrWeekendEvents).length > 0 && (
                <EventListSection
                  eventList={filteredEvents(hrWeekendEvents)}
                  headingParagraph={getHeading("hrWeekend")}
                />
              )}
              {filteredEvents(hrWebinarEvents).length > 0 && (
                <EventListSection
                  eventList={filteredEvents(hrWebinarEvents)}
                  headingParagraph={getHeading("hrWebinar")}
                />
              )}
              {filteredEvents(hrConferencesEvents).length > 0 && (
                <EventListSection
                  eventList={filteredEvents(hrConferencesEvents)}
                  headingParagraph={getHeading("hrConferences")}
                />
              )}
            </>
          ) : (
            <EventListSection
              eventList={eventsToDisplay}
              headingParagraph={getHeading(categoryTerm)}
            />
          )}
        </AppWrapper>
      </AppWrapper>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const locale = context.locale;

  const eventsDataRes = await fetch("http://localhost:5000/allEvents");
  const eventsData = await eventsDataRes.json();

  const eventsListingRes = await fetch("http://localhost:5000/listingEvents");
  const eventListingData = await eventsListingRes.json();

  const staticContentRes = await fetch(
    "http://localhost:5000/eventlistingpage"
  );
  const staticContentData = await staticContentRes.json();

  let allEvents;
  let eventsList;
  let staticContent;

  if (locale) {
    allEvents = eventsData[locale] || null;
    eventsList = eventListingData[locale] || null;
    staticContent = staticContentData[locale].staticContent || null;
  }

  return {
    props: {
      allEvents,
      eventsList,
      staticContent,
    },
  };
};

export default EventListingPage;

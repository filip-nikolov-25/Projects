import React, { useState } from "react";
import AppWrapper from "@/components/base/AppWrapper";
import Carrousel from "@/components/base/Carrousel";
import BadgeSection from "@/components/userDashboardPage/BadgeSection/BadgeSection";
import Calendar from "@/components/userDashboardPage/Calendar/Calendar";
import CalendarTextSection from "@/components/userDashboardPage/CalendarTextSection/CalendarTextSection";
import CardsSection from "@/components/userDashboardPage/CardsSection/CardsSection";
import Connections from "@/components/userDashboardPage/Connections/Connections";
import FeedbackInput from "@/components/userDashboardPage/FeedbackInput/FeedbackInput";
import InfoSection from "@/components/userDashboardPage/InfoSection/InfoSection";
import PointsSection from "@/components/userDashboardPage/PointsSection/PointsSection";
import ProfileSection from "@/components/userDashboardPage/ProfileSection/ProfileSection";
import { currentUserType, EventCarouselType, UserDashBoardStaticContent } from "@/types/typesNew";
import { GetServerSideProps } from "next";
import Popup from "@/components/userDashboardPage/PopUp/PopUp";
import AppButton from "@/components/base/AppButton";

interface Props {
  allEvents: EventCarouselType[];
  currentLoggedInUser: currentUserType;
  staticContent:UserDashBoardStaticContent
}

const UserDashBoardPage = ({ allEvents, currentLoggedInUser,staticContent }: Props) => {
  const [isActiveSettings, setIsActiveSettings] = useState(false);
  return (
    <>
      <Popup
        isActive={isActiveSettings}
        onClose={() => setIsActiveSettings(false)}
      >
        <div className="text-2xl font-bold mb-14">Settings are active</div>
        <div className="flex">
          <div className="w-1/2">
            <div className="border-2 p-2 mb-10 border-gray-400 rounded-lg flex flex-col">
              <label htmlFor="name">Ime</label>
              <input
                type="text"
                id="name"
                placeholder={`${currentLoggedInUser.name} ${currentLoggedInUser.lastname}`}
                className="border-none focus:checked:blur-none outline-none"
              />
            </div>
            <div className="border-2 p-2 mb-10 border-gray-400 rounded-lg flex flex-col">
              <label htmlFor="email">{currentLoggedInUser.email}</label>
              <input
                type="text"
                id="name"
                placeholder="vstojanova@hotmail.com"
                className="border-none focus:checked:blur-none outline-none"
              />
            </div>
            <div className="border-2 p-2 mb-10 border-gray-400 rounded-lg flex flex-col">
              <label htmlFor="name">Password</label>
              <input
                type="text"
                id="name"
                placeholder="Промени Лозинка"
                className="border-none focus:checked:blur-none outline-none"
              />
            </div>
            <div className="border-2 p-2 border-gray-400 rounded-lg flex flex-col">
              <label htmlFor="name">Profesija</label>
              <select name="" id="">
                <option value="hr regruter">
                  {currentLoggedInUser.profession}
                </option>
              </select>
            </div>
          </div>
          <div className="w-1/2">
            <div className="border-2 ml-5 p-2 mb-10 border-gray-400 rounded-lg flex flex-col">
              <label htmlFor="name">{currentLoggedInUser.lastname}</label>
              <input
                type="text"
                id="name"
                placeholder="Vnesi prezime"
                className="border-none focus:checked:blur-none outline-none"
              />
            </div>
            <div className="w-[90%] mx-auto">
              <p>Добивај нотификации на:</p>
              <div>
                <input type="checkbox" placeholder="Platforma" />
                <span className="ml-3 text-gray-400">Plarforma</span>
              </div>
              <div>
                <input type="checkbox" placeholder="Platforma" />
                <span className="ml-3 text-gray-400">Email</span>
              </div>
              <div>
                <input type="checkbox" placeholder="Platforma" />
                <span className="ml-3 text-gray-400">
                  Priblizuvanje na datum
                </span>
              </div>
              <p className="mt-5">Добивај нотификации на:</p>
              <div>
                <input type="checkbox" placeholder="Platforma" />
                <span className="ml-3 text-gray-400">Novi sodrzini</span>
              </div>
              <div>
                <input type="checkbox" placeholder="Platforma" />
                <span className="ml-3 text-gray-400">Novi nastani</span>
              </div>
              <div>
                <input type="checkbox" placeholder="Platforma" />
                <span className="ml-3 text-gray-400">
                  Priblizuvanje na datum za nastan
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 ">
          <AppButton
            color="white"
            backgroundColor="#E87B22"
            padding="15px"
            width="30%"
            borderRadius="30px"
          >
            Zacivaj promeni
          </AppButton>
        </div>
      </Popup>
      <AppWrapper>
        <div className="flex pt-10">
          <div className="w-[30%]">
            <ProfileSection staticContent={staticContent.heroSection}
              setIsActiveSettings={setIsActiveSettings}
              currentUser={currentLoggedInUser}
            />
          </div>
          <div className="w-[70%]">
            <InfoSection staticContent={staticContent.heroSection} currentUser={currentLoggedInUser} />
          </div>
        </div>
      </AppWrapper>
      <div className="mt-20 mb-10">

      <Carrousel carrouselData={allEvents} />
      </div>
      <AppWrapper>
        <div className="flex pt-10">
          <div className="w-[30%]">
            <PointsSection staticContent={staticContent.badges} />
            <BadgeSection staticContent={staticContent.badges} />
            <Connections  staticContent={staticContent.badges}/>
            <CalendarTextSection  staticContent={staticContent.calendarSection}/>
          </div>
          <div className="w-[70%]">
            <CardsSection staticContent={staticContent.ticketsSection} />
            <div className="overflow-hidden">

            <FeedbackInput staticContent={staticContent.ticketsSection} />
            </div>
            <div className="p-8 rounded-3xl flex">
              <Calendar events={allEvents}/>
            </div>
          </div>
        </div>
      </AppWrapper>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const locale = context.locale;

  const eventsDataRes = await fetch("http://localhost:5000/allEvents");
  const eventsData = await eventsDataRes.json();

  const currentUserRes = await fetch(
    "http://localhost:5000/currentLoggedInUser"
  );
  const currentUser = await currentUserRes.json();

  const staticContentRes = await fetch("http://localhost:5000/userdashboard");
  const staticContentData = await staticContentRes.json();

  let allEvents;
  let currentLoggedInUser;
  let staticContent;

  if (locale) {
    allEvents = eventsData[locale] || null;
    currentLoggedInUser = currentUser[locale] || null;
    staticContent = staticContentData[locale].staticContent || null;
  }
  return {
    props: {
      allEvents,
      currentLoggedInUser,
      staticContent,
    },
  };
};

export default UserDashBoardPage;

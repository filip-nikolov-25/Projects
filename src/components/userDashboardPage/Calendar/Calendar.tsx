import { useRouter } from "next/router";
import { EventCarouselType } from "@/types/typesNew";
import React, { useState, useEffect } from "react";

interface Props {
  events: EventCarouselType[];
}

const parseEventDate = (event: EventCarouselType, locale: string): { date: Date; id: string } => {
  const [dayOfWeek, day, month] = event.date.split(" ");
  
  let monthIndex;
  if (locale === "mk") {
    const mkMonths = {
      "Јануари": 0, "Февруари": 1, "Март": 2, "Април": 3, 
      "Мај": 4, "Јуни": 5, "Јули": 6, "Август": 7, 
      "Септември": 8, "Октомври": 9, "Ноември": 10, "Декември": 11
    };
    //@ts-ignore
    monthIndex = mkMonths[month];
  } else {
    monthIndex = new Date(Date.parse(month + " 1, 2021")).getMonth();
  }

  return {
    date: new Date(new Date().getFullYear(), monthIndex, parseInt(day, 10)),
    id: event.id,
  };
};

const getDaysInMonth = (month: number, year: number) => {
  return new Array(31)
    .fill(null)
    .map((_, i) => new Date(year, month, i + 1))
    .filter((date) => date.getMonth() === month);
};

const getFirstDayOfMonth = (month: number, year: number) => {
  return new Date(year, month, 1).getDay();
};

const Calendar: React.FC<Props> = ({ events }) => {
  const router = useRouter();
  const locale = router.locale || "en";

  const daysOfWeek = Array.from({ length: 7 }).map((_, i) =>
    new Date(2021, 10, i + 1).toLocaleDateString(locale, { weekday: "short" })
  );

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear) || 7;

  const eventDates = events.map((event) => parseEventDate(event, locale));

  useEffect(() => {
    setCurrentDate(new Date());
  }, [locale]);

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const event = eventDates.find(
      (eventDate) =>
        eventDate.date.getDate() === date.getDate() &&
        eventDate.date.getMonth() === date.getMonth()
    );
    if (event) {
      router.push(`/singleevent/${event.id}`);
    }
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isPast = (date: Date) => {
    return date < new Date() && !isToday(date);
  };

  const isFuture = (date: Date) => {
    return date > new Date();
  };

  return (
    <div className="flex w-full">
      <div className="p-8 w-1/2 rounded-l-3xl shadow-lg bg-white"></div>
      <div className="p-8 w-1/2 bg-white rounded-r-3xl shadow-lg">
        <div className="flex items-center justify-between mb-5">
          <button onClick={handlePreviousMonth} className="text-gray-600 p-2 text-3xl rounded-full">
            &#8656;
          </button>
          <h2 className="text-xl font-bold">
            {currentDate.toLocaleString(locale, { month: "long" })} {currentYear}
          </h2>
          <button onClick={handleNextMonth} className="text-gray-600 p-2 text-3xl rounded-full">
            &#8658;
          </button>
        </div>

        <div className="grid grid-cols-7 gap-4 text-center text-gray-500">
          {daysOfWeek.map((day) => (
            <div key={day} className="font-semibold">{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-4 text-center mt-4">
          {Array.from({ length: firstDayOfMonth - 1 }).map((_, idx) => (
            <div key={idx}></div>
          ))}

          {daysInMonth.map((date) => {
            const event = eventDates.find(
              (eventDate) =>
                eventDate.date.getDate() === date.getDate() &&
                eventDate.date.getMonth() === date.getMonth()
            );

            const isCurrentDate = isToday(date);
            const isPastEvent = event && isPast(event.date);
            const isFutureEvent = event && isFuture(event.date);

            let bgColor = "text-gray-900"; 

            if (isPastEvent) {
              bgColor = "bg-red-500 text-white"; 
            } else if (isCurrentDate) {
              bgColor = "bg-blue-500 text-white"; 
            } else if (isFutureEvent) {
              bgColor = "bg-orange-500 text-white"; 
            }

            return (
              <div
                key={date.getDate()}
                onClick={() => handleDateClick(date)}
                className={`p-2 rounded-full cursor-pointer ${bgColor}`}
              >
                {date.getDate()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;

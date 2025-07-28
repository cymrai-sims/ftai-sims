import React, { useState } from "react";

// Helper to get days in month
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// Helper to get the weekday of first day of month
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Calendar = () => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

  // Build calendar grid
  const daysArray = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.push(null); // Empty for previous month days
  }
  for (let d = 1; d <= daysInMonth; d++) {
    daysArray.push(d);
  }
  // Fill the rest of the grid to make a 6x7 grid
  while (daysArray.length < 42) {
    daysArray.push(null);
  }

  // Change month
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="w-fullmx-auto mt-10 bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handlePrevMonth}
          className="text-lg font-bold px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          &lt;
        </button>
        <div className="text-xl font-bold text-gray-800">
          {monthNames[currentMonth]} {currentYear}
        </div>
        <button
          onClick={handleNextMonth}
          className="text-lg font-bold px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-gray-600"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysArray.map((day, idx) => (
          <div
            key={idx}
            className={`h-12 flex items-center justify-center rounded ${
              day
                ? (day === today.getDate() &&
                  currentMonth === today.getMonth() &&
                  currentYear === today.getFullYear()
                  ? "bg-blue-500 text-white font-bold"
                  : "bg-gray-100 text-gray-800")
                : ""
            }`}
          >
            {day ? day : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
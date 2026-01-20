'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface CalendarProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function Calendar({ selectedDate, onDateSelect }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isDateAvailable = (date: Date): boolean => {
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isPast = date < today;
    const daysDiff = Math.floor((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const isWithin30Days = daysDiff >= 1 && daysDiff <= 30;

    return !isWeekend && !isPast && isWithin30Days;
  };

  const isSelected = (date: Date): boolean => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    if (isDateAvailable(date)) {
      onDateSelect(date);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days: (number | null)[] = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const days = renderCalendar();

  return (
    <div className="bg-white rounded-xl border-2 border-[#505050] shadow-lg p-4 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevMonth}
            className="h-9 w-9 border-2 border-[#505050] hover:border-[#303030] hover:bg-[#303030]/5"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </motion.div>
        <h3 className="text-lg sm:text-xl font-bold text-[#303030]">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNextMonth}
            className="h-9 w-9 border-2 border-[#505050] hover:border-[#303030] hover:bg-[#303030]/5"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-3">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-center text-xs sm:text-sm font-semibold text-gray-500 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={index} className="aspect-square" />;
          }

          const date = new Date(currentYear, currentMonth, day);
          const available = isDateAvailable(date);
          const selected = isSelected(date);

          return (
            <motion.button
              key={index}
              onClick={() => handleDateClick(day)}
              disabled={!available}
              whileHover={available ? { scale: 1.1 } : {}}
              whileTap={available ? { scale: 0.95 } : {}}
              className={`
                aspect-square text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200
                ${available
                  ? selected
                    ? 'bg-[#303030] text-white shadow-lg scale-105'
                    : 'bg-gray-50 text-[#303030] hover:bg-[#303030]/10 hover:text-[#303030] hover:border-2 hover:border-[#303030]/30'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }
                ${selected ? 'ring-2 ring-[#303030] ring-offset-2' : ''}
                touch-manipulation
              `}
            >
              {day}
            </motion.button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-center flex-wrap gap-4 text-xs text-gray-500">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#303030]/20 border-2 border-[#303030] rounded mr-2"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-100 rounded mr-2"></div>
          <span>Unavailable</span>
        </div>
      </div>
    </div>
  );
}

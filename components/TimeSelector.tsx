'use client';

import { motion } from 'framer-motion';

interface TimeSelectorProps {
  selectedTime: string;
  onTimeSelect: (time: string) => void;
  disabled?: boolean;
}

export default function TimeSelector({ selectedTime, onTimeSelect, disabled }: TimeSelectorProps) {
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      if (hour < 17) {
        slots.push(`${hour.toString().padStart(2, '0')}:30`);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="bg-white rounded-xl border-2 border-[#505050] shadow-lg p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-bold text-[#303030] mb-4">Select Time</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
        {timeSlots.map((time, index) => (
          <motion.button
            key={time}
            onClick={() => onTimeSelect(time)}
            disabled={disabled}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.02 }}
            whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
            whileTap={!disabled ? { scale: 0.95 } : {}}
            className={`
              px-3 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200
              ${selectedTime === time
                ? 'bg-[#303030] text-white shadow-lg'
                : 'bg-gray-50 text-[#303030] hover:bg-[#303030]/10 hover:text-[#303030] hover:border-2 hover:border-[#303030]/30 border-2 border-transparent'
              }
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer touch-manipulation'}
            `}
          >
            {time}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

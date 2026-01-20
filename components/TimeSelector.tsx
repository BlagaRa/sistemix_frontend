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
    <div className="bg-white rounded-xl border-2 border-black shadow-lg p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-bold text-black mb-4">Select Time</h3>
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
                ? 'bg-black text-white shadow-lg'
                : 'bg-gray-50 text-black hover:bg-black/10 hover:text-black hover:border-2 hover:border-black/30 border-2 border-transparent'
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

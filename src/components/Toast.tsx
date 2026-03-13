import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast = ({ message, isVisible, onClose }: ToastProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          className="fixed bottom-10 left-1/2 z-[100] glass px-6 py-4 rounded-2xl flex items-center gap-4 border-lumen-purple/50 min-w-[300px]"
        >
          <div className="w-10 h-10 rounded-full bg-lumen-purple/20 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-lumen-purple" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm">Listo!</p>
            <p className="text-xs text-white/60">{message}</p>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

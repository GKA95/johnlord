import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  showLabel = false 
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#168A45] group cursor-pointer ${
        isDark
          ? 'bg-white/10 hover:bg-white/15 text-neutral-200 border border-white/10 hover:border-[#168A45]/50'
          : 'bg-black/5 hover:bg-black/10 text-neutral-800 border border-black/10 hover:border-[#168A45]/50 shadow-xs'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon */}
        <Sun 
          className={`w-4 h-4 transition-all duration-500 transform ${
            isDark 
              ? 'opacity-0 rotate-90 scale-50 absolute' 
              : 'opacity-100 rotate-0 scale-100 text-amber-600'
          }`} 
        />
        {/* Moon Icon */}
        <Moon 
          className={`w-4 h-4 transition-all duration-500 transform ${
            isDark 
              ? 'opacity-100 rotate-0 scale-100 text-[#63D98A]' 
              : 'opacity-0 -rotate-90 scale-50 absolute'
          }`} 
        />
      </div>

      {showLabel && (
        <span className="text-xs font-medium tracking-wider uppercase">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
};

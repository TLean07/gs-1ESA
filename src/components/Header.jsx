import { BriefcaseIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export function Header({ onToggleDarkMode, isDarkMode }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-40 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-3">
          <BriefcaseIcon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
          
          <h1 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
            GS | Futuro do Trabalho
          </h1>
        </div>
        
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-full text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Alternar modo escuro"
        >
          {isDarkMode ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </header>
  );
}
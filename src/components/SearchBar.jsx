import { MagnifyingGlassIcon, MapPinIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export function SearchBar({ searchTerm, onSearchChange, filtroArea, onAreaChange, filtroLocal, onLocalChange, areas }) {
  return (
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg sticky top-[73px] z-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar por nome, cargo, tecnologia..."
            className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={onSearchChange}
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BuildingOfficeIcon className="w-5 h-5 text-gray-400" />
          </div>
          <select
            className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            value={filtroArea}
            onChange={onAreaChange}
          >
            <option value="">Todas as Áreas</option>
            {areas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPinIcon className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Filtrar por cidade/estado..."
            className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filtroLocal}
            onChange={onLocalChange}
          />
        </div>
      </div>
    </div>
  );
}
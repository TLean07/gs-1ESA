import { motion } from 'framer-motion';
import { MapPinIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function ProfileCard({ perfil, onClick }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer group"
    >
      <div className="h-28 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        <ArrowUpRightIcon className="w-6 h-6 text-white absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-6 relative -mt-16 flex flex-col items-center">
        <img
          src={perfil.foto}
          alt={perfil.nome}
          className="w-24 h-24 rounded-full mx-auto mb-3 border-4 border-white dark:border-gray-800 shadow-lg"
        />
        <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">
          {perfil.nome}
        </h3>
        <p className="text-center text-sm text-blue-600 dark:text-blue-400 font-medium">
          {perfil.cargo}
        </p>
        
        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 mt-2">
          <MapPinIcon className="w-4 h-4" />
          <p className="text-center text-sm">{perfil.localizacao}</p>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 w-full flex flex-wrap justify-center gap-2">
          {perfil.habilidadesTecnicas.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
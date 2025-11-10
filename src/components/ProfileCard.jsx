export function ProfileCard({ perfil, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer transition-transform transform hover:scale-105"
    >
      <img
        src={perfil.foto}
        alt={perfil.nome}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
      />
      <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">
        {perfil.nome}
      </h3>
      <p className="text-center text-blue-600 dark:text-blue-400">
        {perfil.cargo}
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {perfil.habilidadesTecnicas.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
export function ProfileModal({ perfil, onClose }) {
  if (!perfil) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {perfil.nome}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src={perfil.foto}
              alt={perfil.nome}
              className="w-32 h-32 rounded-full border-4 border-blue-500 flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <p className="text-xl text-blue-600 dark:text-blue-400">{perfil.cargo}</p>
              <p className="text-gray-600 dark:text-gray-400">{perfil.localizacao}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{perfil.resumo}</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Habilidades Técnicas</h4>
            <div className="flex flex-wrap gap-2">
              {perfil.habilidadesTecnicas.map((skill) => (
                <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
              {perfil.softSkills.map((skill) => (
                <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Experiência</h4>
            {perfil.experiencias.map((exp, index) => (
              <div key={index} className="mt-2 pl-4 border-l-2 dark:border-gray-700">
                <p className="font-bold text-gray-800 dark:text-gray-100">{exp.cargo} <span className="font-normal text-gray-600 dark:text-gray-400">@ {exp.empresa}</span></p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.inicio} - {exp.fim}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">{exp.descricao}</p>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Formação</h4>
            {perfil.formacao.map((form, index) => (
              <div key={index} className="mt-2 pl-4 border-l-2 dark:border-gray-700">
                <p className="font-bold text-gray-800 dark:text-gray-100">{form.curso}</p>
                <p className="text-gray-600 dark:text-gray-400">{form.instituicao} ({form.ano})</p>
              </div>
            ))}
          </div>

        </div>

        <div className="p-6 sticky bottom-0 bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-700 flex flex-col sm:flex-row gap-3">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Recomendar Profissional
          </button>
          <button className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Enviar Mensagem
          </button>
        </div>
      </div>
    </div>
  );
}
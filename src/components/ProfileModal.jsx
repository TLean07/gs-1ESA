import { motion } from 'framer-motion';
import {
  XMarkIcon,
  CheckBadgeIcon,
  PaperAirplaneIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  SparklesIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 25, stiffness: 300 } },
  exit: { opacity: 0, y: 30, scale: 0.95 },
};

export function ProfileModal({ perfil, onClose }) {
  if (!perfil) return null;

  const handleActionClick = (message) => {
    alert(message);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {perfil.nome}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <XMarkIcon className="w-6 h-6" />
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

          <Section title="Habilidades Técnicas" icon={<CodeBracketIcon className="w-5 h-5" />}>
            <TagList items={perfil.habilidadesTecnicas} color="blue" />
          </Section>

          <Section title="Soft Skills" icon={<SparklesIcon className="w-5 h-5" />}>
            <TagList items={perfil.softSkills} color="green" />
          </Section>

          <Section title="Experiência" icon={<BriefcaseIcon className="w-5 h-5" />}>
            {perfil.experiencias.map((exp, index) => (
              <div key={index} className="mt-2 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                <p className="font-bold text-gray-800 dark:text-gray-100">{exp.cargo} <span className="font-normal text-gray-600 dark:text-gray-400">@ {exp.empresa}</span></p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.inicio} - {exp.fim}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-1">{exp.descricao}</p>
              </div>
            ))}
          </Section>

          <Section title="Formação Acadêmica" icon={<AcademicCapIcon className="w-5 h-5" />}>
            {perfil.formacao.map((form, index) => (
              <div key={index} className="mt-2 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                <p className="font-bold text-gray-800 dark:text-gray-100">{form.curso}</p>
                <p className="text-gray-600 dark:text-gray-400">{form.instituicao} ({form.ano})</p>
              </div>
            ))}
          </Section>
        </div>

        <div className="p-6 sticky bottom-0 bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-700 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => handleActionClick(`Recomendação enviada para ${perfil.nome}!`)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <CheckBadgeIcon className="w-5 h-5" />
            Recomendar
          </button>
          <button
            onClick={() => handleActionClick(`Mensagem enviada para ${perfil.nome}!`)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
            Enviar Mensagem
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Section({ title, icon, children }) {
  return (
    <div>
      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">
        {icon}
        {title}
      </h4>
      {children}
    </div>
  );
}

function TagList({ items, color = 'gray' }) {
  const colors = {
    blue: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    green: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    gray: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
  };

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className={`text-sm font-medium px-3 py-1 rounded-full ${colors[color]}`}>
          {item}
        </span>
      ))}
    </div>
  );
}
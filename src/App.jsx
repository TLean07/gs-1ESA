import { useState, useEffect, useMemo } from 'react';
import perfisData from './data/perfis.json';
import { ProfileCard } from './components/ProfileCard';
import { ProfileModal } from './components/ProfileModal';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [selectedPerfil, setSelectedPerfil] = useState(null);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filtroArea, setFiltroArea] = useState("");
  const [filtroLocal, setFiltroLocal] = useState("");
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const perfisFiltrados = useMemo(() => {
    return perfisData
      .filter(perfil => {
        const busca = searchTerm.toLowerCase();
        const nomeCargo = `${perfil.nome} ${perfil.cargo}`.toLowerCase();
        const habilidades = perfil.habilidadesTecnicas.join(' ').toLowerCase();
        
        return (nomeCargo.includes(busca) || habilidades.includes(busca));
      })
      .filter(perfil => {
        return filtroArea ? perfil.area === filtroArea : true;
      })
      .filter(perfil => {
        return filtroLocal ? perfil.localizacao.toLowerCase().includes(filtroLocal.toLowerCase()) : true;
      });
  }, [searchTerm, filtroArea, filtroLocal]);

  const areasUnicas = useMemo(() => [...new Set(perfisData.map(p => p.area).sort())], []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      
      <Header onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      <main className="container mx-auto p-4 sm:p-6">
        
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          filtroArea={filtroArea}
          onAreaChange={(e) => setFiltroArea(e.target.value)}
          filtroLocal={filtroLocal}
          onLocalChange={(e) => setFiltroLocal(e.target.value)}
          areas={areasUnicas}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {perfisFiltrados.map((perfil) => (
            <ProfileCard
              key={perfil.id}
              perfil={perfil}
              onClick={() => setSelectedPerfil(perfil)}
            />
          ))}
        </motion.div>
        
        {perfisFiltrados.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-xl text-gray-500 mt-16"
          >
            <p className="text-2xl mb-2">🤔</p>
            <p>Nenhum perfil encontrado.</p>
            <p className="text-base">Tente ajustar seus filtros.</p>
          </motion.div>
        )}

      </main>

      <AnimatePresence>
        {selectedPerfil && (
          <ProfileModal
            perfil={selectedPerfil}
            onClose={() => setSelectedPerfil(null)}
          />
        )}
      </AnimatePresence>
      
    </div>
  );
}

export default App;
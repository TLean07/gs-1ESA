import { useState, useEffect } from 'react'
import perfisData from './data/perfis.json'
import { ProfileCard } from './components/ProfileCard'
import { ProfileModal } from './components/ProfileModal'

function App() {
  const [perfis, setPerfis] = useState(perfisData)
  const [selectedPerfil, setSelectedPerfil] = useState(null)
  
  const [searchTerm, setSearchTerm] = useState("")
  const [filtroArea, setFiltroArea] = useState("")
  
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const perfisFiltrados = perfis
    .filter(perfil => {
      const nomeCargo = `${perfil.nome} ${perfil.cargo}`.toLowerCase()
      const habilidades = perfil.habilidadesTecnicas.join(' ').toLowerCase()
      const busca = searchTerm.toLowerCase()
      
      return (nomeCargo.includes(busca) || habilidades.includes(busca))
    })
    .filter(perfil => {
      if (!filtroArea) return true
      return perfil.area === filtroArea
    })

  const areasUnicas = [...new Set(perfisData.map(p => p.area))]

  const handleCardClick = (perfil) => {
    setSelectedPerfil(perfil)
  }

  const handleCloseModal = () => {
    setSelectedPerfil(null)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      
      <header className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            GS | Futuro do Trabalho
          </h1>
          
          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Encontre Talentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Buscar por nome, cargo, tecnologia..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filtroArea}
              onChange={(e) => setFiltroArea(e.target.value)}
            >
              <option value="">Todas as Áreas</option>
              {areasUnicas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {perfisFiltrados.map((perfil) => (
            <ProfileCard
              key={perfil.id}
              perfil={perfil}
              onClick={() => handleCardClick(perfil)}
            />
          ))}
        </div>
        
        {perfisFiltrados.length === 0 && (
          <p className="text-center text-xl text-gray-500 mt-10">
            Nenhum perfil encontrado.
          </p>
        )}

      </main>

      <ProfileModal
        perfil={selectedPerfil}
        onClose={handleCloseModal}
      />
      
    </div>
  )
}

export default App
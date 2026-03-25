function Home() {
  return (
    <div className="page">
      <section id="dashboard" className="page-header">
        <h1>Dashboard 📊</h1>
        <p>Bienvenue chez Shiny, votre agence spécialisée dans le développement web.</p>
      </section>

      <section id="projects" className="dashboard-section">
        <h2>Projets récents</h2>
        <div className="projects-grid">
        
        </div>
      </section>

      <section id="employees" className="dashboard-section">
        <h2>Équipe</h2>
        <div className="employees-grid">
         
        </div>
      </section>
    </div>
  )
}

export default Home
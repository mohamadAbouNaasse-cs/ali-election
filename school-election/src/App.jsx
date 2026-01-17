function App() {
  return (
    <div className="app">
      <div className="app__frame">
        <header className="section section--hero" data-animate-section>
          <div className="hero">
            <img
              className="hero__logo"
              src="/hekma.jpg"
              alt="Hekma school logo"
            />
            <div className="hero__content">
              <p className="hero__eyebrow">Student Council</p>
              <h1 className="hero__title">Student Name</h1>
              <p className="hero__subtitle">Student Council Candidate</p>
            </div>
          </div>
        </header>
        <main className="main">
          <section className="section section--intro" data-animate-section />
          <section className="section section--features" data-animate-section />
          <section className="section section--details" data-animate-section />
          <section className="section section--cta" data-animate-section />
        </main>
        <footer className="section section--footer" data-animate-section />
      </div>
    </div>
  )
}

export default App

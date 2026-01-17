import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

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
          <section className="section section--photo" data-animate-section>
            <div className="photo__frame">
              <img className="photo__image" src="/ali.jpg" alt="Ali portrait" />
            </div>
          </section>
          <section className="section section--intro" data-animate-section>
            <div className="story">
              <h2 className="story__title" data-animate>
                Why I’m Running
              </h2>
              <p className="story__paragraph" data-animate>
                I’m running because I want school to feel more fun and more fair
                for everyone. Little things like clearer announcements and
                better activity days can make a big difference.
              </p>
              <p className="story__paragraph" data-animate>
                I’m not here to promise huge stuff. I’m here to listen, share
                your ideas, and make sure student voices actually reach the
                teachers and administration.
              </p>
              <h2 className="story__title" data-animate>
                One of You
              </h2>
              <p className="story__paragraph" data-animate>
                I’m a student first, just like you. I get the stress before
                tests, the early mornings, and the feeling when plans change at
                the last minute.
              </p>
              <p className="story__paragraph" data-animate>
                If you choose me, you’re choosing someone who will show up,
                speak up, and keep it real. Let’s make this year feel like ours.
              </p>
            </div>
          </section>
          <section className="section section--values" data-animate-section>
            <div className="values">
              <h2 className="values__title" data-animate>
                What I’ll Focus On
              </h2>
              <p className="values__subtitle" data-animate>
                Clear priorities to make school life fairer, louder, and more
                creative.
              </p>
              <div className="values__grid">
                <article className="values__card" data-animate>
                  <span className="values__icon" aria-hidden="true">
                    🧭
                  </span>
                  <h3 className="values__label">Fair exams</h3>
                  <p className="values__text">
                    Transparent dates, helpful reminders, and calmer prep time.
                  </p>
                </article>
                <article className="values__card" data-animate>
                  <span className="values__icon" aria-hidden="true">
                    🎤
                  </span>
                  <h3 className="values__label">Student voice</h3>
                  <p className="values__text">
                    Regular feedback loops so your ideas reach teachers fast.
                  </p>
                </article>
                <article className="values__card" data-animate>
                  <span className="values__icon" aria-hidden="true">
                    🎨
                  </span>
                  <h3 className="values__label">Activities &amp; creativity</h3>
                  <p className="values__text">
                    More chances to showcase clubs, talent, and new events.
                  </p>
                </article>
                <article className="values__card" data-animate>
                  <span className="values__icon" aria-hidden="true">
                    📚
                  </span>
                  <h3 className="values__label">Academic support</h3>
                  <p className="values__text">
                    Peer help, study spaces, and extra clarity before quizzes.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App

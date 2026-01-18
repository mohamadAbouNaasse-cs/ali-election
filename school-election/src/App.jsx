import { useEffect, useState } from 'react'

function App() {
  const [selectedDecision, setSelectedDecision] = useState('')

  const decisionMessages = {
    'fair exams':
      'Fair exams it is! We’ll keep dates crystal clear and prep time calm.',
    'more activities':
      'More activities? Yes please! Think clubs, talent days, and fun showcases.',
    'student voice':
      'Student voice all the way! Your ideas will reach teachers fast.',
  }

  const message = selectedDecision ? decisionMessages[selectedDecision] : ''

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
            <div className="hero__topbar" data-animate>
              <div className="hero__identity">
                <p className="hero__eyebrow">Student Council</p>
                <h1 className="hero__name">Ali Hani Abou Naasse</h1>
              </div>
              <div className="hero__role">
                <p className="hero__role-title">Grade 10 Representative</p>
              </div>
              <img
                className="hero__logo"
                src="/hekma.jpg"
                alt="Hekma school logo"
              />
            </div>
            <div className="hero__content">
              <p className="hero__headline">
                A calm, respectful, and energetic voice for a better school year.
              </p>
              <p className="hero__subtitle">
                I’m here to listen, act, and keep our school community strong.
              </p>
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
              <p className="story__paragraph" data-animate>
                I promise to fight (as always) for your rights, respect your
                needs, and keep communication honest and clear.
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
                    🏆
                  </span>
                  <h3 className="values__label">Sports &amp; energy</h3>
                  <p className="values__text">
                    More games, tournaments, and fun school sports events.
                  </p>
                </article>
                <article className="values__card" data-animate>
                  <span className="values__icon" aria-hidden="true">
                    🤝
                  </span>
                  <h3 className="values__label">Respect &amp; support</h3>
                  <p className="values__text">
                    A culture that respects needs and keeps every student heard.
                  </p>
                </article>
              </div>
            </div>
          </section>
          <section className="section section--game" data-animate-section>
            <div className="decision">
              <div className="decision__header">
                <p className="decision__eyebrow" data-animate>
                  One Decision
                </p>
                <h2 className="decision__title" data-animate>
                  If you had one decision to change the school, what would it be?
                </h2>
              </div>
              <div
                className="decision__choices"
                role="group"
                aria-label="One decision game"
              >
                {Object.keys(decisionMessages).map((option) => (
                  <button
                    key={option}
                    className="decision__button"
                    type="button"
                    onClick={() => setSelectedDecision(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="decision__message" aria-live="polite" aria-atomic="true">
                {message && (
                  <p
                    key={selectedDecision}
                    className="decision__message-text decision__message-text--visible"
                  >
                    {message}
                  </p>
                )}
                {!message && (
                  <p className="decision__message-text">
                    Tap a choice to see a friendly response.
                  </p>
                )}
              </div>
            </div>
          </section>
          <section className="section section--cta" data-animate-section>
            <div className="cta">
              <div className="cta__content">
                <p className="cta__eyebrow" data-animate>
                  Your voice matters
                </p>
                <h2 className="cta__title" data-animate>
                  Let’s build a school year that feels fair, fun, and focused.
                </h2>
                <p className="cta__text" data-animate>
                  If you believe in respectful leadership and real action, I’d
                  be honored to earn your support.
                </p>
              </div>
              <div className="cta__actions" data-animate>
                <button className="cta__button cta__button--primary" type="button">
                  Vote with confidence
                </button>
                <button className="cta__button cta__button--ghost" type="button">
                  Show your support
                </button>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer" data-animate-section>
          <div className="footer__content">
            <div className="footer__image-frame" data-animate>
              <img
                className="footer__image"
                src="/poster4Ali.jpg"
                alt="Ali campaign poster"
              />
            </div>
            <div className="footer__text" data-animate>
              <h2 className="footer__title">Thank you for listening</h2>
              <p className="footer__message">
                I’ll keep pushing for student rights, more fun activities, and
                a school culture that respects every need.
              </p>
              <div className="footer__contact">
                <p className="footer__phone">Phone: 81 268 506</p>
                <a
                  className="footer__button"
                  href="https://wa.me/96181268506"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'

const decisionOptions = [
  {
    id: 'fair exams',
    label: 'Fair exams',
    message: 'Fair exams it is! Dates stay clear, prep stays calm, stress stays low.',
  },
  {
    id: 'more activities',
    label: 'More activities',
    message: 'More activities? Say less. Clubs, showcases, and student-led events.',
  },
  {
    id: 'student ideas',
    label: 'Student ideas',
    message: 'Student ideas on top. Quick feedback loops and real follow-through.',
  },
]

function App() {
  const [selectedDecision, setSelectedDecision] = useState('')

  const selectedOption = decisionOptions.find(
    (option) => option.id === selectedDecision,
  )

  const message = selectedOption?.message ?? ''

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
            <div className="hero__content" data-animate>
              <p className="hero__headline">
                A friendly, focused leader ready to make this year feel lighter
                and brighter.
              </p>
              <p className="hero__subtitle">
                I listen first, move fast, and keep our community strong.
              </p>
            </div>
          </div>
        </header>
        <main className="main">
          <section className="section section--story" data-animate-section>
            <div className="story">
              <div className="story__content" data-animate>
                <p className="story__eyebrow">Why I’m running</p>
                <h2 className="story__title">I’m one of you — and I’m all in.</h2>
                <p className="story__paragraph">
                  I know the early mornings, the exam pressure, and the last-minute
                  schedule shifts. I want school to feel fair, organized, and more
                  fun for everyone.
                </p>
                <p className="story__paragraph">
                  I’m here to listen, share what you care about, and follow through
                  on the small changes that make a big difference.
                </p>
              </div>
              <div className="story__media" data-animate>
                <div className="story__image-frame">
                  <img
                    className="story__image"
                    src="/ali.jpg"
                    alt="Ali portrait"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section section--values" data-animate-section>
            <div className="values">
              <div className="values__header" data-animate>
                <p className="values__eyebrow">Focus areas</p>
                <h2 className="values__title">What I’ll focus on first</h2>
                <p className="values__subtitle">
                  Clear priorities to keep school life balanced, energetic, and
                  student-centered.
                </p>
              </div>
              <div className="values__grid">
                <article className="values__card" data-animate>
                  <span className="values__icon" aria-hidden="true">
                    🧭
                  </span>
                  <h3 className="values__label">Fair exams</h3>
                  <p className="values__text">Clear dates. Calm prep.</p>
                </article>
                <article className="values__card" data-animate>
                  <span className="values__icon" aria-hidden="true">
                    🎤
                  </span>
                  <h3 className="values__label">Real feedback</h3>
                  <p className="values__text">Your ideas, shared fast.</p>
                </article>
                <article className="values__card" data-animate>
                  <span className="values__icon" aria-hidden="true">
                    🎨
                  </span>
                  <h3 className="values__label">Creative energy</h3>
                  <p className="values__text">Clubs, talent, and new events.</p>
                </article>
                <article className="values__card" data-animate>
                  <span className="values__icon" aria-hidden="true">
                    🏆
                  </span>
                  <h3 className="values__label">School spirit</h3>
                  <p className="values__text">More games. More teamwork.</p>
                </article>
                <article className="values__card" data-animate>
                  <span className="values__icon" aria-hidden="true">
                    🤝
                  </span>
                  <h3 className="values__label">Respect always</h3>
                  <p className="values__text">Support that feels real.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="section section--game" data-animate-section>
            <div className="decision">
              <div className="decision__header" data-animate>
                <p className="decision__eyebrow">One decision</p>
                <h2 className="decision__title">
                  If you could change one thing about school, what would it be?
                </h2>
                <p className="decision__subtitle">
                  Pick a card to see how we’d move it forward — quick and kind.
                </p>
              </div>
              <div
                className="decision__choices"
                role="group"
                aria-label="One decision game"
                data-animate
              >
                {decisionOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`decision__button${
                      selectedDecision === option.id
                        ? ' decision__button--active'
                        : ''
                    }`}
                    type="button"
                    onClick={() => setSelectedDecision(option.id)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div
                className="decision__message"
                aria-live="polite"
                aria-atomic="true"
                data-animate
              >
                {message ? (
                  <p
                    key={selectedDecision}
                    className="decision__message-text decision__message-text--visible"
                  >
                    {message}
                  </p>
                ) : (
                  <p className="decision__message-text">
                    Tap a choice to get a friendly response.
                  </p>
                )}
              </div>
            </div>
          </section>

          <section className="section section--cta" data-animate-section>
            <div className="cta">
              <div className="cta__content" data-animate>
                <p className="cta__eyebrow">Final call</p>
                <h2 className="cta__title">
                  Let’s make this year feel calmer, brighter, and ours.
                </h2>
                <p className="cta__text">
                  If you want a leader who listens, acts, and keeps it honest,
                  I’d be grateful for your support.
                </p>
                <div className="cta__actions" data-animate>
                  <a
                    className="cta__button"
                    href="https://wa.me/96181268506"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
              <div className="cta__media" data-animate>
                <div className="cta__media-frame">
                  <img
                    className="cta__media-image"
                    src="/poster4Ali.jpg"
                    alt="Ali campaign poster"
                  />
                </div>
                <p className="cta__contact">Phone: 81 268 506</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App

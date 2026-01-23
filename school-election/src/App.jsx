import { useEffect, useState } from 'react'

const optionIds = [
  'fair exams',
  'more activities',
  'student ideas',
  'tutoring support',
  'transport access',
  'community spaces',
]

const translations = {
  en: {
    candidateName: 'Ali',
    hero: {
      eyebrow: 'School Council',
      roleTitle: 'School Council Representative',
      headline: 'A friendly, focused leader ready to make this year feel lighter and brighter.',
      subtitle: 'I listen first, move fast, and keep our community strong.',
    },
    story: {
      eyebrow: "Why I’m running",
      title: 'I’m one of you — and I’m all in.',
      paragraphs: [
        'I know the early mornings, the exam pressure, and the last-minute schedule shifts. I want school to feel fair, organized, and more fun for everyone.',
        'I’m here to listen, share what you care about, and follow through on the small changes that make a big difference.',
      ],
    },
    values: {
      eyebrow: 'Focus areas',
      title: 'What I’ll focus on first',
      subtitle: 'Clear priorities to keep school life balanced, energetic, and student-centered.',
      grid: [
        { icon: '🧭', label: 'Fair exams', text: 'Clear dates. Calm prep.' },
        { icon: '🎤', label: 'Real feedback', text: 'Your ideas, shared fast.' },
        { icon: '🎨', label: 'Creative energy', text: 'Clubs, talent, and new events.' },
        { icon: '🏆', label: 'School spirit', text: 'More games. More teamwork.' },
        { icon: '🤝', label: 'Respect always', text: 'Support that feels real.' },
      ],
    },
    options: {
      'fair exams': {
        label: 'Fair exams',
        message: 'Fair exams it is! Dates stay clear, prep stays calm, stress stays low.',
      },
      'more activities': {
        label: 'More activities',
        message: 'More activities? Say less. Clubs, showcases, and student-led events.',
      },
      'student ideas': {
        label: 'Student ideas',
        message: 'Student ideas on top. Quick feedback loops and real follow-through.',
      },
      'tutoring support': {
        label: 'Tutoring support',
        message:
          'Tutoring and study help — peer-led sessions and quiet study hours to boost grades and confidence.',
      },
      'transport access': {
        label: 'Transport & access',
        message:
          'Better transport and walking routes: fewer late arrivals and safer commutes.',
      },
      'community spaces': {
        label: 'Community spaces',
        message:
          'More shared spaces for study and events — a school that serves everyone.',
      },
    },
    decision: {
      eyebrow: 'One decision',
      title: 'If you could change one thing about school, what would it be?',
      subtitle: "Pick a card to see how we'd move it forward — quick and kind.",
      tapChoice: 'Tap a choice to get a friendly response.',
    },
    controls: {
      chooseAgain: 'Choose again',
      langEN: 'EN',
      langFR: 'FR',
    },
    cta: {
      eyebrow: 'Final call',
      title: 'Let’s make this year feel calmer, brighter, and ours.',
      text: "If you want a leader who listens, acts, and keeps it honest, I'd be grateful for your support.",
      button: 'Chat on WhatsApp',
      contact: 'Phone: 81 268 506',
    },
  },
  fr: {
    candidateName: 'Ali',
    hero: {
      eyebrow: 'Conseil scolaire',
      roleTitle: "Représentant du conseil scolaire",
      headline: "Un leader amical et concentré prêt à rendre cette année plus légère et plus brillante.",
      subtitle: "J'écoute d'abord, j'agis vite et je maintiens notre communauté solide.",
    },
    story: {
      eyebrow: "Pourquoi je me présente",
      title: 'Je suis l’un des vôtres — et je suis à fond.',
      paragraphs: [
        "Je connais les matinées difficiles, la pression des examens et les changements de planning de dernière minute. Je veux que l'école soit juste, organisée et plus amusante pour tous.",
        "Je suis là pour écouter, partager ce qui vous tient à cœur et assurer le suivi des petits changements qui font une grande différence.",
      ],
    },
    values: {
      eyebrow: 'Domaines d’action',
      title: 'Sur quoi je me concentrerai en premier',
      subtitle: "Des priorités claires pour garder la vie scolaire équilibrée, énergique et centrée sur les élèves.",
      grid: [
        { icon: '🧭', label: 'Examens équitables', text: 'Dates claires. Préparation sereine.' },
        { icon: '🎤', label: 'Retour réel', text: 'Vos idées, partagées rapidement.' },
        { icon: '🎨', label: 'Énergie créative', text: 'Clubs, talents et nouveaux événements.' },
        { icon: '🏆', label: 'Esprit d’école', text: 'Plus de jeux. Plus d’esprit d’équipe.' },
        { icon: '🤝', label: 'Respect toujours', text: "Un soutien qui semble réel." },
      ],
    },
    options: {
      'fair exams': {
        label: 'Examens équitables',
        message: "Examens équitables ! Dates claires, préparation sereine et moins de stress.",
      },
      'more activities': {
        label: 'Plus d’activités',
        message: 'Plus d’activités ? Clubs, présentations et événements dirigés par les élèves.',
      },
      'student ideas': {
        label: "Idées d'élèves",
        message: "Les idées des élèves d'abord. Boucles de rétroaction rapides et suivi réel.",
      },
      'tutoring support': {
        label: 'Soutien scolaire',
        message:
          "Soutien et tutorat — sessions entre pairs et heures d'étude calmes pour améliorer les notes et la confiance.",
      },
      'transport access': {
        label: 'Transport & accès',
        message: "Meilleurs transports et itinéraires piétonniers : moins de retards et des trajets plus sûrs.",
      },
      'community spaces': {
        label: 'Espaces communs',
        message: "Plus d'espaces partagés pour étudier et organiser des événements — une école qui sert tout le monde.",
      },
    },
    decision: {
      eyebrow: 'Une décision',
      title: 'Si vous pouviez changer une chose à propos de l’école, quelle serait-elle ?',
      subtitle: 'Choisissez une carte pour voir comment nous l’avancerions — rapidement et avec bienveillance.',
      tapChoice: "Appuyez sur un choix pour obtenir une réponse amicale.",
    },
    controls: {
      chooseAgain: 'Choisir à nouveau',
      langEN: 'EN',
      langFR: 'FR',
    },
    cta: {
      eyebrow: 'Dernier appel',
      title: "Faisons en sorte que cette année soit plus calme, plus lumineuse et à nous.",
      text: "Si vous voulez un leader qui écoute, agit et reste honnête, je vous serais reconnaissant de votre soutien.",
      button: 'Parler sur WhatsApp',
      contact: 'Téléphone : 81 268 506',
    },
  },
}

function App() {
  const [selectedDecision, setSelectedDecision] = useState('')
  const [lang, setLangRaw] = useState(() => {
    try {
      const raw = localStorage.getItem('lang') || 'en'
      const n = String(raw).toLowerCase()
      return translations[n] ? n : 'en'
    } catch (e) {
      return 'en'
    }
  })

  // wrapper to ensure we always store a normalized lang and keep `lang` valid
  const setLang = (value) => {
    const v = String(value || 'en').toLowerCase()
    if (!translations[v]) return
    try {
      localStorage.setItem('lang', v)
    } catch (e) {
      // ignore
    }
    setLangRaw(v)
  }

  const t = translations[lang] || translations.en

  const selectedOption = selectedDecision ? (t.options[selectedDecision] || translations.en.options[selectedDecision]) : null
  const message = selectedOption ? `${t.candidateName || ''} — ${selectedOption.message}` : ''

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
  }, [lang])

  // persist language
  useEffect(() => {
    try {
      localStorage.setItem('lang', lang)
    } catch (e) {
      // ignore
    }
  }, [lang])

  return (
    <div className="app">
      <div className="app__frame">
        <header className="section section--hero" data-animate-section>
          <div className="hero">
            <div className="hero__topbar" data-animate>
              <div className="hero__identity">
                <p className="hero__eyebrow">{t.hero.eyebrow}</p>
                <h1 className="hero__name">Ali Hani Abou Naasse</h1>
              </div>
              <div className="hero__role">
                <p className="hero__role-title">{t.hero.roleTitle}</p>
              </div>

              <div className="hero__brand">
                <div className="lang-switch" role="tablist" aria-label="Language switch">
                  <button
                    type="button"
                    role="tab"
                    aria-pressed={lang === 'en'}
                    className={`lang-switch__btn ${lang === 'en' ? 'is-active' : ''}`}
                    onClick={() => setLang('en')}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-pressed={lang === 'fr'}
                    className={`lang-switch__btn ${lang === 'fr' ? 'is-active' : ''}`}
                    onClick={() => setLang('fr')}
                  >
                    FR
                  </button>
                  <div
                    className={`lang-switch__slider ${lang === 'fr' ? 'lang-switch__slider--right' : ''}`}
                    aria-hidden="true"
                  />
                </div>

                <img
                  className="hero__logo"
                  src="/hekma.jpg"
                  alt="Hekma school logo"
                />
              </div>
            </div>
            <div className="hero__content" data-animate>
              <p className="hero__headline">{t.hero.headline}</p>
              <p className="hero__subtitle">{t.hero.subtitle}</p>
            </div>
          </div>
        </header>
        <main className="main">
          <section className="section section--story" data-animate-section>
            <div className="story">
              <div className="story__content" data-animate>
                <p className="story__eyebrow">{t.story.eyebrow}</p>
                <h2 className="story__title">{t.story.title}</h2>
                {t.story.paragraphs.map((p, idx) => (
                  <p key={idx} className="story__paragraph">
                    {p}
                  </p>
                ))}
              </div>
              <div className="story__media" data-animate>
                <div className="story__image-frame">
                  <img
                    className="story__image"
                    src="poster4Ali.jpg"
                    alt="Ali portrait"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="section section--values" data-animate-section>
            <div className="values">
              <div className="values__header" data-animate>
                <p className="values__eyebrow">{t.values.eyebrow}</p>
                <h2 className="values__title">{t.values.title}</h2>
                <p className="values__subtitle">{t.values.subtitle}</p>
              </div>
              <div className="values__grid">
                {t.values.grid.map((card) => (
                  <article key={card.label} className="values__card" data-animate>
                    <span className="values__icon" aria-hidden="true">
                      {card.icon}
                    </span>
                    <h3 className="values__label">{card.label}</h3>
                    <p className="values__text">{card.text}</p>
                  </article>
                ))}
                {/** Removed the previous 'School location' card — replaced by a decision option better suited to this role. */}
              </div>
            </div>
          </section>

          <section className="section section--game" data-animate-section>
            <div className="decision">
              <div className="decision__header" data-animate>
                <p className="decision__eyebrow">{t.decision.eyebrow}</p>
                <h2 className="decision__title">{t.decision.title}</h2>
                <p className="decision__subtitle">{t.decision.subtitle}</p>
              </div>
              <div
                className="decision__choices"
                role="group"
                aria-label="One decision game"
                data-animate
              >
                {optionIds.map((id) => (
                  <button
                    key={id}
                    className={`decision__button${
                      selectedDecision === id ? ' decision__button--active' : ''
                    }`}
                    type="button"
                    onClick={() => setSelectedDecision(id)}
                  >
                    {(t.options && t.options[id] && t.options[id].label) || translations.en.options[id].label}
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
                  <>
                    <p
                      key={selectedDecision}
                      className="decision__message-text decision__message-text--visible"
                    >
                      {message} 🎯
                    </p>
                    <div className="decision__controls">
                      <button
                        type="button"
                        className="decision__reset"
                        onClick={() => setSelectedDecision('')}
                      >
                        {t.controls.chooseAgain}
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="decision__message-text">{t.decision.tapChoice}</p>
                )}
              </div>
            </div>
          </section>

          <section className="section section--cta" data-animate-section>
            <div className="cta">
              <div className="cta__content" data-animate>
                <p className="cta__eyebrow">{t.cta.eyebrow}</p>
                <h2 className="cta__title">{t.cta.title}</h2>
                <p className="cta__text">{t.cta.text}</p>
                <div className="cta__actions" data-animate>
                  <a
                    className="cta__button"
                    href="https://wa.me/96181268506"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.cta.button}
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
                <p className="cta__contact">{t.cta.contact}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App

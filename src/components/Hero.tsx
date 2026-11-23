import Image from "next/image";

const nav = [
  { href: "#about", label: "Про мене" },
  { href: "#consultations", label: "Консультації" },
  { href: "#method", label: "Метод" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#contacts", label: "Контакти" },
];

const formats = ["Прогноз на рік", "Матриця особистості", "Дитяча матриця"];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__photo">
        <Image
          src="/images/hero.jpg"
          alt="Наталя Барабаш за ноутбуком у плетеному кріслі"
          width={1280}
          height={853}
          priority
          sizes="100vw"
        />
      </div>

      <header className="hero__header">
        <a href="#" className="hero__logo">
          Наталя Барабаш
        </a>
        <nav aria-label="Основна навігація">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="hero__content">
        <p className="hero__eyebrow">Нумеролог • Матриця Долі</p>
        <h1>Розкрийте свою Матрицю Долі</h1>
        <p className="hero__lead">
          Персональний розбір Вашого шляху, талантів і стосунків: спокійно,
          конкретно, без зайвих слів.
        </p>
        <div className="hero__actions">
          <a href="#contacts" className="btn btn--solid">
            Записатися на консультацію
          </a>
          <a href="#method" className="btn btn--outline">
            Про метод
          </a>
        </div>
      </div>

      <ol className="hero__formats">
        {formats.map((f, i) => (
          <li key={f}>
            <span>{String(i + 1).padStart(2, "0")}</span> {f}
          </li>
        ))}
      </ol>
    </section>
  );
}

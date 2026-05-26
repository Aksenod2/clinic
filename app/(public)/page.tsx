import { directions } from "@/lib/directions"
import { getAllSymptoms } from "@/lib/symptoms-config"
import Link from "next/link"
import { MediaPlaceholder } from "@/components/MediaPlaceholder"

export default function HomePage() {
  // Берём первые 6 симптомов для тизера
  const featuredSymptoms = getAllSymptoms().slice(0, 6)
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="px-5">
        <div className="mx-auto max-w-6xl py-8 lg:py-12">
          {/* Hero секция */}
          <section aria-label="Главная информация о клинике" className="mb-12 lg:mb-16">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div>
                <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  Mesedclinic — ваша клиника для всей семьи
                </h1>
                <p className="mb-6 text-lg text-neutral-600 sm:text-xl">
                  Сеть медицинских центров с многолетним опытом. Ведение беременности, гинекология, педиатрия и другие направления.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/zapis"
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
                  >
                    Записаться на приём
                  </a>
                  <a
                    href="/napravleniya"
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-3 text-base font-medium transition-colors hover:bg-neutral-50"
                  >
                    Направления клиники
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MediaPlaceholder
                  variant="hero"
                  ariaLabel="Изображение клиники"
                />
              </div>
            </div>
          </section>

          {/* Блок "Направления для всей семьи" */}
          <section
            aria-label="Направления для всей семьи"
            className="mb-12 rounded-xl border border-neutral-200 bg-neutral-50 p-6 lg:mb-16 lg:p-8"
          >
            <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Направления для всей семьи</h2>
                <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                  Женское здоровье, беременность и роды, дети, мужское здоровье — все ключевые направления в одном месте.
                </p>
              </div>
              <a
                href="/napravleniya"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-100"
              >
                Все направления →
              </a>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {directions.map((direction) => (
                <article
                  key={direction.slug}
                  className={`flex flex-col justify-between rounded-xl border bg-white p-4 transition-colors hover:border-neutral-300 ${
                    direction.isHighlighted
                      ? "border-neutral-900 bg-gradient-to-br from-neutral-50 to-white shadow-sm"
                      : "border-neutral-200"
                  }`}
                >
                  <div className="space-y-2">
                    <MediaPlaceholder variant="icon" ariaLabel={`Иконка направления ${direction.title}`} />
                    <h3 className="mb-1 text-lg font-semibold">{direction.title}</h3>
                    {direction.audience ? (
                      <div className="mb-2 inline-flex rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700">
                        {direction.audience}
                      </div>
                    ) : null}
                    <p className="mb-2 line-clamp-3 text-sm text-neutral-600">
                      {direction.description}
                    </p>
                    <div className="text-xs text-neutral-500">{direction.servicesCount}</div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`/napravleniya/${direction.slug}`}
                      className={`inline-flex flex-1 items-center justify-center rounded-xl border px-3 py-2 text-xs font-medium transition-colors ${
                        direction.isHighlighted
                          ? "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800"
                          : "border-neutral-200 bg-white hover:bg-neutral-50"
                      }`}
                    >
                      Подробнее
                    </a>
                    <a
                      href={`/uslugi?direction=${direction.slug}`}
                      className="inline-flex flex-1 items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 transition-colors hover:bg-neutral-50"
                    >
                      Услуги
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Блок "О клинике" */}
          <section aria-label="О клинике" className="mb-12 lg:mb-16">
            <header className="mb-6">
              <h2 className="text-2xl font-semibold">О клинике</h2>
              <p className="mt-2 text-base text-neutral-600">
                Mesedclinic — сеть семейных медицинских центров. Мы ведём беременность, помогаем женщинам, мужчинам и детям, опираясь на современные протоколы и многолетний опыт.
              </p>
              <p className="mt-2 text-sm text-neutral-500">
                Наше отличие — фокус на семейном подходе: вы можете наблюдаться у нас годами, не меняя клинику на разных этапах жизни.
              </p>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                { title: "Лет работы", desc: "Более 15 лет в частной медицине" },
                { title: "Направления", desc: "Женское, мужское и детское здоровье" },
                { title: "Клиники", desc: "3 филиала в удобных локациях" },
                { title: "Экспертиза", desc: "Опытные врачи и действующие лицензии" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="space-y-2 rounded-xl border border-neutral-200 bg-white p-4"
                >
                  <MediaPlaceholder variant="icon" ariaLabel={`Иконка факта: ${item.title}`} />
                  <div className="text-sm font-semibold">{item.title}</div>
                  <div className="mt-1 text-xs text-neutral-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Блок-тизер "Что мы лечим" */}
          <section
            aria-label="Что мы лечим"
            className="mb-12 rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 p-6 lg:mb-16 lg:p-8"
          >
            <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Что мы лечим</h2>
                <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                  Найдите свою проблему или симптом — мы поможем определить причину, подберём услуги и врачей для диагностики и лечения.
                </p>
              </div>
              <Link
                href="/chto-my-lechim"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-100"
              >
                Все проблемы и симптомы →
              </Link>
            </header>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {featuredSymptoms.map((symptom) => (
                <Link
                  key={symptom.slug}
                  href={`/chto-my-lechim/${symptom.slug}`}
                  className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-300 hover:shadow-sm"
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold leading-tight group-hover:text-neutral-900">
                      {symptom.title}
                    </h3>
                    <span className="mt-0.5 flex-shrink-0 text-xs text-neutral-400 transition-colors group-hover:text-neutral-600">
                      →
                    </span>
                  </div>
                  <p className="mb-3 line-clamp-2 text-xs text-neutral-600">
                    {symptom.intro}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-700">
                      {symptom.directionTitle}
                    </span>
                    {symptom.services.length > 0 && (
                      <span className="text-[11px] text-neutral-500">
                        {symptom.services.length} {symptom.services.length === 1 ? "услуга" : "услуги"}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/chto-my-lechim"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Посмотреть все проблемы и симптомы
              </Link>
              <p className="text-xs text-neutral-500">
                Алфавитный список с поиском и фильтрацией
              </p>
            </div>
          </section>

          {/* Блок "Врачи по ключевым направлениям" */}
          <section aria-label="Наши врачи" className="mb-12 lg:mb-16">
            <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Врачи по ключевым направлениям</h2>
                <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                  Специалисты, которые ведут беременность, занимаются женским и детским здоровьем в Mesedclinic.
                </p>
              </div>
              <a
                href="/vrachi"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-100"
              >
                Все врачи клиники →
              </a>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  slug: "akusher-ginekolog-1",
                  name: "ФИО врача",
                  specialty: "Акушер‑гинеколог",
                  experience: "12 лет",
                  directionLabel: "Беременность и гинекология",
                  clinics: ["Бутово", "Арбатская"],
                },
                {
                  slug: "ginekolog-1",
                  name: "ФИО врача",
                  specialty: "Акушер‑гинеколог",
                  experience: "15 лет",
                  directionLabel: "Гинекология",
                  clinics: ["Арбатская"],
                },
                {
                  slug: "pediatr-1",
                  name: "ФИО врача",
                  specialty: "Педиатр",
                  experience: "8 лет",
                  directionLabel: "Педиатрия",
                  clinics: ["Бутово", "Балашиха"],
                },
              ].map((doctor) => (
                <article
                  key={doctor.slug}
                  className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white"
                >
                  <MediaPlaceholder variant="avatar" ariaLabel={`Фото врача: ${doctor.name}`} />
                  <div className="flex flex-1 flex-col gap-2 p-4 text-sm">
                    <div>
                      <div className="font-semibold">{doctor.name}</div>
                      <div className="text-xs text-neutral-600">
                        {doctor.specialty} • стаж {doctor.experience}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-[11px]">
                      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-neutral-600">
                        {doctor.directionLabel}
                      </span>
                      {doctor.clinics.map((clinic) => (
                        <span
                          key={clinic}
                          className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-neutral-600"
                        >
                          {clinic}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2 pt-2">
                      <a
                        href={`/vrachi/${doctor.slug}`}
                        className="inline-flex flex-1 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-neutral-100"
                      >
                        Профиль врача
                  </a>
                  <a
                        href={`/zapis?doctor=${doctor.slug}`}
                        className="inline-flex flex-1 items-center justify-center rounded-lg border border-neutral-900 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
                  >
                    Записаться
                  </a>
                </div>
              </div>
                </article>
              ))}
            </div>
          </section>

          {/* Блок "Услуги по спецпредложениям" */}
          <section
            aria-label="Услуги по спецпредложениям"
            className="mb-12 rounded-xl border border-neutral-200 bg-neutral-50 p-6 lg:mb-16 lg:p-8"
          >
            <header className="mb-6">
              <h2 className="text-2xl font-semibold">Услуги по спецпредложениям</h2>
              <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                Выбрали для главной наиболее востребованные программы и услуги, которые сейчас идут с акциями.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  slug: "vedenie-beremennosti-so-skidkoy",
                  title: "Ведение беременности со скидкой",
                  description:
                    "Скидка на программу ведения беременности при записи до конца месяца.",
                  oldPrice: "от 14 000 ₽",
                  newPrice: "от 12 000 ₽",
                  validTo: "31.01.2026",
                  tag: "Беременность",
                },
                {
                  slug: "uzi-beremennosti-po-spetcenam",
                  title: "УЗИ беременности по спеццене",
                  description: "Специальная цена на УЗИ беременности в будние дни.",
                  oldPrice: "от 3 500 ₽",
                  newPrice: "от 3 000 ₽",
                  validTo: "28.02.2026",
                  tag: "Беременность",
                },
              ].map((promo) => (
                <article
                  key={promo.slug}
                  className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <header className="mb-3">
                    <p className="mb-1 text-xs text-neutral-500">{promo.tag}</p>
                    <h3 className="text-lg font-semibold">{promo.title}</h3>
                  </header>
                  <p className="mb-3 text-sm text-neutral-700">{promo.description}</p>
                  <div className="mb-4 flex items-baseline gap-3 text-sm">
                    <span className="text-neutral-500 line-through">{promo.oldPrice}</span>
                    <span className="text-base font-semibold text-neutral-900">
                      {promo.newPrice}
                    </span>
                  </div>
                  <p className="mb-4 text-xs text-neutral-500">
                    Акция действует до {promo.validTo}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    <a
                      href={`/akcii/${promo.slug}`}
                      className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-xs font-medium transition-colors hover:bg-neutral-50"
                    >
                      Подробные условия
                    </a>
                    <a
                      href={`/zapis?promotion=${promo.slug}`}
                      className="inline-flex items-center justify-center rounded-lg border border-neutral-900 bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
                    >
                      Записаться по акции
                    </a>
                  </div>
                </article>
              ))}
              </div>

            <div className="mt-6 text-center">
              <a
                href="/akcii"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-3 text-base font-medium transition-colors hover:bg-neutral-50"
              >
                Все акции →
              </a>
            </div>
          </section>

          {/* Блок "Филиалы" */}
          <section aria-label="Филиалы клиники" className="mb-12 lg:mb-16">
            <header className="mb-6">
              <h2 className="text-2xl font-semibold">Наши филиалы</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Выберите удобную клинику для записи — все филиалы работают по единым стандартам сервиса и качества.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Бутово",
                  address: "Бутово, рядом с метро (точный адрес будет указан здесь)",
                  phone: "+7 (999) 123-45-67",
                  note: "Удобен для семей с детьми, есть педиатрическое направление",
                },
                {
                  name: "Арбатская",
                  address: "Центр, район Арбат (точный адрес будет указан здесь)",
                  phone: "+7 (999) 123-45-68",
                  note: "Удобен для рабочих в центре, расширенный график приёма",
                },
                {
                  name: "Балашиха",
                  address: "Балашиха, район проживания (точный адрес будет указан здесь)",
                  phone: "+7 (999) 123-45-69",
                  note: "Подходит жителям области, семейный формат",
                },
              ].map((clinic) => (
                <article
                  key={clinic.name}
                  className="rounded-xl border border-neutral-200 bg-white p-4"
                >
                  <div className="mb-2 text-lg font-semibold">{clinic.name}</div>
                  <div className="mb-2 text-sm text-neutral-600">{clinic.address}</div>
                  {clinic.note ? (
                    <div className="mb-2 text-xs text-neutral-500">{clinic.note}</div>
                  ) : null}
                  <div className="mb-3 text-sm text-neutral-700">{clinic.phone}</div>
                  <a
                    href={`/kliniki/${clinic.name.toLowerCase()}`}
                    className="text-sm text-neutral-600 underline underline-offset-2"
                  >
                    Подробнее о филиале →
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Блок "Отзывы пациентов" */}
          <section
            aria-label="Отзывы пациентов"
            className="mb-12 rounded-xl border border-neutral-200 bg-neutral-50 p-6 lg:mb-16 lg:p-8"
          >
            <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Отзывы пациентов</h2>
                <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                  Несколько типичных отзывов о клинике и врачах. Тексты носят ознакомительный характер и не заменяют консультацию специалиста.
                </p>
              </div>
              <span
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-400"
              >
                Все отзывы
              </span>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Анна М.",
                  caseLabel: "Ведение беременности • Бутово",
                  text: "Было важно чувствовать, что меня ведут по понятному плану, без лишних анализов и визитов. Врачи подробно отвечали на вопросы и помогали не тревожиться.",
                },
                {
                  name: "Екатерина К.",
                  caseLabel: "Гинекология • Арбатская",
                  text: "Понравился спокойный тон и объяснения врача — без запугивания, с акцентом на том, что реально важно. После консультации стало понятно, как двигаться дальше.",
                },
                {
                  name: "Семья П.",
                  caseLabel: "Педиатрия • Балашиха",
                  text: "Ходим с ребёнком на плановые осмотры и вакцинацию. Нравится, что можно задать много вопросов и получить понятные рекомендации для дома.",
                },
              ].map((review) => (
                <article
                  key={review.name}
                  className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5 text-sm"
                >
                  <div className="mb-2 text-xs text-neutral-500">{review.caseLabel}</div>
                  <div className="mb-2 text-base font-semibold">{review.name}</div>
                  <p className="text-xs text-neutral-700 line-clamp-5">{review.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Блок "Полезная информация" */}
          <section aria-label="Полезная информация" className="mb-12 lg:mb-16">
            <header className="mb-6">
              <h2 className="text-2xl font-semibold">Полезная информация</h2>
              <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                Документация, страховка, налоговый вычет и другие важные разделы для пациентов и соискателей.
              </p>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href="/vakansii"
                className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
              >
                <div className="mb-2 text-lg font-semibold">Вакансии</div>
                <p className="mb-3 text-sm text-neutral-600">
                  Присоединяйтесь к команде Mesedclinic. Ищем врачей, администраторов и других специалистов.
                </p>
                <div className="mt-auto text-sm text-neutral-500 underline underline-offset-2 group-hover:text-neutral-700">
                  Смотреть вакансии →
                </div>
              </a>

              <a
                href="/strahovka"
                className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
              >
                <div className="mb-2 text-lg font-semibold">Страховка</div>
                <p className="mb-3 text-sm text-neutral-600">
                  Лечение по ДМС, ОМС и платные услуги. Узнайте, какие форматы обслуживания доступны в клинике.
                </p>
                <div className="mt-auto text-sm text-neutral-500 underline underline-offset-2 group-hover:text-neutral-700">
                  Подробнее о страховке →
                </div>
              </a>

              <a
                href="/oms"
                className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
              >
                <div className="mb-2 text-lg font-semibold">Документация ОМС</div>
                <p className="mb-3 text-sm text-neutral-600">
                  Информация об услугах по полису ОМС, необходимых документах и порядке записи.
                </p>
                <div className="mt-auto text-sm text-neutral-500 underline underline-offset-2 group-hover:text-neutral-700">
                  Документация ОМС →
                </div>
              </a>

              <a
                href="/vozvrat-naloga"
                className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
              >
                <div className="mb-2 text-lg font-semibold">Возврат налога за лечение</div>
                <p className="mb-3 text-sm text-neutral-600">
                  Как вернуть часть НДФЛ за лечение. Список документов и пошаговая инструкция по оформлению.
                </p>
                <div className="mt-auto text-sm text-neutral-500 underline underline-offset-2 group-hover:text-neutral-700">
                  О налоговом вычете →
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

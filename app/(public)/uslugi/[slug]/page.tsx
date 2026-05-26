import Link from "next/link"

import { MediaPlaceholder } from "@/components/MediaPlaceholder"

interface PageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return [
    { slug: "vedenie-beremennosti" },
  ]
}

export async function generateMetadata({ params }: PageProps) {
  return {
    title: `Услуга: ${params.slug}`,
  }
}

export default async function ServicePage({ params }: PageProps) {
  const title = "Ведение беременности"

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="px-5">
        <div className="mx-auto max-w-5xl py-8 lg:py-12">
          {/* Хлебные крошки */}
          <nav className="mb-6 text-sm text-neutral-500" aria-label="Хлебные крошки">
            <ol className="flex flex-wrap gap-2">
              <li className="flex items-center gap-2">
                <Link href="/" className="underline underline-offset-2">
                  Главная
                </Link>
                <span>/</span>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/uslugi" className="underline underline-offset-2">
                  Услуги
                </Link>
                <span>/</span>
              </li>
              <li aria-current="page" className="text-neutral-800">
                {title}
              </li>
            </ol>
          </nav>

          {/* Hero + карточка записи */}
          <section aria-label="Информация об услуге" className="mb-8 lg:mb-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
              <div>
                <h1 className="mb-3 text-3xl font-semibold leading-tight sm:text-[34px]">{title}</h1>
                <p className="max-w-xl text-base text-neutral-600 sm:text-lg">
                  Наблюдение по понятному плану: диагностика, анализы, ответы врача и контроль важного — без лишних визитов.
                </p>

                {/* Медиа-плейсхолдер */}
                <div className="mt-4 space-y-3">
                  <MediaPlaceholder
                    variant="hero"
                    ariaLabel="Изображение услуги"
                  />
                  <div aria-label="Плейсхолдеры миниатюр" className="flex gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <MediaPlaceholder
                        key={i}
                        variant="card"
                        ariaLabel={i === 0 ? "Миниатюра услуги" : undefined}
                        className="h-10 w-14 rounded-lg"
                      />
                    ))}
                  </div>
                </div>

                {/* Стрип доверия */}
                <div
                  aria-label="Доверие и факты"
                  className="mt-5 grid gap-3 sm:grid-cols-2"
                >
                  {[
                    { title: "Лицензия", desc: "Документы и реквизиты" },
                    { title: "Опыт врачей", desc: "Стаж и профили" },
                    { title: "Отзывы", desc: "Рейтинг / источники" },
                    { title: "Безопасность", desc: "Протоколы и контроль" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3"
                    >
                    <MediaPlaceholder variant="icon" ariaLabel={item.title} />
                      <div>
                        <div className="text-sm font-semibold">{item.title}</div>
                        <div className="text-xs text-neutral-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Карточка записи */}
              <aside aria-label="Запись на услугу">
                <div className="sticky top-20 rounded-xl border border-neutral-200 bg-white shadow-sm">
                  <div className="border-b border-neutral-200 bg-neutral-50 p-4">
                    <div className="flex flex-wrap items-stretch gap-2 text-sm">
                      <div className="flex-1 min-w-[120px] rounded-lg border border-neutral-200 bg-white px-3 py-2">
                        <div className="text-xs text-neutral-500">Цена</div>
                        <div className="text-base font-semibold">от 12 000 ₽</div>
                      </div>
                      <div className="flex-1 min-w-[120px] rounded-lg border border-neutral-200 bg-white px-3 py-2">
                        <div className="text-xs text-neutral-500">Длительность</div>
                        <div className="text-sm font-semibold">60–90 мин</div>
                      </div>
                      <div className="flex-1 min-w-[140px] rounded-lg border border-neutral-200 bg-white px-3 py-2">
                        <div className="text-xs text-neutral-500">Ближайшая запись</div>
                        <div className="text-sm font-semibold">Сегодня / завтра</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-4">
                    <fieldset className="rounded-xl border border-neutral-200 bg-neutral-50 p-3">
                      <legend className="px-1 text-sm font-semibold">Выберите филиал</legend>
                      <div className="mt-2 space-y-2">
                        {[
                          { name: "Бутово", desc: "Адрес / метро" },
                          { name: "Арбатская", desc: "Адрес / метро" },
                          { name: "Балашиха", desc: "Адрес / район" },
                        ].map((branch, idx) => (
                          <label
                            key={branch.name}
                            className="grid cursor-pointer grid-cols-[auto,1fr] items-start gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm"
                          >
                            <input
                              type="radio"
                              name="branch"
                              defaultChecked={idx === 0}
                              className="mt-1"
                            />
                            <span>
                              <span className="block font-semibold">{branch.name}</span>
                              <span className="text-xs text-neutral-500">{branch.desc}</span>
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div className="flex gap-2">
                      <a
                        href="#quiz"
                        className="inline-flex flex-1 items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-3 py-2 text-sm font-medium text-white"
                      >
                        Записаться
                      </a>
                      <a
                        href="#question"
                        className="inline-flex flex-1 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm font-medium"
                      >
                        Задать вопрос
                      </a>
                    </div>

                    <div aria-label="Мессенджеры" className="flex flex-wrap gap-2">
                      {["WhatsApp", "Telegram", "Перезвоним"].map((label) => (
                        <a
                          key={label}
                          href="#"
                          className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs shadow-sm"
                        >
                          {label}
                        </a>
                      ))}
                    </div>

                    <p className="text-xs text-neutral-500">
                      Нажимая «Записаться», вы соглашаетесь с обработкой персональных данных.
                    </p>
                  </div>
                </div>
              </aside>
            </div>

            {/* Навигация по секциям */}
            <div
              aria-label="Навигация по странице"
              className="mt-6 flex flex-wrap gap-2 rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-sm"
            >
              {[
                ["#about", "Что это"],
                ["#indications", "Показания"],
                ["#how", "Как проходит"],
                ["#included", "Что входит"],
                ["#prices", "Цены"],
                ["#doctors", "Врачи"],
                ["#branches", "Филиалы"],
                ["#reviews", "Отзывы"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full border border-neutral-200 bg-white px-3 py-1"
                >
                  {label}
                </a>
              ))}
            </div>
          </section>

          {/* Кратко об услуге */}
          <section id="about" className="py-8 lg:py-10">
            <header className="mb-4 space-y-1">
              <h2 className="text-xl font-semibold">Коротко об услуге</h2>
              <p className="text-sm text-neutral-600">
                Пояснение “что это” + какому пациенту подходит и какой результат ожидать.
              </p>
            </header>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div className="space-y-3 text-sm text-neutral-700">
                <p>
                  Здесь — основной текст 6–10 строк: чем полезно наблюдение, как снижаем тревожность, что контролируем,
                  почему удобно (план, напоминания, связь с врачом).
                </p>
                <p className="text-neutral-500">
                  Важно: медицинские заявления должны быть аккуратными; часть формулировок можно вынести в FAQ.
                </p>
              </div>

              <aside
                aria-label="Ключевые факты"
                className="rounded-xl border border-neutral-200 bg-neutral-50 p-4"
              >
                <div className="text-sm font-semibold">Ключевые факты</div>
                <dl className="mt-3 space-y-2 text-xs text-neutral-700">
                  <div className="rounded-lg border border-neutral-200 bg-white px-3 py-2">
                    <dt className="text-neutral-500">Подходит</dt>
                    <dd>1–3 триместр / планирование наблюдения</dd>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-white px-3 py-2">
                    <dt className="text-neutral-500">Результат</dt>
                    <dd>план обследований + контроль динамики</dd>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-white px-3 py-2">
                    <dt className="text-neutral-500">Подготовка</dt>
                    <dd>обычно не требуется</dd>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-white px-3 py-2">
                    <dt className="text-neutral-500">Анализы/УЗИ</dt>
                    <dd>по сроку и показаниям</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </section>

          {/* Показания */}
          <section id="indications" className="border-t border-neutral-200 py-8 lg:py-10">
            <header className="mb-4 space-y-1">
              <h2 className="text-xl font-semibold">Показания</h2>
              <p className="text-sm text-neutral-600">Список ситуаций, когда стоит записаться.</p>
            </header>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <ul className="space-y-2">
                {[
                  "Беременность подтверждена — нужно наблюдение и план.",
                  "Есть вопросы по анализам / УЗИ / самочувствию.",
                  "Хронические заболевания / риски — нужен контроль.",
                  "Повышенная тревожность — нужен понятный маршрут.",
                  "Нужны справки/документы (если применимо).",
                  "Хочу вести беременность у конкретного врача.",
                ].map((item) => (
                  <li
                    key={item}
                    className="relative rounded-xl border border-neutral-200 bg-white px-4 py-3 pl-11 text-sm"
                  >
                    <span className="absolute left-4 top-3 h-4 w-4 rounded-[6px] border-2 border-neutral-900 bg-gradient-to-b from-white to-neutral-50" />
                    {item}
                  </li>
                ))}
              </ul>

              <aside
                aria-label="Когда срочно к врачу"
                className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm"
              >
                <div className="font-semibold">Когда срочно к врачу</div>
                <p className="mt-1 text-xs text-neutral-600">
                  Плейсхолдер для списка “красных флагов”. Финальные формулировки согласуем с врачом/юристом.
                </p>
                <ul className="mt-2 list-disc pl-5 text-xs text-neutral-600">
                  <li>Сильная боль / кровянистые выделения</li>
                  <li>Резкое ухудшение самочувствия</li>
                  <li>Температура / признаки инфекции</li>
                </ul>
              </aside>
            </div>
          </section>

          {/* Как проходит */}
          <section id="how" className="border-t border-neutral-200 py-8 lg:py-10">
            <header className="mb-4 space-y-1">
              <h2 className="text-xl font-semibold">Как проходит</h2>
              <p className="text-sm text-neutral-600">Пошаговый сценарий + что взять с собой.</p>
            </header>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "1. Запись", text: "Выбираете филиал и удобное время." },
                { title: "2. Приём", text: "Сбор анамнеза и план наблюдения." },
                { title: "3. Диагностика", text: "Анализы/УЗИ по сроку и показаниям." },
                { title: "4. Сопровождение", text: "Контроль динамики и ответы по плану." },
              ].map((step) => (
                <article
                  key={step.title}
                  className="rounded-xl border border-neutral-200 bg-white p-4 text-sm"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg border border-neutral-200 bg-neutral-50" />
                    <div className="font-semibold">{step.title}</div>
                  </div>
                  <p className="text-xs text-neutral-600">{step.text}</p>
                </article>
              ))}
            </div>

            <div
              aria-label="Практическая информация"
              className="mt-5 grid gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-3 md:grid-cols-3"
            >
              {[
                {
                  label: "Сколько визитов",
                  value: "По триместрам / индивидуально",
                },
                {
                  label: "Что взять",
                  value: "Документы + результаты анализов (если есть)",
                },
                {
                  label: "Формат",
                  value: "В клинике (онлайн — опционально)",
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs"
                >
                  <div className="text-neutral-500">{info.label}</div>
                  <div className="mt-0.5 font-semibold">{info.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Что входит */}
          <section id="included" className="border-t border-neutral-200 py-8 lg:py-10">
            <header className="mb-4 space-y-1">
              <h2 className="text-xl font-semibold">Что входит</h2>
              <p className="text-sm text-neutral-600">Состав услуги: группировка и понятные ожидания.</p>
            </header>

            <div className="space-y-3">
              <details className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                <summary className="flex cursor-pointer items-baseline justify-between gap-3 bg-neutral-50 px-4 py-3 text-sm">
                  <span className="font-semibold">Приём и план</span>
                  <span className="text-xs text-neutral-500">осмотр / рекомендации</span>
                </summary>
                <div className="px-4 py-3 text-sm text-neutral-700">
                  <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-600">
                    <li>Сбор анамнеза и жалоб</li>
                    <li>Осмотр (по показаниям)</li>
                    <li>План наблюдения на период</li>
                  </ul>
                </div>
              </details>

              <details className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                <summary className="flex cursor-pointer items-baseline justify-between gap-3 bg-neutral-50 px-4 py-3 text-sm">
                  <span className="font-semibold">Диагностика</span>
                  <span className="text-xs text-neutral-500">анализы / УЗИ</span>
                </summary>
                <div className="px-4 py-3 text-sm text-neutral-700">
                  <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-600">
                    <li>Список анализов по сроку</li>
                    <li>Скрининги (если применимо)</li>
                    <li>Интерпретация результатов</li>
                  </ul>
                </div>
              </details>

              <details className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                <summary className="flex cursor-pointer items-baseline justify-between gap-3 bg-neutral-50 px-4 py-3 text-sm">
                  <span className="font-semibold">Сопровождение</span>
                  <span className="text-xs text-neutral-500">контроль и связь</span>
                </summary>
                <div className="px-4 py-3 text-sm text-neutral-700">
                  <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-600">
                    <li>Контроль динамики</li>
                    <li>Ответы по плану</li>
                    <li>Коррекция рекомендаций</li>
                  </ul>
                </div>
              </details>

              <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-3 text-xs text-neutral-600">
                Если есть пакеты — здесь можно заменить аккордеон на сравнительную таблицу 2–3 пакетов
                (Базовый / Стандарт / Премиум 24/7).
              </div>
            </div>
          </section>

          {/* Цены */}
          <section id="prices" className="border-t border-neutral-200 py-8 lg:py-10">
            <header className="mb-4 space-y-1">
              <h2 className="text-xl font-semibold">Цены</h2>
              <p className="text-sm text-neutral-600">
                Цены должны жить на услугах (и агрегироваться на странице /ceny/).
              </p>
            </header>

            <div
              role="table"
              aria-label="Таблица цен"
              className="overflow-hidden rounded-xl border border-neutral-200"
            >
              <div
                role="row"
                className="grid grid-cols-[minmax(0,1.6fr)_minmax(0,0.6fr)_minmax(0,0.8fr)] bg-neutral-50 text-xs font-medium text-neutral-600"
              >
                <div role="columnheader" className="px-4 py-2">
                  Наименование
                </div>
                <div role="columnheader" className="px-4 py-2">
                  Цена
                </div>
                <div role="columnheader" className="px-4 py-2 text-right">
                  Действие
                </div>
              </div>

              {[
                ["Ведение беременности (первичный приём)", "от 3 000 ₽"],
                ["Ведение беременности (программа)", "от 12 000 ₽"],
                ["Консультация по анализам / УЗИ", "от 2 500 ₽"],
              ].map(([name, price]) => (
                <div
                  key={name}
                  role="row"
                  className="grid grid-cols-[minmax(0,1.6fr)_minmax(0,0.6fr)_minmax(0,0.8fr)] border-t border-neutral-200 text-sm"
                >
                  <div role="cell" className="px-4 py-3 text-sm">
                    {name}
                  </div>
                  <div role="cell" className="px-4 py-3 text-sm">
                    {price}
                  </div>
                  <div role="cell" className="flex items-center justify-end gap-2 px-4 py-3">
                    <a
                      href="#quiz"
                      className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs"
                    >
                      Записаться
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-2 text-xs text-neutral-500">
              Примечание: точная стоимость может зависеть от объёма диагностики и определяется врачом после консультации.
            </p>
          </section>

          {/* Врачи */}
          <section id="doctors" className="border-t border-neutral-200 py-8 lg:py-10">
            <header className="mb-4 space-y-1">
              <h2 className="text-xl font-semibold">Врачи, которые ведут услугу</h2>
              <p className="text-sm text-neutral-600">Карточки врачей — ключ к доверию (E‑E‑A‑T).</p>
            </header>

            <div className="grid gap-3 md:grid-cols-3">
              {[
                ["ФИО врача", "Акушер‑гинеколог • стаж 12 лет", ["Бутово", "Арбатская"]],
                ["ФИО врача", "Врач УЗД • стаж 9 лет", ["Балашиха"]],
                ["ФИО врача", "Акушер‑гинеколог • стаж 15 лет", ["Арбатская"]],
              ].map(([name, desc, branches]) => (
                <article
                  key={name as string}
                  className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
                >
                  <div className="h-28 border-b border-neutral-200 bg-neutral-50" aria-hidden="true" />
                  <div className="grid gap-2 p-4 text-sm">
                    <div className="font-semibold">{name}</div>
                    <div className="text-xs text-neutral-600">{desc}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {(branches as string[]).map((b) => (
                        <span
                          key={b}
                          className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] text-neutral-600"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="mt-1 inline-flex w-fit items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs"
                    >
                      Профиль врача
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-3">
              <Link href="/vrachi" className="text-xs text-neutral-600 underline underline-offset-4">
                Все врачи по услуге →
              </Link>
            </div>
          </section>

          {/* Филиалы */}
          <section id="branches" className="border-t border-neutral-200 py-8 lg:py-10">
            <header className="mb-4 space-y-1">
              <h2 className="text-xl font-semibold">Где оказываем услугу</h2>
              <p className="text-sm text-neutral-600">3 филиала, без генерации дублей “услуга × филиал”.</p>
            </header>

            <div className="grid gap-3 md:grid-cols-3">
              {[
                {
                  title: "Филиал: Бутово",
                  desc: "Адрес, метро, часы",
                  status: "Услуга доступна",
                  note: "Запись: сегодня",
                },
                {
                  title: "Филиал: Арбатская",
                  desc: "Адрес, метро, часы",
                  status: "Услуга доступна",
                  note: "Запись: завтра",
                },
                {
                  title: "Филиал: Балашиха",
                  desc: "Адрес, район, часы",
                  status: "Услуга доступна",
                  note: "Запись: уточнить",
                },
              ].map((branch) => (
                <article
                  key={branch.title}
                  className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
                >
                  <div className="grid gap-2 p-4 text-sm">
                    <div className="font-semibold">{branch.title}</div>
                    <div className="text-xs text-neutral-600">{branch.desc}</div>
                    <div className="flex flex-wrap gap-1.5 text-[11px]">
                      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1">
                        {branch.status}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-neutral-600">
                        {branch.note}
                      </span>
                    </div>
                <MediaPlaceholder
                  variant="map"
                  ariaLabel="Карта филиала"
                  className="mt-2"
                />
                    <div className="mt-2 flex gap-2">
                      <a
                        href="#"
                        className="inline-flex flex-1 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs"
                      >
                        Как добраться
                      </a>
                      <a
                        href="#quiz"
                        className="inline-flex flex-1 items-center justify-center rounded-lg border border-neutral-900 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white"
                      >
                        Записаться сюда
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Отзывы */}
          <section id="reviews" className="border-t border-neutral-200 py-8 lg:py-10">
            <header className="mb-4 space-y-1">
              <h2 className="text-xl font-semibold">Отзывы</h2>
              <p className="text-sm text-neutral-600">
                С возможностью фильтрации по врачу/филиалу (в прототипе — плейсхолдер).
              </p>
            </header>

            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm">
                <div className="font-semibold">Рейтинг: 4,8</div>
                <div className="text-xs text-neutral-600">на основе 120 отзывов</div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Все", "По врачам", "По филиалам"].map((filter, idx) => (
                  <button
                    key={filter}
                    type="button"
                    className={`inline-flex items-center rounded-full border px-3 py-1 ${
                      idx === 0
                        ? "border-neutral-900 bg-neutral-900 text-white"
                        : "border-neutral-200 bg-white text-neutral-700"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {[
                ["Имя • 2 дня назад", "Филиал: Бутово • Врач: ФИО"],
                ["Имя • 1 неделю назад", "Филиал: Арбатская • Врач: ФИО"],
                ["Имя • 2 недели назад", "Филиал: Балашиха • Врач: ФИО"],
              ].map(([who, meta]) => (
                <article
                  key={who as string}
                  className="rounded-xl border border-neutral-200 bg-white p-4 text-sm"
                >
                  <div className="font-semibold">{who}</div>
                  <div className="mt-1 text-xs text-neutral-500">{meta}</div>
                  <p className="mt-2 text-xs text-neutral-700">
                    Плейсхолдер текста отзыва на 2–3 строки. Важно: юридически корректная подача и источник.
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-2 text-xs text-neutral-500">
              Дисклеймер: отзывы могут быть опубликованы только с согласия пациента; указываем источник/модерацию.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="border-t border-neutral-200 py-8 lg:py-10">
            <header className="mb-4 space-y-1">
              <h2 className="text-xl font-semibold">FAQ</h2>
              <p className="text-sm text-neutral-600">Снятие возражений, подготовка, стоимость, сроки, документы.</p>
            </header>

            <div className="space-y-3">
              <details className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                <summary className="flex cursor-pointer items-baseline justify-between gap-3 bg-neutral-50 px-4 py-3 text-sm">
                  <span className="font-semibold">С чего начать?</span>
                  <span className="text-xs text-neutral-500">первый визит</span>
                </summary>
                <div className="px-4 py-3 text-xs text-neutral-700">
                  Плейсхолдер ответа. Идеально — коротко + ссылка на “Как проходит” / “Цены”.
                </div>
              </details>

              <details className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                <summary className="flex cursor-pointer items-baseline justify-between gap-3 bg-neutral-50 px-4 py-3 text-sm">
                  <span className="font-semibold">Почему цена “от”?</span>
                  <span className="text-xs text-neutral-500">плавающая стоимость</span>
                </summary>
                <div className="px-4 py-3 text-xs text-neutral-700">
                  Цена зависит от объёма диагностики и индивидуальных показаний. Точную стоимость врач назовёт после
                  консультации.
                </div>
              </details>

              <details className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                <summary className="flex cursor-pointer items-baseline justify-between gap-3 bg-neutral-50 px-4 py-3 text-sm">
                  <span className="font-semibold">Какие анализы нужны?</span>
                  <span className="text-xs text-neutral-500">подготовка</span>
                </summary>
                <div className="px-4 py-3 text-xs text-neutral-700">
                  Плейсхолдер. Указать, что список зависит от срока и рекомендаций врача.
                </div>
              </details>
            </div>

            {/* Форма вопроса */}
            <section
              id="question"
              aria-label="Задать вопрос"
              className="mt-6 rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-4"
            >
              <div className="text-sm font-semibold">Не нашли ответ?</div>
              <p className="mt-1 text-xs text-neutral-600">
                Плейсхолдер формы вопроса (в MVP можно вести на мессенджер/звонок).
              </p>
              <form className="mt-3 space-y-3" action="#" method="get">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs text-neutral-600" htmlFor="q-name">
                      Имя
                    </label>
                    <input
                      id="q-name"
                      name="name"
                      type="text"
                      placeholder="Как к вам обращаться"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-neutral-600" htmlFor="q-phone">
                      Телефон
                    </label>
                    <input
                      id="q-phone"
                      name="phone"
                      type="tel"
                      placeholder="+7"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-xs text-neutral-600" htmlFor="q-text">
                    Вопрос
                  </label>
                  <textarea
                    id="q-text"
                    name="question"
                    rows={4}
                    placeholder="Коротко опишите"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
                >
                  Отправить вопрос
                </button>
                <p className="mt-1 text-xs text-neutral-500">
                  Дисклеймер: ответ не является мед. услугой и не заменяет консультацию специалиста.
                </p>
              </form>
            </section>
          </section>

          {/* Похожие услуги */}
          <section id="related" className="border-t border-neutral-200 py-8 lg:py-10">
            <header className="mb-4 space-y-1">
              <h2 className="text-xl font-semibold">Похожие услуги</h2>
              <p className="text-sm text-neutral-600">Перелинковка из hub → leaf → “что лечим”.</p>
            </header>

            <div className="grid gap-3 md:grid-cols-4">
              {[
                ["Диагностика беременности", "УЗИ + анализы + приём"],
                ["Скрининг 1 триместр", "Плейсхолдер"],
                ["НИПТ", "Категория"],
                ["Первичный приём гинеколога", "Если продукт выделен"],
              ].map(([name, desc]) => (
                <a
                  key={name as string}
                  href="#"
                  className="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm"
                >
                  <div className="font-semibold">{name}</div>
                  <div className="mt-1 text-xs text-neutral-600">{desc}</div>
                </a>
              ))}
            </div>
          </section>

          {/* Запись: быстрая форма */}
          <section
            id="quiz"
            aria-label="Запись на услугу (быстрая форма)"
            className="border-t border-neutral-200 py-8 lg:py-10"
          >
            <div className="grid gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div>
                <h2 className="text-xl font-semibold">Запись на ведение беременности</h2>
                <p className="mt-1 text-sm text-neutral-600">
                  Быстрая форма на 2–3 поля под сценарий “я уже готов(а) записаться”. Подходит для контекста и
                  возвращающегося трафика.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-2 text-xs">
                <a
                  href="tel:+79999999999"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 font-medium"
                >
                  Позвонить
                </a>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-4 text-sm">
              <div className="font-semibold">Быстрая запись</div>
              <p className="mt-1 text-xs text-neutral-600">
                Короткая форма: имя, телефон, филиал и комментарий. Без лишних шагов.
              </p>
              <form className="mt-3 space-y-3" action="#" method="get">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs text-neutral-600" htmlFor="fast-name">
                      Имя
                    </label>
                    <input
                      id="fast-name"
                      name="name"
                      type="text"
                      placeholder="Как к вам обращаться"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-neutral-600" htmlFor="fast-phone">
                      Телефон
                    </label>
                    <input
                      id="fast-phone"
                      name="phone"
                      type="tel"
                      placeholder="+7"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-xs text-neutral-600" htmlFor="fast-branch">
                    Филиал
                  </label>
                  <select
                    id="fast-branch"
                    name="branch"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm"
                  >
                    <option>Выберите филиал</option>
                    <option>Бутово</option>
                    <option>Арбатская</option>
                    <option>Балашиха</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs text-neutral-600" htmlFor="fast-comment">
                    Комментарий (опционально)
                  </label>
                  <textarea
                    id="fast-comment"
                    name="comment"
                    rows={3}
                    placeholder="Удобное время, вопросы, пожелания"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
                >
                  Записаться
                </button>
                <p className="mt-1 text-xs text-neutral-500">
                  Текст согласия на обработку ПД + дисклеймер “имеются противопоказания, нужна консультация специалиста”.
                </p>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

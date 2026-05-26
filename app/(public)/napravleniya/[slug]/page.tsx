import Link from "next/link"
import { notFound } from "next/navigation"
import { MediaPlaceholder } from "@/components/MediaPlaceholder"
import { isValidRoute } from "@/lib/valid-routes"

interface PageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return [
    { slug: "beremennost" },
  ]
}

export async function generateMetadata({ params }: PageProps) {
  const directionData = getDirectionData(params.slug)
  if (!directionData) {
    return {
      title: `Направление: ${params.slug}`,
    }
  }
  return {
    title: directionData.seoTitle || `${directionData.title} в Mesedclinic`,
    description: directionData.seoDescription || directionData.description,
  }
}

function getDirectionData(slug: string) {
  const directions: Record<string, any> = {
    beremennost: {
      title: "Беременность и роды",
      description: "Ведение беременности по триместрам, диагностика, УЗИ, скрининги, консультации врачей. Сопровождение на всех этапах — от планирования до родов.",
      seoTitle: "Беременность и роды в Mesedclinic — ведение беременности",
      seoDescription: "Ведение беременности по понятному плану: диагностика, анализы, консультации врача. Сопровождение на всех этапах.",
      services: [
        {
          slug: "vedenie-beremennosti",
          title: "Ведение беременности",
          description: "Наблюдение по понятному плану: диагностика, анализы, ответы врача и контроль важного — без лишних визитов.",
          price: "от 12 000 ₽",
        },
        {
          slug: "diagnostika-beremennosti",
          title: "Диагностика беременности",
          description: "УЗИ, анализы, скрининги для подтверждения беременности и оценки состояния.",
          price: "от 3 000 ₽",
        },
        {
          slug: "skriningi",
          title: "Скрининги беременности",
          description: "Скрининги 1, 2 и 3 триместра для оценки развития плода.",
          price: "от 5 000 ₽",
        },
      ],
      symptoms: [
        { slug: "planirovanie-beremennosti", title: "Планирование беременности" },
        { slug: "pervyy-trimestr", title: "Первый триместр" },
        { slug: "vtoroy-trimestr", title: "Второй триместр" },
        { slug: "tretiy-trimestr", title: "Третий триместр" },
      ],
      doctors: [
        { slug: "akusher-ginekolog-1", name: "ФИО врача", specialty: "Акушер‑гинеколог • стаж 12 лет", branches: ["Бутово", "Арбатская"] },
        { slug: "akusher-ginekolog-2", name: "ФИО врача", specialty: "Врач УЗД • стаж 9 лет", branches: ["Балашиха"] },
        { slug: "akusher-ginekolog-1", name: "ФИО врача", specialty: "Акушер‑гинеколог • стаж 15 лет", branches: ["Арбатская"] },
      ],
      branches: [
        { slug: "butovo", name: "Бутово", address: "Адрес филиала, метро", available: true },
        { slug: "arbatskaya", name: "Арбатская", address: "Адрес филиала, метро", available: true },
        { slug: "balashiha", name: "Балашиха", address: "Адрес филиала, район", available: true },
      ],
    },
  }
  return directions[slug]
}

export default async function DirectionPage({ params }: PageProps) {
  const directionData = getDirectionData(params.slug)

  // Если направление не найдено, показываем упрощенную страницу
  if (!directionData) {
    return (
      <main className="min-h-screen bg-white text-neutral-900">
        <div className="px-5">
          <div className="mx-auto max-w-6xl py-8 lg:py-12">
            <h1 className="mb-4 text-4xl font-semibold">Направление: {params.slug}</h1>
            <p className="text-base text-neutral-600">
              Информация о направлении будет добавлена позже.
            </p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="px-5">
        <div className="mx-auto max-w-6xl py-8 lg:py-12">
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
                <Link href="/napravleniya" className="underline underline-offset-2">
                  Направления
                </Link>
                <span>/</span>
              </li>
              <li aria-current="page" className="text-neutral-800">
                {directionData.title}
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <section aria-label="Информация о направлении" className="mb-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div>
                <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  {directionData.title} в Mesedclinic
                </h1>
                <p className="mb-6 text-base text-neutral-600 sm:text-lg">
                  {directionData.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/zapis?direction=${params.slug}`}
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
                  >
                    Записаться на приём
                  </Link>
                  <Link
                    href={`/uslugi?direction=${params.slug}`}
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-3 text-base font-medium transition-colors hover:bg-neutral-50"
                  >
                    Смотреть услуги
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MediaPlaceholder
                  variant="hero"
                  ariaLabel="Изображение направления"
                />
              </div>
            </div>
          </section>

          {/* Что входит в направление */}
          <section id="about" className="mb-10 border-t border-neutral-200 pt-10">
            <header className="mb-6">
              <h2 className="mb-2 text-2xl font-semibold">Что входит в направление</h2>
              <p className="text-sm text-neutral-600">
                Полный спектр услуг и программ по направлению
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Диагностика", desc: "УЗИ, анализы, скрининги" },
                { title: "Ведение беременности", desc: "Наблюдение по триместрам" },
                { title: "Консультации", desc: "Ответы на вопросы, рекомендации" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-neutral-200 bg-white p-4"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <MediaPlaceholder variant="icon" ariaLabel={`Иконка: ${item.title}`} />
                    <div className="text-base font-semibold">{item.title}</div>
                  </div>
                  <div className="text-sm text-neutral-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Основные услуги направления */}
          <section id="services" className="mb-10 border-t border-neutral-200 pt-10">
            <header className="mb-6">
              <h2 className="mb-2 text-2xl font-semibold">Основные услуги направления</h2>
              <p className="text-sm text-neutral-600">
                Выберите услугу, чтобы узнать подробнее
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {directionData.services.map((service: any) => (
                <article
                  key={service.slug}
                  className="rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300"
                >
                  <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                  <p className="mb-3 text-sm text-neutral-600">{service.description}</p>
                  <div className="mb-4 text-sm font-semibold text-neutral-900">{service.price}</div>
                  <div className="flex flex-wrap gap-2">
                    {isValidRoute(`/uslugi/${service.slug}`) ? (
                      <Link
                        href={`/uslugi/${service.slug}`}
                        className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-50"
                      >
                        Подробнее
                      </Link>
                    ) : (
                      <span className="inline-flex cursor-default items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-400">
                        Подробнее
                      </span>
                    )}
                    <Link
                      href={`/zapis?service=${service.slug}`}
                      className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                    >
                      Записаться
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* С какими запросами приходят */}
          <section id="symptoms" className="mb-10 border-t border-neutral-200 pt-10">
            <header className="mb-6">
              <h2 className="mb-2 text-2xl font-semibold">С какими запросами приходят</h2>
              <p className="text-sm text-neutral-600">
                Частые ситуации и вопросы, с которыми обращаются пациенты
              </p>
            </header>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {directionData.symptoms.map((symptom: any) =>
                isValidRoute(`/chto-my-lechim/${symptom.slug}`) ? (
                  <Link
                    key={symptom.slug}
                    href={`/chto-my-lechim/${symptom.slug}`}
                    className="block rounded-xl border border-neutral-200 bg-white p-4 text-sm transition-colors hover:border-neutral-300 hover:bg-neutral-50"
                  >
                    <div className="font-semibold">{symptom.title}</div>
                  </Link>
                ) : (
                  <div
                    key={symptom.slug}
                    className="block rounded-xl border border-neutral-200 bg-white p-4 text-sm"
                  >
                    <div className="font-semibold text-neutral-400">{symptom.title}</div>
                  </div>
                )
              )}
            </div>
          </section>

          {/* Врачи направления */}
          <section id="doctors" className="mb-10 border-t border-neutral-200 pt-10">
            <header className="mb-6">
              <h2 className="mb-2 text-2xl font-semibold">Врачи направления</h2>
              <p className="text-sm text-neutral-600">
                Специалисты, которые ведут приём по данному направлению
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
              {directionData.doctors.map((doctor: any, idx: number) => (
                <article
                  key={idx}
                  className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
                >
                  <MediaPlaceholder
                    variant="avatar"
                    ariaLabel={`Фото врача: ${doctor.name}`}
                    className="border-b border-neutral-200"
                  />
                  <div className="grid gap-2 p-4 text-sm">
                    <div className="font-semibold">{doctor.name}</div>
                    <div className="text-xs text-neutral-600">{doctor.specialty}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {doctor.branches.map((branch: string) => (
                        <span
                          key={branch}
                          className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] text-neutral-600"
                        >
                          {branch}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/vrachi/${doctor.slug}`}
                      className="mt-1 inline-flex w-fit items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs transition-colors hover:bg-neutral-100"
                    >
                      Профиль врача
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href="/vrachi"
                className="text-sm text-neutral-600 underline underline-offset-4"
              >
                Все врачи по направлению →
              </Link>
            </div>
          </section>

          {/* Филиалы, где ведем направление */}
          <section id="branches" className="mb-10 border-t border-neutral-200 pt-10">
            <header className="mb-6">
              <h2 className="mb-2 text-2xl font-semibold">Филиалы, где ведем направление</h2>
              <p className="text-sm text-neutral-600">
                Выберите удобную клинику для записи
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
              {directionData.branches.map((branch: any) => (
                <article
                  key={branch.name}
                  className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
                >
                  <div className="grid gap-2 p-4 text-sm">
                    <div className="font-semibold">Филиал: {branch.name}</div>
                    <div className="text-xs text-neutral-600">{branch.address}</div>
                    <div className="flex flex-wrap gap-1.5 text-[11px]">
                      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1">
                        {branch.available ? "Услуга доступна" : "Уточнить"}
                      </span>
                    </div>
                    <MediaPlaceholder
                      variant="map"
                      ariaLabel={`Карта филиала: ${branch.name}`}
                      className="mt-2 h-28"
                    />
                    <div className="mt-2 flex gap-2">
                      <Link
                        href={`/kliniki/${branch.slug}`}
                        className="inline-flex flex-1 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs transition-colors hover:bg-neutral-100"
                      >
                        Как добраться
                      </Link>
                      <Link
                        href={`/zapis?direction=${params.slug}&clinic=${branch.slug}`}
                        className="inline-flex flex-1 items-center justify-center rounded-lg border border-neutral-900 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
                      >
                        Записаться сюда
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CTA секция */}
          <section
            aria-label="Запись на приём"
            className="rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-8"
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div>
                <h2 className="mb-3 text-2xl font-semibold">Записаться на приём</h2>
                <p className="mb-4 text-base text-neutral-700">
                  Выберите удобное время и филиал. Наши администраторы свяжутся с вами для подтверждения записи.
                </p>
                <Link
                  href={`/zapis?direction=${params.slug}`}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Записаться на приём
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                  <div className="mb-2 font-semibold">Контакты</div>
                  <div className="mb-1 text-neutral-600">Телефон: +7 (999) 123-45-67</div>
                  <div className="text-neutral-600">Email: info@mesedclinic.ru</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

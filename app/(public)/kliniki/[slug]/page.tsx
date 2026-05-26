import { MediaPlaceholder } from "@/components/MediaPlaceholder"

const VALID_DOCTOR_SLUGS = new Set(["akusher-ginekolog-1", "akusher-ginekolog-2"])

interface PageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return [
    { slug: "butovo" },
    { slug: "arbatskaya" },
    { slug: "balashiha" },
  ]
}

export default async function ClinicPage({ params }: PageProps) {
  const clinicData = getClinicData(params.slug)

  if (!clinicData) {
    return (
      <main className="min-h-screen bg-white text-neutral-900">
        <div className="px-5">
          <div className="mx-auto max-w-6xl py-8 lg:py-12">
            <h1 className="mb-4 text-3xl font-semibold">Клиника не найдена</h1>
            <p className="text-sm text-neutral-600">
              Информация по запрошенному филиалу будет добавлена позже. Вы можете выбрать другой филиал на странице{" "}
              <a href="/kliniki" className="underline underline-offset-2">
                «Наши клиники»
              </a>
              .
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
          <nav className="mb-6 text-sm text-neutral-500" aria-label="Хлебные крошки">
            <ol className="flex flex-wrap gap-2">
              <li className="flex items-center gap-2">
                <a href="/" className="underline underline-offset-2">
                  Главная
                </a>
                <span>/</span>
              </li>
              <li className="flex items-center gap-2">
                <a href="/kliniki" className="underline underline-offset-2">
                  Наши клиники
                </a>
                <span>/</span>
              </li>
              <li aria-current="page" className="text-neutral-800">
                {clinicData.name}
              </li>
            </ol>
          </nav>

          <section aria-label="Информация о клинике" className="mb-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div>
                <h1 className="mb-3 text-4xl font-semibold leading-tight sm:text-5xl">{clinicData.name}</h1>
                <p className="mb-3 text-sm text-neutral-600">{clinicData.address}</p>
                <p className="mb-4 text-xs text-neutral-500">{clinicData.metro}</p>

                <dl className="mb-4 space-y-1 text-sm text-neutral-700">
                  <div>
                    <dt className="text-neutral-500">Телефон</dt>
                    <dd>{clinicData.phone}</dd>
                  </div>
                  <div>
                    <dt className="text-neutral-500">Режим работы</dt>
                    <dd>{clinicData.workingHours}</dd>
                  </div>
                </dl>

                <div className="mb-4 flex flex-wrap gap-1.5 text-[11px]">
                  {clinicData.hasPregnancy && (
                    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1">
                      Ведение беременности
                    </span>
                  )}
                  {clinicData.hasUziPregnancy && (
                    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1">
                      УЗИ беременности
                    </span>
                  )}
                  {clinicData.hasPediatrics && (
                    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1">
                      Педиатрия
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`/zapis?clinic=${params.slug}`}
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
                  >
                    Записаться сюда
                  </a>
                  <a
                    href={`/napravleniya/beremennost`}
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-3 text-base font-medium transition-colors hover:bg-neutral-50"
                  >
                    Ведение беременности в филиале
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <MediaPlaceholder
                  variant="map"
                  ariaLabel="Карта расположения клиники"
                />
                <div className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                  <h2 className="mb-2 text-base font-semibold">Как добраться</h2>
                  <p className="text-neutral-600">
                    Плейсхолдер под текст «как пройти от метро», информацию о парковке и ориентиры.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section aria-label="Направления в филиале" className="mb-10 border-t border-neutral-200 pt-10">
            <header className="mb-4">
              <h2 className="mb-1 text-2xl font-semibold">Направления в этом филиале</h2>
              <p className="text-sm text-neutral-600">
                Основные направления, которые доступны в этой клинике. Для полного списка перейдите в раздел «Направления».
              </p>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {clinicData.directions.map((direction) => (
                <a
                  key={direction.slug}
                  href={`/napravleniya/${direction.slug}`}
                  className="block rounded-xl border border-neutral-200 bg-white p-4 text-sm transition-colors hover:border-neutral-300 hover:bg-neutral-50"
                >
                  <div className="mb-1 text-base font-semibold">{direction.title}</div>
                  <div className="text-neutral-600">{direction.description}</div>
                </a>
              ))}
            </div>
          </section>

          <section aria-label="Врачи филиала" className="mb-10 border-t border-neutral-200 pt-10">
            <header className="mb-4">
              <h2 className="mb-1 text-2xl font-semibold">Врачи в этом филиале</h2>
              <p className="text-sm text-neutral-600">
                Часть команды, которая ведёт приём в этой клинике. Полный список врачей — в разделе «Наши врачи».
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
              {clinicData.doctors.map((doctor) => (
                <article
                  key={doctor.slug}
                  className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
                >
                  <div className="h-28 border-b border-neutral-200 bg-neutral-50" aria-hidden="true" />
                  <div className="grid gap-2 p-4 text-sm">
                    <div className="font-semibold">{doctor.name}</div>
                    <div className="text-xs text-neutral-600">{doctor.specialty}</div>
                    {VALID_DOCTOR_SLUGS.has(doctor.slug) ? (
                      <a
                        href={`/vrachi/${doctor.slug}`}
                        className="mt-1 inline-flex w-fit items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs transition-colors hover:bg-neutral-100"
                      >
                        Профиль врача
                      </a>
                    ) : (
                      <span className="mt-1 inline-flex w-fit items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-400">
                        Профиль врача
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

function getClinicData(slug: string) {
  const clinics: Record<
    string,
    {
      name: string
      address: string
      metro: string
      phone: string
      workingHours: string
      hasPregnancy: boolean
      hasUziPregnancy: boolean
      hasPediatrics: boolean
      directions: { slug: string; title: string; description: string }[]
      doctors: { slug: string; name: string; specialty: string }[]
    }
  > = {
    butovo: {
      name: "Mesedclinic — Бутово",
      address: "Адрес филиала в Бутово, метро / район",
      metro: "м. Бутово",
      phone: "+7 (999) 123-45-67",
      workingHours: "Пн–Вс: 9:00–21:00",
      hasPregnancy: true,
      hasUziPregnancy: true,
      hasPediatrics: true,
      directions: [
        {
          slug: "beremennost",
          title: "Беременность и роды",
          description: "Ведение беременности, диагностика, УЗИ, скрининги.",
        },
        {
          slug: "ginekologiya",
          title: "Гинекология",
          description: "Консультации, диагностика и лечение.",
        },
        {
          slug: "pediatriya",
          title: "Педиатрия",
          description: "Наблюдение детей и вакцинация.",
        },
      ],
      doctors: [
        {
          slug: "akusher-ginekolog-bu",
          name: "ФИО врача",
          specialty: "Акушер‑гинеколог • стаж 12 лет",
        },
        {
          slug: "pediatr-bu",
          name: "ФИО врача",
          specialty: "Педиатр • стаж 8 лет",
        },
      ],
    },
    arbatskaya: {
      name: "Mesedclinic — Арбатская",
      address: "Адрес филиала на Арбатской, метро / район",
      metro: "м. Арбатская",
      phone: "+7 (999) 123-45-68",
      workingHours: "Пн–Вс: 9:00–21:00",
      hasPregnancy: true,
      hasUziPregnancy: true,
      hasPediatrics: false,
      directions: [
        {
          slug: "beremennost",
          title: "Беременность и роды",
          description: "Ведение беременности и УЗИ в центре Москвы.",
        },
        {
          slug: "ginekologiya",
          title: "Гинекология",
          description: "Консультации и диагностика.",
        },
      ],
      doctors: [
        {
          slug: "akusher-ginekolog-ar",
          name: "ФИО врача",
          specialty: "Акушер‑гинеколог • стаж 15 лет",
        },
        {
          slug: "uzi-specialist-ar",
          name: "ФИО врача",
          specialty: "Врач УЗД • стаж 9 лет",
        },
      ],
    },
    balashiha: {
      name: "Mesedclinic — Балашиха",
      address: "Адрес филиала в Балашихе, район",
      metro: "Балашиха",
      phone: "+7 (999) 123-45-69",
      workingHours: "Пн–Вс: 9:00–21:00",
      hasPregnancy: true,
      hasUziPregnancy: false,
      hasPediatrics: true,
      directions: [
        {
          slug: "beremennost",
          title: "Беременность и роды",
          description: "Ведение беременности рядом с домом.",
        },
        {
          slug: "pediatriya",
          title: "Педиатрия",
          description: "Детские врачи и вакцинация.",
        },
      ],
      doctors: [
        {
          slug: "akusher-ginekolog-ba",
          name: "ФИО врача",
          specialty: "Акушер‑гинеколог • стаж 10 лет",
        },
        {
          slug: "pediatr-ba",
          name: "ФИО врача",
          specialty: "Педиатр • стаж 7 лет",
        },
      ],
    },
  }

  return clinics[slug]
}

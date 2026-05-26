import Link from "next/link"

interface PageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return [
    { slug: "akusher-ginekolog-1" },
    { slug: "akusher-ginekolog-2" },
  ]
}

export default async function DoctorPage({ params }: PageProps) {
  const doctor = getDoctorData(params.slug)

  if (!doctor) {
    return (
      <main className="min-h-screen bg-white text-neutral-900">
        <div className="px-5">
          <div className="mx-auto max-w-6xl py-8 lg:py-12">
            <h1 className="mb-4 text-3xl font-semibold">Врач не найден</h1>
            <p className="text-sm text-neutral-600">
              Информация по запрошенному врачу будет добавлена позже. Вы можете вернуться в раздел{" "}
              <Link href="/vrachi" className="underline underline-offset-2">
                «Наши врачи»
              </Link>
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
                <Link href="/" className="underline underline-offset-2">
                  Главная
                </Link>
                <span>/</span>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/vrachi" className="underline underline-offset-2">
                  Наши врачи
                </Link>
                <span>/</span>
              </li>
              <li aria-current="page" className="text-neutral-800">
                {doctor.name}
              </li>
            </ol>
          </nav>

          <section aria-label="Профиль врача" className="mb-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div>
                <h1 className="mb-3 text-4xl font-semibold leading-tight sm:text-5xl">{doctor.name}</h1>
                <p className="mb-2 text-sm text-neutral-600">
                  {doctor.specialty} • стаж {doctor.experience}
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5 text-[11px]">
                  {doctor.clinics.map((clinic) => (
                    <span
                      key={clinic}
                      className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-neutral-600"
                    >
                      {clinic}
                    </span>
                  ))}
                </div>

                <div className="mb-6 flex flex-wrap gap-3">
                  <Link
                    href={`/zapis?doctor=${params.slug}`}
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
                  >
                    Записаться к врачу
                  </Link>
                  <Link
                    href={`/napravleniya/beremennost`}
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-3 text-base font-medium transition-colors hover:bg-neutral-50"
                  >
                    Беременность и роды
                  </Link>
                </div>

                <section aria-label="О враче" className="mb-8">
                  <h2 className="mb-2 text-xl font-semibold">О враче</h2>
                  <p className="mb-2 text-sm text-neutral-700">
                    Плейсхолдер под биографию и описание подхода к пациентам. Здесь можно кратко рассказать о профессиональном
                    пути, ключевых компетенциях и особенностях работы с беременными.
                  </p>
                </section>

                <section aria-label="Направления и услуги" className="border-t border-neutral-200 pt-6">
                  <h2 className="mb-2 text-xl font-semibold">Направления и услуги</h2>
                  <p className="mb-3 text-sm text-neutral-600">
                    Врач ведёт приём по следующим направлениям. Список услуг можно расширить позже из базы данных.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {doctor.directions.map((direction) => (
                      <Link
                        key={direction.slug}
                        href={`/napravleniya/${direction.slug}`}
                        className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-neutral-700 transition-colors hover:bg-neutral-100"
                      >
                        {direction.title}
                      </Link>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-6">
                <div
                  aria-label="Фото врача (плейсхолдер)"
                  className="h-64 w-full rounded-xl border border-neutral-200 bg-neutral-50"
                />

                <section aria-label="Краткая информация" className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                  <h2 className="mb-2 text-base font-semibold">Основная информация</h2>
                  <dl className="space-y-1 text-xs text-neutral-700">
                    <div>
                      <dt className="text-neutral-500">Специальность</dt>
                      <dd>{doctor.specialty}</dd>
                    </div>
                    <div>
                      <dt className="text-neutral-500">Стаж</dt>
                      <dd>{doctor.experience}</dd>
                    </div>
                    <div>
                      <dt className="text-neutral-500">Филиалы</dt>
                      <dd>{doctor.clinics.join(", ")}</dd>
                    </div>
                  </dl>
                </section>

                <section aria-label="Контакты" className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                  <h2 className="mb-2 text-base font-semibold">Записаться на приём</h2>
                  <p className="mb-3 text-xs text-neutral-600">
                    Оставьте заявку через форму записи или свяжитесь с нами по телефону — администратор поможет подобрать
                    удобное время приёма.
                  </p>
                  <Link
                    href={`/zapis?doctor=${params.slug}`}
                    className="inline-flex w-full items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                  >
                    Оставить заявку
                  </Link>
                </section>
              </aside>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

function getDoctorData(slug: string) {
  const doctors: Record<
    string,
    {
      name: string
      specialty: string
      experience: string
      clinics: string[]
      directions: { slug: string; title: string }[]
    }
  > = {
    "akusher-ginekolog-1": {
      name: "ФИО врача",
      specialty: "Акушер‑гинеколог",
      experience: "12 лет",
      clinics: ["Бутово", "Арбатская"],
      directions: [
        { slug: "beremennost", title: "Беременность и роды" },
        { slug: "ginekologiya", title: "Гинекология" },
      ],
    },
    "akusher-ginekolog-2": {
      name: "ФИО врача",
      specialty: "Акушер‑гинеколог",
      experience: "15 лет",
      clinics: ["Арбатская"],
      directions: [{ slug: "beremennost", title: "Беременность и роды" }],
    },
    "uzi-specialist-1": {
      name: "ФИО врача",
      specialty: "Врач УЗД",
      experience: "9 лет",
      clinics: ["Балашиха"],
      directions: [
        { slug: "beremennost", title: "Беременность и роды" },
        { slug: "ginekologiya", title: "Гинекология" },
      ],
    },
    "pediatr-1": {
      name: "ФИО врача",
      specialty: "Педиатр",
      experience: "8 лет",
      clinics: ["Бутово", "Балашиха"],
      directions: [{ slug: "pediatriya", title: "Педиатрия" }],
    },
  }

  return doctors[slug]
}

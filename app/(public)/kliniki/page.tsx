import Link from "next/link"

export default function ClinicsPage() {
  const clinics = [
    {
      slug: "butovo",
      name: "Mesedclinic — Бутово",
      address: "Адрес филиала в Бутово, метро / район",
      metro: "м. Бутово",
      hasPregnancy: true,
      hasUziPregnancy: true,
      hasPediatrics: true,
      phone: "+7 (999) 123-45-67",
      workingHours: "Пн–Вс: 9:00–21:00",
    },
    {
      slug: "arbatskaya",
      name: "Mesedclinic — Арбатская",
      address: "Адрес филиала на Арбатской, метро / район",
      metro: "м. Арбатская",
      hasPregnancy: true,
      hasUziPregnancy: true,
      hasPediatrics: false,
      phone: "+7 (999) 123-45-68",
      workingHours: "Пн–Вс: 9:00–21:00",
    },
    {
      slug: "balashiha",
      name: "Mesedclinic — Балашиха",
      address: "Адрес филиала в Балашихе, район",
      metro: "Балашиха",
      hasPregnancy: true,
      hasUziPregnancy: false,
      hasPediatrics: true,
      phone: "+7 (999) 123-45-69",
      workingHours: "Пн–Вс: 9:00–21:00",
    },
  ]

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
              <li aria-current="page" className="text-neutral-800">
                Наши клиники
              </li>
            </ol>
          </nav>

          <section aria-label="Наши клиники" className="mb-10">
            <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">Наши клиники</h1>
            <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
              Выберите удобный филиал Mesedclinic для записи. Во всех клиниках доступны основные направления, в том числе
              ведение беременности.
            </p>
          </section>

          <section aria-label="Список клиник">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {clinics.map((clinic) => (
                <article
                  key={clinic.slug}
                  className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <header className="mb-3">
                    <h2 className="text-lg font-semibold">{clinic.name}</h2>
                    <p className="mt-1 text-sm text-neutral-600">{clinic.address}</p>
                    <p className="text-xs text-neutral-500">{clinic.metro}</p>
                  </header>

                  <dl className="mb-4 space-y-1 text-xs text-neutral-700">
                    <div>
                      <dt className="text-neutral-500">Телефон</dt>
                      <dd>{clinic.phone}</dd>
                    </div>
                    <div>
                      <dt className="text-neutral-500">Режим работы</dt>
                      <dd>{clinic.workingHours}</dd>
                    </div>
                  </dl>

                  <div className="mb-4 flex flex-wrap gap-1.5 text-[11px]">
                    {clinic.hasPregnancy && (
                      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1">
                        Ведение беременности
                      </span>
                    )}
                    {clinic.hasUziPregnancy && (
                      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1">
                        УЗИ беременности
                      </span>
                    )}
                    {clinic.hasPediatrics && (
                      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1">
                        Педиатрия
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    <Link
                      href={`/kliniki/${clinic.slug}`}
                      className="inline-flex flex-1 items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-50"
                    >
                      Подробнее о филиале
                    </Link>
                    <Link
                      href={`/zapis?clinic=${clinic.slug}`}
                      className="inline-flex flex-1 items-center justify-center rounded-lg border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                    >
                      Записаться сюда
                    </Link>
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

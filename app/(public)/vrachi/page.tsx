import Link from "next/link"

import { MediaPlaceholder } from "@/components/MediaPlaceholder"
import { isValidRoute } from "@/lib/valid-routes"

export default function DoctorsPage() {
  const directions = [
    { slug: "all", title: "Все" },
    { slug: "beremennost", title: "Беременность и роды" },
    { slug: "ginekologiya", title: "Гинекология" },
    { slug: "pediatriya", title: "Педиатрия" },
  ]

  const doctors = [
    {
      slug: "akusher-ginekolog-1",
      name: "ФИО врача",
      specialty: "Акушер‑гинеколог",
      experience: "12 лет",
      directions: ["beremennost", "ginekologiya"],
      clinics: ["Бутово", "Арбатская"],
    },
    {
      slug: "akusher-ginekolog-2",
      name: "ФИО врача",
      specialty: "Акушер‑гинеколог",
      experience: "15 лет",
      directions: ["beremennost"],
      clinics: ["Арбатская"],
    },
    {
      slug: "uzi-specialist-1",
      name: "ФИО врача",
      specialty: "Врач УЗД",
      experience: "9 лет",
      directions: ["beremennost", "ginekologiya"],
      clinics: ["Балашиха"],
    },
    {
      slug: "pediatr-1",
      name: "ФИО врача",
      specialty: "Педиатр",
      experience: "8 лет",
      directions: ["pediatriya"],
      clinics: ["Бутово", "Балашиха"],
    },
  ]

  const highlighted = doctors.filter((doctor) => doctor.directions.includes("beremennost"))

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
                Наши врачи
              </li>
            </ol>
          </nav>

          <section aria-label="Наши врачи" className="mb-10">
            <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">Наши врачи</h1>
            <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
              Команда Mesedclinic — это опытные специалисты, которые ведут приём по ключевым направлениям клиники. Ниже —
              врачи, к которым можно обратиться по вопросам беременности, гинекологии и здоровья детей.
            </p>
          </section>

          <section aria-label="Врачи по беременности" className="mb-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <header className="mb-4">
              <h2 className="mb-1 text-2xl font-semibold">Врачи по беременности</h2>
              <p className="text-sm text-neutral-600">
                Специалисты, которые занимаются ведением беременности и сопровождением будущих мам.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
              {highlighted.map((doctor) => (
                <article
                  key={doctor.slug}
                  className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
                >
                  <MediaPlaceholder
                    variant="avatar"
                    ariaLabel={`Фото врача: ${doctor.name}`}
                  />
                  <div className="grid gap-2 p-4 text-sm">
                    <div className="font-semibold">{doctor.name}</div>
                    <div className="text-xs text-neutral-600">
                      {doctor.specialty} • стаж {doctor.experience}
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-[11px]">
                      {doctor.clinics.map((clinic) => (
                        <span
                          key={clinic}
                          className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-neutral-600"
                        >
                          {clinic}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {isValidRoute(`/vrachi/${doctor.slug}`) ? (
                        <Link
                          href={`/vrachi/${doctor.slug}`}
                          className="inline-flex flex-1 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-neutral-100"
                        >
                          Профиль врача
                        </Link>
                      ) : (
                        <span className="inline-flex flex-1 cursor-not-allowed opacity-60 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-400">
                          Профиль врача
                        </span>
                      )}
                      <Link
                        href={`/zapis?doctor=${doctor.slug}`}
                        className="inline-flex flex-1 items-center justify-center rounded-lg border border-neutral-900 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
                      >
                        Записаться
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-label="Все врачи" className="border-t border-neutral-200 pt-10">
            <header className="mb-4">
              <h2 className="mb-1 text-2xl font-semibold">Все врачи клиники</h2>
              <p className="text-sm text-neutral-600">
                Ниже — полный список врачей. Позже здесь можно добавить фильтры по направлению, филиалу и стажу.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-3">
              {doctors.map((doctor) => (
                <article
                  key={doctor.slug}
                  className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
                >
                  <MediaPlaceholder
                    variant="avatar"
                    ariaLabel={`Фото врача: ${doctor.name}`}
                  />
                  <div className="grid gap-2 p-4 text-sm">
                    <div className="font-semibold">{doctor.name}</div>
                    <div className="text-xs text-neutral-600">
                      {doctor.specialty} • стаж {doctor.experience}
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-[11px]">
                      {doctor.directions.includes("beremennost") && (
                        <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-neutral-600">
                          Беременность
                        </span>
                      )}
                      {doctor.directions.includes("ginekologiya") && (
                        <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-neutral-600">
                          Гинекология
                        </span>
                      )}
                      {doctor.directions.includes("pediatriya") && (
                        <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-neutral-600">
                          Педиатрия
                        </span>
                      )}
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
          </section>
        </div>
      </div>
    </main>
  )
}

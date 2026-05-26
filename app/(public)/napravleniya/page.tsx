import Link from "next/link"

import { directions } from "@/lib/directions"
import { MediaPlaceholder } from "@/components/MediaPlaceholder"

export async function generateMetadata() {
  return {
    title: "Направления клиники Mesedclinic",
    description: "Все направления медицинской помощи: беременность и роды, гинекология, педиатрия и другие.",
  }
}

export default function DirectionsPage() {
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
              <li aria-current="page" className="text-neutral-800">
                Направления
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <section aria-label="Направления клиники" className="mb-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div>
                <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  Направления клиники
                </h1>
                <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
                  Mesedclinic предлагает широкий спектр медицинских услуг. Выберите интересующее направление, чтобы узнать подробнее об услугах, врачах и программах.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <MediaPlaceholder
                  variant="hero"
                  ariaLabel="Изображение направлений клиники"
                  className="h-40"
                />
              </div>
            </div>
          </section>

          {/* Сетка направлений */}
          <section aria-label="Список направлений">
            <div className="grid gap-6 md:grid-cols-2">
              {directions.map((direction) => (
                <article
                  key={direction.slug}
                  className={`overflow-hidden rounded-xl border ${
                    direction.isHighlighted
                      ? "border-neutral-900 bg-gradient-to-br from-neutral-50 to-white shadow-sm"
                      : "border-neutral-200 bg-white"
                  }`}
                >
                  <div className="grid gap-4 p-6">
                    <div className="flex items-start gap-4">
                      <MediaPlaceholder
                        variant="icon"
                        ariaLabel={`Иконка направления: ${direction.title}`}
                        className="mt-1 flex-shrink-0"
                      />
                      <div>
                        <h2 className="mb-2 text-2xl font-semibold">{direction.title}</h2>
                        <p className="mb-3 text-sm text-neutral-600">{direction.description}</p>
                        <div className="text-xs text-neutral-500">{direction.servicesCount}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/napravleniya/${direction.slug}`}
                        className={`inline-flex items-center justify-center rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors ${
                          direction.isHighlighted
                            ? "border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800"
                            : "border-neutral-200 bg-white hover:bg-neutral-50"
                        }`}
                      >
                        Подробнее о направлении
                      </Link>
                      <Link
                        href={`/uslugi?direction=${direction.slug}`}
                        className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-50"
                      >
                        Смотреть услуги
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Дополнительная информация */}
          <section aria-label="Дополнительная информация" className="mt-12 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="mb-3 text-xl font-semibold">Нужна помощь с выбором?</h2>
            <p className="mb-4 text-sm text-neutral-600">
              Если вы не уверены, какое направление вам подходит, запишитесь на консультацию — наши врачи помогут определить необходимый объём помощи.
            </p>
            <Link
              href="/zapis"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Записаться на консультацию
            </Link>
          </section>
        </div>
      </div>
    </main>
  )
}

"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState, Suspense } from "react"

import { isValidRoute } from "@/lib/valid-routes"

function ServicesPageContent() {
  const searchParams = useSearchParams()
  const activeDirection = searchParams.get("direction") || "all"
  const [selectedDirection, setSelectedDirection] = useState(activeDirection)

  const directions = [
    { slug: "all", title: "Все услуги" },
    { slug: "beremennost", title: "Беременность" },
    { slug: "ginekologiya", title: "Гинекология" },
    { slug: "pediatriya", title: "Педиатрия" },
  ]

  const servicesByDirection: Record<string, any[]> = {
    beremennost: [
      {
        slug: "vedenie-beremennosti",
        title: "Ведение беременности",
        description: "Наблюдение по понятному плану: диагностика, анализы, ответы врача и контроль важного — без лишних визитов.",
        price: "от 12 000 ₽",
        duration: "60–90 мин",
      },
      {
        slug: "diagnostika-beremennosti",
        title: "Диагностика беременности",
        description: "УЗИ, анализы, скрининги для подтверждения беременности и оценки состояния.",
        price: "от 3 000 ₽",
        duration: "30–60 мин",
      },
      {
        slug: "skriningi",
        title: "Скрининги беременности",
        description: "Скрининги 1, 2 и 3 триместра для оценки развития плода.",
        price: "от 5 000 ₽",
        duration: "60 мин",
      },
      {
        slug: "nipt",
        title: "НИПТ",
        description: "Неинвазивный пренатальный тест для определения хромосомных аномалий.",
        price: "от 25 000 ₽",
        duration: "10–14 дней",
      },
    ],
    ginekologiya: [
      {
        slug: "priem-ginekologa",
        title: "Приём гинеколога",
        description: "Консультация, осмотр, диагностика и назначение лечения.",
        price: "от 2 500 ₽",
        duration: "30–45 мин",
      },
      {
        slug: "uzi-malogo-taza",
        title: "УЗИ малого таза",
        description: "Ультразвуковое исследование органов малого таза.",
        price: "от 1 500 ₽",
        duration: "20–30 мин",
      },
    ],
    pediatriya: [
      {
        slug: "priem-pediatra",
        title: "Приём педиатра",
        description: "Консультация детского врача, осмотр, рекомендации.",
        price: "от 2 000 ₽",
        duration: "30 мин",
      },
      {
        slug: "vakcinaciya",
        title: "Вакцинация",
        description: "Проведение профилактических прививок детям.",
        price: "от 1 000 ₽",
        duration: "15–20 мин",
      },
    ],
  }

  const currentServices =
    selectedDirection === "all"
      ? Object.values(servicesByDirection).flat()
      : servicesByDirection[selectedDirection] || []

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
                Услуги
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <section aria-label="Услуги клиники" className="mb-10">
            <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Услуги клиники
            </h1>
            <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
              Полный спектр медицинских услуг Mesedclinic. Выберите направление или просмотрите все услуги.
            </p>
          </section>

          {/* Фильтр по направлениям */}
          <section aria-label="Фильтр услуг" className="mb-8">
            <div className="flex flex-wrap gap-2">
              {directions.map((direction) => (
                <button
                  key={direction.slug}
                  type="button"
                  onClick={() => setSelectedDirection(direction.slug)}
                  className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    selectedDirection === direction.slug
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {direction.title}
                </button>
              ))}
            </div>
          </section>

          {/* Секция "Беременность" (если выбрана) */}
          {selectedDirection === "beremennost" && (
            <section aria-label="Услуги по беременности" className="mb-10">
              <header className="mb-6">
                <h2 className="mb-2 text-2xl font-semibold">Услуги по беременности</h2>
                <p className="text-sm text-neutral-600">
                  Ведение беременности, диагностика, скрининги и консультации
                </p>
              </header>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {servicesByDirection.beremennost.map((service) => (
                  <article
                    key={service.slug}
                    className="rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300"
                  >
                    <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                    <p className="mb-3 text-sm text-neutral-600">{service.description}</p>
                    <div className="mb-4 flex flex-wrap gap-3 text-sm">
                      <div>
                        <span className="text-neutral-500">Цена: </span>
                        <span className="font-semibold">{service.price}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500">Длительность: </span>
                        <span className="font-semibold">{service.duration}</span>
                      </div>
                    </div>
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
          )}

          {/* Общий список услуг (если выбрано "Все" или другое направление) */}
          {selectedDirection !== "beremennost" && (
            <section aria-label="Список услуг">
              {currentServices.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {currentServices.map((service) => (
                    <article
                      key={service.slug}
                      className="rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300"
                    >
                      <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                      <p className="mb-3 text-sm text-neutral-600">{service.description}</p>
                      <div className="mb-4 flex flex-wrap gap-3 text-sm">
                        <div>
                          <span className="text-neutral-500">Цена: </span>
                          <span className="font-semibold">{service.price}</span>
                        </div>
                        {service.duration && (
                          <div>
                            <span className="text-neutral-500">Длительность: </span>
                            <span className="font-semibold">{service.duration}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href={`/uslugi/${service.slug}`}
                          className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-50"
                        >
                          Подробнее
                        </Link>
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
              ) : (
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center">
                  <p className="text-base text-neutral-600">
                    Услуги по выбранному направлению будут добавлены позже.
                  </p>
                </div>
              )}
            </section>
          )}

          {/* CTA секция */}
          <section
            aria-label="Запись на приём"
            className="mt-12 rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-8"
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div>
                <h2 className="mb-3 text-2xl font-semibold">Нужна помощь с выбором?</h2>
                <p className="mb-4 text-base text-neutral-700">
                  Если вы не уверены, какая услуга вам подходит, запишитесь на консультацию — наши врачи помогут определить необходимый объём помощи.
                </p>
                <Link
                  href="/zapis"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Записаться на консультацию
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

export default function ServicesPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <ServicesPageContent />
    </Suspense>
  )
}

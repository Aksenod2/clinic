import Link from "next/link"

import { MediaPlaceholder } from "@/components/MediaPlaceholder"

export default function OnlinePage() {
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
                Онлайн‑консультации
              </li>
            </ol>
          </nav>

          <section aria-label="Онлайн-консультации" className="mb-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div>
                <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">Онлайн‑консультации</h1>
                <p className="mb-4 text-base text-neutral-600 sm:text-lg">
                  Возможность задать важные вопросы врачу дистанционно: обсудить анализы, самочувствие и план действий. Подходит
                  как беременным, так и пациентам с другими запросами.
                </p>
                <p className="text-sm text-neutral-600">
                  Онлайн‑формат не заменяет очный осмотр, но помогает понять, нужен ли визит сейчас и какие обследования могут
                  понадобиться.
                </p>
              </div>

              <aside className="space-y-4">
                <MediaPlaceholder
                  variant="hero"
                  ariaLabel="Иллюстрация онлайн‑консультации"
                  className="h-40"
                />
                <div className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                  <h2 className="mb-2 text-base font-semibold">Кратко</h2>
                  <dl className="space-y-1 text-xs text-neutral-700">
                    <div>
                      <dt className="text-neutral-500">Формат</dt>
                      <dd>Видео- или аудиоконсультация</dd>
                    </div>
                    <div>
                      <dt className="text-neutral-500">Длительность</dt>
                      <dd>30–40 минут</dd>
                    </div>
                    <div>
                      <dt className="text-neutral-500">Кому подходит</dt>
                      <dd>Беременным и пациентам с неотложными вопросами</dd>
                    </div>
                  </dl>
                </div>
              </aside>
            </div>
          </section>

          <section aria-label="Как это работает" className="mb-10 border-t border-neutral-200 pt-10">
            <header className="mb-4">
              <h2 className="mb-1 text-2xl font-semibold">Как это работает</h2>
              <p className="text-sm text-neutral-600">
                Короткий путь от заявки до консультации с врачом Mesedclinic.
              </p>
            </header>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "1. Заявка",
                  text: "Оставляете контактные данные и тему обращения на сайте.",
                },
                {
                  title: "2. Подтверждение",
                  text: "Администратор связывается с вами, уточняет детали и время.",
                },
                {
                  title: "3. Оплата",
                  text: "Оплачиваете консультацию удобным способом.",
                },
                {
                  title: "4. Консультация",
                  text: "Подключаетесь в назначенное время и получаете рекомендации.",
                },
              ].map((step) => (
                <article
                  key={step.title}
                  className="rounded-xl border border-neutral-200 bg-white p-4 text-sm"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <MediaPlaceholder variant="icon" ariaLabel={step.title} />
                    <div className="font-semibold">{step.title}</div>
                  </div>
                  <p className="text-xs text-neutral-600">{step.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-label="По каким вопросам обращаются" className="mb-10 border-t border-neutral-200 pt-10">
            <header className="mb-4">
              <h2 className="mb-1 text-2xl font-semibold">По каким вопросам обращаются</h2>
              <p className="text-sm text-neutral-600">
                Онлайн‑формат особенно удобен беременным и пациентам, которым важно быстро уточнить ситуацию.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                <h3 className="mb-2 text-base font-semibold">Беременность</h3>
                <ul className="list-disc pl-5 text-xs text-neutral-700">
                  <li>Обсудить результаты анализов или УЗИ.</li>
                  <li>Уточнить, нормально ли текущее самочувствие.</li>
                  <li>Получить рекомендации до очного визита.</li>
                </ul>
              </article>
              <article className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                <h3 className="mb-2 text-base font-semibold">Гинекология</h3>
                <ul className="list-disc pl-5 text-xs text-neutral-700">
                  <li>Разбор планового обследования.</li>
                  <li>Подготовка к очной консультации.</li>
                </ul>
              </article>
              <article className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                <h3 className="mb-2 text-base font-semibold">Детское здоровье</h3>
                <ul className="list-disc pl-5 text-xs text-neutral-700">
                  <li>Уточнение, когда нужно показать ребёнка врачу очно.</li>
                  <li>Обсуждение результатов анализов.</li>
                </ul>
              </article>
            </div>
          </section>

          <section
            aria-label="Тарифы и запись"
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div>
                <h2 className="mb-3 text-2xl font-semibold">Тарифы (плейсхолдер)</h2>
                <p className="mb-4 text-sm text-neutral-700">
                  Здесь появятся названия и стоимость тарифов онлайн‑консультаций — например, разовая консультация и пакет
                  из нескольких сессий.
                </p>
                <Link
                  href="/zapis?type=online"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Записаться онлайн
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

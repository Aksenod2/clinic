import Link from "next/link"

import { MediaPlaceholder } from "@/components/MediaPlaceholder"

export default function TaxRefundPage() {
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
                Возврат налога за лечение
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <section aria-label="Возврат налога за лечение" className="mb-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div>
                <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  Возврат налога за лечение
                </h1>
                <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
                  Оплачивая лечение в Mesedclinic, вы можете оформить социальный налоговый вычет и вернуть
                  часть потраченных средств в соответствии с законодательством РФ.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <MediaPlaceholder
                  variant="hero"
                  ariaLabel="Иллюстрация налогового вычета или калькулятора"
                  className="h-40"
                />
              </div>
            </div>
          </section>

          {/* Основное о вычете */}
          <section aria-label="Основная информация о вычете" className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">Что такое налоговый вычет за лечение</h2>
            <p className="mb-3 text-sm text-neutral-700">
              Социальный налоговый вычет позволяет вернуть часть НДФЛ, уплаченного с вашей заработной
              платы, если вы оплачивали медицинские услуги для себя или близких родственников в
              лицензированной клинике.
            </p>
            <p className="text-sm text-neutral-700">
              Размер и условия вычета регулируются Налоговым кодексом РФ. Актуальную информацию можно
              уточнить на сайте ФНС России или у вашего налогового консультанта.
            </p>
          </section>

          {/* Какие документы нужны */}
          <section
            aria-label="Документы для оформления вычета"
            className="mb-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
          >
            <h2 className="mb-3 text-2xl font-semibold">Какие документы обычно нужны</h2>
            <div className="grid gap-4 md:grid-cols-2 text-sm">
              <div className="rounded-xl border border-neutral-200 bg-white p-4">
                <div className="mb-3 flex items-center gap-3">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка документов клиники" />
                  <h3 className="text-base font-semibold">Со стороны клиники</h3>
                </div>
                <ul className="list-disc pl-5 text-neutral-700">
                  <li>Договор на оказание медицинских услуг (при наличии).</li>
                  <li>Кассовые чеки / квитанции об оплате услуг.</li>
                  <li>Справка об оплате медицинских услуг для предоставления в налоговые органы.</li>
                  <li>Копия лицензии клиники (по запросу пациента).</li>
                </ul>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4">
                <div className="mb-3 flex items-center gap-3">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка документов пациента" />
                  <h3 className="text-base font-semibold">Со стороны пациента</h3>
                </div>
                <ul className="list-disc pl-5 text-neutral-700">
                  <li>Паспорт и ИНН.</li>
                  <li>Справка о доходах по форме 2‑НДФЛ.</li>
                  <li>Заявление на предоставление вычета (3‑НДФЛ или через личный кабинет ФНС).</li>
                  <li>Документы, подтверждающие родство (если лечение оплачивалось за родственников).</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Точный перечень документов и форма их предоставления зависят от требований налоговых
              органов и могут меняться. Всегда ориентируйтесь на актуальные рекомендации ФНС.
            </p>
          </section>

          {/* Как оформить */}
          <section
            aria-label="Как оформить налоговый вычет"
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-sm"
          >
            <h2 className="mb-3 text-2xl font-semibold">Как оформить вычет</h2>
            <ol className="mb-3 list-decimal space-y-1 pl-5 text-neutral-700">
              <li>Соберите документы из клиники и справку о доходах.</li>
              <li>Заполните декларацию 3‑НДФЛ или используйте личный кабинет на сайте ФНС.</li>
              <li>Приложите копии подтверждающих документов и подайте декларацию в налоговый орган.</li>
              <li>Дождитесь результата проверки и перечисления средств на указанный счёт.</li>
            </ol>
            <p className="text-neutral-700">
              При необходимости сотрудники клиники помогут подготовить справку об оплате медицинских
              услуг и предоставить копию лицензии.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}


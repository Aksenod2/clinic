import Link from "next/link"

import { MediaPlaceholder } from "@/components/MediaPlaceholder"

export default function OmsDocsPage() {
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
                Документация ОМС
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <section aria-label="Документация ОМС" className="mb-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div>
                <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  Документация ОМС
                </h1>
                <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
                  В этом разделе собрана базовая информация об оказании медицинской помощи по полису
                  обязательного медицинского страхования (ОМС) в сети клиник Mesedclinic.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <MediaPlaceholder
                  variant="hero"
                  ariaLabel="Логотип ОМС или документ"
                  className="h-40"
                />
              </div>
            </div>
          </section>

          {/* Что такое ОМС */}
          <section aria-label="Что такое ОМС" className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">Кратко об ОМС</h2>
            <p className="mb-3 text-sm text-neutral-700">
              ОМС — это государственная система страхования, в рамках которой граждане России и
              некоторые категории иностранных граждан имеют право на получение медицинской помощи за
              счёт средств фонда обязательного медицинского страхования.
            </p>
            <p className="text-sm text-neutral-700">
              Перечень услуг, оказываемых по ОМС, регламентируется федеральным законодательством и
              территориальными программами ОМС. Конкретный список зависит от региона и действующих
              договоров.
            </p>
          </section>

          {/* Услуги и порядок обслуживания */}
          <section
            aria-label="Услуги по ОМС и порядок обслуживания"
            className="mb-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
          >
            <h2 className="mb-3 text-2xl font-semibold">Услуги по ОМС в Mesedclinic</h2>
            <p className="mb-3 text-sm text-neutral-700">
              Конкретный перечень услуг, оказываемых в наших филиалах по полису ОМС, можно уточнить у
              администратора выбранной клиники. Как правило, в него входят базовые консультации
              специалистов и часть диагностических процедур.
            </p>
            <div className="grid gap-4 md:grid-cols-2 text-sm">
              <div className="rounded-xl border border-neutral-200 bg-white p-4">
                <div className="mb-3 flex items-center gap-3">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка документов" />
                  <h3 className="text-base font-semibold">Что взять с собой</h3>
                </div>
                <ul className="list-disc pl-5 text-neutral-700">
                  <li>Паспорт или иной документ, удостоверяющий личность.</li>
                  <li>Действующий полис ОМС.</li>
                  <li>СНИЛС (желательно, если есть на руках).</li>
                </ul>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4">
                <div className="mb-3 flex items-center gap-3">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка телефона" />
                  <h3 className="text-base font-semibold">Как записаться</h3>
                </div>
                <ul className="list-disc pl-5 text-neutral-700">
                  <li>Позвонить в выбранный филиал клиники.</li>
                  <li>Сообщить, что планируете приём по полису ОМС.</li>
                  <li>Уточнить список доступных услуг и свободное время записи.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Дополнительная информация */}
          <section
            aria-label="Дополнительная информация об ОМС"
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-sm"
          >
            <h2 className="mb-3 text-2xl font-semibold">Дополнительная информация</h2>
            <p className="mb-3 text-neutral-700">
              Официальные тексты программ ОМС и перечни услуг публикуются на сайтах территориальных
              фондов обязательного медицинского страхования. При расхождениях информации приоритет
              всегда остаётся за действующим законодательством и договорами.
            </p>
            <p className="text-neutral-700">
              При возникновении вопросов вы можете обратиться к администратору клиники или задать
              вопрос через форму обратной связи на сайте.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}


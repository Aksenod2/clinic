import Link from "next/link"

import { MediaPlaceholder } from "@/components/MediaPlaceholder"

export default function InsurancePage() {
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
                Страховка
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <section aria-label="Медицинская страховка" className="mb-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div>
                <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  Страховка и оплата лечения
                </h1>
                <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
                  В Mesedclinic вы можете получать медицинскую помощь по полисам ДМС и ОМС, а также
                  оплачивать услуги самостоятельно с возможностью вернуть часть средств через налоговый
                  вычет.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <MediaPlaceholder
                  variant="hero"
                  ariaLabel="Изображение полиса или карты страховки"
                  className="h-40"
                />
              </div>
            </div>
          </section>

          {/* Форматы обслуживания */}
          <section
            aria-label="Форматы обслуживания"
            className="mb-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
          >
            <h2 className="mb-3 text-2xl font-semibold">Форматы обслуживания</h2>
            <div className="grid gap-4 md:grid-cols-3 text-sm">
              <article className="rounded-xl border border-neutral-200 bg-white p-4">
                <div className="mb-2 flex items-center gap-2">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка ДМС" />
                  <h3 className="text-base font-semibold">ДМС</h3>
                </div>
                <p className="text-neutral-700">
                  Обслуживание по договорам добровольного медицинского страхования. Уточните условия
                  покрытия в вашей страховой компании и у администратора клиники.
                </p>
              </article>
              <article className="rounded-xl border border-neutral-200 bg-white p-4">
                <div className="mb-2 flex items-center gap-2">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка ОМС" />
                  <h3 className="text-base font-semibold">ОМС</h3>
                </div>
                <p className="text-neutral-700">
                  Часть услуг может оказываться по полису обязательного медицинского страхования.
                  Подробная информация и перечень услуг — в разделе «Документация ОМС».
                </p>
              </article>
              <article className="rounded-xl border border-neutral-200 bg-white p-4">
                <div className="mb-2 flex items-center gap-2">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка платных услуг" />
                  <h3 className="text-base font-semibold">Платные услуги</h3>
                </div>
                <p className="text-neutral-700">
                  Вы можете оплачивать услуги самостоятельно и затем оформить социальный налоговый
                  вычет за лечение.
                </p>
              </article>
            </div>
          </section>

          {/* Как проверить возможность обслуживания по страховке */}
          <section aria-label="Как уточнить условия страховки" className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">Как узнать, покрывает ли полис ваши услуги</h2>
            <div className="grid gap-4 md:grid-cols-2 text-sm">
              <div className="rounded-xl border border-neutral-200 bg-white p-5">
                <div className="mb-2 flex items-center gap-2">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка страховой компании" />
                  <h3 className="text-base font-semibold">1. Свяжитесь со страховой компанией</h3>
                </div>
                <p className="mb-2 text-neutral-700">
                  Уточните, есть ли у вашей страховой компании договор с Mesedclinic и какие услуги
                  по полису доступны.
                </p>
                <p className="text-xs text-neutral-500">
                  Часто страховые компании публикуют перечень партнёрских клиник и программ на своих
                  сайтах.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-5">
                <div className="mb-2 flex items-center gap-2">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка телефона клиники" />
                  <h3 className="text-base font-semibold">2. Позвоните в клинику</h3>
                </div>
                <p className="mb-2 text-neutral-700">
                  Администратор подскажет, принимается ли ваш полис в выбранном филиале и какие
                  документы нужно взять с собой.
                </p>
                <p className="text-xs text-neutral-500">
                  Актуальные телефоны филиалов указаны на главной странице и в разделе «Клиники».
                </p>
              </div>
            </div>
          </section>

          {/* Полезные ссылки */}
          <section
            aria-label="Связанные разделы"
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-sm"
          >
            <h2 className="mb-3 text-2xl font-semibold">Полезные разделы</h2>
            <ul className="space-y-2 text-neutral-700">
              <li>
                <Link
                  href="/oms"
                  className="font-medium text-neutral-900 underline underline-offset-2"
                >
                  Документация ОМС
                </Link>{" "}
                — подробная информация о работе по полису обязательного медицинского страхования.
              </li>
              <li>
                <Link
                  href="/vozvrat-naloga"
                  className="font-medium text-neutral-900 underline underline-offset-2"
                >
                  Возврат налога за лечение
                </Link>{" "}
                — базовая инструкция, как оформить социальный налоговый вычет с оплаты лечения.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}


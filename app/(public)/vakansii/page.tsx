import Link from "next/link"

import { MediaPlaceholder } from "@/components/MediaPlaceholder"

export default function VacanciesPage() {
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
                Вакансии
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <section aria-label="Вакансии Mesedclinic" className="mb-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div>
                <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  Вакансии в Mesedclinic
                </h1>
                <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
                  Mesedclinic — это сеть клиник, где важны и профессионализм, и человеческое отношение к
                  пациентам. Мы открыты к сотрудничеству с врачами и специалистами, разделяющими эти
                  ценности.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <MediaPlaceholder
                  variant="hero"
                  ariaLabel="Фото команды или кабинета"
                  className="h-40"
                />
              </div>
            </div>
          </section>

          {/* Почему работать у нас */}
          <section
            aria-label="Почему работать в Mesedclinic"
            className="mb-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
          >
            <h2 className="mb-3 text-2xl font-semibold">Почему специалисты выбирают нас</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                <div className="mb-2 flex items-center gap-2">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка оборудования" />
                  <h3 className="text-base font-semibold">Современная клиническая база</h3>
                </div>
                <p className="text-neutral-700">
                  Оборудованные кабинеты, продуманные процессы и поддержка администраторов помогают
                  врачу сосредоточиться на медицине.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                <div className="mb-2 flex items-center gap-2">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка загрузки" />
                  <h3 className="text-base font-semibold">Стабильная загрузка</h3>
                </div>
                <p className="text-neutral-700">
                  Работая в сети клиник, вы получаете поток пациентов по ключевым направлениям —
                  беременность, гинекология, педиатрия и другие.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                <div className="mb-2 flex items-center gap-2">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка развития" />
                  <h3 className="text-base font-semibold">Поддержка развития</h3>
                </div>
                <p className="text-neutral-700">
                  Мы приветствуем повышение квалификации и участие в конференциях, а также обмен
                  опытом внутри команды.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4 text-sm">
                <div className="mb-2 flex items-center gap-2">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка стандартов" />
                  <h3 className="text-base font-semibold">Чёткие правила и прозрачность</h3>
                </div>
                <p className="text-neutral-700">
                  Взаимодействие с пациентами и коллегами строится по понятным стандартам сервиса и
                  клиническим протоколам.
                </p>
              </div>
            </div>
          </section>

          {/* Примеры позиций */}
          <section aria-label="Открытые направления" className="mb-10">
            <h2 className="mb-3 text-2xl font-semibold">Кого мы чаще всего ищем</h2>
            <p className="mb-4 text-sm text-neutral-600">
              Список ниже носит ориентировочный характер. Актуальные вакансии можно уточнить у
              администратора клиники или по контактам ниже.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-xl border border-neutral-200 bg-white p-5 text-sm">
                <div className="mb-2 flex items-center gap-2">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка акушера-гинеколога" />
                  <h3 className="text-base font-semibold">Акушер‑гинеколог</h3>
                </div>
                <p className="mb-2 text-neutral-700">
                  Ведение беременности, приём гинекологических пациентов, участие в программах
                  диагностики и профилактики.
                </p>
                <p className="text-xs text-neutral-500">
                  Локации: Бутово, Арбатская (уточняйте наличие позиций).
                </p>
              </article>
              <article className="rounded-xl border border-neutral-200 bg-white p-5 text-sm">
                <div className="mb-2 flex items-center gap-2">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка врача УЗД" />
                  <h3 className="text-base font-semibold">Врач УЗД</h3>
                </div>
                <p className="mb-2 text-neutral-700">
                  Проведение УЗИ по акушерству и гинекологии, участие в комплексах обследований.
                </p>
                <p className="text-xs text-neutral-500">
                  Локации: Балашиха, Бутово (по потребности клиник).
                </p>
              </article>
              <article className="rounded-xl border border-neutral-200 bg-white p-5 text-sm">
                <div className="mb-2 flex items-center gap-2">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка педиатра" />
                  <h3 className="text-base font-semibold">Педиатр</h3>
                </div>
                <p className="mb-2 text-neutral-700">
                  Наблюдение детей, вакцинация, профилактические осмотры и консультирование семей.
                </p>
                <p className="text-xs text-neutral-500">Локации: Бутово, Балашиха.</p>
              </article>
              <article className="rounded-xl border border-neutral-200 bg-white p-5 text-sm">
                <div className="mb-2 flex items-center gap-2">
                  <MediaPlaceholder variant="icon" ariaLabel="Иконка администратора" />
                  <h3 className="text-base font-semibold">Администратор клиники</h3>
                </div>
                <p className="mb-2 text-neutral-700">
                  Встреча пациентов, работа с записью, помощь в организации приёма и сопровождении
                  пациентов.
                </p>
                <p className="text-xs text-neutral-500">Локации: все филиалы сети.</p>
              </article>
            </div>
          </section>

          {/* Как откликнуться */}
          <section
            aria-label="Как откликнуться на вакансию"
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
          >
            <h2 className="mb-3 text-2xl font-semibold">Как откликнуться</h2>
            <p className="mb-3 text-sm text-neutral-700">
              Отправьте краткое резюме и контактные данные на электронную почту клиники с пометкой
              «Вакансия Mesedclinic». Мы бережно относимся к вашим персональным данным и обрабатываем
              их в соответствии с политикой конфиденциальности.
            </p>
            <ul className="mb-4 list-disc pl-5 text-sm text-neutral-700">
              <li>Укажите желаемую должность и удобную локацию (Бутово, Арбатская, Балашиха).</li>
              <li>Кратко опишите опыт работы и ключевые компетенции.</li>
              <li>Приложите при необходимости сертификаты и документы об образовании.</li>
            </ul>
            <p className="text-sm text-neutral-700">
              Электронная почта для откликов:{" "}
              <a
                href="mailto:mesedclinic@yandex.ru"
                className="font-medium text-neutral-900 underline underline-offset-2"
              >
                mesedclinic@yandex.ru
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}


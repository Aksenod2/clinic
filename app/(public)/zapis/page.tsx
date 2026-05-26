"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState, useEffect, Suspense } from "react"

function AppointmentPageContent() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service")
  const directionParam = searchParams.get("direction")
  const clinicParam = searchParams.get("clinic")

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    clinic: clinicParam || "",
    service: serviceParam || "",
    direction: directionParam || "",
    comment: "",
  })

  useEffect(() => {
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }))
    }
    if (directionParam) {
      setFormData((prev) => ({ ...prev, direction: directionParam }))
    }
    if (clinicParam) {
      setFormData((prev) => ({ ...prev, clinic: clinicParam }))
    }
  }, [serviceParam, directionParam, clinicParam])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Отправка данных на API
    console.log("Form data:", formData)
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.")
  }

  const clinics = [
    { slug: "butovo", name: "Бутово", address: "Адрес филиала, метро" },
    { slug: "arbatskaya", name: "Арбатская", address: "Адрес филиала, метро" },
    { slug: "balashiha", name: "Балашиха", address: "Адрес филиала, район" },
  ]

  const services = [
    { slug: "vedenie-beremennosti", title: "Ведение беременности" },
    { slug: "diagnostika-beremennosti", title: "Диагностика беременности" },
    { slug: "skriningi", title: "Скрининги беременности" },
    { slug: "priem-ginekologa", title: "Приём гинеколога" },
    { slug: "priem-pediatra", title: "Приём педиатра" },
  ]

  const directions = [
    { slug: "beremennost", title: "Беременность и роды" },
    { slug: "ginekologiya", title: "Гинекология" },
    { slug: "pediatriya", title: "Педиатрия" },
  ]

  const selectedService = services.find((s) => s.slug === formData.service)
  const selectedDirection = directions.find((d) => d.slug === formData.direction)
  const selectedClinic = clinics.find((c) => c.slug === formData.clinic)

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
                Запись на приём
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <section aria-label="Запись на приём" className="mb-10">
            <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Запись на приём
            </h1>
            <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
              Заполните форму ниже, и наши администраторы свяжутся с вами для подтверждения записи и уточнения удобного времени.
            </p>
          </section>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            {/* Основная форма */}
            <section aria-label="Форма записи">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Личные данные */}
                <fieldset className="rounded-xl border border-neutral-200 bg-white p-6">
                  <legend className="mb-4 px-2 text-lg font-semibold">Контактные данные</legend>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-700">
                        Имя <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Как к вам обращаться"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm transition-colors focus:border-neutral-900 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-sm font-medium text-neutral-700">
                        Телефон <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (999) 123-45-67"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm transition-colors focus:border-neutral-900 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-700">
                        Email (опционально)
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm transition-colors focus:border-neutral-900 focus:outline-none"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Выбор филиала */}
                <fieldset className="rounded-xl border border-neutral-200 bg-white p-6">
                  <legend className="mb-4 px-2 text-lg font-semibold">Выберите филиал</legend>
                  <div className="space-y-2">
                    {clinics.map((clinic) => (
                      <label
                        key={clinic.slug}
                        className="flex cursor-pointer items-start gap-3 rounded-lg border border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-50"
                      >
                        <input
                          type="radio"
                          name="clinic"
                          value={clinic.slug}
                          checked={formData.clinic === clinic.slug}
                          onChange={handleChange}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="font-semibold">{clinic.name}</div>
                          <div className="text-xs text-neutral-600">{clinic.address}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Выбор направления или услуги */}
                <fieldset className="rounded-xl border border-neutral-200 bg-white p-6">
                  <legend className="mb-4 px-2 text-lg font-semibold">Причина обращения</legend>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="direction" className="mb-1 block text-sm font-medium text-neutral-700">
                        Направление (опционально)
                      </label>
                      <select
                        id="direction"
                        name="direction"
                        value={formData.direction}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm transition-colors focus:border-neutral-900 focus:outline-none"
                      >
                        <option value="">Выберите направление</option>
                        {directions.map((direction) => (
                          <option key={direction.slug} value={direction.slug}>
                            {direction.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-1 block text-sm font-medium text-neutral-700">
                        Услуга (опционально)
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm transition-colors focus:border-neutral-900 focus:outline-none"
                      >
                        <option value="">Выберите услугу</option>
                        {services.map((service) => (
                          <option key={service.slug} value={service.slug}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </fieldset>

                {/* Комментарий */}
                <fieldset className="rounded-xl border border-neutral-200 bg-white p-6">
                  <legend className="mb-4 px-2 text-lg font-semibold">Дополнительная информация</legend>
                  <div>
                    <label htmlFor="comment" className="mb-1 block text-sm font-medium text-neutral-700">
                      Комментарий (опционально)
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows={4}
                      value={formData.comment}
                      onChange={handleChange}
                      placeholder="Удобное время, вопросы, пожелания"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm transition-colors focus:border-neutral-900 focus:outline-none"
                    />
                  </div>
                </fieldset>

                {/* Кнопка отправки */}
                <button
                  type="submit"
                  className="w-full rounded-xl border border-neutral-900 bg-neutral-900 px-6 py-4 text-base font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Отправить заявку
                </button>

                <p className="text-xs text-neutral-500">
                  Нажимая «Отправить заявку», вы соглашаетесь с обработкой персональных данных. Имеются противопоказания, необходима консультация специалиста.
                </p>
              </form>
            </section>

            {/* Боковая панель с информацией */}
            <aside aria-label="Дополнительная информация" className="space-y-6">
              {/* Резюме выбранной услуги/направления */}
              {(selectedService || selectedDirection) && (
                <div className="rounded-xl border border-neutral-200 bg-white p-6">
                  <h2 className="mb-4 text-lg font-semibold">Вы выбрали</h2>
                  {selectedService && (
                    <div className="mb-3">
                      <div className="text-xs text-neutral-500">Услуга</div>
                      <div className="text-sm font-semibold">{selectedService.title}</div>
                      <Link
                        href={`/uslugi/${selectedService.slug}`}
                        className="mt-1 text-xs text-neutral-600 underline underline-offset-2"
                      >
                        Подробнее об услуге →
                      </Link>
                    </div>
                  )}
                  {selectedDirection && (
                    <div>
                      <div className="text-xs text-neutral-500">Направление</div>
                      <div className="text-sm font-semibold">{selectedDirection.title}</div>
                      <Link
                        href={`/napravleniya/${selectedDirection.slug}`}
                        className="mt-1 text-xs text-neutral-600 underline underline-offset-2"
                      >
                        Подробнее о направлении →
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Контакты */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h2 className="mb-4 text-lg font-semibold">Контакты</h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-neutral-500">Телефон</div>
                    <a href="tel:+79991234567" className="font-semibold text-neutral-900">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500">Email</div>
                    <a href="mailto:info@mesedclinic.ru" className="font-semibold text-neutral-900">
                      info@mesedclinic.ru
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500">Режим работы</div>
                    <div className="font-semibold text-neutral-900">Пн-Вс: 9:00 - 21:00</div>
                  </div>
                </div>
              </div>

              {/* Мессенджеры */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h2 className="mb-4 text-lg font-semibold">Связаться через</h2>
                <div className="flex flex-wrap gap-2">
                  {["WhatsApp", "Telegram", "Перезвоним"].map((label) => (
                    <a
                      key={label}
                      href="#"
                      className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium shadow-sm transition-colors hover:bg-neutral-50"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Доверие */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h2 className="mb-3 text-lg font-semibold">Почему нам доверяют</h2>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>Опытные врачи с большим стажем</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>Современное оборудование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>Удобное расположение филиалов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-900" />
                    <span>Гибкий график записи</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function AppointmentPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <AppointmentPageContent />
    </Suspense>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import type { MegaMenuConfig } from "@/components/MegaMenu"
import { isValidRoute } from "@/lib/valid-routes"

type MobileNavItem =
  | {
      id: string
      label: string
      type: "link"
      href: string
    }
  | {
      id: string
      label: string
      type: "group"
      config: MegaMenuConfig
    }

const mobileItems: MobileNavItem[] = [
  {
    id: "directions",
    label: "Направления",
    type: "group",
    config: {
      id: "directions",
      sections: [
        {
          title: "Ключевые направления",
          items: [
            { label: "Беременность и роды", href: "/napravleniya/beremennost" },
            { label: "Гинекология", href: "/napravleniya/ginekologiya" },
            { label: "Педиатрия", href: "/napravleniya/pediatriya" },
          ],
        },
      ],
      footerLink: {
        label: "Все направления",
        href: "/napravleniya",
      },
    },
  },
  {
    id: "services",
    label: "Услуги",
    type: "group",
    config: {
      id: "services",
      sections: [
        {
          title: "Популярные услуги",
          items: [
            {
              label: "Ведение беременности",
              href: "/uslugi/vedenie-beremennosti",
            },
            {
              label: "Диагностика беременности",
              href: "/uslugi/diagnostika-beremennosti",
            },
            { label: "Приём гинеколога", href: "/uslugi/priem-ginekologa" },
          ],
        },
      ],
      footerLink: {
        label: "Все услуги и цены",
        href: "/uslugi",
      },
    },
  },
  {
    id: "symptoms",
    label: "Что мы лечим",
    type: "link",
    href: "/chto-my-lechim",
  },
  {
    id: "doctors",
    label: "Врачи",
    type: "link",
    href: "/vrachi",
  },
  {
    id: "clinics",
    label: "Клиники",
    type: "group",
    config: {
      id: "clinics",
      sections: [
        {
          items: [
            { label: "Бутово", href: "/kliniki/butovo" },
            { label: "Арбатская", href: "/kliniki/arbatskaya" },
            { label: "Балашиха", href: "/kliniki/balashiha" },
          ],
        },
      ],
      footerLink: {
        label: "Все клиники",
        href: "/kliniki",
      },
    },
  },
  {
    id: "promotions",
    label: "Акции и статьи",
    type: "group",
    config: {
      id: "promotions",
      sections: [
        {
          items: [
            { label: "Акции", href: "/akcii" },
            { label: "Статьи", href: "/stati" },
          ],
        },
      ],
      footerLink: {
        label: "Все акции и новости",
        href: "/akcii",
      },
    },
  },
  {
    id: "online",
    label: "Онлайн-консультации",
    type: "link",
    href: "/online",
  },
  {
    id: "record",
    label: "Запись на приём",
    type: "link",
    href: "/zapis",
  },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [openGroupId, setOpenGroupId] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setOpen(false)
    setOpenGroupId(null)
  }

  const toggleGroup = (id: string) => {
    setOpenGroupId((current) => (current === id ? null : id))
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.stopPropagation()
      closeMenu()
    }
  }

  const isActive = (href: string) => {
    if (!pathname) return false
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-800 shadow-sm"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        onClick={toggleMenu}
      >
        <span className="mr-2 text-xs">Меню</span>
        <span aria-hidden="true" className="text-base">
          {open ? "✕" : "☰"}
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 h-screen bg-white"
          role="dialog"
          aria-modal="true"
          onKeyDown={handleKeyDown}
        >
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col px-4 pb-6 pt-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Меню
              </span>
              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-sm"
                aria-label="Закрыть меню"
              >
                ✕
              </button>
            </div>

            <nav
              className="flex-1 overflow-y-auto pb-4"
              aria-label="Навигация по сайту (мобильная версия)"
            >
              <ul className="space-y-1">
                {mobileItems.map((item) => {
                  if (item.type === "link") {
                    if (!isValidRoute(item.href)) {
                      return (
                        <li key={item.id}>
                          <span className="flex cursor-not-allowed opacity-60 items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-neutral-400">
                            <span>{item.label}</span>
                          </span>
                        </li>
                      )
                    }
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className={[
                            "flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium",
                            isActive(item.href)
                              ? "bg-neutral-900 text-white"
                              : "text-neutral-800 hover:bg-neutral-50",
                          ].join(" ")}
                        >
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    )
                  }

                  const isOpenGroup = openGroupId === item.id

                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                        aria-expanded={isOpenGroup}
                        onClick={() => toggleGroup(item.id)}
                      >
                        <span>{item.label}</span>
                        <span
                          aria-hidden="true"
                          className="text-xs text-neutral-500"
                        >
                          {isOpenGroup ? "▴" : "▾"}
                        </span>
                      </button>
                      {isOpenGroup && (
                        <div className="mt-1 space-y-2 rounded-xl bg-neutral-50 px-3 py-2 text-sm">
                          {item.config.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="space-y-1">
                              {section.title && (
                                <div className="pt-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                                  {section.title}
                                </div>
                              )}
                              <ul className="space-y-1">
                                {section.items.map((subItem) => (
                                  <li key={subItem.href}>
                                    {isValidRoute(subItem.href) ? (
                                      <Link
                                        href={subItem.href}
                                        onClick={closeMenu}
                                        className={[
                                          "block rounded-lg px-2 py-1 text-[13px]",
                                          isActive(subItem.href)
                                            ? "bg-neutral-900 text-white"
                                            : "text-neutral-800 hover:bg-neutral-100",
                                        ].join(" ")}
                                      >
                                        {subItem.label}
                                      </Link>
                                    ) : (
                                      <span className="block cursor-not-allowed opacity-60 rounded-lg px-2 py-1 text-[13px] text-neutral-400">
                                        {subItem.label}
                                      </span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {item.config.footerLink && (
                            <div className="pt-1">
                              {isValidRoute(item.config.footerLink.href) ? (
                                <Link
                                  href={item.config.footerLink.href}
                                  onClick={closeMenu}
                                  className="block text-[12px] font-medium text-neutral-700 underline underline-offset-4"
                                >
                                  {item.config.footerLink.label}
                                </Link>
                              ) : (
                                <span className="block cursor-not-allowed opacity-60 text-[12px] font-medium text-neutral-400">
                                  {item.config.footerLink.label}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="mt-4 space-y-3 border-t border-neutral-100 pt-4 text-xs text-neutral-500">
              <div>
                Телефон для записи:{" "}
                <a
                  href="tel:+79991234567"
                  className="font-semibold text-neutral-900"
                >
                  +7 (999) 123-45-67
                </a>
              </div>
              <div>Пн-Вс: 9:00–21:00</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


import Link from "next/link"

import { isValidRoute } from "@/lib/valid-routes"

type MegaMenuItem = {
  label: string
  href: string
  description?: string
}

type MegaMenuSection = {
  title?: string
  items: MegaMenuItem[]
}

export type MegaMenuConfig = {
  id: string
  sections: MegaMenuSection[]
  footerLink?: {
    label: string
    href: string
  }
}

interface MegaMenuProps {
  config: MegaMenuConfig
  isOpen: boolean
  onClose: () => void
}

export function MegaMenu({ config, isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      role="menu"
      aria-label="Расширенное меню раздела"
      className="absolute left-1/2 top-full z-30 mt-3 w-[min(960px,100vw-2.5rem)] -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white/95 p-6 text-sm shadow-lg backdrop-blur-md"
      onMouseLeave={onClose}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {config.sections.map((section, index) => (
          <div key={index} className="space-y-3">
            {section.title && (
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                {section.title}
              </div>
            )}
            <ul className="space-y-2">
              {section.items.map((item) => {
                const inner = (
                  <>
                    <div className="text-sm font-medium">{item.label}</div>
                    {item.description && (
                      <div className="mt-1 text-xs text-neutral-500">
                        {item.description}
                      </div>
                    )}
                  </>
                )
                return (
                  <li key={item.href}>
                    {isValidRoute(item.href) ? (
                      <Link
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-neutral-900 hover:bg-neutral-50"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <span className="block cursor-default rounded-lg px-3 py-2 text-neutral-400">
                        {inner}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      {config.footerLink && (
        <div className="mt-5 border-t border-neutral-100 pt-4 text-right">
          {isValidRoute(config.footerLink.href) ? (
            <Link
              href={config.footerLink.href}
              className="text-xs font-medium text-neutral-700 underline underline-offset-4 hover:text-neutral-900"
            >
              {config.footerLink.label}
            </Link>
          ) : (
            <span className="cursor-default text-xs font-medium text-neutral-400">
              {config.footerLink.label}
            </span>
          )}
        </div>
      )}
    </div>
  )
}


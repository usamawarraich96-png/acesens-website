import { Link } from 'react-router-dom'
import { company, navLinks, services } from '../data/site'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-ink-900/50">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              <span className="text-lg font-bold text-white">{company.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-slate-400">{company.tagline}</p>
            <div className="mt-6 flex gap-3">
              {company.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-xs font-semibold text-slate-300 transition-colors hover:border-brand-400 hover:text-white"
                  aria-label={s.label}
                >
                  {s.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 4).map((s) => (
                <li key={s.title}>
                  <Link
                    to="/services"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Icon name="mail" className="mt-0.5 h-4 w-4 text-accent-400" />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="phone" className="mt-0.5 h-4 w-4 text-accent-400" />
                <span>{company.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 text-accent-400" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-300">
              Terms
            </a>
            <a href="#" className="hover:text-slate-300">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Link, NavLink, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import styles from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className={`${styles.layout} ${isHome ? styles.layoutHome : ''}`}>
      {!isHome && (
        <header className={styles.header}>
          <Link to="/" className={styles.logo}>
            Road to Bronze
          </Link>
          <nav className={styles.nav}>
            <NavLink
              to="/tournament"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Recorrido del Torneo
            </NavLink>
            <NavLink
              to="/players"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Jugadoras
            </NavLink>
          </nav>
        </header>
      )}
      <main className={styles.main}>{children}</main>
      {!isHome && (
        <footer className={styles.footer}>
          <p>España — Copa del Mundo FIBA 2026</p>
        </footer>
      )}
    </div>
  )
}

export default Layout

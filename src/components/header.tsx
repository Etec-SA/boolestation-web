import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import logo from '../../public/DarkLogo.webp'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contato', page: '/contact' },
]

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} BooleStation</title>
        <meta
          name="title"
          content="Boolestation: a plataforma para o aprendizado de lógica."
        />
        <meta
          name="description"
          content="Para pensar melhor, domine as leis do pensamento"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://github.com/Etec-SA/boolestation-web"
        />
        <meta
          property="og:title"
          content="Boolestation: a plataforma para o aprendizado de lógica."
        />
        <meta
          property="og:description"
          content="Para pensar melhor, domine as leis do pensamento"
        />
        <meta
          property="og:image"
          content="https://github.com/Etec-SA/boolestation-web"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://github.com/Etec-SA/boolestation-web"
        />
        <meta
          property="twitter:title"
          content="Boolestation: a plataforma para o aprendizado de lógica."
        />
        <meta
          property="twitter:description"
          content="Para pensar melhor, domine as leis do pensamento"
        />
        <meta
          property="twitter:image"
          content="https://github.com/Etec-SA/boolestation-web"
        />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header

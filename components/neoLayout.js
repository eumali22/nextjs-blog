import styles from './neoLayout.module.css';
import utilStyles from '../styles/utils.module.css';
import SocialBar from './socialBar';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const name = process.env.NEXT_PUBLIC_MY_NAME || 'Configure env vars';
export const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE || 'Configure env vars';

export default function NeoLayout({ children, activeItem, home }) {
  const menuItems = {
    '': 'Blog',
    'projects': 'Projects',
    'about': 'About',
    'contact': 'Contact'
  };

  return (<>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content={process.env.NEXT_PUBLIC_SITE_TITLE}
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>

    <header>
      <nav>
        <ul className={styles.mainNav}>
          {Object.keys(menuItems).map(key => {
            return (<li key={key} className={`${styles.mainNavItems}`}>
              <Link href={`/${key}`}>
                <a className={`${styles.navItemAnchor} ${key === activeItem ? styles.highlight : ''}`}>
                  {menuItems[key]}
                </a>
              </Link>
            </li>);
          })}
        </ul>
      </nav>

      <div className={styles.banner}>
        <Image
          priority
          src="/images/blog_profile.png"
          className={`${utilStyles.borderCircle} ${styles.bannerElement}`}
          height={144}
          width={144}
          alt={name}
        />
        <div className={styles.bannerElement}>
          <h1 className={utilStyles.heading2Xl}>
            {name}
            <br />
            <div className={styles.subHeaderContainer}>
              <span className={`${styles.subHeaderElement} ${utilStyles.lightText}`}>eumali22</span>
              <SocialBar />
            </div>
          </h1>
        </div>
        
      </div>

    </header>

    <main className={styles.main}>
      {children}
    </main>

    <footer className={styles.footer}>
      {/* <SocialBar /> */}
      <small>{`Ⓒ ${name} 2022`}</small>
    </footer>
  </>);

}
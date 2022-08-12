import Head from 'next/head';
import NeoLayout, { siteTitle } from '../components/neoLayout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    },
    revalidate: 3 * 24 * 60 * 60 // revalidate every 3 days
  };
}

export default function Home({ allPostsData }) {
  return (
    <NeoLayout home activeItem="">
      <Head>
        <title>Erick Kristofer's Blog (eumali22)</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{process.env.NEXT_PUBLIC_SITE_DESC}</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </NeoLayout>
  );
}
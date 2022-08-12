import Link from 'next/link';
import styles from './breadcrumbs.module.css';

export default function Breadcrumbs({ ancestors }) {
  return (<nav className={styles.container}>
    {ancestors.map((tuple, idx) => {
      return (<>
        {!tuple[1] && <span>{tuple[0]}</span>}
        {tuple[1] && <Link href={tuple[1]}>
          <a>{tuple[0]}</a>
        </Link>}
        {(idx < ancestors.length - 1) && <span className="material-symbols-outlined">navigate_next</span>}
      </>);
    })}
  </nav>);

}
import Image from 'next/image';
import styles from './socialBar.module.css';

export default function SocialBar() {
  return (
    <div className={styles.socBar}>
      <a className={styles.socIcon} href="https://github.com/eumali22">
        <Image
          src="/images/gh_32.png"
          height={32}
          width={32}
          alt="Github Repository"
        />
      </a>
      <a className={styles.socIcon} href="https://www.linkedin.com/in/erick-kristofer-umali-8287a7246/">
        <Image
          src="/images/li_32.png"
          className={styles.socIcon}
          height={32}
          width={32}
          alt="LinkedIn Profile"
        />
      </a>
    </div>
  );
}
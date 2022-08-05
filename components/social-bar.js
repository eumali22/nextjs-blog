import Image from 'next/image';
import styles from './social-bar.module.css';

export default function SocialBar() {
  return (
    <div className={styles.socBar}>
      <a className={styles.socIcon} href="https://github.com/eumali22">
        <Image
          src="/images/GitHub-Mark-32px.png"
          height={32}
          width={32}
          alt="Github Repository"
        />
      </a>
      <a className={styles.socIcon} href="https://www.linkedin.com/in/erick-kristofer-umali-8287a7246/">
        <Image
          src="/images/LI-In-Bug.png"
          className={styles.socIcon}
          height={32}
          width={32}
          alt="LinkedIn Profile"
        />
      </a>
    </div>
  );
}
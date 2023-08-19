import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Link href="/" className={styles.Logo}>
        AnimixPlay
      </Link>
      <div className={styles.Copyright}>All Copyright Reserved</div>
    </div>
  );
};

export default Footer;

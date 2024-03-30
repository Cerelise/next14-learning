import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>dev</div>
      <div className={styles.text}>
        Cerelise Creative thoughts agency All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

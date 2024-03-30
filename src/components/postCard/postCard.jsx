import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

const postCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/post.jpg" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          voluptatum autem molestias sed ullam sapiente nihil soluta aut
          voluptate magni veritatis adipisci unde cum inventore veniam, aliquam
          ex recusandae dolorem.
        </p>
        <Link className={styles.link} href={`/blog/${post.id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default postCard;

import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

// const getData = async (slug) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`,
//     {
//       next: { revalidate: 3600 },
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  // const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <PostUser userId={post?.userId} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;

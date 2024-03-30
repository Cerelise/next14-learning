import Image from "next/image";
import styles from "./contact.module.css";
import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
//   ssr: false,
// });
export const metadata = {
  title: "Contact page",
  description: "Contact desc",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>

      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR /> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

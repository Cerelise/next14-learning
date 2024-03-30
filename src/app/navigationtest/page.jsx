"use client";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  // const s = searchParams.set("q");
  const q = searchParams.get("q");

  console.log(q);

  const handleClick = () => {
    console.log("clicked");
    console.log(pathName);
    // replace refresh back forward
    // router.push("/");
    router.refresh("/");
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        click here
      </Link>

      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;

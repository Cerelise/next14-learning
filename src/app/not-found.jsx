"use client";

import Link from "next/link";

const notFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry,the page are looking for does not exist</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default notFound;

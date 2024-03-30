"use client";

import { useEffect, useState } from "react";

const hydrationTest = () => {
  // console.log("它正在工作！");

  // 常见问题：client模式下定义的数值变量，使用server渲染，两边的值各不相同
  // a 的值与服务器渲染的HTML不一致
  // 解决方案：使用react的useEffect,并保证该组件在client模式下运行
  // 在服务端中a不会被渲染，当isClient为true并渲染在页面上时，a才渲染
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  const a = Math.random();

  console.log(`client:${a}`);

  return (
    <div>
      {a}
      {/* {isClient && a}   */}
    </div>
  );
};

export default hydrationTest;

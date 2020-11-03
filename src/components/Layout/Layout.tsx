import Head from "next/head";
import { ReactNode } from "react";

const Layout: React.FC<ReactNode> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* 共通のメタデータなどはここに記載 */}
      </Head>

      <main>{children}</main>
    </>
  );
};

export default Layout;

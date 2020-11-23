import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout: React.FC<ReactNode> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* 共通のメタデータなどはここに記載 */}
      </Head>

      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;

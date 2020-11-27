import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <>
      <div>ボードゲーム!</div>
      <Link href="/OseroPage">
        <a>Osero</a>
      </Link>
    </>
  );
};

export default Home;

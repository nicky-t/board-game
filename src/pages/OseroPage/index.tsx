import Link from "next/link";
import Layout from "../../components/Layout/Layout";

const OseroPage = () => {
  return (
    <Layout>
      <h1>Osero</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  );
};

export default OseroPage;

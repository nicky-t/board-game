import Link from "next/link";
import Osero from "../../components/Games/Osero/Osero";

const OseroPage = () => {
  return (
    <>
      <h1>Osero</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Osero />
    </>
  );
};

export default OseroPage;

import { useEffect } from "react";
import { Navbar, Content } from "../components";

import { useGlobalContext } from "../context/context";

function Home() {
  const { getInvoices } = useGlobalContext();

  // useEffect(() => {
  //   getInvoices();
  // }, []);

  return (
    <main className="flex flex-col desktop:flex-row">
      <Navbar />
      <Content />
    </main>
  );
}

export default Home;

import { Toggle, Navbar, Header, Cards } from '../components';

import useInvoices from '../hooks/useInvoices';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Cards />
    </>
  );
}

export default Home;

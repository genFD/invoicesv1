import { Navbar, Header, Cards, Logo, Toggle } from '../components';

function Home() {
  return (
    <>
      <main className="hidden desktop:flex">
        <div className="h-full w-[103px] flex flex-col justify-between fixed z-10 bg-373B53">
          <Navbar />
        </div>
        <div className="w-[100%]">
          <Header />
          <Cards />
        </div>
      </main>

      <main className="desktop:hidden">
        <Navbar />
        <Header />
        <Cards />
      </main>
    </>
  );
}

export default Home;

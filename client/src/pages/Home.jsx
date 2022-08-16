import { Navbar, Content } from "../components";

function Home() {
  return (
    <main className="flex flex-col desktop:flex-row">
      <Navbar />
      <Content />
    </main>
  );
}

export default Home;

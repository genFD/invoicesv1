import useInvoices from "../hooks/useInvoices";
function Home() {
  const planets = useInvoices();
  return <div>Home</div>;
}

export default Home;

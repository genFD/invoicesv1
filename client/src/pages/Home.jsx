import useInvoices from '../hooks/useInvoices';

function Home() {
  const invoices = useInvoices();
  return (
    <div>
      {invoices.map((invoice) => (
        <p key={invoice.id}>{invoice.content.clientName}</p>
      ))}
    </div>
  );
}

export default Home;

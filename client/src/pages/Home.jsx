import useInvoices from '../hooks/useInvoices';

function Home() {
  const invoices = useInvoices();
  return (
    <div>
      {invoices.map((invoice) => (
        <p key={invoice.id}>{invoice.content.clientName}</p>
      ))}
      test heroku
    </div>
  );
}

export default Home;

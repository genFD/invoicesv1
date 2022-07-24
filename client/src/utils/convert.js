export const convertTime = (time) => {
  return new Date(time).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
};
export const convertPrice = (price) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(price);
  // expected output: "123.456,79 €";
};

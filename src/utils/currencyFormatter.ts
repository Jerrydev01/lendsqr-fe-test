// currency formatter
// export const formatMoney = (amount = 0) => {
//   const options = {
//     style: "currency",
//     currency: "NGN",
//     minimumFractionDigits: 2,
//   };
//   const formatter = Intl.NumberFormat("en-NG", options);

//   return formatter.format(amount);
// };

// currency formatter in typescript
export const formatMoney = (amount = 0): string => {
  const options = {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  };
  const formatter = new Intl.NumberFormat("en-NG", options);

  return formatter.format(amount);
};

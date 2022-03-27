export const convDate = (date: string) => {
  const tempDate = new Date(date).toLocaleString();
  const splitDate = tempDate.split(",");
  const reArrangeDate = splitDate[0].split("/");
  const result = {
    date: `${reArrangeDate[2]}/${reArrangeDate[0]}/${reArrangeDate[1]}`,
    time: splitDate[1],
  };
  return result;
};

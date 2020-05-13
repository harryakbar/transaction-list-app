export function convertDate(timestamp: string) {
  const date = new Date(timestamp);
  const day = date.getDate() + 1;
  const month = date.toLocaleString('id-ID', { month: 'long' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export function upperCase(str: string) {
  return str.toLocaleUpperCase();
}

export function currency(num: number) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  })
  return formatter.format(num).replace(/\s/g, '');
}
export function convertDate(timestamp: string) {
  const date = new Date(timestamp.replace(/-/g, '/'));
  const day = date.getDate();
  const month = date.toLocaleString('id-ID', { month: 'long' });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

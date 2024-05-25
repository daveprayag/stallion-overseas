export default function getLocalizedDate(date: string) {
  const originalDate = new Date(date);
  return originalDate.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
}

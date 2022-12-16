export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full mx-auto">{children}</section>;
}

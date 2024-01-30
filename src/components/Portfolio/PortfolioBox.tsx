export default function PortfolioBox({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <div
      className={`absolute left-[55%] top-40 -translate-x-1/2 transform ${className}`}
    >
      {children}
    </div>
  );
}

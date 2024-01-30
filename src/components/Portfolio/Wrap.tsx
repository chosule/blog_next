
type WrapProps = Partial<React.ComponentProps<"div">>;

export default function Wrap({
  className,
  children,
  id,
  ref
}: WrapProps) {
  return (
    <section id={id} ref={ref} className={`relative h-screen py-[100px]`}>
      <div
        className={`absolute left-[55%] top-40 -translate-x-1/2 transform flex gap-10 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

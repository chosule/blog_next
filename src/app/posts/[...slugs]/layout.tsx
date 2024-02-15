export default function Postlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="fixed right-[70px] h-[150px] w-[150px] rounded-lg bg-neutral-350">
        포스트레이아웃
      </h3>
      {children}
    </div>
  );
}

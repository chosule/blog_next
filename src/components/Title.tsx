
export default function Title({ className ,...props }: React.ComponentProps<'h1'> ) {
  return (
    <>
      <h1 
          {...props}
          className={`text-[24px] drop-shadow-lg font-semibold md:text-[26px] text-primary namum${className}`}
      />
    </>
  );
}

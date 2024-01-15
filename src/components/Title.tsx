
export default function Title({ className ,...props }: React.ComponentProps<'h1'> ) {
  return (
    <>
      <h1 
          {...props}
          className={`text-lg pre ${className} drop-shadow-lg font-semibold md:text-2xl text-primary`}
      />
    </>
  );
}

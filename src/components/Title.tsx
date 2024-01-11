
export default function Title({ className ,...props }: React.ComponentProps<'h1'> ) {
  return (
    <>
      <h1 
          {...props}
          className={`text-lg suit ${className}drop-shadow-lg font-semibold md:text-3xl text-black`}
      />
    </>
  );
}

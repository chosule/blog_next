

type Props = {
  subTitle?: string;
};

export default function Title({ className, subTitle ,...props }: React.ComponentProps<'h1'> & Props ) {
  return (
    <>
      <h1 
          {...props}
          className={`text-lg suit ${className}drop-shadow-lg font-semibold md:text-3xl`}
      />
      {subTitle && <h3 className="text-lg sm:text-xl suit whitespace-pre-wrap font-semibold	">{subTitle}</h3>}
    </>
  );
}

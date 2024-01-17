

export default function SubTitle({className,...props}:React.ComponentProps<'h3'>) {
     return(
        <h3
        className={`text-base drop-shadow-md font-medium md:text-lg whitespace-pre-wrap nanum ${className}`}
        {...props}
        />
     )
}
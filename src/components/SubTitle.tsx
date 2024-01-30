

export default function SubTitle({className,...props}:React.ComponentProps<'h3'>) {
     return(
        <h3
        className={`text-base drop-shadow-md font-medium md:text-[18px] whitespace-pre-wrap text-primary ${className}`}
        {...props}
        />
     )
}
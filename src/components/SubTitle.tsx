

export default function SubTitle({className,...props}:React.ComponentProps<'h3'>) {
     return(
        <h3
        className={`text-lg drop-shadow-md font-medium sm:text-2xl whitespace-pre-wrap pre ${className}`}
        {...props}
        />
     )
}


export default function SubTitle({className,...props}:React.ComponentProps<'h3'>) {
     return(
        <h3
        className={`text-lg sm:text-2xl whitespace-pre-wrap ${className}`}
        {...props}
        />
     )
}
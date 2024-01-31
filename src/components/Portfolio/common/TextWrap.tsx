export default function TextWrap({children,className}:React.ComponentProps<'div'>) {
    return(
        <div className={`flex flex-col gap-5 ${className}`}>
            {children}
        </div>
    )
}
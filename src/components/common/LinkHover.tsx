import Link from "next/link";

export default function LinkHover({
    ref:_,
    className,
    href,
    children,
    ...props
}:React.ComponentProps<'a'>) {
     
     return(
        <Link 
            {...props}
            href={href ?? '/'} 
            className={`${className}`}>
            {children}
        </Link>
     )
}
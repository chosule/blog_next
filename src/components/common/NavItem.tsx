import LinkHover from "./LinkHover";

export default function NavItem({
    href,
    children,
    className,
    ...props
}:React.ComponentProps<'a'>) {
     
     return(
        <LinkHover 
            {...props}
            href={href}
            className={`${className}`}
        >
            {children}
        </LinkHover>
     )
}
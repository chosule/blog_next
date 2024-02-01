

export default function Text({children,className}:{children?:React.ReactNode,className?:string}) {
     
     return(
        <p className={`text-primary text-md whitespace-pre-wrap ${className}`}>{children}</p>
     )
}
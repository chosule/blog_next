

export default function Text({children,className}:{children?:React.ReactNode,className?:string}) {
     
     return(
        <p className={`text-neutral-145 pre whitespace-pre-wrap ${className}`}>{children}</p>
     )
}


export default function Text({children,className}:{children?:React.ReactNode,className?:string}) {
     
     return(
        <p className={`text-neutral-145 whitespace-pre-wrap ${className}`}>{children}</p>
     )
}


export default function Text({children,className}:{children?:React.ReactNode,className?:string}) {
     
     return(
        <p className={`text-gray-500 pre whitespace-pre-wrap ${className}`}>{children}</p>
     )
}
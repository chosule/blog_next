
type Props = {
    text:string;
    color:string;
    bgColor:string;
}
export default function StackBox({text,color,bgColor}:Props) {
     return(
        <div className={`${color} ${bgColor} py-1 rounded-lg text-center text-xs px-2 md:text-sm`}>{text}</div>
     )
}
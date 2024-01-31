

export type StackBoxProps  = {
    text:string;
    color:string;
    bgColor:string;
}

type StackWrapProps<T extends StackBoxProps> = {
    stackItems: T[];
}

export default function StackWrap<T extends StackBoxProps>({stackItems}:StackWrapProps<T>) {
    
     return(
        <div className="flex gap-3 flex-wrap">
            {stackItems.map((item,index) =>(
                <div key={index} className={`${item.color} ${item.bgColor} py-1 rounded-lg text-center text-xs px-2 md:text-sm`}>{item.text}</div>
            ))}
        </div>
     )
}
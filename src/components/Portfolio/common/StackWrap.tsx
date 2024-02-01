

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
                <div key={index}>
                    <p className={`${item.color} ${item.bgColor} py-1 rounded-lg text-center text-[12px] px-2 font-medium md:text-sm`}>{item.text}</p>
                </div>
            ))}
        </div>
     )
}


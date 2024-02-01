import Image, { StaticImageData } from "next/image";

type Props = {
     imageTop: StaticImageData; 
     imageBottom: StaticImageData; 
     className?:string;
   };

export default function ImageWrap({imageTop,imageBottom,className}:Props) {
     
     return(
          <div className={`flex flex-col gap-8 ${className}`}>
            <Image className="drop-shadow-xl w-4/5 self-start" src={imageTop} alt="이미지1" width={450} height={350}/> 
            <Image className="drop-shadow-xl w-4/5 self-end" src={imageBottom} alt="이미지2" width={450} height={350}/> 
          </div>
     )
}
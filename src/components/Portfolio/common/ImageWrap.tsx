import Image, { StaticImageData } from "next/image";

type Props = {
     imageTop: StaticImageData; 
     imageBottom: StaticImageData; 
   };

export default function ImageWrap({imageTop,imageBottom}:Props) {
     
     return(
          <div className="flex flex-col gap-8">
            <Image className="drop-shadow-lg w-4/5 self-start" src={imageTop} alt="이미지1" width={450} height={350}/> 
            <Image className="drop-shadow-lg w-4/5 self-end" src={imageBottom} alt="이미지2" width={450} height={350}/> 
          </div>
     )
}
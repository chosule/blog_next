import Image from "next/image";
import { Props } from "./Categories";
import forder_img from "../../../public/folder_img.png";

export default function SeriesCategory({
  categories,
  onClick,
  selected,
}: Props) {
  return (
    <ul className="flex flex-wrap gap-6">
      {categories.map((category, index) => (
        <li
          className="flex cursor-pointer flex-col items-center gap-2"
          key={index}
          onClick={() => onClick(category)}
        >
          <Image
            className="w-[45px] transform transition-transform hover:-translate-y-1 md:w-[53px]"
            src={forder_img}
            alt="폴더이미지"
            width={65}
            height={65}
          />
          <h3
            className={` text-xs text-neutral-145 ${
              selected === category && "font-black text-neutral-890"
            }`}
          >
            {category}
          </h3>
        </li>
      ))}
    </ul>
  );
}

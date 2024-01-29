import Image from "next/image";
import { Props } from "./Categories";
import forder_img from "../../../public/folder_img.png";

export default function SeriesCategory({
  categories,
  onClick,
  selected,
}: Props) {
  return (
    <ul className="flex gap-6">
      {categories.map((category, index) => (
        <li
          className="flex flex-col items-center gap-2"
          key={index}
          onClick={() => onClick(category)}
        >
          <Image
            className="transform transition-transform hover:-translate-y-1"
            src={forder_img}
            alt="폴더이미지"
            width={65}
            height={65}
          />
          <h3 className={`${selected === category && "bg-neutral-80"} text-sm`}>
            {category}
          </h3>
        </li>
      ))}
    </ul>
  );
}

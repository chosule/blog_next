import Image from "next/image";
import forder_img from "../../../public/folder_img.png";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category:string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <ul className="gap-7 flex">
      {categories.map((category, index) => (
        <li
          key={index}
          onClick={() => onClick(category)}
          className={`rounded-xl flex items-center justify-center flex-col cursor-pointer`}
        >
          <Image
            className="transform transition-transform hover:-translate-y-1"
            src={forder_img}
            alt="폴더이미지"
            width={80}
            height={80}
          />
          <h3 className={`text-md pre leading-2 py-2 px-2 ${category === selected && 'decoration-wavy	decoration-neutral-550 underline'}`}>{category}</h3>
        </li>
      ))}
    </ul>
  );
}

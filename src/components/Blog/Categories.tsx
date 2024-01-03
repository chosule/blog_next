import Image from "next/image";
import forder_img from "../../../public/folder_img.png";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <ul className="grid grid-cols-2 gap-3">
      {categories.map((category, index) => (
        <li
          key={index}
          onClick={() => onClick(category)}
          className={`border rounded-xl flex items-center justify-center  cursor-pointer ${category === selected && 'bg-primary border-primary'}`}
        >
          {/* <Image
            className="transform transition-transform hover:-translate-y-1"
            src={forder_img}
            alt="폴더이미지"
            width={130}
            height={130}
          /> */}
          <h3 className={`text-lg leading-2 py-2 px-2 ${category === selected && 'text-white'}`}>{category}</h3>
        </li>
      ))}
    </ul>
  );
}

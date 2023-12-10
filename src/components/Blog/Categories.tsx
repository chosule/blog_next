import Image from "next/image";
import forder_img from "../../../public/folder_img.png";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <ul className="grid grid-cols-6">
      {categories.map((category, index) => (
        <li
          key={index}
          onClick={() => onClick(category)}
          className="my-20 flex flex-col items-center gap-4"
        >
          {/* <Link href={`/blog/${category}`} key={index}> */}
          <Image
            className="transform transition-transform hover:-translate-y-1"
            src={forder_img}
            alt="폴더이미지"
            width={130}
            height={130}
          />
          <h3 className="text-lg font-bold">{category}</h3>
          {/* </Link> */}
        </li>
      ))}
    </ul>
  );
}

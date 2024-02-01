export type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <ul className="flex flex-wrap gap-2">
      {categories.map((category, index) => (
        <li
          key={index}
          onClick={() => onClick(category)}
          className={`flex cursor-pointer items-center justify-center rounded-xl`}
        >
          <h3
            className={`leading-2 rounded-lg bg-neutral-80 p-2 text-xs text-neutral-850 ${
              category === selected && "bg-[#9eddff]"
            }`}
          >
            {category}
          </h3>
        </li>
      ))}
    </ul>
  );
}

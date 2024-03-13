export type StackBox = {
  id: number;
  text: string;
  color: string;
  bgColor: string;
};
const stackItems = [
  {
    id: 1,
    text: "React",
    color: "text-neutral-900",
    bgColor: "bg-[#f6e613]",
  },
  {
    id: 2,
    text: "Javascript",
    color: "text-neutral-900",
    bgColor: "bg-[#f6e613]",
  },
  {
    id: 3,
    text: "Typescript",
    color: "text-neutral-900",
    bgColor: "bg-[#f6e613]",
  },
  {
    id: 4,
    text: "Next",
    color: "text-neutral-900",
    bgColor: "bg-[#f6e613]",
  },
  { id: 5, text: "Sass", color: "text-neutral-50", bgColor: "bg-[#CC6699]" },
  { id: 6, text: "Html", color: "text-neutral-50", bgColor: "bg-[#3381ff]" },
  {
    id: 7,
    text: "Css",
    color: "text-neutral-50",
    bgColor: "bg-[#CC6699]",
  },
];
export default function StackWrap() {
  return (
    <div className="flex flex-wrap gap-3">
      {stackItems.map((item: StackBox) => (
        <div key={item.id}>
          <p
            className={`${item.color} ${item.bgColor} rounded-lg px-2 py-1 text-center text-[19px] font-medium drop-shadow-md md:text-[12px]`}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

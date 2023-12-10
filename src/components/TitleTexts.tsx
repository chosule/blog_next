type Props = {
  title: string;
  subTitle: string;
};

export default function TitleTexts({ title, subTitle }: Props) {
  return (
    <section className="mt-16 flex flex-col gap-3">
      <h1 className="text-4xl font-black italic">{title}</h1>
      <p className="text-gray-500">
        클릭시 해당 시리즈에 대한 포스트를 보실수 있습니다.
        {subTitle}
      </p>
    </section>
  );
}

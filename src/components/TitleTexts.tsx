type Props = {
  title: string;
  subTitle: string;
};

export default function TitleTexts({ title, subTitle }: Props) {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-4xl suit">{title}</h1>
      <p className="text-gray-500 pre whitespace-pre-wrap">
        {subTitle}
      </p>
    </section>
  );
}

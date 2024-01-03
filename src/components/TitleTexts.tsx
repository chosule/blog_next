type Props = {
  title: string;
  subTitle: string;
};

export default function TitleTexts({ title, subTitle }: Props) {
  return (
    <section className="mt-8 flex flex-col gap-3">
      <h1 className="text-4xl font-black pre">{title}</h1>
      <p className="text-gray-500">
        {subTitle}
      </p>
    </section>
  );
}

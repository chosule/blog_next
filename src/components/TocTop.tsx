import { TableOfContents } from "@/lips/types";
import uuid from "react-uuid";
import Text from "./Text";

type Props = { tableOfContents: TableOfContents; titleList: string };

export default function TocTop({ tableOfContents, titleList }: Props) {
  return (
    <div className="border-b border-t py-6">
      <div className="flex flex-col gap-3">
        <Text className="text-xs dark:text-neutral-50">
          🏷️ table of Content
        </Text>
      </div>
      <ul className="text-sm">
        {tableOfContents?.map((section) => (
          <li
            className="list-none p-0 underline underline-offset-4"
            key={uuid()}
          >
            <a
              className="text-primary text-neutral-145 dark:text-neutral-50"
              href={`#${section.slug}`}
            >
              {section.text}
            </a>
            <ul>
              {section.subSections.map((subSection) => (
                <li className="list-none" key={uuid()}>
                  <a
                    className="text-primary text-neutral-145 dark:text-neutral-50"
                    href={`#${subSection.slug}`}
                  >
                    {subSection.text}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

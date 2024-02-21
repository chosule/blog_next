import { TableOfContents } from "./types";

export default function parseToc(source: string) {
  return source
    .split("\n")
    .filter((line) => line.match(/(^#{1,3})\s/))
    .reduce<TableOfContents>((ac, heading) => {
      const nac = [...ac];

      const removeMdx = heading
        .replace(/^##*\s/, "")
        .replace(/[\*,\~]{2,}/g, "")
        .replace(/(?<=\])\((.*?)\)/g, "")
        .replace(/(?<!\S)((http)(s?):\/\/|www\.).+?(?=\s)/g, "");

      const section = {
        slug: removeMdx
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣 -]/g, "")
          .replace(/\s/g, "-"),
        text: removeMdx,
      };

      const isSubTitle = heading.split("#").length - 1 === 3;

      if (ac.length && isSubTitle) {
        nac.at(-1)?.subSections.push(section);
      } else {
        nac.push({ ...section, subSections: [] });
      }
      return nac;
    }, []);
}

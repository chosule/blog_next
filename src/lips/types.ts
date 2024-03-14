/**
 * 목차 type
 */

export type TableOfContents = Section[];

export type SubSection = {
  slug: string;
  text: string;
};
export type Section = SubSection & {
  subSections: SubSection[];
};

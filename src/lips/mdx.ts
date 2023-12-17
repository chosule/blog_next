import { serialize } from "next-mdx-remote/serialize";

export const serializeMax = (source: string) => {
  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: "mdx",
    },
  });
};

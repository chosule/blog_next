"use client";
import { TableOfContents } from "@/lips/types";
import { useEffect, useState } from "react";

const useScroll = (tableContents: TableOfContents) => {
  const [currentSectionSlug, setCurrentSectionSlug] = useState<
    string | undefined
  >();

  useEffect(() => {
    if (tableContents.length === 0) return;

    let headings: { id: string; top: number }[];

    const style = window.getComputedStyle(document.documentElement);
    const scrollMt =
      parseFloat(
        style.getPropertyValue("--scroll-mt").match(/[\d.]+/)?.[0] ?? "0"
      ) * parseFloat(style.fontSize.match(/[\d.]+/)?.[0] ?? "16");

    function onResize() {
      headings = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".prose h2:not(#table-of-contents),h3:not(#table-of-contents)"
        )
      ).map((el) => ({ id: el.id, top: el.offsetTop }));
    }
  }, []);
};
export default function Tocbanner() {
  return <div></div>;
}

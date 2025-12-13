import { load } from "cheerio";
import hljs, { type HighlightResult } from "highlight.js";
import { createElement, Fragment, type ReactNode } from "react";
import type { AnyNode, Element } from "domhandler";

const nodesToReact = (nodes: AnyNode[], keyPrefix: string): ReactNode[] =>
  nodes
    .map((node, index) => {
      const key = `${keyPrefix}-${index}`;

      if (node.type === "text" && "data" in node) {
        return node.data;
      }

      if (node.type !== "tag") {
        return null;
      }

      const element = node as Element;
      const children = element.children
        ? nodesToReact(element.children, key)
        : null;
      const props: Record<string, unknown> = {
        key,
        ...(element.attribs ?? {}),
      };

      if (element.name === "html" || element.name === "body") {
        return createElement(Fragment, { key }, children);
      }

      if ("class" in props) {
        props.className = props.class;
        delete props.class;
      }

      return createElement(element.name, props, children);
    })
    .filter(Boolean);

const MarkdownArea = ({ body }: { body: string }) => {
  const $ = load(body);
  $("div[data-filename]").each((_, elm) => {
    $(elm).prepend(`<span>${$(elm).data("filename")}</span>`);
  });
  $("pre code").each((_, elm) => {
    const language = $(elm).attr("class") || "";
    let result: HighlightResult;

    if (language === "") {
      result = hljs.highlightAuto($(elm).text());
    } else {
      result = hljs.highlight($(elm).text(), {
        language: language.replace("language-", ""),
      });
    }
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  $("a").each((_, elm) => {
    $(elm).addClass("link link-primary link-underline-hover not-prose");
  });
  const bodyElement = $("body");
  const markdownNodes = (
    bodyElement.length > 0 ? bodyElement.contents() : $.root().children()
  ).toArray();

  return (
    <div className="prose prose-sm sm:prose">
      {nodesToReact(markdownNodes, "markdown-root")}
    </div>
  );
};

export default MarkdownArea;

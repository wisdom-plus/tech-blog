import { load } from "cheerio";
import type { AnyNode, Element } from "domhandler";
import hljs, { type HighlightResult } from "highlight.js";
import { parse } from "postcss";
import { createElement, Fragment, type ReactNode } from "react";

const parseInlineStyle = (style: string) => {
  try {
    const rule = parse(`element {${style}}`).first;
    const declarations = rule?.type === "rule" ? rule.nodes : [];
    return Object.fromEntries(
      declarations.flatMap((declaration) => {
        if (declaration.type !== "decl") return [];

        const { prop, value, important } = declaration;
        const property = prop.startsWith("--")
          ? prop
          : prop
              .toLowerCase()
              .replace(/^-ms-/, "ms-")
              .replace(/-([a-z])/g, (_, letter: string) =>
                letter.toUpperCase(),
              );
        return [[property, important ? `${value} !important` : value]];
      }),
    );
  } catch {
    return undefined;
  }
};

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
      if (typeof props.style === "string") {
        props.style = parseInlineStyle(props.style);
      }

      return createElement(element.name, props, children);
    })
    .filter(Boolean);

const MarkdownArea = ({ body }: { body: string }) => {
  const $ = load(body);
  $("div[data-filename]").each((_, elm) => {
    $(elm).prepend($("<span>").text($(elm).attr("data-filename") ?? ""));
  });
  $("pre code").each((_, elm) => {
    const classes = $(elm).attr("class")?.trim() ?? "";
    const language = classes.match(/(?:^|\s)language-([^\s]+)/)?.[1] ?? classes;
    let result: HighlightResult;

    if (!language || !hljs.getLanguage(language)) {
      result = hljs.highlightAuto($(elm).text());
    } else {
      result = hljs.highlight($(elm).text(), {
        language,
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

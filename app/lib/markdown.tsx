import Markdoc from "@markdoc/markdoc";

export const parseMarkdown = (source: string) => {
  const ast = Markdoc.parse(source);
  const content = Markdoc.transform(ast);

  return Markdoc.renderers.html(content);
}
import YAML from "yaml";

export default function postTemplate(properties) {
  let content;
  if (properties.content) {
    content =
      properties.content.text || properties.content.html || properties.content;
    content = `${content}\n`;
  } else {
    content = "";
  }

  properties = {
    date: properties.published,
    ...(properties.name && { title: properties.name }),
    ...(properties.alt && { alt: properties.alt }),
    ...(properties.filename && { alt: properties.filename }),
    ...(properties["post-status"] === "draft" && { draft: true }),
  };
  let frontmatter = YAML.stringify(properties);
  frontmatter = `---\n${frontmatter}---\n`;

  return frontmatter + content;
}

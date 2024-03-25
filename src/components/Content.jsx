import { Link, useLoaderData } from "react-router-dom";
import Markdown from "react-markdown";

import rehypeRaw from "https://esm.sh/rehype-raw@7?bundle";
export const Content = () => {
  const content = useLoaderData();
  const { tags, title, body_html } = content;
  console.log(content);
  return (
    <div
    
        rel="noopener noreferrer"
        href="#"
        className="mx-auto transition border-2 p-2  border-opacity-30   group hover:no-underline focus:no-underline"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={content.cover_image}
          alt="blog"
        />
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
          {tags.map((tag) => (
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
              key={tag}
            >
              {tag}
            </a>
          ))}
        </div>
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
    </div>
  );
};

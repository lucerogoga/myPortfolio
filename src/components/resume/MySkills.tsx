import React from "react";
import Title from "../Title";

const skillIcons = [
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-react.svg",
    alt: "icon-react",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-vue.svg",
    alt: "icon-vue",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-ts.svg",
    alt: "icon-ts",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-next.svg",
    alt: "icon-next",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-js.svg",
    alt: "icon-js",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-html.svg",
    alt: "icon-html",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-css.svg",
    alt: "icon-css",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-figma.svg",
    alt: "icon-figma",
  },
];

const MySkills = () => {
  return (
    <div>
      <Title text="my skills" />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {skillIcons.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center rounded bg-gray p-8 hover:bg-blue"
          >
            <img src={skill.src} alt={skill.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;

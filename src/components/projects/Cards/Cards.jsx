import React from "react";

export default function Cards({ children, img, icons, url, urlImg, git, title }) {
  return (
    <div className="projects-card bg-white rounded-lg overflow-hidden border-2 lg:w-full md:w-full sm:w-full w-11/12">
      <a className="w-full" href={urlImg} target="_blanck">
        
        <img className="w-full" src={img} alt="zelda"/>
      </a>
      <div className="flex flex-col">
        <div className="flex gap-4 p-2 justify-end h-16">
          <a href={url} className="flex gap-3 px-3 hover:scale-125 ease-in-out duration-200 delay-100" target="_blanck" title="Github">
            {git}
          </a>
          {icons.map((icon) =>{
            <div key={icon}>{icon}</div>

            return icon;
          })}
        </div>
        <h2 className="text-center font-bold text-2xl">{title}</h2>

        <p className="p-2 font-bold">
          {children}
        </p>
      </div>
    </div>
  );
}

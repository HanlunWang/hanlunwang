import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link card-hover"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "400px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
          src={img}
        ></img>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-sm opacity-90">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

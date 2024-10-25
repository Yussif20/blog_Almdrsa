import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Card = ({ img, category, title, avatar, author, date, link }) => {
  return (
    <div className="max-w-sm flex flex-col items-start p-2 rounded-md border border-customBorder">
      <img className="w-[360px] h-[240px] mx-auto" src={img} alt="card image" />
      <p className="text-[#4B6BFB] my-4 bg-blue-100 p-1 rounded-md font-medium text-sm">
        {category}
      </p>
      <Link to={`/${link}`}>
        <h2 className="text-2xl font-semibold leading-7 ">{title}</h2>
      </Link>
      <div className="flex items-center justify-between w-full mt-4 text-[#97989F] text-sm">
        <p className="flex items-center gap-2">
          <img
            className="size-9 rounded-full"
            src={avatar}
            alt="author image"
          />
          <span>{author}</span>
        </p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Card;

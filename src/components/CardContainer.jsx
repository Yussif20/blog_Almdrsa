import Card from './Card';
import { useContext, useState } from 'react';
import { DataContext } from '../DataContext';

const CardContainer = () => {
  const { dataState } = useContext(DataContext);
  const [articlesPerPage, setArticlesPerPage] = useState(9);

  const loadArticlesHandler = () => {
    setArticlesPerPage((prev) => prev + 6);
  };
  return (
    <>
      <div className="grid gap-3 grid-cols-3 w-10/12 mx-auto my-12">
        {dataState.map((item, index) => {
          if (index >= articlesPerPage) return;
          return (
            <Card
              key={item.id}
              img={item.img}
              category={item.category}
              title={item.title}
              avatar={item.avatar}
              author={item.author}
              date={item.date}
              link={item.id}
            />
          );
        })}
      </div>
      {articlesPerPage < dataState.length && (
        <div className="flex items-center justify-center">
          <button
            className="mx-auto py-4 px-2 my-4 rounded-md border border-border-customBorder leading-6 text-[#696A75] font-medium"
            onClick={loadArticlesHandler}
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default CardContainer;

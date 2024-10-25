import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data';

const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const item = data.find((item) => item.id === Number(articleId));
    setArticle(item);
  }, [articleId]);

  if (!article) {
    return <p>There is no such articles!</p>;
  }

  return (
    <div className="flex flex-col mx-auto max-w-screen-md">
      <p className="bg-[#4B6BFB] my-4 text-white p-1 rounded-md font-medium text-sm max-w-fit">
        {article.category}
      </p>
      <h2 className="font-semibold text-3xl leading-10">{article.title}</h2>
      <div className="flex items-center justify-between w-full my-4 text-[#97989F] text-sm">
        <p className="flex items-center gap-2">
          <img
            className="size-9 rounded-full"
            src={article.avatar}
            alt="author image"
          />
          <span>{article.author}</span>
        </p>
        <p>{article.date}</p>
      </div>
      <img className="w-full mx-auto" src={article.img} alt="card image" />
      <p className="text-xl leading-8 text-[#3B3C4A] my-6">
        {article.description}
      </p>
    </div>
  );
};

export default ArticlePage;

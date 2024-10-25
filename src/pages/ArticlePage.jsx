import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { articleId } = useParams();
  return (
    <div>
      <h1 className="text-7xl">{articleId}</h1>
    </div>
  );
};

export default ArticlePage;

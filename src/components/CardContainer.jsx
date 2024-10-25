import Card from './Card';
import data from '../data.json';

const CardContainer = () => {
  return (
    <div className="grid gap-3 grid-cols-3 w-10/12 mx-auto mt-12">
      {data.map((item) => (
        <Card
          key={item.id}
          img={item.img}
          category={item.category}
          title={item.title}
          avatar={item.avatar}
          author={item.author}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default CardContainer;

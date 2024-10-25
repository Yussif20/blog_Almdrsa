import Card from './Card';
import { useContext } from 'react';
import { DataContext } from '../DataContext';

const CardContainer = () => {
  const { dataState } = useContext(DataContext);
  return (
    <div className="grid gap-3 grid-cols-3 w-10/12 mx-auto my-12">
      {dataState.map((item) => (
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
      ))}
    </div>
  );
};

export default CardContainer;

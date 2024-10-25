import { useContext } from 'react';
import Select from 'react-select';
import { DataContext } from '../DataContext';

const options = [
  { value: 'All Categories', label: 'All Categories' },
  { value: 'Technology', label: 'Technology' },
  { value: 'Health', label: 'Health' },
  { value: 'Environment', label: 'Environment' },
  { value: 'Lifestyle', label: 'Lifestyle' },
  { value: 'Business', label: 'Business' },
];

const RegionMenu = () => {
  const { originalData, setDataState } = useContext(DataContext);
  const regionChangeHandler = (selectedOption) => {
    const category = selectedOption.label;

    const filteredList =
      category === 'All Categories'
        ? originalData
        : originalData.filter((article) => article.category === category);

    setDataState(filteredList);
  };
  return (
    <Select
      defaultValue={options[0]}
      onChange={regionChangeHandler}
      classNames={{
        indicatorSeparator: () => 'hidden',
        input: () => 'text-gray-800',
        singleValue: () => 'text-gray-800',
        option: () => 'hover:!text-gray-800',
        menu: () => 'bg-gray-100 text-gray-800',
        control: () =>
          'flex h-12 items-center justify-between  gap-12 rounded-md border-none pl-4 pr-2 shadow',
      }}
      options={options}
    />
  );
};

export default RegionMenu;

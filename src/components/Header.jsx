import Logo from './Logo';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="flex items-center justify-between w-10/12 mx-auto my-6">
      <Logo />
      <h1 className="text-xl ">Home</h1>
      <SearchBar />
    </div>
  );
};

export default Header;

import Logo from './Logo';
import SearchBar from './SearchBar';
import RegionMenu from './RegionMenu';

const Header = () => {
  return (
    <div className="flex items-center justify-between w-10/12 mx-auto my-6">
      <Logo />
      <SearchBar />
      <RegionMenu />
    </div>
  );
};

export default Header;

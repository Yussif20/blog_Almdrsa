import logoImg from '../assets/logo.png';

const Logo = () => {
  return (
    <a href="/" className="flex gap-3 items-center text-xl font-semibold">
      <img src={logoImg} alt="Logo" />
      Blog
    </a>
  );
};

export default Logo;

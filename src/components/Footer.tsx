import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="border-t px-[6%] py-10 flex items-center justify-center"
      style={{ borderColor: 'rgba(255,90,31,0.12)' }}
    >
      <Link to="/">
        <img
          src="/CSS.png"
          alt="Clip Scale Studio logo"
          className="h-8 w-auto object-contain"
        />
      </Link>
    </footer>
  );
}
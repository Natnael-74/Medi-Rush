import { Link } from "react-router-dom";

type props = {
  children: React.ReactNode;
};

function Header({ children }: props) {
  return (
    <div className="border-b-orange-300 border-b-2 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-orange-500 tracking-tight"
        >
          {" "}
          Med-Delivery{" "}
        </Link>
      </div>
    </div>
  );
}

export default Header;

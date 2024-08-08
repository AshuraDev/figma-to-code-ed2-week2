import DesktopNav from "./desktop-nav";
import ResponsiveNav from "./responsive-nav";

const NavBar = () => {
  return (
    // className="flex items-center min-h-16 py-0 px-5 md:px-12 xl:px-32 border border-black bg-slate-500"
    <nav>
      <DesktopNav />
      <ResponsiveNav />
    </nav>
  );
};

export default NavBar;

import Grids from "./HeaderGrid";
import Search from "./HeaderSearch";

const HeaderMobile = () => {
  return (
    <>
      <div className="lg:hidden">
        <Grids />
        <Search />
      </div>
    </>
  );
};

export default HeaderMobile;

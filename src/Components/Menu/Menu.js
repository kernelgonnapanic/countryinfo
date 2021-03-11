import Search from "../Search/Search";

import Filter from "../Filter/Filter";
// import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div className="menu__wrapper">
        <Search />
        <Filter />
      </div>
    </>
  );
};

export default Menu;

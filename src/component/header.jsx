import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* header */}
      <header id="home">
        {/* navbar */}
        <nav className="navbarr navbar-expand-lg fixed-top nav-menu">
          <button
            className="navbar-toggler nav-button ps-3"
            data-bs-toggle="collapse"
            data-bs-target="#my-nav"
          >
            <div className="line1 bg-white"></div>
            <div className="line2 bg-white"></div>
            <div className="line3 bg-white"></div>#
          </button>
          <div className="collapse navbar-collapse" id="my-nav">
            <ul className="navbar-nav list-unstyled">
              <li className="nav-item">
                <a href="#home" className="nav-link m-2 menu-item ps-3">
                  خانه
                </a>
              </li>
              <li className="nav-item">
                <a href="#award" className="nav-link m-2 menu-item px-2">
                  افتخارات
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link m-2 menu-item px-2">
                  خدمات
                </a>
              </li>
              <li className="nav-item">
                <a href="#gallery" className="nav-link m-2 menu-item px-2">
                  گالری
                </a>
              </li>
              <li className="nav-item">
                <a href="#trainers" className="nav-link m-2 menu-item px-2">
                  مربی ها
                </a>
              </li>
              <li className="nav-item">
                <a href="#membership" className="nav-link m-2 menu-item px-2">
                  پلن ها
                </a>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link m-2 menu-item px-2">
                  ثبت نام
                </Link>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link m-2 menu-item px-2">
                  ارتباط با ما
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* end of navbar */}
        {/* banner */}
        <div
          className="text-light text-uppercase fw-bold text-end banner"
          style={{ fontFamily: "Impact" }}
        >
          <h1 className="display-1 banner-heading">oxygen gym</h1>
          <p className="h1 mt-3 banner-par">
            <span className="ms-4">no pain</span>
            <span>no gain</span>
          </p>
        </div>
        {/* end of banner */}
      </header>
      {/* End of header */}
    </>
  );
};

export default Navbar;

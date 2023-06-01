import P1 from "../images/P-1.jpg";
import P2 from "../images/P-2.jpg";
import P3 from "../images/P-3.jpg";
import Reza from "../images/Reza.webp";
import Rezaa from "../images/Rezaa.jpg";
import Pouya from "../images/pouya.jpg";
import "../dashboard.css";

const Dashboard = () => {
  return (
    <>
      {/* <!-- Navigation --> */}
      <nav className="navbar navbar-expand-md navbar-light dashboard">
        <button
          className="navbar-toggler mb-2 bg-light"
          data-bs-toggle="offcanvas"
          data-bs-target="#my-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <img src={Reza} className="rounded-circle me-3" width={"50px"} alt="" />
        <div className="offcanvas offcanvas-start" id="my-nav">
          <div className="container-fluid">
            <div className="row">
              {/* <!-- sidebar --> */}
              <div className="col-xl-2 col-lg-3 col-md-4 fixed-top sidebarr">
                <div className="offcanvas-header">
                  <button
                    type="button"
                    className="btn-close btn-close-white ms-auto"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="bottom-border pb-3">
                  <a
                    href=""
                    className="navbar-brand text-white text-center mx-auto py-3 bottom-border d-block mb-3"
                  >
                    <span style={{ fontSize: "20px" }}>Reverse</span>
                  </a>
                  <img
                    src={Reza}
                    className="rounded-circle me-3"
                    style={{ width: "50px" }}
                    alt=""
                  />
                  <a className="text-white text-decoration-none" href="">
                    رضا صداقتی
                  </a>
                </div>
                <ul className="nav-bar list-unstyled flex-column mt-4">
                  <li className="nav-item current">
                    <a href="" className="nav-link text-white p-3 mb-2">
                      <i className="fas fa-home fa-lg me-3"></i>داشبورد
                    </a>
                  </li>
                  <li className="nav-item sidebar-link">
                    <a href="" className="nav-link text-white p-3 mb-2">
                      <i className="fas fa-user fa-lg me-3"></i>پروفایل
                    </a>
                  </li>
                  <li className="nav-item sidebar-link">
                    <a href="" className="nav-link text-white p-3 mb-2">
                      <i className="fas fa-envelope fa-lg me-3"></i>پیام ها
                    </a>
                  </li>
                  <li className="nav-item sidebar-link">
                    <a href="" className="nav-link text-white p-3 mb-2">
                      <i className="fas fa-shopping-cart fa-lg me-3"></i>فروش
                    </a>
                  </li>
                  <li className="nav-item sidebar-link">
                    <a href="" className="nav-link text-white p-3 mb-2">
                      <i className="fas fa-chart-line fa-lg me-3"></i>تحلیل
                    </a>
                  </li>
                  <li className="nav-item sidebar-link">
                    <a href="" className="nav-link text-white p-3 mb-2">
                      <i className="fas fa-chart-bar fa-lg me-3"></i>نمودارها
                    </a>
                  </li>
                  <li className="nav-item sidebar-link">
                    <a href="" className="nav-link text-white p-3 mb-2">
                      <i className="fas fa-table fa-lg me-3"></i>جدول ها
                    </a>
                  </li>
                  <li className="nav-item sidebar-link">
                    <a href="" className="nav-link text-white p-3 mb-2">
                      <i className="fas fa-wrench fa-lg me-3"></i>تنظیمات
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- End of sidebar --> */}
              {/* <!-- top-nav --> */}
              <div
                className="col-xl-10 col-lg-9 col-md-8 fixed-top py-2 ms-auto bg-dark top-navbar"
                data-bs-theme="dark"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-3">
                    <h4 className="text-light pt-2 text-center text-md-start">
                      داشبورد
                    </h4>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    <form action="" className="mb-4 mt-2 my-md-0">
                      <div className="input-group bg-search">
                        <button className="btn btn-white search-button">
                          <i className="fas fa-search text-danger"></i>
                        </button>
                        <input
                          type="text"
                          placeholder="جستجو ..."
                          className="form-control search-inpute"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <ul className="navbar-nav ms-5 flex-row justify-content-between">
                      <li className="nav-item">
                        <a href="" className="nav-link">
                          <i className="fas fa-comments fa-lg text-secondary"></i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="" className="nav-link">
                          <i className="fas fa-bell fa-lg text-secondary"></i>
                        </a>
                      </li>
                      <li className="nav-item ms-md-auto">
                        <a
                          href="#logoutModal"
                          className="nav-link"
                          data-bs-toggle="modal"
                        >
                          <i className="fas fa-sign-out-alt fa-lg text-danger"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- End of top-nav --> */}
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- End of Navigation --> */}

      {/* <!-- Modal --> */}
      <div className="modal fade" id="logoutModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4>آیا میخواهید خارج شوید ؟</h4>
            </div>
            <div className="modal-body">
              <p className="text-muted">
                در صورت خروج ، برای دسترسی به پنل باید مجددا وارد شوید
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-success" data-bs-dismiss="modal">
                میمانم
              </button>
              <button className="btn btn-danger">خارج میشوم</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Ends of Modal --> */}

      {/* <!-- Cards --> */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-9 col-md-8 ms-auto">
              <div className="row mt-md-2 mb-5">
                {/* <!-- card --> */}
                <div className="col-lg-3 col-md-6 p-2">
                  <div className="card card-common">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="text-secondary">
                          <h5>فروش</h5>
                          <h5 className="mt-4">30 میلیون</h5>
                        </div>
                        <i className="fas fa-shopping-cart text-warning fa-3x"></i>
                      </div>
                    </div>
                    <div className="card-footer text-secondary text-end">
                      <i className="fas fa-sync me-3"></i>
                      <span>به روز رسانی</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End of card --> */}
                {/* <!-- card --> */}
                <div className="col-lg-3 col-md-6 p-2">
                  <div className="card card-common">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="text-secondary">
                          <h5>هزینه</h5>
                          <h5 className="mt-4">5 میلیون</h5>
                        </div>
                        <i className="fas fa-money-bill-alt text-success fa-3x"></i>
                      </div>
                    </div>
                    <div className="card-footer text-secondary text-end">
                      <i className="fas fa-sync me-3"></i>
                      <span>به روز رسانی</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End of card --> */}
                {/* <!-- card --> */}
                <div className="col-lg-3 col-md-6 p-2">
                  <div className="card card-common">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="text-secondary">
                          <h5>کاربران</h5>
                          <h5 className="mt-4">50.000</h5>
                        </div>
                        <i className="fas fa-users text-info fa-3x"></i>
                      </div>
                    </div>
                    <div className="card-footer text-secondary text-end">
                      <i className="fas fa-sync me-3"></i>
                      <span>به روز رسانی</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End of card --> */}
                {/* <!-- card --> */}
                <div className="col-lg-3 col-md-6 p-2">
                  <div className="card card-common">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="text-secondary">
                          <h5>بازدید</h5>
                          <h5 className="mt-4">10.000</h5>
                        </div>
                        <i className="fas fa-chart-line text-danger fa-3x"></i>
                      </div>
                    </div>
                    <div className="card-footer text-secondary text-end">
                      <i className="fas fa-sync me-3"></i>
                      <span>به روز رسانی</span>
                    </div>
                  </div>
                </div>
                {/* <!-- End of card --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Ends of Cards --> */}

      {/* <!-- progress / tasklist --> */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-9 col-md-8 ms-auto">
              <div className="row">
                {/* <!-- progress --> */}
                <div className="col-lg-6">
                  <div className="bg-dark text-white p-4 rounded">
                    <h4 className="mb-4">پروژه ها</h4>
                    {/* <!-- Project --> */}
                    <h6 className="mb-2 mt-4">کتابخانه آنلاین</h6>
                    <div className="progress" style={{ height: "20px" }}>
                      <div
                        className="progress-bar fw-bold bg-danger progress-bar-striped"
                        style={{ width: "85%" }}
                      >
                        85%
                      </div>
                    </div>
                    {/* <!-- End of project --> */}
                    {/* <!-- Project --> */}
                    <h6 className="mb-2 mt-4">
                    اپلیکیشن<span style={{ fontSize: "18px" }}>Reverse</span>
                    </h6>
                    <div className="progress" style={{ height: "20px" }}>
                      <div
                        className="progress-bar fw-bold bg-primary progress-bar-striped"
                        style={{ width: "32%" }}
                      >
                        32%
                      </div>
                    </div>
                    {/* <!-- End of project --> */}
                    {/* <!-- Project --> */}
                    <h6 className="mb-2 mt-4">وب سرویس</h6>
                    <div className="progress" style={{ height: "20px" }}>
                      <div
                        className="progress-bar fw-bold bg-success progress-bar-striped"
                        style={{ width: "55%" }}
                      >
                        55%
                      </div>
                    </div>
                    {/* <!-- End of project --> */}
                  </div>
                </div>
                {/* <!-- End of progress --> */}
                {/* <!-- tasklist --> */}
                <div className="col-lg-6">
                  <h4 className="text-muted p-3 mb-3 mt-3 mt-lg-0">تسک ها</h4>
                  {/* <!-- Task --> */}
                  <div className="container-fluid bg-white">
                    <div className="row py-3 mb-4 align-items-center task-border">
                      <div className="col-1">
                        <input type="checkbox" checked />
                      </div>
                      <div className="col-9">آماده کردن سمت بک اند</div>
                      <div className="col-1">
                        <a
                          href=""
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          data-bs-placement="top"
                          title="<h6>ویرایش</h6"
                        >
                          <i className="fas fa-edit fa-lg text-success me-2"></i>
                        </a>
                      </div>
                      <div className="col-1">
                        <a
                          href=""
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          data-bs-placement="top"
                          title="<h6>حذف</h6>"
                        >
                          <i className="fas fa-trash fa-lg text-danger me-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Task --> */}
                  {/* <!-- Task --> */}
                  <div className="container-fluid bg-white">
                    <div className="row py-3 mb-4 align-items-center task-border">
                      <div className="col-1">
                        <input type="checkbox" />
                      </div>
                      <div className="col-9">آماده کردن سمت فرانت اند</div>
                      <div className="col-1">
                        <a
                          href=""
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          data-bs-placement="top"
                          title="<h6>ویرایش</h6>"
                        >
                          <i className="fas fa-edit fa-lg text-success me-2"></i>
                        </a>
                      </div>
                      <div className="col-1">
                        <a
                          href=""
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          data-bs-placement="top"
                          title="<h6>حذف</h6>"
                        >
                          <i className="fas fa-trash fa-lg text-danger me-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Task --> */}
                  {/* <!-- Task --> */}
                  <div className="container-fluid bg-white">
                    <div className="row py-3 mb-4 align-items-center task-border">
                      <div className="col-1">
                        <input type="checkbox" checked />
                      </div>
                      <div className="col-9">
                        طراحی <span style={{ fontSize: "18px" }}>Ui/Ux</span>
                      </div>
                      <div className="col-1">
                        <a
                          href=""
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          data-bs-placement="top"
                          title="<h6>ویرایش</h6>"
                        >
                          <i className="fas fa-edit fa-lg text-success me-2"></i>
                        </a>
                      </div>
                      <div className="col-1">
                        <a
                          href=""
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          data-bs-placement="top"
                          title="<h6>حذف</h6>"
                        >
                          <i className="fas fa-trash fa-lg text-danger me-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Task --> */}
                </div>
                {/* <!-- End of tasklist --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of progress / tasklist --> */}

      {/* <!-- Tables --> */}
      <section>
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-xl-10 col-lg-9 col-md-8 ms-auto">
              <div className="row">
                <div className="col-lg-6 mb-3 mb-lg-0">
                  <h3 className="text-muted text-center mb-3 mt-2 mt-lg-0">
                    پرداختی ها
                  </h3>
                  <table className="table table-dark table-hover text-center">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>نام</th>
                        <th>مبلغ</th>
                        <th>تاریخ</th>
                        <th>وضعیت</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: "11px 0" }}>1</td>
                        <td style={{ padding: "11px 0" }}>رضا صداقتی</td>
                        <td style={{ padding: "11px 0" }}>5 میلیون</td>
                        <td style={{ padding: "11px 0" }}>10 تیر</td>
                        <td>
                          <span className="badge w-75 py-2 text-bg-success">
                            موفق
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "11px 0" }}>2</td>
                        <td style={{ padding: "11px 0" }}>احمد سهرابی</td>
                        <td style={{ padding: "11px 0" }}>9 میلیون</td>
                        <td style={{ padding: "11px 0" }}>18 تیر</td>
                        <td>
                          <span className="badge w-75 py-2 text-bg-warning">
                            انتظار
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "11px 0" }}>3</td>
                        <td style={{ padding: "11px 0" }}>پویا مرعشی</td>
                        <td style={{ padding: "11px 0" }}>3 میلیون</td>
                        <td style={{ padding: "11px 0" }}>24 تیر</td>
                        <td>
                          <span className="badge w-75 py-2 text-bg-danger">
                            رد شده
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "11px 0" }}>4</td>
                        <td style={{ padding: "11px 0" }}>مهدیس محمدی</td>
                        <td style={{ padding: "11px 0" }}>10 میلیون</td>
                        <td style={{ padding: "11px 0" }}>29 تیر</td>
                        <td>
                          <span className="badge w-75 py-2 text-bg-success">
                            موفق
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <!-- paginations --> */}
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a href="" className="page-link py-2 px-3">
                        &laquo;
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link py-2 px-3">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link py-2 px-3">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link py-2 px-3 active">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link py-2 px-3">
                        &raquo;
                      </a>
                    </li>
                  </ul>
                  {/* <!-- End of paginations --> */}
                </div>
                <div className="col-lg-6">
                  <h3 className="text-muted text-center mb-3">تیکت های اخیر</h3>
                  <table className="table table-striped text-center bg-light">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>نام</th>
                        <th>تاریخ</th>
                        <th>عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>رضا صداقتی</td>
                        <td>10 تیر</td>
                        <td>
                          <button className="btn btn-info btn-sm">پاسخ</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>احمد سهرابی</td>
                        <td>18 تیر</td>
                        <td>
                          <button className="btn btn-info btn-sm">پاسخ</button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>پویا مرعشی</td>
                        <td>24 تیر</td>
                        <td>
                          <button className="btn btn-info btn-sm">پاسخ</button>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>مهدیس محمدی</td>
                        <td>29 تیر</td>
                        <td>
                          <button className="btn btn-info btn-sm">پاسخ</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <!-- paginations --> */}
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a href="" className="page-link py-2 px-3">
                        &laquo;
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link py-2 px-3">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link py-2 px-3">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link py-2 px-3 active">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link py-2 px-3">
                        &raquo;
                      </a>
                    </li>
                  </ul>
                  {/* <!-- End of paginations --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of Tables --> */}

      {/* <!-- Activities / quickpost --> */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-9 col-md-8 ms-auto">
              <div className="row">
                {/* <!-- Activities --> */}
                <div className="col-lg-7">
                  <h4 className="text-muted mb-4">فعالیت های اخیر</h4>
                  <div id="my-accordion">
                    {/* <!-- card --> */}
                    <div className="card">
                      <div className="card-header">
                        <button
                          className="btn btn-light text-start d-block w-100"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                        >
                          <img
                            className="me-2 rounded"
                            src={Rezaa}
                            width={"50px"}
                            height={"50px"}
                            alt=""
                          />
                          رضا یک گفتگوی جدید ایجاد کرد
                        </button>
                      </div>
                      <div
                        className="collapse"
                        data-bs-parent="#my-accordion"
                        id="collapse1"
                      >
                        <div
                          className="card-body"
                          style={{ textAlign: "justify" }}
                        >
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در
                          شصت و سه درصد گذشته حال و آینده
                        </div>
                      </div>
                    </div>
                    {/* <!-- End of card --> */}
                    {/* <!-- card --> */}
                    <div className="card">
                      <div className="card-header">
                        <button
                          className="btn btn-light text-start d-block w-100"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                        >
                          <img
                            className="me-2 rounded"
                            src={P1}
                            width={"50px"}
                            height={"50px"}
                            alt=""
                          />
                          احمد یک گفتگوی جدید ایجاد کرد
                        </button>
                      </div>
                      <div
                        className="collapse"
                        data-bs-parent="#my-accordion"
                        id="collapse2"
                      >
                        <div
                          className="card-body"
                          style={{ textAlign: "justify" }}
                        >
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در
                          شصت و سه درصد گذشته حال و آینده
                        </div>
                      </div>
                    </div>
                    {/* <!-- End of card --> */}
                    {/* <!-- card --> */}
                    <div className="card">
                      <div className="card-header">
                        <button
                          className="btn btn-light text-start d-block w-100"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                        >
                          <img
                            className="me-2 rounded"
                            src={P2}
                            width={"50px"}
                            height={"50px"}
                            alt=""
                          />
                          پویا یک گفتگوی جدید ایجاد کرد
                        </button>
                      </div>
                      <div
                        className="collapse"
                        data-bs-parent="#my-accordion"
                        id="collapse3"
                      >
                        <div
                          className="card-body"
                          style={{ textAlign: "justify" }}
                        >
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در
                          شصت و سه درصد گذشته حال و آینده
                        </div>
                      </div>
                    </div>
                    {/* <!-- End of card --> */}
                    {/* <!-- card --> */}
                    <div className="card">
                      <div className="card-header">
                        <button
                          className="btn btn-light text-start d-block w-100"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                        >
                          <img
                            className="me-2 rounded"
                            src={P3}
                            width={"50px"}
                            height={"50px"}
                            alt=""
                          />
                          مهسا یک گفتگوی جدید ایجاد کرد
                        </button>
                      </div>
                      <div
                        className="collapse"
                        data-bs-parent="#my-accordion"
                        id="collapse4"
                      >
                        <div
                          className="card-body"
                          style={{ textAlign: "justify" }}
                        >
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در
                          شصت و سه درصد گذشته حال و آینده
                        </div>
                      </div>
                    </div>
                    {/* <!-- End of card --> */}
                    {/* <!-- card --> */}
                    <div className="card">
                      <div className="card-header">
                        <button
                          className="btn btn-light text-start d-block w-100"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse5"
                        >
                          <img
                            className="me-2 rounded"
                            src={Pouya}
                            width={"50px"}
                            height={"50px"}
                            alt=""
                          />
                          درسا یک گفتگوی جدید ایجاد کرد
                        </button>
                      </div>
                      <div
                        className="collapse"
                        data-bs-parent="#my-accordion"
                        id="collapse5"
                      >
                        <div
                          className="card-body"
                          style={{ textAlign: "justify" }}
                        >
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در
                          شصت و سه درصد گذشته حال و آینده
                        </div>
                      </div>
                    </div>
                    {/* <!-- End of card --> */}
                  </div>
                </div>
                {/* <!-- Ends of Activities --> */}
                {/* <!-- quickpost --> */}
                <div className="col-lg-5" style={{ marginTop: "52px" }}>
                  <div className="card rounded">
                    <div className="card-body">
                      <h5 className="text-muted text-center mb-4">پست جدید</h5>
                      <ul className="list-inline text-center py-3">
                        <li className="list-inline-item">
                          <a className="text-decoration-none" href="">
                            <i className="fas fa-pencil-alt text-success"></i>
                            <span className="h6 text-muted">وضعیت</span>
                          </a>
                        </li>
                        <li className="list-inline-item px-3">
                          <a className="text-decoration-none" href="">
                            <i className="fas fa-camera text-info"></i>
                            <span className="h6 text-muted">تصویر</span>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="text-decoration-none" href="">
                            <i className="fas fa-map-marker text-danger"></i>
                            <span className="h6 text-muted">مکان</span>
                          </a>
                        </li>
                      </ul>
                      <form action="">
                        <div className="">
                          <input
                            className="form-control py-2 mb-3"
                            placeholder="یه چیزی بنویس ..."
                            type="text"
                          />
                          <button className="btn d-block text-light bg-info py-2 mb-5 w-100">
                            ارسال
                          </button>
                        </div>
                      </form>
                      <div className="row">
                        <div className="col-6">
                          <div className="card">
                            <i className="far fa-calendar-alt fa-4x text-warning d-block py-3 m-auto"></i>
                            <div className="card-body">
                              <p className="card-text text-center">
                                دوشنبه 21 فروردین
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="card">
                            <i className="far fa-clock fa-4x text-warning d-block py-3 m-auto"></i>
                            <div className="card-body">
                              <p className="card-text text-center">
                                ساعت : 00.30 شب
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Ends of quickpost --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of Activities / quickpost --> */}

      {/* <!-- footer --> */}
      <footer className="pt-3 mt-5" style={{ backgroundColor: "#dcdfe0" }}>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-xl-10 col-lg-9 col-md-8 ms-auto">
              <ul className="list-inline">
                <li className="list-inline-item me-4">
                  <a href="" className="text-dark text-decoration-none">
                    درباره ما
                  </a>
                </li>
                <li className="list-inline-item me-4">
                  <a href="" className="text-dark text-decoration-none">
                    پشتیبانی
                  </a>
                </li>
                <li className="list-inline-item me-4">
                  <a href="" className="text-dark text-decoration-none">
                    وبلاگ
                  </a>
                </li>
              </ul>
              <hr />
              <div className="mt-2">
                <a style={{ textDecoration: "none" }} href="">
                  <i
                    className="fab fa-instagram ms-3 text-danger"
                    style={{ fontSize: "30px" }}
                  ></i>
                </a>
                <a style={{ textDecoration: "none" }} href="">
                  <i
                    className="fab fa-twitter ms-3 text-info"
                    style={{ fontSize: "30px" }}
                  ></i>
                </a>
                <a style={{ textDecoration: "none" }} href="">
                  <i
                    className="fab fa-youtube ms-3 text-dark"
                    style={{ fontSize: "30px" }}
                  ></i>
                </a>
              </div>
              <p className="text-dark">
                ساخته شده با <i className="fas fa-heart text-danger"></i> توسط
                <span style={{ fontSize: "20px" }}>Reverse</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End of footer --> */}
    </>
  );
};

export default Dashboard;

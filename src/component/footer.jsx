const Footer = () => {
  return (
    <>
      {/* <!-- footer --> */}
      <footer className="bg-dark px-5">
        <div className="container-fluid">
          <div className="row text-light py-4">
            <div className="col-lg-4 col-sm-6">
              <h5 className="pb-3">درباره ما</h5>
              <p className="lh-2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز
              </p>
            </div>
            <div className="col-lg-2 col-sm-6">
              <h5 className="pb-3">صفحات</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="footer-link" href="#home">
                    خانه
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#award">
                    افتخارات
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#gallery">
                    گالری
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#trainers">
                    مربی ها
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#membership">
                    پلن ها
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="">
                    ارتباط با ما
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-6">
              <h5 className="pb-3">کمک میخواهید ؟</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="footer-link" href="">
                    پشتیبانی
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="">
                    مشاور تغذیه
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="">
                    برنامه لاغری
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="">
                    اطلاعیه ها
                  </a>
                </li>
                <li>
                  <a className="footer-link fs-6 lh02" href="">
                    Oxsygen@email.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-sm-6">
              <h5 className="pb-3">درباره ما</h5>
              <p className="lh-2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز
              </p>
              <form action="" className="mb-3">
                <div className="input-group input-color">
                  <input className="form-control" placeholder="ایمیل" type="text" />
                  <button type="button" className="btn btn-danger text-white">
                    ارسال
                  </button>
                </div>
              </form>
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <i className="fab fa-facebook fa-2x text-primary"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-instagram fa-2x text-danger"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-twitter fa-2x text-info"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-youtube fa-2x text-danger"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- end of footer --> */}
    </>
  );
};

export default Footer;

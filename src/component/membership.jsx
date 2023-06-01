const Membership = () => {
  return (
    <>
      {/* <!-- membership --> */}
      <section id="membership">
        <div className="container-fluid p-5 text-center">
          {/* <!-- title --> */}
          <div className="row text-center mb-5 justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="display-4 text-black">پلن ها</h1>
              <div className="underline underline-dark my-5"></div>
              <p className="lh-2 h4 text-black">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>
          {/* <!-- end of title --> */}
          <div className="row">
            <div className="col-lg-4">
              <div className="card card-1 text-light py-4 my-4 border-0 mx-auto">
                <div className="card-body">
                  <h4 className="mb-5">پلن ماهانه</h4>
                  <h1>
                    ۲۰ <i className="fas fa-percent fa-sm"></i>
                  </h1>
                  <ul className="list-unstyled">
                    <li className="py-3 card-list-item">مربی تمرین</li>
                    <li className="py-3 card-list-item">مربی تغذیه</li>
                    <li className="py-3 card-list-item">سالن هوازی</li>
                    <li className="py-3 card-list-item border-0">سالن آبی</li>
                  </ul>
                  <a href="" className="btn membership-card-button text-light card-a">
                    ثبت نام
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-2 text-light py-4 my-4 border-0 mx-auto">
                <div className="card-body">
                  <h4 className="mb-5">پلن سه ماهه</h4>
                  <h1>
                    ۳۰ <i className="fas fa-percent fa-sm"></i>
                  </h1>
                  <ul className="list-unstyled">
                    <li className="py-3 card-list-item">مربی تمرین</li>
                    <li className="py-3 card-list-item">مربی تغذیه</li>
                    <li className="py-3 card-list-item">سالن هوازی</li>
                    <li className="py-3 card-list-item border-0">سالن آبی</li>
                  </ul>
                  <a href="" className="btn membership-card-button text-light card-a">
                    ثبت نام
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-3 text-light py-4 my-4 border-0 mx-auto">
                <div className="card-body">
                  <h4 className="mb-5">پلن سالانه</h4>
                  <h1>
                    ۵۰ <i className="fas fa-percent fa-sm"></i>
                  </h1>
                  <ul className="list-unstyled">
                    <li className="py-3 card-list-item">مربی تمرین</li>
                    <li className="py-3 card-list-item">مربی تغذیه</li>
                    <li className="py-3 card-list-item">سالن هوازی</li>
                    <li className="py-3 card-list-item border-0">سالن آبی</li>
                  </ul>
                  <a href="" className="btn membership-card-button text-light card-a">
                    ثبت نام
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of membership --> */}
    </>
  );
};

export default Membership;

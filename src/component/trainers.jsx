import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";

const Trainers = () => {
  return (
    <>
      {/* <!-- trainers --> */}
      <section className="trainers p-5" id="trainers">
        <div className="container-fluid">
          {/* <!-- title --> */}
          <div className="row text-center mb-2 justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="display-4 text-white">مربی ها</h1>
              <div className="underline mt-5"></div>
            </div>
          </div>
          {/* <!-- end of title --> */}
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div
                className="carousel slide"
                data-bs-ride="carousel"
                id="trainers-carousel"
                data-bs-interval="2000"
              >
                <ol className="carousel-indicators list-unstyled">
                  <li
                    data-bs-target="#trainers-carousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="slide 1"
                  ></li>
                  <li
                    data-bs-target="#trainers-carousel"
                    data-bs-slide-to="1"
                    aria-label="slide 2"
                  ></li>
                  <li
                    data-bs-target="#trainers-carousel"
                    data-bs-slide-to="2"
                    aria-label="slide 3"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  {/* <!-- slide --> */}
                  <div className="carousel-item active text-center">
                    <img
                      src={p1}
                      alt=""
                      className="img-fluid rounded-circle m-5 mx-auto"
                      width="300px"
                      height="200px"
                    />
                    <blockquote className="blockquote text-white">
                      <p className="mb-5">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط فعلی تکنولوژی مورد نیاز
                      </p>
                    </blockquote>
                    <h5 className="text-light my-3">هستی پناهی(مربی رسمی)</h5>
                    <ul className="list-inline mb-5">
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- end of slide --> */}
                  {/* <!-- slide --> */}
                  <div className="carousel-item text-center">
                    <img
                      src={p2}
                      alt=""
                      className="img-fluid rounded-circle m-5 mx-auto"
                      width="300px"
                      height="200px"
                    />
                    <blockquote className="blockquote text-white">
                      <p className="mb-5">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط فعلی تکنولوژی مورد نیاز
                      </p>
                    </blockquote>
                    <h5 className="text-light my-3">آرمان امیری(مربی رسمی)</h5>
                    <ul className="list-inline mb-5">
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- end of slide --> */}
                  {/* <!-- slide --> */}
                  <div className="carousel-item text-center">
                    <img
                      src={p3}
                      alt=""
                      className="img-fluid rounded-circle m-5 mx-auto"
                      width="300px"
                      height="200px"
                    />
                    <blockquote className="blockquote text-white">
                      <p className="mb-5">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط فعلی تکنولوژی مورد نیاز
                      </p>
                    </blockquote>
                    <h5 className="text-light my-3">رضا فاطمی(مربی تغذیه)</h5>
                    <ul className="list-inline mb-5">
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- end of slide --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of trainers --> */}
    </>
  );
};

export default Trainers;

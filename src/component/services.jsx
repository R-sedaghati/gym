import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";

const Services = () => {
  return (
    <>
      {/* <!-- services --> */}
      <section className="bg-secondary py-4">
        <div className="container-fluid">
          {/* <!-- title --> */}
          <div className="row text-center mb-5 justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10 change-text-color">
              <h1 className="display-4 text-dark">خدمات</h1>
              <div className="underline underline-darkk my-5"></div>
              <p className="lh-2 h4" style={{ color: "#151f20" }}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>
          {/* <!-- end of title --> */}
          <div className="row">
            <div className="col-lg-4 col-sm-6 my-5">
              <div className="card card-shadow border-0">
                <img src={b1} alt="" className="card-img" />
                <div className="card-img-overlay">
                  <h5 className="text-white heading p-2">برنامه تمرینی</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 my-5">
              <div className="card card-shadow border-0">
                <img src={b2} alt="" className="card-img" />
                <div className="card-img-overlay">
                  <h5 className="text-white heading p-2">رژیم غذایی</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 my-5">
              <div className="card card-shadow border-0">
                <img src={b3} alt="" className="card-img" />
                <div className="card-img-overlay">
                  <h5 className="text-white heading p-2">مربی شخصی</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of services --> */}
    </>
  );
};

export default Services;

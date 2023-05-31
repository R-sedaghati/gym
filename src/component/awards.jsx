import award from "./../images/awardimg.png";

const Awards = () => {
  return (
    <>
      {/* <!-- awards --> */}
      <section className="p-5 awards" id="award">
        <div className="container-fluid">
          {/* <!-- title --> */}
          <div className="row text-center mb-5 justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="display-4 text-white">افتخارات</h1>
              <div className="underline my-5"></div>
              <p className="text-secondary lh-2 h5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>
          {/* <!-- end of title --> */}
          <div className="row my-5">
            <div className="col-md-4 p-5 text-center">
              <i className="fas fa-medal fa-5x text-danger"></i>
              <h1 className="text-white mb-3">مدال ها</h1>
              <p className="text-secondary lh-2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز
              </p>
            </div>
            <div className="col-md-4 p-5 text-center">
              <i className="fas fa-trophy fa-5x text-danger"></i>
              <h1 className="text-white mb-3">قهرمانی</h1>
              <p className="text-secondary lh-2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز
              </p>
            </div>
            <div className="col-md-4 p-5 text-center">
              <i className="fas fa-award fa-5x text-danger"></i>
              <h1 className="text-white mb-3">برگزیده کیفی</h1>
              <p className="text-secondary lh-2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز
              </p>
            </div>
          </div>
          <div className="container mt-3">
            <div className="row">
              <div className="col-lg-6 text-white text-center text-lg-start award-text align-self-center">
                <h1 className="mb-4">با کیفیت ترین تجهیزات</h1>
                <p className="lh-2 fs-4" style={{ textAlign: "justify" }}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
              <div className="col-lg-6">
                <img src={award} alt="" className="img-fluid award-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of awards --> */}
    </>
  );
};

export default Awards;

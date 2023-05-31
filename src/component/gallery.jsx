import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from "../images/gallery6.jpg";
import gallery7 from "../images/gallery7.jpg";
import gallery8 from "../images/gallery8.jpg";
import gallery9 from "../images/gallery9.jpg";
import gallery10 from "../images/gallery10.jpg";
import gallery11 from "../images/gallery11.jpg";
import gallery12 from "../images/gallery12.jpg";

const Gallery = () => {
  return (
    <>
      {/* <!-- gallery --> */}
      <section className="py-5" id="gallery">
        <div className="container-fluid">
          {/* <!-- title --> */}
          <div className="row text-center mb-5 justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="display-4 text-secondary">گالری</h1>
              <div className="underline underline-dark my-5"></div>
              <p className="text-secondary lh-2 h4">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>
          {/* <!-- end of title --> */}
          <ul className="list-inline text-center my-5">
            <li
              data-filter="all"
              className="list-inline-item gallery-list-item active-item"
            >
              همه <span className="text-muted mx-3">/</span>
            </li>
            <li
              data-filter="cat1"
              className="list-inline-item gallery-list-item"
            >
              دسته یک<span className="text-muted mx-3">/</span>
            </li>
            <li
              data-filter="cat2"
              className="list-inline-item gallery-list-item"
            >
              دسته دو<span className="text-muted mx-3">/</span>
            </li>
            <li
              data-filter="cat3"
              className="list-inline-item gallery-list-item"
            >
              دسته سه
            </li>
          </ul>
          <div className="container-fluid">
            <div className="d-flex justify-content-center flex-wrap">
              <div className="filter p-1 cat1">
                <img width="400" height="230" src={gallery1} alt="" />
              </div>
              <div className="filter p-1 cat2 cat3">
                <img width="400" height="230" src={gallery2} alt="" />
              </div>
              <div className="filter p-1 cat1 cat3">
                <img width="400" height="230" src={gallery3} alt="" />
              </div>
              <div className="filter p-1 cat2 cat1">
                <img width="400" height="230" src={gallery4} alt="" />
              </div>

              <div className="filter p-1 cat1">
                <img width="400" height="230" src={gallery5} alt="" />
              </div>
              <div className="filter p-1 cat2 cat1 cat3">
                <img width="400" height="230" src={gallery6} alt="" />
              </div>
              <div className="filter p-1 cat1 cat2">
                <img width="400" height="230" src={gallery7} alt="" />
              </div>
              <div className="filter p-1 cat2 cat3">
                <img width="400" height="230" src={gallery8} alt="" />
              </div>

              <div className="filter p-1 cat1 cat3">
                <img width="400" height="230" src={gallery9} alt="" />
              </div>
              <div className="filter p-1 cat2">
                <img width="400" height="230" src={gallery10} alt="" />
              </div>
              <div className="filter p-1 cat2 cat3">
                <img width="400" height="230" src={gallery11} alt="" />
              </div>
              <div className="filter p-1 cat2 cat3 cat1">
                <img width="400" height="230" src={gallery12} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of gallery --> */}
    </>
  );
};

export default Gallery;

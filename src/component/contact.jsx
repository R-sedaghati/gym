const Contact = () => {
  return (
    <>
      {/* <!-- contact --> */}
      <section className="contact p-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 pb-4 ms-auto">
              <h3 className="text-white mb-5">با ما در ارتباط باشید</h3>
              <form action="" className="contact-form">
                <div className="form-group py-4">
                  <input
                    type="text"
                    className="form-control my-2 p-2 text-warning"
                    id="name"
                    placeholder="نام"
                    autocomplete="off"
                  />
                  <label for="name" className="label">
                    :Name
                  </label>
                </div>
                <div className="form-group py-4">
                  <input
                    type="text"
                    className="form-control my-2 p-2 text-warning"
                    id="email"
                    placeholder="ایمیل"
                    autocomplete="off"
                  />
                  <label for="email" className="label">
                    :Email
                  </label>
                </div>
                <div className="form-group py-4">
                  <input type="checkbox" id="check" />
                  <label for="check" className="text-white mt-3 mb-4">
                    اطلاعیه ها را برایم ارسال کن
                  </label>
                </div>
                <div className="d-grid">
                  <button type="button" className="btn p-2">
                    عضویت
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of contact --> */}
    </>
  );
};

export default Contact;

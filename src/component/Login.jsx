import "../login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="section page-login" style={{ direction: "ltr" }}>
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section py-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3 text-white">
                  <span style={{ fontSize: "20px" }}>Log In</span>
                  <span style={{ fontSize: "20px" }}>Sign Up</span>
                </h6>
                <input
                  type="checkbox"
                  name="reg"
                  className="checkbox"
                  id="reg"
                />
                <label for="reg"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa-sharp fa-solid fa-at fa-lg"></i>
                            </span>
                            <input
                              type="email"
                              name="logemail"
                              className="form-style form-control change-input"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                            />
                          </div>
                          <div className="input-group mt-2">
                            <span className="input-group-text">
                              <i className="fa-solid fa-lock fa-lg"></i>
                            </span>
                            <input
                              type="password"
                              name="pass"
                              className="form-style form-control change-input"
                              placeholder="Your Password"
                              id="pass"
                              autocomplete="off"
                            />
                          </div>
                          <button
                            style={{ fontSize: "20px" }}
                            onClick={() => {
                              navigate("/dashboard");
                            }}
                            className="btn btn-secondary mt-4"
                          >
                            submit
                          </button>
                          <p className="mb-0 mt-4 text-center">
                            <a
                              style={{ textDecoration: "none" }}
                              href="#0"
                              className="link"
                            >
                              Forget your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="fa-solid fa-user fa-lg"></i>
                            </span>
                            <input
                              type="text"
                              name="logname"
                              className="form-style form-control change-input"
                              placeholder="Your Full Name"
                              id="logname"
                              autocomplete="off"
                            />
                          </div>
                          <div className="input-group mt-2">
                            <span className="input-group-text">
                              <i className="fa-sharp fa-solid fa-at fa-lg"></i>
                            </span>
                            <input
                              type="email"
                              name="logemail"
                              className="form-style form-control change-input"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                            />
                          </div>
                          <div className="input-group mt-2">
                            <span className="input-group-text">
                              <i className="fa-solid fa-lock fa-lg"></i>
                            </span>
                            <input
                              type="password"
                              name="logpass"
                              className="form-style form-control change-input"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                            />
                          </div>
                          <a
                            style={{ fontSize: "20px" }}
                            href="#"
                            className="btn btn-secondary mt-4"
                          >
                            submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { Link } from "react-router-dom";
import { loginUser } from "../../service/api";
import { useHistory } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loguser = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    const data = await loginUser(user);

    if (data.status === 200) history.push("/");
    else window.alert("Invalid Credentials!");
  };
  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0 " style={{ backgroundColor: "#FCD2D1" }}>
                <div
                  className="col-lg-12 mx-auto"
                  style={{ width: "50%", backgroundColor: "#FE8F8F" }}
                >
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      {/* <img
                        src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/lotus.png"
                        style={{ width: "185px" }}
                        alt="logo"
                      /> */}
                      <h1
                        className="mt-1 mb-5 pb-1"
                        style={{
                          fontFamily: "cursive",
                          fontWeight: "700",
                          color: "#DB3056",
                        }}
                      >
                        BlogVilla
                      </h1>
                      <h3
                        className="mt-1 mb-5 pb-1"
                        style={{ fontFamily: "sans-serif", fontWeight: "700" }}
                      >
                        Sign In
                      </h3>
                    </div>

                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="email address"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" for="form2Example11">
                          Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" for="form2Example22">
                          Password
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-danger btn-block fa-lg gradient-custom-3 mb-3"
                          type="button"
                          onClick={(e) => loguser(e)}
                        >
                          Log in
                        </button>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <Link to="/register">
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Create new
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="heading">Gate to BlogVilla</h4>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;

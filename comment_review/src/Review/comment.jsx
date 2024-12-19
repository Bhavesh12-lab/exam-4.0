import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Review_comment = () => {
  const inputCheck = {
    firstname: "",
    email: "",
    password: "",
    rating: "",
  };

  const [submitForm, setSubmitForm] = useState(inputCheck);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [showError, setshowError] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  let errors;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSubmitForm({ ...submitForm, [name]: value });
  };

  const handling = () => {
    let error = {};
    if (submitForm.firstname === "") {
      error.firstname = "First name is Required";
    } else {
      if (submitForm.firstname.length < 3) {
        error.firstname = "First name minimum 3 character required";
      }
    }
    if (submitForm.password === "") {
      error.password = "Password is Required";
    } else {
      if (submitForm.password.length < 6) {
        error.password = "Password minimum 6 character required";
      }
    }
    if (submitForm.email === "") {
      error.email = "Email is Required";
    }
    setshowError(error);
    if (Object.keys(error).length > 0) {
      return false;
    } else {
      return true;
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (handling()) {
      console.log("Form Submit ===> ", submitForm);
      alert("Your review has been submitted successfully!");
      setSubmittedData(submitForm);
    } else {
      console.log("Form not submitted");
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="login-box">
          <form onSubmit={handelSubmit}>
            <h2>Validation Form</h2>
            <div className="input-box">
              <input
                type="text"
                placeholder="Name"
                name="firstname"
                value={submitForm.firstname}
                onChange={handleInput}
                onBlur={() => {
                  if (submitForm.firstname === "") {
                    errors = " First name is Requried";
                  } else {
                    if (submitForm.firstname.length < 3) {
                      errors = " First name Minimum 3 character required";
                    }
                  }
                  setshowError({ ...showError, firstname: errors });
                }}
              />
              {showError.firstname ? (
                <i style={{ color: showError.firstname ? "Red" : "" }}>
                  {showError.firstname}
                </i>
              ) : (
                ""
              )}
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="password"
                name="password"
                value={submitForm.password}
                onChange={handleInput}
                onBlur={() => {
                  if (submitForm.password === "") {
                    errors = " First name is Requried";
                  } else {
                    if (submitForm.password.length < 3) {
                      errors = " First name Minimum 3 character required";
                    }
                  }
                  setshowError({ ...showError, password: errors });
                }}
              />
              {showError.password ? (
                <i style={{ color: showError.password ? "Red" : "" }}>
                  {showError.password}
                </i>
              ) : (
                ""
              )}
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="email"
                name="email"
                value={submitForm.email}
                onChange={handleInput}
                onBlur={() => {
                  if (submitForm.email === "") {
                    errors = " First name is Requried";
                  } else {
                    if (submitForm.email.length < 3) {
                      errors = " First name Minimum 3 character required";
                    }
                  }
                  setshowError({ ...showError, email: errors });
                }}
              />
              {showError.email ? (
                <i style={{ color: showError.email ? "Red" : "" }}>
                  {" "}
                  {showError.email}{" "}
                </i>
              ) : (
                ""
              )}
            </div>
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className="star"
                    style={{ margin: "5px 2px" }}
                    size={25}
                    color={
                      currentRating <= (hover || rating)
                        ? "#ffc107"
                        : "#7f7f7f "
                    }
                  />
                </label>
              );
            })}
            <p>Your rating is {rating}</p>

            <button type="submit" style={{ margin: "10px 0" }}>
              Submit Now
            </button>

            <div className="register-link">
              <p>
                Don't have an account ? <a href="#">Register</a>
              </p>
            </div>
          </form>
          {submittedData && (
            <div
              style={{
                marginTop: "20px",
                backgroundColor: "lightgray",
                color: "black",
                borderRadius: "10px",
                border: "1px solid black",
                padding: "10px",
              }}
            >
              <h3>Submitted Data</h3>
              <hr style={{ border: "1px solid black" }} />
              <p>Name: {submittedData.firstname}</p>
              <hr />
              <p>Email: {submittedData.email}</p>
              <hr />
              <p>Password: {submittedData.password}</p>
              <hr />
              <p>Rating: {submittedData.rating}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Review_comment;

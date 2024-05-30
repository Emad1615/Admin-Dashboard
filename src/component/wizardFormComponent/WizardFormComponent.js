import { useState } from "react";
import styles from "./../../module/WizardForm.module.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { tokens } from "./../../theme";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
const INIT_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "Male",
  country: "",
  city: "",
  address: "",
  email: "",
  password: "",
};
export default function WizardFormComponent() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState(INIT_DATA);
  function handleUpdate(field) {
    setData((pervData) => {
      return { ...pervData, ...field };
    });
  }
  const { steps, step, Next, Back, isFirstIndex, isLastIndex, currentIndex } =
    MultiSteps([
      <PersonalDataForm {...data} onUpdate={handleUpdate} />,
      <AddressDataForm {...data} onUpdate={handleUpdate} />,
      <AcountDataForm {...data} onUpdate={handleUpdate} />,
    ]);
  const stepsss = ["PERSONAL DATA", "ADDRESS DATA", "ACCOUNT DATA"];
  function HandleSubmit(e) {
    e.preventDefault();
    if (!isLastIndex) Next();
    else console.log(data);
  }
  return (
    <>
      <div className="row border">
        <div className={`col-lg-5 col-md-4 col-sm-2 ${styles.bg} `}></div>
        <div className="col-lg-7 col-md-8 col-sm-10 p-10">
          <div className="text-center">
            <span className={`${styles.wizardTitle}`}>Registration</span>
          </div>
          <Box sx={{ width: "75%", margin: "auto" }}>
            <Stepper activeStep={currentIndex} alternativeLabel>
              {stepsss.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <form onSubmit={HandleSubmit}>
            <div className="mt-10 mb-10">{step}</div>
            <div className="flex flex-row justify-between items-start p-2">
              {!isFirstIndex ? (
                <button
                  className={`${styles.wizardBtn}`}
                  type="button"
                  onClick={Back}
                  style={{
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? "#b2a4ff8a"
                        : colors.blueAccent[400],
                  }}
                >
                  <ArrowBackOutlinedIcon /> Back
                </button>
              ) : (
                <>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label "
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Nor again is there anyone who loves or pursues or desires
                      to obtaini.
                    </label>
                  </div>
                </>
              )}

              <button
                className={`${styles.wizardBtn}`}
                type="submit"
                // onClick={Next}
                style={{
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "#b2a4ff8a"
                      : colors.blueAccent[400],
                }}
              >
                {isLastIndex ? (
                  "Finish"
                ) : (
                  <span>
                    Next <ArrowForwardOutlinedIcon />
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
function PersonalDataForm({ firstName, lastName, age, gender, onUpdate }) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="first name"
          required
          autoFocus
          value={firstName}
          onChange={(e) => {
            onUpdate({ firstName: e.currentTarget.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="last name"
          required
          value={lastName}
          onChange={(e) => {
            onUpdate({ lastName: e.currentTarget.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="Age"
          required
          value={age}
          onChange={(e) => {
            onUpdate({ age: e.currentTarget.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Gender</label>
        <div className="form-check">
          <label className="form-check-label mr-10" htmlFor="flexRadioDefault1">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              value="Male"
              required
              onChange={(e) => {
                onUpdate({ age: "Male" });
              }}
              checked
            />
            Male
          </label>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              value="Female"
              required
              onChange={(e) => {
                onUpdate({ age: "Female" });
              }}
            />
            Female
          </label>
        </div>
      </div>
    </>
  );
}
function AddressDataForm({ country, city, address, onUpdate }) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="country" className="form-label">
          Country
        </label>
        <input
          type="text"
          className="form-control"
          id="country"
          placeholder="country"
          required
          autoFocus
          value={country}
          onChange={(e) => {
            onUpdate({ country: e.currentTarget.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="city"
          placeholder="city"
          required
          value={city}
          onChange={(e) => {
            onUpdate({ city: e.currentTarget.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="Address"
          required
          value={address}
          onChange={(e) => {
            onUpdate({ address: e.currentTarget.value });
          }}
        />
      </div>
    </>
  );
}
function AcountDataForm({ email, password, onUpdate }) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="email"
          required
          autoFocus
          value={email}
          onChange={(e) => {
            onUpdate({ email: e.currentTarget.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          required
          value={password}
          onChange={(e) => {
            onUpdate({ password: e.currentTarget.value });
          }}
        />
      </div>
    </>
  );
}
function MultiSteps(steps = []) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function Next() {
    setCurrentIndex((i) => {
      if (i >= steps.length - 1) return i;
      else return i + 1;
    });
  }
  function Back() {
    setCurrentIndex((i) => {
      if (i <= 0) return i;
      else return i - 1;
    });
  }
  function GoTo(id) {
    setCurrentIndex(id);
  }
  return {
    steps,
    step: steps[currentIndex],
    currentIndex,
    Next,
    Back,
    GoTo,
    isFirstIndex: currentIndex === 0,
    isLastIndex: currentIndex === steps.length - 1,
  };
}

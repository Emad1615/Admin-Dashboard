import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function TextFieldPassword({ password, setPassword }) {
  const [strength, setStrength] = useState(0);
  function validate_password(password) {
    let _strength = 0;
    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      _strength += 1;
      setStrength(_strength);
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
      _strength += 1;
      setStrength(_strength);
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      _strength += 1;
      setStrength(_strength);
    }
    //If password is greater than 7
    if (password.length > 7) {
      _strength += 1;
      setStrength(_strength);
    }
  }

  return (
    <>
      <TextField
        sx={{ width: "100%", marginBottom: "8px" }}
        id="password-basic"
        label="Password"
        variant="outlined"
        required
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.currentTarget.value);
          validate_password(e.currentTarget.value);
          e.currentTarget.value.length === 0 && setStrength(0);
          console.log(strength);
        }}
      />
      <div style={{ marginBottom: "20px " }}>
        <div className="flex flex-row justify-start items-start gap-2 ">
          <div style={strength >= 1 ? ChckerCheckedStyle : CheckerStyle}></div>
          <div style={strength >= 2 ? ChckerCheckedStyle : CheckerStyle}></div>
          <div style={strength >= 3 ? ChckerCheckedStyle : CheckerStyle}></div>
          <div style={strength >= 4 ? ChckerCheckedStyle : CheckerStyle}></div>
        </div>
        <span className="text-muted text-xs">
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </span>
      </div>
    </>
  );
}
const CheckerStyle = {
  height: "5px",
  borderRadius: "5px",
  backgroundColor: "#dbdfe9",
  width: "100%",
};
const ChckerCheckedStyle = {
  backgroundColor: "#ec5447",
  height: "5px",
  borderRadius: "5px",
  width: "100%",
};

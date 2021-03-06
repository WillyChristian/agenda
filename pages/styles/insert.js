import { makeStyles } from "@material-ui/core";

const EditStyle = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
  },
  row: {
    width: "100%",
    margin: "0px",
    padding: "0px",
    display: "flex",
    justifyContent: "space-between",
  },
  form: {
    width: "100%",
    maxWidth: "700px",
    padding: "2rem 1rem",
    "& .MuiTextField-root": {
      margin: ".5em .5em",
      "& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button":
        {
          WebkitAppearance: "none",
        },
    },
    "& .MuiContainer-root": {
      justifyContent: "center",
    },
  },
  fieldset: {
    padding: "1em",
    "& .MuiSelect-select": {
      width: "150px",
    },
  },
  button: {
    height: "3.5em",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default EditStyle;

import { makeStyles } from "@material-ui/core";

//Estilos
const NavStyle = makeStyles({
  menu: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "70px",
    backgroundColor: "#444444",
    borderBottom: "4px solid #f9c400",
    fontSize: "large",
  },
  ul: {
    display: "flex",
    listStyleType: "none",
    "& :hover": {
      backgroundColor: "#f9c400",
      color: "#9e7b00",
    },
  },
  a: {
    padding: "10px",
    borderRadius: "5px",
    margin: "0px 0.5rem",
    listStyle: "none",
    textDecoration: "none",
    color: "#fff",
  },
  login: {
    float: "right",
    display: "flex",
    width: "200px",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default NavStyle;

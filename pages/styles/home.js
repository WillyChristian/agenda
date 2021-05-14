import { makeStyles } from "@material-ui/core";

const homeStyle = makeStyles({
  container: {
    height: "120vh",
    width: "100vw",
    backgroundColor: "#131313",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "66%",
    fontWeight: "700",
    backgroundColor: "#595959",
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
    borderBottom: "2px solid #999",
    color: "#fff",
  },
  table: {
    width: "66%",
    backgroundColor: "#595959",
    borderBottomRightRadius: "15px",
    borderBottomLeftRadius: "15px",
  },
  footer: {},
});

export default homeStyle;

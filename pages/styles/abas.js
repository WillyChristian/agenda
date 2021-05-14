import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#595959",
    display: "flex",
    height: 470,
    borderBottomRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    color: "#fff",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: 150,
  },
  btnContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    "& .MuiButton-root": {
      color: "#bbb",
      borderColor: "#bbb",
    },
  },
}));

export default useStyles;

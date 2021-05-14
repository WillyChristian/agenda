import { makeStyles } from "@material-ui/core";

const TableStructure = makeStyles({
  header: {
    width: "100%",
    textAlign: "center",
  },
  line: {
    padding: "2px",
  },
  check: {
    display: "flex",
    height: "40px",
    border: "1px solid #444",
    borderRadius: 5,
    justifyContent: "center",
  },
});

export default TableStructure;

import React from "react";
import TableStructure from "../../../styles/table";
import { TextField, Grid, Checkbox } from "@material-ui/core";

const Row = ({ data, id }) => {
  const style = TableStructure();
  const { handleChange, values } = { ...data };
  return (
    <Grid container xs={12}>
      <Grid item xs={2} className={style.line}>
        <TextField
          id={`${id}-horario`}
          size="small"
          variant="outlined"
          color="secondary"
          InputProps={{ style: { color: "#fff" } }}
          onChange={handleChange}
          // value={data.horario}
        />
      </Grid>
      <Grid item xs={1} className={style.line}>
        <TextField
          size="small"
          variant="outlined"
          color="secondary"
          id={`${id}-os`}
          InputProps={{ style: { color: "#fff" } }}
          onChange={handleChange}
          // value={data.os}
        />
      </Grid>
      <Grid item xs={8} className={style.line}>
        <TextField
          fullWidth
          id={`${id}-obs`}
          size="small"
          variant="outlined"
          color="secondary"
          InputProps={{ style: { color: "#fff" } }}
          onChange={handleChange}
          // value={data.obs}
        />
      </Grid>
      <Grid item xs={1} className={style.line}>
        <div className={style.check}>
          <Checkbox
            color="default"
            label="Concluído"
            id={`${id}-status`}
            onChange={handleChange}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Row;

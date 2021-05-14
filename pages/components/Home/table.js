import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import TableStructure from "../../styles/table";
import Row from "./table_components/row";

export default function SimpleTable({ data, id }) {
  const style = TableStructure();
  return (
    <Grid container>
      <Grid container xs={12}>
        <Grid item xs={2} className={style.header}>
          Horário
        </Grid>
        <Grid item xs={1} className={style.header}>
          OS
        </Grid>
        <Grid item xs={8} className={style.header}>
          Observação
        </Grid>
        <Grid item xs={1} className={style.header}>
          Concluído
        </Grid>
      </Grid>
      <Row id={`${id.id}-line-1`} data={data} />
      <Row id={`${id.id}-line-2`} data={data} />
      <Row id={`${id.id}-line-3`} data={data} />
      <Row id={`${id.id}-line-4`} data={data} />
      <Row id={`${id.id}-line-5`} data={data} />
      <Row id={`${id.id}-line-6`} data={data} />
      <Row id={`${id.id}-line-7`} data={data} />
      <Row id={`${id.id}-line-8`} data={data} />
      <Row id={`${id.id}-line-9`} data={data} />
    </Grid>
  );
}

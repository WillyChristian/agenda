import React from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "./components/Navbar/navbar";
import EditStyle from "./styles/insert";

function getDate() {
  const date = new Date().toString();
  const x = date.slice(0, 15);
  return x;
}

const Cliente = () => {
  const formStyle = EditStyle();
  //Validacao do formulário
  const formik = useFormik({
    initialValues: {
      tec_id: "", //ex.: tab-0-tecnico-0
      obs: "",
      os: "",
      horario: "",
      date: getDate(),
    },
    onSubmit: async (values) => {
      const response = await fetch("/api/create", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (response.status === 200) {
        alert("Cadastro Realizado!");
        formik.resetForm();
      } else {
        alert("Verifique os dados e tente novamente");
      }
    },
    validationSchema: Yup.object({
      obs: Yup.string().max(40, "O campo deve conter no máximo 40 caracteres"),
      os: Yup.number().required("Número da OS é obrigatório"),
      horario: Yup.string().required("Horário é obrigatório"),
      tec_id: Yup.string().required("Horário é obrigatório"),
    }),
  });

  return (
    <>
      <Navbar />;
      <div className={formStyle.container}>
        <form className={formStyle.form} onSubmit={formik.handleSubmit}>
          <fieldset className={formStyle.fieldset}>
            <legend>
              <Typography variant="h4">Novo Registro</Typography>
            </legend>
            <div className={formStyle.row}>
              <div className={formStyle.row}>
                <TextField
                  value={formik.values.os}
                  id="os"
                  label="Ordem de Serviço"
                  type="number"
                  variant="outlined"
                  placeholder="Apenas números"
                  autoComplete="off"
                  fullWidth
                  onChange={formik.handleChange}
                  helperText={formik.errors.os}
                  error={formik.errors.os}
                />
              </div>
              <div className={formStyle.row}>
                <TextField
                  value={formik.values.horario}
                  id="horario"
                  label="Horário"
                  type="text"
                  variant="outlined"
                  placeholder="Ex.: 9h30 ou 10h"
                  onChange={formik.handleChange}
                  helperText={formik.errors.horario}
                  error={formik.errors.horario}
                  fullWidth
                />
              </div>
              <div className={formStyle.row}>
                <TextField
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  disabled
                  id="date"
                  label={getDate()}
                  type="text"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </div>
            <TextField
              id="obs"
              label="Observações do serviço"
              type="text"
              variant="outlined"
              value={formik.values.obs}
              fullWidth
              onChange={formik.handleChange}
              helperText={formik.errors.obs}
              error={formik.errors.obs}
            />
            <FormControl className={formStyle.formControl}>
              <InputLabel id="select-label" id="select">
                Selecione o Técnico
              </InputLabel>
              <Select
                variant="standard"
                labelId="select-label"
                name="tec_id"
                id="tec_id"
                value={formik.values.tec_id}
                onChange={formik.handleChange}
              >
                {/* <MenuItem value="">
                  <em>Nenhum</em>
                </MenuItem> */}
                <MenuItem value={"tab-0-tecnico-0"}>Messias</MenuItem>
                <MenuItem value={"tab-1-tecnico-1"}>Rogério</MenuItem>
                <MenuItem value={"tab-2-tecnico-2"}>Thiago</MenuItem>
                <MenuItem value={"tab-3-tecnico-3"}>Willy</MenuItem>
              </Select>
            </FormControl>
            {/* <TextField
              id="tec_id"
              label="Selecione o Técnico"
              type="text"
              variant="outlined"
              value={formik.values.tec_id}
              fullWidth
              onChange={formik.handleChange}
              helperText={formik.errors.tec_id}
              error={formik.errors.tec_id}
            /> */}
            <Container>
              <Button type="submit">Cadastrar</Button>
              <Button type="button" onClick={() => formik.resetForm()}>
                Limpar formulário
              </Button>
            </Container>
          </fieldset>
        </form>
      </div>
    </>
  );
};
export default Cliente;

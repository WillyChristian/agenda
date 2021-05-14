import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import useStyles from "../../styles/abas";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tecnico-${index}`,
  };
}

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const formik = useFormik({
    initialValues: {},
  });

  //Salva os dados
  function SaveData() {
    const full_date = new Date().toString();
    const short_date = full_date.slice(0, 15).replaceAll(" ", "_");
    const body = {
      data: formik.values,
      collection: short_date,
    };
    axios
      .post("/api/create", {
        body,
      })
      .then((Response) => {
        if (Response.status === 200) {
          alert(`Retorno do servidor: ${Response.statusText}`);
        } else {
          alert(
            `Retorno do servidor:${Response.status} - ${Response.statusText}`
          );
        }
      });
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        className={classes.tabs}
      >
        <Tab label="Messias" {...a11yProps(0)} />
        <Tab label="Rogério" {...a11yProps(1)} />
        <Tab label="Tiago" {...a11yProps(2)} />
        <Tab label="Willy" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* <Table data={formik} id={a11yProps(0)} /> */}
        <h1>conteudo</h1>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <Table data={formik} id={a11yProps(1)} /> */}
        <h1>conteudo</h1>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <Table data={formik} id={a11yProps(2)} /> */}
        <h1>conteudo</h1>
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/* <Table data={formik} id={a11yProps(3)} /> */}
        <h1>conteudo</h1>
      </TabPanel>
    </div>
  );
}

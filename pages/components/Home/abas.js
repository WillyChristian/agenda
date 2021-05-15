import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import useStyles from "../../styles/abas";
import Table from "./table";

import axios from "axios";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `-tecnico-${index}`,
  };
}

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

export default function VerticalTabs({}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
        <Table id={a11yProps(0)} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Table id={a11yProps(1)} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Table id={a11yProps(2)} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Table id={a11yProps(3)} />
      </TabPanel>
    </div>
  );
}

// export async function getServerSideProps(context){

//   const agenda = await axios.get("/api/")
//   return{
//     props: {

//     }
//   }

// }

import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import { useState } from "react";
const useStyle = makeStyles({
  foother: {
    backgroundColor: "white",
    width: "100%",
    height: "30vh",
  },
  parts: {
    
  },
  h4: {
    color: "black",
    fontSize: "15px",
  },
  td :{
    
    color:"black",
    fontSize:"18px",
    width:"100px",
    textAlign:"center"
  }
});

function Foother() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyle();
  return (
    <Grid
      container
      className={classes.foother}
      spacing={spacing}
      justifyContent="center"
    >
      <Grid item md={4} sm={6} xs={12} className={classes.parts}>
        <Typography variant="h5">WORKSHOP</Typography>
        <hr />
        <Typography variant="h6" className={classes.h4}>
          Helllo kjdlksf kfjfir ssdkr qkiuze az wlcom to our website i'm and my
          nme is younes bouchbouk i wille be you r assisatnat
        </Typography>
      </Grid>

      <Grid item md={4} sm={6} xs={12} className={classes.parts}>
        <div>
          <Typography variant="h5">Pages</Typography>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div>
              <ul>
                <li>All</li>
                <li>Stock</li>
                <li>MAnli</li>
                <li>salio</li>
                <li>lmalik</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>All</li>
                <li>Stock</li>
                <li>MAnli</li>
                <li>salio</li>
                <li>lmalik</li>
              </ul>
            </div>
          </div>
        </div>
      </Grid>

      <Grid item md={4} sm={6} xs={12} className={classes.parts} >
        <Typography variant="h5">
          CONTACT
           </Typography>
          <hr />
          <table>
            <tr className={classes.td}>
              <td>Alfreds </td>
              <td>Maria Anders</td>
            
            </tr>
            <tr className={classes.td}>
              <td>Centro </td>
              <td>Francisco Chang</td>
            </tr>
            <tr className={classes.td}>
              <td>Centro </td>
              <td>Francisco Chang</td>
            </tr>
            <tr className={classes.td}>
              <td >Centro </td>
              <td>Francisco Chang</td>
            </tr>
          </table>
          
       
      </Grid>
    </Grid>
  );
}

export default Foother;

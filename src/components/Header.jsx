import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Paper , Typography , AppBar , Grid ,  } from '@material-ui/core';
import {
 
  Link
} from "react-router-dom";
import myliste  from './../utiles/navListe'
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import { InputBase } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';

const useStyle = makeStyles((theme) =>({
    border : {
        backgroundColor: theme.palette.secondary.main
    },
    appbar : {
        // border : "2px solid black",
        height : 30,
    },
    toolbar : {
        padding :"10px  10px",
        backgroundColor:"#ffffff",
        height:"40px"
    },
    listeitem : {
        // border : "1px solid black",
        
        fontWeight:"bold",
        fontStyle:"none",
        fontSize: "15px",
        color : "black",
        padding : "5px",
        width : "100px",
        textAlign : "center",
        color :"black",
       cursor:"pointer",
        '&:hover ' : {
            borderBottom :"2px solid white"
        }
    },
    navbar : {
        // border : "2px solid black",
        display:"flex",
        justifyContent:"center"
    },
    Searchbar : {

    },
    loginbar : {

    },
    iconsbox : {
        display :"flex",
        // border : "1px solid black",
        justifyContent : "right"

    },
    icons : {
        fontSize : "35px",
        color : "black",
        marginLeft:"20px"
    },
    h6 : {
        color:"black"
    }
}))
function Header() {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down("sm"));
    const xl = useMediaQuery(theme.breakpoints.down("xl"));
    const md = useMediaQuery(theme.breakpoints.down("md"));
    const xs = useMediaQuery(theme.breakpoints.down("xs"));

    const classes = useStyle()
    const {NavListe} = myliste
    console.log(sm);
    console.log("xl " +xl);
    console.log(md);
    console.log(xs);

    const TheNav = NavListe.map((item) => {
             return (
                <Link to={item.link} >
                <Typography  className={classes.listeitem}>
                  {item.title}
                </Typography>
              </Link>
             )
    })

    // console.log(TheNav);


    return (
        <div>
            
            
            <Paper  square="false" className={classes.border}>
                <Typography className={classes.h6} variant ="h6"  align="center">
                    StoreMe
                </Typography>
            </Paper >
                <div className={classes.toolbar}>
                    <Grid container style={{paddingTop:"5px"}}>
                        
                        <Grid item  md={3} xs={12} sm={1} >
                        <InputBase
                              placeholder="Search…"
              
                               inputProps={{ 'aria-label': 'search' }}
                        />
                        </Grid>

                        <Grid item  md={6} xs={12} sm={8} >
                            <div className = {classes.navbar}>
                            {TheNav}

                            </div>
                        </Grid>

                        <Grid item  md={3} xs={12} sm={3}>
                            <div className={classes.iconsbox}>
                            <Link to='/signup'>
                             <AccountBoxIcon className={classes.icons}/>
                            </Link>
                           <Link to='/login'>
                           <HomeIcon className={classes.icons}/>
                           </Link>
                            
                            </div>
                        </Grid>
                    </Grid>
                </div>
            
        
        </div>
       
        // <div>

        // </div>
    )
}

export default Header;

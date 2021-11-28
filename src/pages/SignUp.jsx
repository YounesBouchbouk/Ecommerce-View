import { Button, Grid, makeStyles, Paper, TextField } from '@material-ui/core'
import React from 'react'
const useStyle = makeStyles((theme) => ({
    container : {
        width:"100%",
        height:"85vh",
        backgroundColor:theme.palette.mine.blue,
        display:"flex",
        justifyContent:"center",
        justifyItems:"center"
    },
    loginzone :{
        // border :"1px solid black",
        width:"35%",
        height:"99%",
        backgroundColor:"white"
    },
    root :{
        margin:"50px 0px",
        // border :"1px solid black",
        textAlign:"center",
        '& > *': {
        margin :"15px 0px",
        width :"70%",
        color:"black"
        
    },
    logo :{
        
        width:"200px",
        height:"100px",
    }
        
    
    }
}))
function SignUp() {

    const classes = useStyle();

    return (
        <div className={classes.container}>
            <img src="https://images.pexels.com/photos/4109270/pexels-photo-4109270.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                            alt="logo" className={classes.logo} />
            <Grid className={classes.loginzone}>
                
                <form noValidate className={classes.root}>
                    <TextField id="standard-basic" label="Standard" variant="filled" />
                    <TextField id="standard-basic" label="Standard" variant="filled" />
                    <TextField id="standard-basic" label="Standard" variant="filled" />
                    <TextField id="standard-basic" label="Standard" variant="filled" />
                    
                    <Button variant="contained" color="primary" disableElevation>
                        SignUp 
                    </Button>
                </form>
            </Grid>
        </div>
    )
}

export default SignUp

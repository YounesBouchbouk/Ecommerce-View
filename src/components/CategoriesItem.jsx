import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid  } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Aos from 'aos'
import "aos/dist/aos.css"


const useStyle = makeStyles((theme) =>({
    catdiv  : {
        // border : "1px solid black",
        position:"absolute",
        width : "100%",
        height : "100%",
        display :"flex",
        flexDirection :"column",
        justifyContent :"center",
        textAlign :"center",

        "&:hover $btn" :{
            opacity :"1",
            marginTop :"0px"
        }
    },
    typograph : {
        marginBottom : "30px",
        fontFamily : "arial",
        fontSize : "20px",
        opacity:"0",
        color:"#F6FEAA"
    },
    btn : {
        width : "50%",
        margin : " 0 auto",
        fontSize:"20px",
        border :"none",
        fontFamily:"Arial",
        height:"50px",
        transition :"all 1s",
        opacity :"0",
        marginTop :"140px"
    },
    
}))

function CategoriesItem(props) {

    useEffect(()=> {
        Aos.init({duration :2000})

    },[])


    const classes = useStyle()
    console.log("my" + props.categorieinfo.link);
    return (
        
        <Grid  item style={{ height:"50vh" , position:"relative" , display:"flex" , justifyContent:"center" ,margin :"10px 0px"}} md={4} sm={6} xs={12}>
            <div  data-aos="fade-up" className={classes.catdiv} style = {{
                'backgroundImage': `url(${props.categorieinfo.link})`,
                backgroundSize :"cover",
                width:"95%",
            }}>
                 

                
                {/* <input type="button" className={classes.btn}  value="FIND THIS"/> */}
                <Button variant="contained" color="secondary" className={classes.btn} >
                    Secondary
                </Button>
                
            </div>
        </Grid>
    )
}

export default CategoriesItem

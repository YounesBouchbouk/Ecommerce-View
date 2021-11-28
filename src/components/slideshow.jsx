import React from 'react'
import { makeStyles } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import clsx from 'clsx';
import imageListe from './../utiles/Data';
import {Slide} from 'react-slideshow-image'
import './css.css'

const useStyle = makeStyles({
    container : {
        width: "100%",
        height:"100vh",
        backgroundColor:"orange",
        position:"relative",
        display:"flex"
    },
    arrow : {
        width:40,
        height:40,
        backgroundColor :"white",
        borderRadius : "50%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        top :0,
        bottom : 0,
        margin: "auto",
        cursor : "pointer",
        opacity : 0.5
    },
    arrowleft : {
        left:"10px"
    },
    arrowright : {
        right:"10px"
    }
})

function Slideshow() {

    const classes = useStyle();
    const {ImageListe} = imageListe;
    console.log(ImageListe);
    return (
        <div >
                     
            <Slide easing="ease">
                {ImageListe.map((item , index) =>  {
                    console.log(item.link);
                    return (
                        <div className="each-slide">
                        <div style={{'backgroundImage': `url(${item.link})` ,
                    backgroundSize:"cover"}}>
                        
                        </div>
                    </div>
                    )
                })}  
            </Slide>
           
         
        </div>
    )
}

export default Slideshow

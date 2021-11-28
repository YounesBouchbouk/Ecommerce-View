import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
const useStyle = makeStyles((theme) =>({
    container : {
        // boxShadow:"2px 1px 1pxpx",
        height :"50vh",
        display :"flex",
        justifyContent:"center",
        margin :"10px 0px",
        
        '&:hover $iconsdiv' : {
            opacity :"1",
        }
    },
    productinfo : {
        position :"relative"
    },
    iconsdiv : {
        transition : "all 1s",
        opacity :"0",
        color :"black",
        backgroundColor:"rgb(0.0.0.0,5)",
        position:"absolute",
        display :"flex",
        top : 0,
        left : 0,
        width :"100%",
        height:"100%",
        justifyContent :"center",
        alignItems: "center",
        transform : "1",
        '& :hover' : {
            transform : "scale(1.2)"
        }
    },
    icon : {
        backgroundColor :theme.palette.primary.main,
        margin :"5px",
        width : "70px",
        height : "70px",
        borderRadius :"50%",
        display : "flex",
        justifyContent :"center",
        alignItems: "center",
        cursor :"pointer",
        
    },
    h5 :{
        color :"white",
        backgroundColor:"red",
        padding :"5px",
        

    }
}))

function Productitem({prod}) {
    useEffect(()=> {
            Aos.init({duration :2000})

        },[])
    const classes = useStyle()
        
    return (
        
        <Grid item  md={4} sm={6} xs={12} className ={classes.container} key={prod._id}>
            <div data-aos='zoom-in-up'  className={classes.productinfo} style = {{
                'backgroundImage': `url(${prod.Images})`,
                backgroundSize :"cover",
                width:"95%",
                height :"100%",
                
            }}>
                {/* <Typography variant="h5" align="center" className={classes.h5}>
                        Product title
                </Typography> */}
            

                <div className={classes.iconsdiv}>
                    <div className={classes.icon}>
                    <FavoriteBorderIcon />
                    </div>
                    <div className={classes.icon}>
                        <ShoppingCartIcon />
                    </div>
                    <div className={classes.icon}>
                        <Link to={`/products/${prod._id}`}>
                            <SearchIcon />
                        </Link>
                       
                    </div>
                   
                </div>
            </div>
        </Grid>
    )
}

export default Productitem

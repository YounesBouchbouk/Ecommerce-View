import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import News from '../components/News'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Reviews from '../components/Reviews';

const useStyle = makeStyles((theme) => ({
    container :{
        width :"80%",
        margin :"20px auto"
    },
    image :{
        width:"100%"
    },
    title :{
        color :"black" ,
        fontSize :"25px",
        fontWeight :"bold",
        margin :"10px 10px"
    },
    Description :{
        color :"black" ,
        fontSize :"15px",
        fontStyle:"italic",
        margin :"10px 10px"
    },
    infogrid :{
        display :"flex",
        flexDirection :"column",
        margin :"40px 10px"
    },
    price :{
        color :"black" ,
        fontSize :"25px",
        fontStyle:"italic",
        margin :"10px 10px"
    },
    dolarsize :{
        fontSize: "30px",
        fontStyle :"none",
        fontStyle :"none"
    },
    btnzone :{
        display :"flex",
        justifyContent :"space-around"
    },
    radiogroup :{
        display :"flex",
        
        margin :"30px 0px"
    },
    radioitm :{
        width :"50px",
        height :"50px",
        backgroundColor:"red"
    },
    quantitebx :{
        
        display:"flex",
        width :"40%",
        margin:"40px auto",
        height:"40px"
    },


    quantitetxt : {
        // flex:"3",
        width:"100px",
        border:"none",
        textAlign:"center",
        fontSize:"25px"
    },
    decbtn :{
        flex:"2",
        border:"none",
        backgroundColor :theme.palette.mine.arcYellow,
        cursor:"pointer"
        
    },
    incbtn :{
        flex:"2",
        border:"none",
        cursor:"pointer"
    },
    txt :{
        color:"black"
    },
    btn :{
        width:"200px"
    }
    
}))

function SingleProduct() {
    const [quantite , setquantite] = useState(1);
    const classes = useStyle()
    return (
        <div className={classes.container}>
            <Grid container spacing={1}>
                <Grid item md={5} sm={12} xl={6}>
                    <img className={classes.image} src="https://images.pexels.com/photos/10182200/pexels-photo-10182200.jpeg" alt="Product" />
                </Grid>

                <Grid item container md={6} sm={12} xl={6} className={classes.infogrid}>

                    <Typography className={classes.title}>
                        Test
                    </Typography>

                    <Typography className={classes.Description}>
                        Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.

The first step is to style the InputBase component. Once it's styled, you can either use it directly as a text field or provide it to the select input property to have a select field.
                    </Typography>

                    <Typography className={classes.price}>
                            <span className={classes.dolarsize}>$</span> 20 
                    </Typography>

                    <div>
                            <div className={classes.radiogroup}>
                                <input className={classes.radioitm} type="radio" name="color1" id="coloa" />
                                <input  className={classes.radioitm}   type="radio" name="color2" id="coloa" />
                                <input className={classes.radioitm}  type="radio" name="color3" id="coloa" />
                            </div>
                            <div>
                                    <Typography>
                                        Quantité Valable : <span>33</span>
                                    </Typography> 
                                </div>

                            <div className={classes.quantitebx}>
                                

                                <button className={classes.decbtn} onClick={() => {
                                    
                                    if(quantite != 1) setquantite(quantite-1)
                                    else  setquantite(1)
                                }}>
                                        -
                                </button>
                                
                                    <input value={quantite} type="text" className={classes.quantitetxt} align="center" />
                                        
                                    
                                
                                <button className={classes.incbtn} onClick={() => {
                                    setquantite(quantite+1)
                                }}>
                                       +
                                </button>
                            </div>
                    </div>
                    

                    
                    <div className={classes.btnzone}>
                        <Button variant="contained" color="primary" className={classes.btn}>
                        Order NOW
                        </Button>
                        <Button variant="contained" color="secondary" className={classes.btn}>
                        <AddShoppingCartIcon />
                        </Button>
                      </div>
                </Grid>
                
        
            </Grid>


            
            <Reviews />
            <News />
        </div>
    )
}

export default SingleProduct

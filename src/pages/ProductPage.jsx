import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import News from '../components/News'
import Products from '../components/Products'

const useStyle = makeStyles((theme ) => ({

    filtercontainer :{
        marginTop:"20px",
        padding:"2px 20px",
        display:"flex",
        justifyContent:"space-between"
    },
    h2 :{
        paddingTop:"3px",
        color :"black",
        fontSize:"17px",
        marginRight :"10px"
    }, 
    box :{
        display:"flex",
        marginRight :"5px",
        justifyItems:"center",
        justifyContent:"center"
    },
    select :{
        width:"90px",
        height :"30px"
    },
    option :{
        fontSize:"15px",
        fontFamily:"Arial",
        padding:"10px"
    }
}))
function ProductPage() {
    const classes = useStyle();
    return (
        <div>
            <div className={classes.filtercontainer}>
                <div className={classes.box}>
                    <div className={classes.box}>
                         <Typography  className={classes.h2}>
                              Color
                         </Typography>

                        <select name="color" id="myco" className={classes.select}>
                            <option value="Black" className={classes.option}>BLACK</option>
                            <option value="white" className={classes.option}>WHITE</option>
                            <option value="red" className={classes.option}>RED</option>
                            <option value="green" className={classes.option}>GREEN</option>

                        </select>
                    </div>

                    <div className={classes.box}>
                    <Typography  className={classes.h2}>
                              Color
                         </Typography>

                        <select name="color" id="myco" className={classes.select}>
                            <option value="Black" className={classes.option}>BLACK</option>
                            <option value="white" className={classes.option}>WHITE</option>
                            <option value="red" className={classes.option}>RED</option>
                            <option value="green" className={classes.option}>GREEN</option>

                        </select>
                    </div>
               
                </div>

                <div className={classes.box}>
                <Typography  className={classes.h2}>
                    Order BY 
                </Typography>

                <select name="Price" id="myco" className={classes.select}>
                    <option value="Black" className={classes.option}>DESC</option>
                    <option value="white" className={classes.option}>INC</option>
                    

                </select>
                </div>
            </div>

            <div style ={{
                width:"80%",
                margin:"0 auto",
                marginTop:"20px"
            }}>
                <Products />
                <News />
            </div>
             
        </div>
    )
}

export default ProductPage

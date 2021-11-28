import { makeStyles, Paper, Typography ,Grid } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import React from 'react'

const useStyle = makeStyles({
    container : {
        width : "100%",
        height : "60vh",
        display :"flex",
        justifyContent :"center",
        alignItems :"center"
        
    },
    
    inputform :{
       
        width :'80%',
        margin:"0 auto",
        display :"flex",
        flex :"1",
        justifyContent:"space-between"

    },
    
    title :{
        fontSize :"40px",
        color:"black",
        textAlign:"center",
        margin:"10px 0px"
    },
    description :{
        fontSize :"20px",
        textAlign:"center",
        color : "black",
        margin:"20px 0px"
    }
})
function News() {
    const classes = useStyle()
    return (
        <Grid container className={classes.container}>
            <div style={{ width:"90%"}}>

            
            <Typography className ={classes.title}>
                NEWSLETTER
            </Typography>

            <Typography className ={classes.description}>
                WELCOM TO OUR NEWS LETTER PLEASE PUT YOUR EMAIL
            </Typography>
           
            <div className={classes.inputform}>
                <input type="text" value="Email Adress" style ={{
                    flex:"5" , height :"40px" ,margin:"10px 20px" ,border:'none' , fontSize :"20px",
                    backgroundColor:"#F6FEAA",
                    padding:"3px 10px"
                     }} />
                <button style ={{
                    flex:"1" , border:'none',margin:"10px 20px",
                    backgroundColor:"#C1DBE3"
                    }}> <SendIcon /></button>
            </div>

            </div>
        </Grid>
    )
}

export default News

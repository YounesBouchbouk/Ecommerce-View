import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useState =makeStyles({
    thediv :{
        padding:"15px 0",
        margin :"10px 0",
        
    },
    title :{
        fontSize:"35px",
        width:"30%",
        margin:"0 auto",
        borderBottom :"2px solid red"
    }
})
function Sectiontitle(props) {
    const classes = useState();

    return (
        <div className={classes.thediv}>
            <Typography align="center" variant="h5" className={classes.title}>
                {props.title}
            </Typography>
        </div>
    )
}

export default Sectiontitle

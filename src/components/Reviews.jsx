import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import ReviewsItem from './ReviewsItem'


const useStyle = makeStyles((theme) =>({
    container : {
        width :"90%",
        margin:"40px auto",
        
    }
} ))

function Reviews() {

    const classes = useStyle() 

    return (
        <Grid container className={classes.container}>
            <ReviewsItem />
            <ReviewsItem />
            <ReviewsItem />
        </Grid>
    )
}

export default Reviews

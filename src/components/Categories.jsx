import React from 'react'
import CategoriesItem from './CategoriesItem';
import { Grid } from '@material-ui/core';
import {CategorieListe} from './../utiles/Data'


function Categories() {
    console.log(`${process.env.PUBLIC_URL}/assets/im1.jpg`);
    return (

        

        <Grid container style = {{
            // border : "1px solid red",
            display : "flex" ,
            justifyContent:"center",
            justifyItems:"center",
        }}>
                
               {
                   CategorieListe.map(item => {
                       console.log(item);
                       return(
                        <CategoriesItem categorieinfo={item} />
                       )
                   })
               }
                

        </Grid>
    )
}

export default Categories

import React from 'react'
import Slidebare from './../components/slideshow'
import { CssBaseline, makeStyles } from '@material-ui/core'
import SectionTitle from './../components/Sectiontitle'
import Categories from './../components/Categories'
import Products from './../components/Products'
import News from '../components/News'
import { FadeTransform } from 'react-animation-components';

const useStylr =makeStyles((theme) =>({
    container :{
        width:"75%",
        margin:"0 auto",
        
    } 
}))
function Home() {
    const classes = useStylr()
    return (
        <div style={{background :"white"}}>
            <Slidebare />
            <div className={classes.container}>
                <SectionTitle title="Catégorie Section" />

                

                <Categories />

               
                <SectionTitle title="Laster Produite" />
                <Products />
                <News />
            </div>
            
        </div>
    )
}

export default Home

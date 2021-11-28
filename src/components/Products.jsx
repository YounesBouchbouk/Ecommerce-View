import { Grid, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Productitem from './Productitem'
import axios from 'axios';
function Products() {
    const [allproducts , setproducts] = useState([]);

    useEffect(()=> {
        const getproducts = async () => {
            try {
                const produ = await axios.get("http://127.0.0.1:8001/api/v1/Products");
            
            setproducts(produ.data)
           
            } catch (error) {
                console.log(error);
            }

            
        }
        getproducts();

    },[])

    
    
            return (
        
        <Grid container  >
            
            {
                allproducts.map((item) => {
                   return  <Productitem prod={item}/>
                })

            }           

        </Grid>
    )

        

    
}

export default Products

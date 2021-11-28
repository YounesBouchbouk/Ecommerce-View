import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import News from "../components/News";

const useStyle = makeStyles((theme) => ({
  container: {
    margin: "40px 0px",
  },
  bigdiv: {
    margin: "10px auto",
    width: "85%",

    display: "flex",
  },
  productinfo: {
    // border :"1px solid red",
    flex: "4",
    padding: "20px 10px",
  },
  cartsold: {
    // border :"1px solid green",
    flex: "2",
    padding: "20px 10px",
  },
  info1: {
    color: "black",
    fontSize: "15px",
    marginBottom: "10px",
  },
  proimg: {
    width: "80%",
    height: "100%",
  },
  bold: {
    fontWeight: "bold",
  },
  shippingtaxdv: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px  0px",
  },
}));

function Cart(props) {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <div className={classes.bigdiv}>
        <div className={classes.productinfo}>
          <Grid container>
            <Grid item md={3}>
              <img
                src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="productimg"
                className={classes.proimg}
              />
            </Grid>

            <Grid item md={6}>
              <Typography className={classes.info1}>
                <span className={classes.bold}>Product Name : </span> First
                Product
              </Typography>

              <Typography className={classes.info1}>
                <span className={classes.bold}>Id :</span> 332333K34JJ44432
              </Typography>

              <Typography className={classes.info1}>
                <span className={classes.bold}>Color :</span> black
              </Typography>

              <Typography className={classes.info1}>
                <span className={classes.bold}>quantité :</span> 3
              </Typography>
            </Grid>

            <Grid item md={2}>
              <Typography className={classes.info1}>
                <span className={classes.bold}>Total price :</span> 50$
              </Typography>
            </Grid>

            <hr />
          </Grid>

          <hr />

          <Grid container>
            <Grid item md={3}>
              <img
                src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="productimg"
                className={classes.proimg}
              />
            </Grid>

            <Grid item md={6}>
              <Typography className={classes.info1}>
                <span className={classes.bold}>Product Name : </span> First
                Product
              </Typography>

              <Typography className={classes.info1}>
                <span className={classes.bold}>Id :</span> 332333K34JJ44432
              </Typography>

              <Typography className={classes.info1}>
                <span className={classes.bold}>Color :</span> black
              </Typography>

              <Typography className={classes.info1}>
                <span className={classes.bold}>quantité :</span> 3
              </Typography>
            </Grid>

            <Grid item md={2}>
              <Typography className={classes.info1}>
                <span className={classes.bold}>Total price :</span> 50$
              </Typography>
            </Grid>

            <hr />
          </Grid>

          <hr />

          <Grid container>
            <Grid item md={3}>
              <img
                src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="productimg"
                className={classes.proimg}
              />
            </Grid>

            <Grid item md={6}>
              <Typography className={classes.info1}>
                <span className={classes.bold}>Product Name : </span> First
                Product
              </Typography>

              <Typography className={classes.info1}>
                <span className={classes.bold}>Id :</span> 332333K34JJ44432
              </Typography>

              <Typography className={classes.info1}>
                <span className={classes.bold}>Color :</span> black
              </Typography>

              <Typography className={classes.info1}>
                <span className={classes.bold}>quantité :</span> 3
              </Typography>
            </Grid>

            <Grid item md={2}>
              <Typography className={classes.info1}>
                <span className={classes.bold}>Total price :</span> 50$
              </Typography>
            </Grid>

            <hr />
          </Grid>

          <hr />
        </div>

        <div className={classes.cartsold}>
          <Typography variant="h5" style={{ marginBottom: "20px" }}>
            ORDER SUMMARY
          </Typography>
          <hr />
          <div className={classes.shippingtaxdv}>
            <Typography className={classes.info1}>
              <span className={classes.bold}>Subtotal : </span>
            </Typography>

            <Typography className={classes.info1}>20 $</Typography>
          </div>

          <div className={classes.shippingtaxdv}>
            <Typography className={classes.info1}>
              <span className={classes.bold}>Estimate Shipping : </span>
            </Typography>

            <Typography className={classes.info1}>Free</Typography>
          </div>

          <div className={classes.shippingtaxdv}>
            <Typography className={classes.info1}>
              <span className={classes.bold}>Shipping discount </span>
            </Typography>

            <Typography className={classes.info1}>0</Typography>
          </div>

          <div className={classes.shippingtaxdv}>
            <Typography className={classes.info1}>
              <span className={classes.bold}>Total </span>
            </Typography>

            <Typography className={classes.info1}>500$</Typography>
          </div>

          <div
            style={{
              // border :"1px solid black" ,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Button
              variant="outlined"
              style={{ width: "250px", margin: "10px auto" }}
            >
              Checkout
            </Button>

            <Button
              variant="outlined"
              style={{ width: "250px", margin: "10px auto" }}
            >
              Keep Shipping
            </Button>
          </div>
        </div>
      </div>

      <News />
    </div>
  );
}

export default Cart;

import React from 'react'
import { Typography, Button, Divider} from "@material-ui/core"
import {Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js"
import {loadStrips} from "@stripe/stripe-js"
import Review from "./Review"

const PaymentForm = ({checkoutToken}) => {
    return (
        <>
            <Review checkoutToken={checkoutToken}/>
            <Divider />
            <Typography></Typography>
        </>
    )
}

export default PaymentForm

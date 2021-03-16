import React, {useState} from 'react'
import {InputLable, Select, MenuItem, Button, Grid, Typography} from "@material-ui/core"
import {useForm, FromProvider} from "react-hook-form"
import FormInput from "./CustomTextForm"
import {commerce} from "../../lib/commerce"


const AddressForm = () => {
    const method = useForm()
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState("")
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState("")
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState("")
    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FromProvider {...method}>
                <form onSubmit="">
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="FirstName" />
                        <FormInput required name="lastName" label="LastName" />
                        <FormInput required name="address" label="Address" />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="city" label="City" />
                        <FormInput required name="zip" label="ZIP" />
                        <Grid item xs={12} sm={6}>
                            <InputLable>Shipping Country</InputLable>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    select me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLable>Shipping Subdivision</InputLable>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    select me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLable>Shipping Option</InputLable>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    select me
                                </MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </FromProvider>
        </>
    )
}

export default AddressForm

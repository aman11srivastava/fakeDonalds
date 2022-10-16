import React from 'react'
import '../../styles/shipping.scss';
import Input from '../common/Input';
import {Country, State, City} from 'country-state-city';

const Shipping = () => {

    return (
        <section className='shipping'>
            <main>
                <h1>Shipping Details</h1>
                <form>
                    <Input label={"House No."} onChange={() => { }} value={""} placeholder={"Enter House No."} />
                    <Input label={"City"} onChange={() => { }} value={""} placeholder={"Enter City"} />
                    <div>
                        <label>Country</label>
                        <select>
                            <option value={""}>Country</option>
                            {Country.getAllCountries().map(country => (
                                <option value={country.isoCode} key={country.isoCode}>{country.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>State</label>
                        <select>
                            <option value={""}>State</option>
                            {State.getStatesOfCountry("IN").map(state => (
                                <option value={state.isoCode}>{state.name}</option>
                            ))}
                        </select>
                    </div>
                    <Input type="number" label={"Pincode"} onChange={() => { }} value={""} placeholder={"Enter Pincode."} />
                    <Input type="number" label={"Contact Number"} onChange={() => { }} value={""} placeholder={"Enter Contact Number"} />
                    <button type='submit'>Confirm Order</button>
                </form>
            </main>
        </section>
    )
}

export default Shipping

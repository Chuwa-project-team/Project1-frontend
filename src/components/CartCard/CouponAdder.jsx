/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { validateCoupon } from '../../services/coupon';

function CouponAdder({setDiscount}) {
    const [couponCode, setCouponCode] = useState('');

    const handleCouponChange = (e) => {
        setCouponCode(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const {discount} = await validateCoupon(couponCode);
            // Assuming the API responds with a discount amount and a message.
            setDiscount(discount);

        } catch (error) {
            setDiscount(0);
            console.log('Error validating the coupon.');
        }
    };

    return (
        <div>
            <h2>Apply Coupon</h2>
            <input
                type="text"
                placeholder="Enter your coupon"
                value={couponCode}
                onChange={handleCouponChange}
                style={{ margin: "10px 10px 0 0px", width: "130px", height: "30px" }}
            />
            <button onClick={handleSubmit}>Apply</button>
        </div>
    );
}

export default CouponAdder;
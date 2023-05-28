import React, { useState } from 'react';
import axios from 'axios';
import { Button, Spinner } from 'react-bootstrap';
import { primaryColor } from '../utils/company_colors';

const SelcomPayment = () => {
  const [paymentUrl, setPaymentUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const initiatePayment = async () => {
    setUploading(true)
    try {
      // Make a POST request to Selcom API to create a payment request
      const response = await axios.post('https://api.selcom.co.tz/payments', {
        amount: 100, // Payment amount
        currency: 'TZS', // Currency
        description: 'Payment for Order #123', // Payment description
      });

      const { payment_url } = response.data;
      setUploading(false)

      // Redirect the user to the Selcom payment gateway
      window.location.href = payment_url;
    } catch (error) {
      console.error('Failed to initiate payment:', error);
      setUploading(false)
    }
  };

  return (
    <div>
        <Button type='submit' onClick={initiatePayment} className='btn w-100 mt-3 text-white py-3' style={{backgroundColor:primaryColor}}>
                                 {uploading?<Spinner/>:"Pay now"}
                            </Button>
      
    </div>
  );
};

export default SelcomPayment;

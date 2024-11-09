import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom'; // Nếu bạn sử dụng React Router
import './index.scss'

const PaymentConfirmation = () => {
    const [orderId] = useState(4);
    const [paymentUrl, setPaymentUrl] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchPaymentUrl = async () => {
            try {
                const response = await axios.post('/api/payment/confirm', {
                    orderId,
                });
                setPaymentUrl(response.data.paymentUrl);
                setMessage(response.data.message);
            } catch (error) {
                setMessage('Error retrieving payment URL');
            }
        };

        fetchPaymentUrl();
    }, [orderId]);

    // const handlePaymentConfirmation = async () => {
    //     try {
    //         const response = await axios.post('/payment/payment/{orderId}', {
    //             bankCode: 'your_bank_code', // Thay thế bằng mã ngân hàng thực tế nếu cần
    //             orderId,
    //             totalAmount,
    //             code: 'your_code', // Thay thế bằng mã code thực tế nếu cần
    //             message: 'Xác nhận thanh toán', // Thông điệp thực tế
    //         });

    //         if (response.status === 200) {
    //             const { paymentUrl } = response.data;
    //             // Chuyển hướng đến trang thanh toán VNP
    //             window.location.href = paymentUrl; // Hoặc sử dụng history.push(paymentUrl) nếu cần
    //         }
    //     } catch (error) {
    //         console.error('Error confirming payment:', error);
    //         setMessage('Có lỗi xảy ra khi xác nhận thanh toán.');
    //     }
    // };

    return (
        <div>
            <h1>Payment Confirmation</h1>
            {message && <p>{message}</p>}
            {paymentUrl && (
                <div>
                    <p>Your payment URL:</p>
                    <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
                        {paymentUrl}
                    </a>
                </div>
            )}
        </div>
    );
};

export default PaymentConfirmation;
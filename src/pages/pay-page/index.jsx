import React, { useState } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom'; // Nếu bạn sử dụng React Router

const PaymentConfirmation = () => {
    // Giả lập orderId và totalAmount
    const orderId = Math.floor(Math.random() * 10000); // Giả lập orderId ngẫu nhiên từ 0 đến 9999
    const totalAmount = 100000; // Giả lập tổng số tiền là 100,000 VND

    const [message, setMessage] = useState('');
    //const history = useHistory(); // Sử dụng hook useHistory để chuyển hướng

    const handlePaymentConfirmation = async () => {
        try {
            const response = await axios.post('http://localhost:8080/payment/payment', {
                bankCode: 'your_bank_code', // Thay thế bằng mã ngân hàng thực tế nếu cần
                orderId,
                totalAmount,
                code: 'your_code', // Thay thế bằng mã code thực tế nếu cần
                message: 'Xác nhận thanh toán', // Thông điệp thực tế
            });

            if (response.status === 200) {
                const { paymentUrl } = response.data;
                // Chuyển hướng đến trang thanh toán VNP
                window.location.href = paymentUrl; // Hoặc sử dụng history.push(paymentUrl) nếu cần
            }
        } catch (error) {
            console.error('Error confirming payment:', error);
            setMessage('Có lỗi xảy ra khi xác nhận thanh toán.');
        }
    };

    return (
        <div className="payment-confirmation">
            <h2>Xác Nhận Thanh Toán</h2>
            <div>
                <p>Tổng Số Tiền: {totalAmount} VND</p>
                <p>Mã Đơn Hàng: {orderId}</p>
                <button onClick={handlePaymentConfirmation}>Xác Nhận Đặt Hàng</button>
            </div>

            {message && <p>{message}</p>}
        </div>
    );
};

export default PaymentConfirmation;
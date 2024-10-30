// src/components/Feedback.js
import React from 'react';
import { Form, Input, Button, message } from 'antd';
import './index.scss';

const FeedbackPage = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        // Handle sending feedback here
        console.log(values);
        message.success('Cảm ơn bạn đã gửi phản hồi!');
    };

    return (
        <div className="feedback-container">
            <h1>Phản hồi</h1>
            <Form form={form} onFinish={onFinish}>
                <Form.Item name="name" rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}>
                    <Input placeholder="Tên" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, message: 'Vui lòng nhập email!' }]}>
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name="message" rules={[{ required: true, message: 'Vui lòng nhập nội dung!' }]}>
                    <Input.TextArea placeholder="Nội dung" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Gửi
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default FeedbackPage;
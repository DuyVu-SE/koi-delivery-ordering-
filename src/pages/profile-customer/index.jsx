import React, { useState } from 'react';
import { Layout, Menu, Card, Col, Row, Typography, Input, Button, Tabs } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;
const { Title } = Typography;
const { TabPane } = Tabs;

const ProfileCustomer = () => {
    const [selectedKey, setSelectedKey] = useState('1');

    const customer = {
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@example.com',
        phone: '0123456789',
        address: '123 Đường ABC, Quận 1, TP.HCM',
    };

    const handleMenuClick = (key) => {
        setSelectedKey(key);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="1" icon={<UserOutlined />} onClick={() => handleMenuClick('1')}>
                        Hồ sơ của tôi
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        background: '#fff',
                    }}
                >
                    {selectedKey === '1' && (
                        <Card title="Hồ Sơ Của Tôi" style={{ width: '100%', maxWidth: 600, borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Thông tin cá nhân" key="1">
                                    <Title level={4}>Thông tin chi tiết</Title>
                                    <Row gutter={[16, 16]}>
                                        <Col span={24}>
                                            <strong>Tên:</strong> <span style={{ fontSize: '16px', color: '#555' }}>{customer.name}</span>
                                        </Col>
                                        <Col span={24}>
                                            <strong>Email:</strong> <span style={{ fontSize: '16px', color: '#555' }}>{customer.email}</span>
                                        </Col>
                                        <Col span={24}>
                                            <strong>Số điện thoại:</strong> <span style={{ fontSize: '16px', color: '#555' }}>{customer.phone}</span>
                                        </Col>
                                        <Col span={24}>
                                            <strong>Địa chỉ:</strong> <span style={{ fontSize: '16px', color: '#555' }}>{customer.address}</span>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="Đổi mật khẩu" key="2">
                                    <Row gutter={[16, 16]}>
                                        <Col span={24}>
                                            <Input.Password placeholder="Mật khẩu mới" />
                                        </Col>
                                        <Col span={24}>
                                            <Input.Password placeholder="Xác nhận mật khẩu" />
                                        </Col>
                                        <Col span={24}>
                                            <Button type="primary" style={{ width: '100%' }}>
                                                Cập nhật mật khẩu
                                            </Button>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </Tabs>
                        </Card>
                    )}
                </Content>
            </Layout>
        </Layout>
    );
};

export default ProfileCustomer;
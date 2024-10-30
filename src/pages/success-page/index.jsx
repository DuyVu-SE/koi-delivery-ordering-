import { Button, Result } from "antd";

function SuccessPage() {
    return (
        <div>
            <Result
                status="success"
                title="Order Created Successfully!"
                subTitle="Your order has been created."
                extra={[
                    <Button type="primary" key="console">
                        Back homepage
                    </Button>,
                    <Button key="buy" >Buy Again</Button>,
                ]}
            />
        </div>
    );


}

export default SuccessPage;
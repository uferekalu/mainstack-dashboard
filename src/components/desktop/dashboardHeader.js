import { Form } from "react-bootstrap";

export default function DashboardHeader(props) {
    return (
        <>
            <div style={{
                display: 'flex',
                height: "68px",
                width: '100%',
                paddingLeft: '60px',
                paddingTop: "22px",
                paddingBottom: "22px",
                background: "rgba(255, 255, 255, 0.9)"
            }}>
                <Form.Label style={{
                    fontFamily: 'Söhne',
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: '#131316',
                    fontWeight: "600",
                    lineSpacing: '-0.015em'
                }}>
                    Dashboard
                </Form.Label>
            </div>
        </>
    )
}
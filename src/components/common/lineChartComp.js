import { Form } from "react-bootstrap";

export default function LineChartComp(props) {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: "100%",
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px'
                }}>
                    <Form.Label style={{
                        fontFamily: 'Söhne',
                        fontSize: "16px",
                        color: '#131316',
                        fontWeight: 'bold'
                    }}>
                        Page Views
                    </Form.Label>
                    <Form.Label style={{
                        fontFamily: 'Söhne',
                        fontSize: "12px",
                        color: '#131316',
                    }}>
                        All Time
                    </Form.Label>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '60px'
                }}>
                    <img style={{
                        maxWidth: '100%',
                        width: "15px",
                        height: '15px'
                    }} src={process.env.PUBLIC_URL + "/assets/images/info.png"}
                        alt="info" />
                </div>
            </div>
        </>
    )
}
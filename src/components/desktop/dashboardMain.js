import { Button, Form } from "react-bootstrap";
import LineChartComp from "../common/lineChartComp";
import TopLocationsPieChart from "../common/topLocationsPieChart";
import TopReferralPieChart from "../common/topReferralPieChart";

export default function DashboardMain(props) {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                paddingLeft: '60px',
                paddingRight: '60px',
                marginBottom: '100px'
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "90%",
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: "10px"
                    }}>
                        <img
                            style={{
                                width: '240px',
                                height: "22px",
                                maxWidth: '100%'
                            }}
                            src={process.env.PUBLIC_URL + "/assets/images/greet.png"} alt="greet" />
                        <Form.Label style={{
                            fontFamily: 'Söhne',
                            fontSize: "14px",
                            lineHeight: "12px",
                            color: '#31373D',
                        }}>
                            Check out your dashboard summary
                        </Form.Label>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center"
                    }}>
                        <Form.Label style={{
                            fontFamily: 'Söhne',
                            fontSize: "14px",
                            lineHeight: "12px",
                            color: '#FF5403',
                        }}>
                            View analytics
                        </Form.Label>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    gap: "40px",
                    marginTop: '20px',
                    paddingLeft: '16px'
                }}>
                    <Form.Label style={{
                        fontFamily: 'Söhne',
                        fontSize: "12px",
                        color: '#31373D',
                        fontWeight: 'bold'
                    }}>
                        1 Day
                    </Form.Label>
                    <Form.Label style={{
                        fontFamily: 'Söhne',
                        fontSize: "12px",
                        color: '#31373D',
                        fontWeight: 'bold'
                    }}>
                        3 Days
                    </Form.Label>
                    <Form.Label style={{
                        fontFamily: 'Söhne',
                        fontSize: "12px",
                        color: '#31373D',
                        fontWeight: 'bold'
                    }}>
                        7 Days
                    </Form.Label>
                    <Form.Label style={{
                        fontFamily: 'Söhne',
                        fontSize: "12px",
                        color: '#31373D',
                        fontWeight: 'bold'
                    }}>
                        30 Days
                    </Form.Label>
                    <Button style={{
                        display: 'flex',
                        padding: "5px 8px",
                        border: '1px solid #FF5403',
                        background: "#FFDDCD",
                        borderRadius: '100px',
                        color: '#FF5403',
                        fontWeight: '400',
                        fontSize: '12px',
                        marginTop: '-5px'
                    }}>
                        All Time
                    </Button>
                    <Form.Label style={{
                        fontFamily: 'Söhne',
                        fontSize: "12px",
                        color: '#31373D',
                        fontWeight: 'bold'
                    }}>
                        Custom Date
                    </Form.Label>
                </div>
                <div style={{
                    width: '90%',
                    height: "370px",
                    paddingTop: "32px",
                    paddingLeft: '24px',
                    paddingRight: "24px",
                    paddingBottom: '22px'
                }}>
                    <LineChartComp
                        dateAndMonths={props.dateAndMonths}
                        viewsValues={props.viewsValues}
                        graphValues={props.graphValues}
                    />
                </div>
                <div style={{
                    display: 'flex',
                    width: '90%',
                    justifyContent: 'space-between',
                    gap: '10px',
                    marginTop: '24px'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: '24px',
                        paddingLeft: '24px',
                        paddingRight: '24px',
                        width: "44%",
                        height: "230px",
                        border: "1px solid #EFF1F6",
                        borderRadius: "6px"
                    }}>
                        <TopLocationsPieChart
                            flags={props.flags}
                            allData={props.allData}
                            colors={props.colors}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: '24px',
                        paddingLeft: '24px',
                        paddingRight: '24px',
                        width: "44%",
                        height: "230px",
                        border: "1px solid #EFF1F6",
                        borderRadius: "6px"
                    }}>
                        <TopReferralPieChart
                            socials={props.socials}
                            allData={props.allData}
                            socialColors={props.socialColors}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
import { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import SidebarContent from "../common/sidebarContent";
import LineChartComp from "../common/lineChartComp";
import TopLocationsPieChart from "../common/topLocationsPieChart";
import TopReferralPieChart from "../common/topReferralPieChart";

export default function MobileDashboard(props) {
    const ref = useRef()
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handler = (event) => {
            if (menuOpen && ref.current && !ref.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
        };
    }, [menuOpen]);
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    margin: 0,
                    padding: '20px'
                }}>
                <div style={menuOpen ? {
                    display: 'block',
                    position: "absolute",
                    top: "3.7rem",
                    left: "25px",
                    border: '1px solid #E7E7E7',
                    width: "14rem",
                    padding: '5px 10px',
                    zIndex: 200,
                    background: "#d3d3d3",
                    height: "100vh"
                } : {
                    display: "none"
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: "5px"
                    }}>
                        <SidebarContent />
                    </div>
                </div>
                <div
                    ref={ref}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: "90%"
                    }}>
                    <div style={{
                        display: "flex",
                        gap: '10px'
                    }}>
                        <img
                            style={{
                                width: '40px',
                                height: "40px",
                                maxWidth: "100%"
                            }}
                            src={process.env.PUBLIC_URL + "/assets/images/mainstack-logo.png"} alt="logo" />
                        <Form.Label style={{
                            fontFamily: 'Söhne',
                            fontSize: "16px",
                            lineHeight: "24px",
                            color: '#131316',
                            fontWeight: "600",
                            lineSpacing: '-0.015em',
                            marginTop: "5px"
                        }}>
                            Dashboard
                        </Form.Label>
                    </div>
                    <img
                        onClick={() => setMenuOpen((prevState) => !prevState)}
                        style={{
                            marginTop: "7px",
                            width: '20px',
                            height: "20px",
                            maxWidth: "100%",
                            cursor: 'pointer'
                        }} src={menuOpen ? process.env.PUBLIC_URL + "/assets/images/close.png" :
                            process.env.PUBLIC_URL + "/assets/images/hamburger.png"} alt="logo" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    marginTop: '20px',
                    paddingLeft: '10px',
                    paddingRight: '20px',
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
                                    width: '200px',
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
                </div>
                <div style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: '30px',
                    paddingLeft: '10px'
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
                    
                    paddingBottom: '22px',
                }}>
                    <LineChartComp
                        dateAndMonths={props.dateAndMonths}
                        viewsValues={props.viewsValues}
                        graphValues={props.graphValues}
                    />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '24px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    width: "87%",
                    height: "230px",
                    border: "1px solid #EFF1F6",
                    borderRadius: "6px",
                    marginTop: "60px"
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
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    width: "87%",
                    height: "230px",
                    border: "1px solid #EFF1F6",
                    borderRadius: "6px",
                    marginTop: "20px"
                }}>
                    <TopReferralPieChart
                        socials={props.socials}
                        allData={props.allData}
                        socialColors={props.socialColors}
                    />
                </div>
            </div>
        </>
    )
}
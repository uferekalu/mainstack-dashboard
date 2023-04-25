import { Form } from "react-bootstrap";

export default function TopLocationsPieChart(props) {
    return (
        <>
            <div style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                gap: '10px',
            }}>
                <Form.Label style={{
                    fontFamily: 'Söhne',
                    fontSize: "14px",
                    color: '#31373D',
                    fontWeight: 'bold'
                }}>
                    Top Locations
                </Form.Label>
                <Form.Label style={{
                    fontFamily: 'Söhne',
                    fontSize: "12px",
                    color: '#FF5403',
                    fontWeight: 'bold'
                }}>
                    View full reports
                </Form.Label>
            </div>
            <div style={{
                marginTop: "20px",
                display: 'flex',
                width: '100%',
                justifyContent: "space-between",
                gap: '10px'
            }}>
                <div style={{
                    width: "48%",
                    display: 'flex',
                    gap: '10px'
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: 'column',
                        gap: '10px',
                        width: "10%"
                    }}>
                        {props.flags.map((flag, idx) => (
                            <img
                                key={`${idx}-${flag}`}
                                style={{
                                    maxWidth: '100%',
                                    width: "21px",
                                    height: "15px"
                                }} src={process.env.PUBLIC_URL + "/assets/" + flag} alt={flag} />
                        ))}
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: 'column',
                        width: "90%",
                        gap: "10px"
                    }}>
                        {props.allData?.top_locations.map((data, idx) => {
                            let bgColor
                            if (data.country === "Nigeria") {
                                bgColor = (
                                    <div
                                        key={idx}
                                        style={{
                                            width: '10px',
                                            height: "10px",
                                            background: "#599EEA",
                                            borderRadius: '50%',
                                            marginLeft: '2px',
                                            marginTop: "3px"
                                        }}>
                                    </div>
                                )
                            }
                            if (data.country === "Germany") {
                                bgColor = (
                                    <div
                                        key={idx}
                                        style={{
                                            width: '10px',
                                            height: "10px",
                                            background: "#844FF6",
                                            borderRadius: '50%',
                                            marginLeft: '2px',
                                            marginTop: "3px"
                                        }}>
                                    </div>
                                )
                            }
                            if (data.country === "Ghana") {
                                bgColor = (
                                    <div
                                        key={idx}
                                        style={{
                                            width: '10px',
                                            height: "10px",
                                            background: "#0FB77A",
                                            borderRadius: '50%',
                                            marginLeft: '2px',
                                            marginTop: "3px"
                                        }}>
                                    </div>
                                )
                            }
                            if (data.country === "Finland") {
                                bgColor = (
                                    <div
                                        key={idx}
                                        style={{
                                            width: '10px',
                                            height: "10px",
                                            background: "#FAB70A",
                                            borderRadius: '50%',
                                            marginLeft: '2px',
                                            marginTop: "3px"
                                        }}>
                                    </div>
                                )
                            }
                            if (data.country === "United Kingdom") {
                                bgColor = (
                                    <div
                                        key={idx}
                                        style={{
                                            width: '10px',
                                            height: "10px",
                                            background: "#F09468",
                                            borderRadius: '50%',
                                            marginLeft: '2px',
                                            marginTop: "3px"
                                        }}>
                                    </div>
                                )
                            }
                            let result = (<div key={idx}
                                style={{
                                    display: 'flex',
                                    gap: "5px"
                                }}>
                                <Form.Label style={{
                                    fontFamily: 'Söhne',
                                    fontSize: "12px",
                                    color: '#31373D',
                                    marginTop: '-1px'
                                    // fontWeight: 'bold'
                                }}>
                                    {data.country}
                                </Form.Label>
                                <Form.Label style={{
                                    fontFamily: 'Söhne',
                                    fontSize: "12px",
                                    color: '#31373D',
                                    fontWeight: 'bold'
                                }}>
                                    {`${data.percent}%`}
                                </Form.Label>
                                {bgColor}
                            </div>)
                            return result
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
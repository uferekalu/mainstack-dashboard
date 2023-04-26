import { Form } from "react-bootstrap";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function TopReferralPieChart(props) {
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
                    Top Referral source
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
                        {props.socials.map((social, idx) => (
                            <img
                                key={`${idx}-${social}`}
                                style={{
                                    maxWidth: '100%',
                                    width: '15px',
                                    height: "15px"
                                }} src={process.env.PUBLIC_URL + "/assets/" + social} alt={social}
                            />
                        ))}
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: 'column',
                        width: "90%",
                        gap: "10px"
                    }}>
                        {props.allData?.top_sources.map((data, idx) => {
                            let bgColor
                            if (data.source === "google") {
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
                            if (data.source === "instagram") {
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
                            if (data.source === "facebook") {
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
                            if (data.source === "linkedin") {
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
                                    {`${data.source[0].toUpperCase()}${data.source.slice(1)}`}
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
                <div style={{
                    width: "48%",
                    display: 'flex',
                    gap: '10px',
                    marginTop: '-30px'
                }}>
                    <ResponsiveContainer width="100%" aspect={1}>
                        <PieChart width={160} height={160}>
                            <Pie
                                data={props.allData?.top_sources}
                                cx={"50%"}
                                cy={"50%"}
                                innerRadius={30}
                                outerRadius={50}
                                fill="#82ca9d"
                                dataKey="percent">
                                {props.allData?.top_sources.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={props.socialColors[index % props.socialColors?.length]} />
                                ))}
                            </Pie>
                            {/* <Tooltip content={<CustomTooltip />} /> */}
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}
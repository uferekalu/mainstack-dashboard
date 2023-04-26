import { Form } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function LineChartComp(props) {
    const isMobile = useMediaQuery({
        query: "(max-width: 1060px)",
      });

    const data = [
        {
            "date": "31 Jul",
            "value": 1
        },
        {
            "date": "01 Aug",
            "value": 3
        },
        {
            "date": "02 Aug",
            "value": 3
        },
        {
            "date": "03 Aug",
            "value": 7
        },
        {
            "date": "04 Aug",
            "value": 8
        },
        {
            "date": "05 Aug",
            "value": 5
        },
        {
            "date": "06 Aug",
            "value": 20
        },
        {
            "date": "07 Aug",
            "value": 50
        },
        {
            "date": "08 Aug",
            "value": 100
        },
        {
            "date": "09 Aug",
            "value": 2
        },
    ]
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
            <div style={{
                display: "flex",
                width: "100%",
                marginTop: "40px"
            }}>
                <ResponsiveContainer width="90%" aspect={isMobile ? 2 : 3}>
                    <LineChart
                        data={data}
                        width={500}
                        height={300}
                        margin={{
                          top: 15,
                          right: 30,
                          left: 0,
                          bottom: 5,
                        }}>
                        <CartesianGrid contentStyle={{
                            border: '1px dashed #DBDEE6'
                        }} horizontal="true" vertical="" stroke="#DBDEE6"/>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff", fontSize: '10px' }} itemStyle={{ color: "#fff" }} cursor={false} />
                        <Legend />
                        <Line type="monotone" dataKey="value" stroke="red" activeDot={{ r: 6 }} />
                    </LineChart>

                </ResponsiveContainer>
            </div>
        </>
    )
}
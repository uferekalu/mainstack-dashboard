export default function CustomTooltip ({ active, payload, label }) {
    if (active) {
        return (
            <div
                className="custom-tooltip"
                style={{
                    backgroundColor: "#ffff",
                    padding: "5px",
                    border: "1px solid #cccc"
                }}
            >
                <label>{`${payload[0].country} : ${payload[0].percent}%`}</label>
            </div>
        );
    }
    return null;
};
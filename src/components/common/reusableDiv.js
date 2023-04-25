import { Form } from "react-bootstrap";

export default function ReusableDiv(props) {
    return (
        <>
            <div style={props.style}>
                <img style={props.imgStyle}
                    src={props.imgSrc}
                    alt={props.name}
                />
                <Form.Label style={props.captionStyle}>
                    {props.caption}
                </Form.Label>
            </div>
        </>
    )
}
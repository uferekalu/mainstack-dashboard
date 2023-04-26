import { Form } from "react-bootstrap";
import ReusableDiv from "./reusableDiv";
import { useMediaQuery } from "react-responsive";

export default function SidebarContent(props) {
    const isMobile = useMediaQuery({
        query: "(max-width: 1060px)",
    });
    return (
        <>
            <ReusableDiv
                style={isMobile ? {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '10px',
                    paddingLeft: '5px'
                } : {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '30px',
                    paddingLeft: '5px'
                }}
                imgSrc={process.env.PUBLIC_URL + "/assets/images/dashboard.png"}
                name="dashboard"
                captionStyle={{
                    fontFamily: 'Söhne',
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: '#FF5403',
                    marginTop: '-5px',
                }}
                caption="Dashboard"
                imgStyle={{
                    width: '13px',
                    height: "13px",
                    maxWidth: '100%'
                }}
            />
            <ReusableDiv
                style={isMobile ? {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '10px',
                    paddingLeft: '5px'
                } : {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '20px',
                    paddingLeft: '5px'
                }}
                imgSrc={process.env.PUBLIC_URL + "/assets/images/edit.png"}
                name="dashboard"
                captionStyle={{
                    fontFamily: 'Söhne',
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: '#4D5760',
                    marginTop: '-5px',
                }}
                caption="Item 1"
                imgStyle={{
                    width: '13px',
                    height: "13px",
                    maxWidth: '100%'
                }}
            />
            <ReusableDiv
                style={isMobile ? {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '10px',
                    paddingLeft: '5px'
                } : {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '20px',
                    paddingLeft: '5px'
                }}
                imgSrc={process.env.PUBLIC_URL + "/assets/images/group.png"}
                name="dashboard"
                captionStyle={{
                    fontFamily: 'Söhne',
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: '#4D5760',
                    marginTop: '-5px',
                }}
                caption="Item 2"
                imgStyle={{
                    width: '13px',
                    height: "13px",
                    maxWidth: '100%'
                }}
            />
            <ReusableDiv
                style={isMobile ? {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '10px',
                    paddingLeft: '5px'
                } : {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '20px',
                    paddingLeft: '5px'
                }}
                imgSrc={process.env.PUBLIC_URL + "/assets/images/hourglass_empty.png"}
                name="dashboard"
                captionStyle={{
                    fontFamily: 'Söhne',
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: '#4D5760',
                    marginTop: '-5px',
                }}
                caption="Item 3"
                imgStyle={{
                    width: '13px',
                    height: "13px",
                    maxWidth: '100%'
                }}
            />
            <div style={isMobile ? {
                marginTop: '10px'
            } : {
                marginTop: '20px'
            }}>
                <Form.Label style={{
                    fontFamily: 'Söhne',
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: '#4D5760',
                    marginLeft: '5px',

                }}>
                    OTHERS 1
                </Form.Label>
            </div>
            <ReusableDiv
                style={isMobile ? {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '10px',
                    paddingLeft: '5px'
                } : {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '20px',
                    paddingLeft: '5px'
                }}
                imgSrc={process.env.PUBLIC_URL + "/assets/images/add_a_photo.png"}
                name="photo"
                captionStyle={{
                    fontFamily: 'Söhne',
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: '#4D5760',
                    marginTop: '-5px',
                }}
                caption="Item 4"
                imgStyle={{
                    width: '13px',
                    height: "13px",
                    maxWidth: '100%'
                }}
            />
            <ReusableDiv
                style={isMobile ? {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '10px',
                    paddingLeft: '5px'
                } : {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '20px',
                    paddingLeft: '5px'
                }}
                imgSrc={process.env.PUBLIC_URL + "/assets/images/delete.png"}
                name="delete"
                captionStyle={{
                    fontFamily: 'Söhne',
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: '#4D5760',
                    marginTop: '-5px',
                }}
                caption="Item 5"
                imgStyle={{
                    width: '13px',
                    height: "13px",
                    maxWidth: '100%'
                }}
            />
            <div style={{
                marginTop: '20px'
            }}>
                <Form.Label style={{
                    fontFamily: 'Söhne',
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: '#4D5760',
                    marginLeft: '5px',

                }}>
                    OTHERS 2
                </Form.Label>
            </div>
            <ReusableDiv
                style={isMobile ? {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '10px',
                    paddingLeft: '5px'
                } : {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '20px',
                    paddingLeft: '5px'
                }}
                imgSrc={process.env.PUBLIC_URL + "/assets/images/subscriptions.png"}
                name="delete"
                captionStyle={{
                    fontFamily: 'Söhne',
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: '#4D5760',
                    marginTop: '-5px',
                }}
                caption="Item 6"
                imgStyle={{
                    width: '13px',
                    height: "13px",
                    maxWidth: '100%'
                }}
            />
            <ReusableDiv
                style={isMobile ? {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '10px',
                    paddingLeft: '5px'
                } : {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '20px',
                    paddingLeft: '5px'
                }}
                imgSrc={process.env.PUBLIC_URL + "/assets/images/file_present.png"}
                name="delete"
                captionStyle={{
                    fontFamily: 'Söhne',
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: '#4D5760',
                    marginTop: '-5px',
                }}
                caption="Item 7"
                imgStyle={{
                    width: '13px',
                    height: "13px",
                    maxWidth: '100%'
                }}
            />
            <ReusableDiv
                style={isMobile ? {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '10px',
                    paddingLeft: '5px'
                } : {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '20px',
                    paddingLeft: '5px'
                }}
                imgSrc={process.env.PUBLIC_URL + "/assets/images/alarm.png"}
                name="delete"
                captionStyle={{
                    fontFamily: 'Söhne',
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: '#4D5760',
                    marginTop: '-5px',
                }}
                caption="Item 8"
                imgStyle={{
                    width: '13px',
                    height: "13px",
                    maxWidth: '100%'
                }}
            />
            <ReusableDiv
                style={isMobile ? {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '10px',
                    paddingLeft: '5px'
                } : {
                    display: "flex",
                    gap: "15.33px",
                    marginTop: '60px',
                    paddingLeft: '5px'
                }}
                imgSrc={process.env.PUBLIC_URL + "/assets/images/pic.png"}
                name="delete"
                captionStyle={{
                    fontFamily: 'Söhne',
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: '#4D5760',
                    marginTop: '4px',
                }}
                caption="Blessing Daniels"
                imgStyle={{
                    width: '32px',
                    height: "32px",
                    maxWidth: '100%',
                    borderRadius: '50%'
                }}
            />
        </>
    )
}
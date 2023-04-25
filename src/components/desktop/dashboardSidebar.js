import SidebarContent from "../common/sidebarContent";

export default function DashboardSidebar(props) {
    return (
        <>
            <div style={{
                paddingTop: "38px",
                paddingLeft: '60px',
                border: "1px solid #EFF1F6",
                height: '700px',
                margin: 0
            }}>
                <img
                    style={{
                        cursor: 'pointer'
                    }}
                    src={process.env.PUBLIC_URL + "/assets/images/mainstack-logo.png"} alt="action" />
                <SidebarContent />               
            </div>
        </>
    )
}
import DashboardHeader from "./dashboardHeader";
import DashboardMain from "./dashboardMain";

export default function DashboardContent(props) {
    return (
        <>
            <DashboardHeader />
            <DashboardMain
                flags={props.flags}
                allData={props.allData}
                socials={props.socials}
            />
        </>
    )
}
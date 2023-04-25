import './App.css'
import { useMediaQuery } from 'react-responsive';
import MobileDashboard from './components/mobile/mobileDashboard';
import DashboardSidebar from './components/desktop/dashboardSidebar';
import DashboardContent from './components/desktop/dashboardContent';
import { useEffect, useState } from 'react';

const flags = [
  "/images/nigflag.png",
  "/images/germanyflag.png",
  "/images/ghanaflag.png",
  "/images/finlandflag.png",
  "/images/unitedkingdomflag.png"
]

const socials = [
  "/images/google.png",
  "/images/instagram.png",
  "/images/facebook.png",
  "/images/linkedin.png"
]

function App(props) {
  const [allData, setAllData] = useState()
  // console.log(allData)
  const isMobile = useMediaQuery({
    query: "(max-width: 1060px)",
  });
  const isTabAndDesktop = useMediaQuery({
    query: "(min-width: 1061px)",
  });

  useEffect(() => {
    async function fetChData() {
      const res = await fetch("https://fe-task-api.mainstack.io/")
      const data = await res.json()
      setAllData(data)
    }
    fetChData()
  }, [])

  return (
    <>
      {isMobile && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: '100%',
              overflowX: "hidden",
              margin: 0,
            }}>
            <MobileDashboard
              flags={flags}
              allData={allData}
              socials={socials}
            />
          </div>
        </>
      )}
      {isTabAndDesktop && (
        <div
          style={{
            display: "flex",
            justifyContent: 'space-between',
            width: "100%",
            overflowX: "hidden",
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: 'column',
              width: '21%',
            }}>
            <DashboardSidebar />
          </div>
          <div style={{
            display: "flex",
            flexDirection: 'column',
            width: '79%'
          }}>
            <DashboardContent
              flags={flags}
              allData={allData}
              socials={socials}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

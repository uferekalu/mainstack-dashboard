import { useCallback, useEffect, useState } from 'react';
import './App.css'
import { useMediaQuery } from 'react-responsive';
import MobileDashboard from './components/mobile/mobileDashboard';
import DashboardSidebar from './components/desktop/dashboardSidebar';
import DashboardContent from './components/desktop/dashboardContent';
import { generalData } from './data';

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
  const [dateAndMonths, setDateAndMonths] = useState([])
  const [viewsValues, setViewsValues] = useState([])
  const [graphValues] = useState([])
  const colors = ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"];
  const socialColors = ["#F09468", "#844FF6", "#599EEA", "#0FB77A"]

  const isMobile = useMediaQuery({
    query: "(max-width: 1060px)",
  });
  const isTabAndDesktop = useMediaQuery({
    query: "(min-width: 1061px)",
  });

  const fetChData = useCallback(async () => {
    let dateMonth = []
    let viewsVal = []
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dateNumnbers = ["1", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]

    const res = await fetch("https://fe-task-api.mainstack.io/")
    const data = await res.json()
    setAllData(data)

    for (let key in data?.graph_data.views) {
      const month = monthNames[new Date(key).getMonth()]
      let date = dateNumnbers[new Date(key).getDate()]
      if (date === undefined) {
        date = "01"
      }
      dateMonth.push(date + " " + month.slice(0, 3))
    }
    setDateAndMonths(dateMonth)

    for (let key in data.graph_data.views) {
      viewsVal.push(data.graph_data.views[key])
    }
    setViewsValues(viewsVal)
   
  }, [])

  useEffect(() => {
    fetChData()
  }, [fetChData])

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
              colors={colors}
              socialColors={socialColors}
              dateAndMonths={dateAndMonths}
              viewsValues={viewsValues}
              graphValues={graphValues}
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
              allData={generalData}
              socials={socials}
              colors={colors}
              socialColors={socialColors}
              dateAndMonths={dateAndMonths}
              viewsValues={viewsValues}
              graphValues={graphValues}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

import DashboardBarChart from "@/components/Card/DashboardBarChart";
import DashboardDonutDay from "@/components/Card/DashboardDonutDay";
import DashboardDonutNight from "@/components/Card/DashboardDonutNgiht";
import { redirect } from "next/navigation";

async function getData() {
  try{
    const res = await fetch(
        "http://d2cms.hlas.co.th/api/web/graph/column/data?prddt=3%2F04%2F2024",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            API_KEY: "1234",
            TOKEN:
              "My80LzIwMjQgNDozNToxNSBQTQ==.WEA3o9vBfAf33499L/gNhQAdfUP/svS9HHY0EIdGwABclFCZ7B9KrzCotxPQvhrm",
          },
          next: { revalidate: 60 },
        }
      );
    
   return res.json();
  }
  catch(error:any)
  {
    console.log(error.message);
  }
}

export default async function DashboardPage() {
  const data = await getData();
  const Timeline = 'Timeline' in data;
  if(Timeline)
  {
    let series: string[] = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "0", "1", "2", "3", "4", "5", "6", "7"];
    let atime: string[] = [];
    let aplan: number[] = [];
    let aact: number[] = [];
    let sumplanA: number = 0;
    let sumActualA: number = 0;
    let pendingA: number = 0;
    let sumplanB: number = 0;
    let sumActualB: number = 0;
    let pendingB: number = 0;
    let DounutA: number[] = [];
    let DounutB: number[] = [];
    let PercA: string[] = [];
    let PercB: string[] = [];
    let seriesBar:string[] = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "0", "1", "2", "3", "4", "5", "6", "7"]
    let atimeBar:string[] = [];
    let aplanBar:number[] = [];
    let aactBar:number[] = [];
    let sumplanABar:number = 0;
    let sumActualABar:number = 0;
    let pendingABar:number = 0;
    let sumplanBBar:number = 0;
    let sumActualBBar:number = 0;
    let pendingBBar:number = 0 ;
    let BarA:number[] = [];
    let BarB:number[] = [];

    if (data.Timeline.length > 0) {
      for (let j = 0; j < 24; j++) {
        if (j >= 8 && j < 20) {
          if (data.Timeline[j].toString() === "0") {
            atime[j] = series[j].toString();
          } else {
            atime[j] = data.Timeline[j]?.toString();
          }
  
          sumplanA = sumplanA + data.Plan[j];
          sumActualA = sumActualA + data.Actual[j];
          pendingA = sumplanA - sumActualA;
          aplan[j] = data.Plan[j];
          aact[j] = data.Actual[j];
        } else {
          if (data.Timeline[j].toString() == "0") {
            atime[j] = series[j].toString();
          } else {
            atime[j] = data.Timeline[j].toString();
          }
  
          sumplanB = sumplanB + data.Plan[j];
          sumActualB = sumActualB + data.Actual[j];
          pendingB = sumplanB - sumActualB;
          aplan[j] = data.Plan[j];
          aact[j] = data.Actual[j];
        }
      }

      
      for (let j = 0; j < 24; j++)
      {
        if (data.Timeline[j] < 8)
        {
       
            if (data.Timeline[j].toString() === "0")
            {
                atimeBar[data.Timeline[j] + 16] = seriesBar[data.Timeline[j] + 16].toString();
            }
            else
            {
                atimeBar[data.Timeline[j] + 16] = data.Timeline[j].toString();
            }
       
            sumplanBBar = sumplanBBar + data.Plan[j];
            sumActualBBar = sumActualBBar + data.Actual[j];
            pendingBBar = sumplanBBar - sumActualBBar;
       
            aplanBar[data.Timeline[j] + 16] = data.Plan[j];
            aactBar[data.Timeline[j] + 16] = data.Actual[j];
        }
        else
        {
       
       
            if (data.Timeline[j].toString() === "0")
            {
                atimeBar[data.Timeline[j] - 8] = seriesBar[data.Timeline[j] - 8].toString();
            }
            else
            {
                atimeBar[data.Timeline[j] - 8] = data.Timeline[j].toString();
            }
       
            sumplanABar = sumplanABar + data.Plan[j];
            sumActualABar = sumActualABar + data.Actual[j];
            pendingABar = sumplanABar - sumActualABar;
            aplanBar[data.Timeline[j] - 8] = data.Plan[j];
            aactBar[data.Timeline[j] - 8] = data.Actual[j];
        }
      }


    } 
    else 
    {
      atime = series;
      atimeBar = seriesBar;
    }
  
    DounutA[0] = sumActualA;
    DounutA[1] = pendingA;
  
    DounutB[0] = sumActualB;
    DounutB[1] = pendingB;

    BarA[0] = sumplanABar;
    BarA[1] = pendingABar;
   
    BarB[0] = sumplanBBar;
    BarB[1] = pendingBBar;
  
    if (DounutA[0] + DounutA[1] == 0 || DounutB[0] + DounutB[1] == 0) {
      PercA[0] = "Acual " + ((100 * DounutA[0]) / 1).toString() + " %";
      PercA[1] = "Pending " + ((100 * DounutA[1]) / 1).toString() + " %";
      PercB[0] = "Acual " + ((100 * DounutB[0]) / 1).toString() + " %";
      PercB[1] = "Pending " + ((100 * DounutB[1]) / 1).toString() + " %";
    } else {
      PercA[0] =
        "Acual " +
        ((100 * DounutA[0]) / (DounutA[0] + DounutA[1])).toString() +
        " %";
      PercA[1] =
        "Pending " +
        ((100 * DounutA[1]) / (DounutA[0] + DounutA[1])).toString() +
        " %";
      PercB[0] =
        "Acual " +
        ((100 * DounutB[0]) / (DounutB[0] + DounutB[1])).toString() +
        " %";
      PercB[1] =
        "Pending " +
        ((100 * DounutB[1]) / (DounutB[0] + DounutB[1])).toString() +
        " %";
    }
  
      atime[0] = "Actual";
      atime[1] = "Pending";
  
      var donutChartModel = {
          DataDay: DounutA,
          DataDayPer: PercA,
          DataNight: DounutB,
          DataNightPer: PercB
      }

      var barChartModel = {
            cat:atimeBar,
            series:[
                {
                    name:"Plan",
                    data:aplanBar,
                    dataA:BarA,
                    dataB:BarB
                },
                {
                    name:"Actual",
                    data:aactBar,
                    dataA:BarA,
                    dataB:BarB
                }
            ]
      }
  }
  else
  {
    redirect('/auth')
  }

  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
        <DashboardDonutDay dataDay={donutChartModel.DataDay} dataDayPer={donutChartModel.DataDayPer} />
        <DashboardDonutNight dataDay={donutChartModel.DataNight} dataDayPer={donutChartModel.DataNightPer} />
      </div>
      <div className="grid grid-cols-1">
        <DashboardBarChart cat={barChartModel.cat} series={barChartModel.series} />
      </div>
    </div>
  );
}

import "./chart.css"
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';
  
  const data = [
    {
      name: 'Psicologo 1',
      casos: 800,
      Requerimientos: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: 'Psicologo 2',
      casos: 868,
      Requerimientos: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: 'Psicologo 3',
      casos: 1397,
      Requerimientos: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: 'Psicologo 4',
      casos: 1480,
      Requerimientos: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: 'Psicologo 5',
      casos: 1520,
      Requerimientos: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Psicologo 6',
      casos: 1400,
      Requerimientos: 680,
      amt: 1700,
      cnt: 380,
    },
  ];

const Chart = () => {
    return(
        <div className="chart"> 
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 40,
                }}
                >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="amt" fill="#007c85" stroke="#007c85" />
                <Bar dataKey="Requerimientos" barSize={20} fill="#074e8c" />
                <Line type="monotone" dataKey="casos" stroke="grey" />
                <Scatter dataKey="cnt" fill="red" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
        
    )
}
export default Chart     
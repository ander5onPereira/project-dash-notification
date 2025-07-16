import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { dataChartBar } from './mockData';



export function ChartBar({ isVisibleLabel = true }) {
  return (
    <div className='w-full h-[600px] mt-6'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={500}
          height={300}
          data={dataChartBar}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <ReferenceLine y={0} stroke='#000' />
          {isVisibleLabel && (
            <Legend
              verticalAlign='bottom'
              wrapperStyle={{ lineHeight: '40px' }}
            />
          )}
          <Bar dataKey='d1' fill='#8884d8' />
          <Bar dataKey='d2' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

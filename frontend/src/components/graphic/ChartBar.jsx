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

const data = [
  { name: '1', d1: 300, d2: 456 },
  { name: '2', d1: 145, d2: 230 },
  { name: '3', d1: 100, d2: 345 },
  { name: '4', d1: 8, d2: 450 },
  { name: '5', d1: 100, d2: 321 },
  { name: '6', d1: 9, d2: 235 },
  { name: '7', d1: 53, d2: 267 },
  { name: '8', d1: 252, d2: 378 },
  { name: '9', d1: 79, d2: 210 },
  { name: '10', d1: 294, d2: 23 },
  { name: '12', d1: 43, d2: 45 },
  { name: '13', d1: 74, d2: 90 },
  { name: '14', d1: 71, d2: 130 },
  { name: '15', d1: 117, d2: 11 },
  { name: '16', d1: 186, d2: 107 },
  { name: '17', d1: 16, d2: 926 },
  { name: '18', d1: 125, d2: 653 },
  { name: '19', d1: 222, d2: 366 },
  { name: '20', d1: 372, d2: 486 },
  { name: '21', d1: 182, d2: 512 },
  { name: '22', d1: 164, d2: 302 },
  { name: '23', d1: 316, d2: 425 },
  { name: '24', d1: 131, d2: 467 },
  { name: '25', d1: 291, d2: 190 },
  { name: '26', d1: 47, d2: 194 },
  { name: '27', d1: 415, d2: 371 },
  { name: '28', d1: 182, d2: 376 },
  { name: '29', d1: 93, d2: 295 },
  { name: '30', d1: 99, d2: 322 },
  { name: '31', d1: 52, d2: 246 },
  { name: '32', d1: 154, d2: 33 },
  { name: '33', d1: 205, d2: 354 },
  { name: '34', d1: 70, d2: 258 },
  { name: '35', d1: 25, d2: 359 },
  { name: '36', d1: 59, d2: 192 },
  { name: '37', d1: 63, d2: 464 },
  { name: '38', d1: 91, d2: 2 },
  { name: '39', d1: 66, d2: 154 },
  { name: '40', d1: 50, d2: 186 },
];

export function ChartBar({ isVisibleLabel = true }) {
  return (
    <div className='w-full h-[600px] mt-6'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={500}
          height={300}
          data={data}
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

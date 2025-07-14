import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useGlobal } from '../../Hooks/useGlobal';

const data = [
  { name: 'Tipo A', value: 400 },
  { name: 'Tipo B', value: 300 },
  { name: 'Tipo C', value: 300 },
];

const COLORS = ['#3B82F6', '#F472B6', '#FACC15'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      <tspan x={x} dy='-0.5em'>
        {name}
      </tspan>
      <tspan x={x} dy='1.2em'>{`${((percent ?? 1) * 100).toFixed(0)}%`}</tspan>
    </text>
  );
};
const breakpoints = {
  xs: 200,
  sm: 200,
  md: 200,
  lg: 90,
  xl: 100,
  '2xl': 160,
};
export function ChartPie({ isVisibleLabel = true }) {
  const { screen } = useGlobal();
  return (
    <ResponsiveContainer width='100%' height={600}>
      <PieChart key={isVisibleLabel ? 'label-on' : 'label-off'}>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          outerRadius={breakpoints[screen]}
          dataKey='value'
          labelLine={false}
          label={isVisibleLabel ? renderCustomizedLabel : null}
        >
          {data.map((__, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

import HeaderStats from '../components/HeaderStats';
import { ChartBar } from '../components/graphic/ChartBar';
import { ChartPie } from '../components/graphic/ChartPie';
import { useState } from 'react';
import { InputToggle } from '../components/input/InputToggle';

export default function Dashboard() {
  const [captionPie, setCaptionPie] = useState(true);
  const [captionBar, setCaptionBar] = useState(true);
  return (
    <section>
      <HeaderStats />
      <div className='grid grid-cols-1 md:col-span-2 lg:grid-cols-3 gap-4 mb-4'>
        <div className='col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-lg shadow overflow-hidden'>
          <div className='bg-gray-200/80 p-2 border-b-2 border-gray-300'>
            <h2 className='text-primary mb-1 font-bold'>
              Top 10 de licenças por consumidores últimos 12 meses
            </h2>
          </div>
          <div>
            <ChartBar isVisibleLabel={captionBar} />
          </div>
          <div className='p-4'>
            <InputToggle
              value={captionBar}
              onChange={({ target }) => {setCaptionBar(target.value)}}
              label={'mostrar legendas'}
            />
          </div>
        </div>

        <div className='bg-white rounded-lg shadow overflow-hidden'>
          <div className='bg-gray-200/80 p-2 border-b-2 border-gray-300'>
            <h2 className='text-primary mb-1 font-bold '>
              Classificação de licenças em julho
            </h2>
          </div>
          <div className='mt-6'>
            <ChartPie isVisibleLabel={captionPie} />
          </div>
          <div className='p-4 '>
            <InputToggle
              value={captionPie}
              onChange={({ target }) => {setCaptionPie(target.value)}}
              label={'mostrar legendas'}
            />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='bg-white rounded-lg shadow overflow-hidden'>
          <div className='bg-gray-200/80 p-2 border-b-2 border-gray-300'>
            <h2 className='text-primary mb-1 font-bold'>
              Consumidores por mês últimos 12 meses
            </h2>
          </div>
          <div className='h-48 bg-gray-100 rounded' />
        </div>
        <div className='bg-white rounded-lg shadow overflow-hidden'>
          <div className='bg-gray-200/80 p-2 border-b-2 border-gray-300'>
            <h2 className='text-primary mb-1 font-bold'>
              Comparativo de usos de cenários em julho
            </h2>
          </div>
          <div className='h-48 bg-gray-100 rounded' />
        </div>
      </div>
    </section>
  );
}

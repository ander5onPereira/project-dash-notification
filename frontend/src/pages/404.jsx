import { Svg } from '../components/svg';
import { _404 } from '../assets/404';
export function Error_404() {
  return (
    <section className='flex gap-2 flex-col'>
      <div className='w-full flex items-center justify-center py-20'>
        <Svg icon={_404} className={'text-center'} size={'25rem'} />
      </div>

      <h1 className={`text-4xl font-bold text-center`}>
        {'Página Não Encontrada'}
      </h1>
      <p
        className={`text-xl font-bold text-center max-w-[50vw] flex justify-center mx-auto`}
      >
        Parece que algo deu errado. A página que você está procurando não
        existe, mas estamos aqui para ajudar. Volte para a página inicial ou use
        o menu para encontrar o que precisa.
      </p>
    </section>
  );
}

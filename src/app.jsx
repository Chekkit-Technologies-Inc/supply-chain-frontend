import bg from './assets/asset-m.png';

function App() {
  return (
    <div className='min-h-screen max-h-screen w-screen flex relative'>
      <img src={bg} className='w-screen h-screen object-cover object-left' alt='logo' />
      <div className={`bg-brand_blue absolute right-0 top-0 bottom-0 z-10 w-full max-w-3xl h-screen`}></div>
    </div>
  );
}

export default App;

import bg from './assets/asset-mgmt.jpeg';

function App() {
  return (
    <div className='min-h-screen max-h-screen w-screen flex relative'>
      <img src={bg} className='w-screen h-screen object-cover object-left' alt='logo' />
      <div style={{ minWidth: '400px' }} className={`bg-brand_blue absolute right-0 top-0 bottom-0 z-10 w-2/5 h-screen`}></div>
    </div>
  );
}

export default App;

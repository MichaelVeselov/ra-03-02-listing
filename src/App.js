import './App.css';

import Listing from './components/Listing';
import data from './components/data/etsy.json';

function App() {
  return (
    <div className='App'>
      <Listing items={data} />
    </div>
  );
}

export default App;

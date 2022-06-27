import Page from './view/components/Page';
import './view/style/global.scss'


const data = {
  cognifiber: {
    efficiency: 30,
    speed: 90,
    accuracy: 98,
    progress: 100,
  },
  nvidia: {
    efficiency: 400,
    speed: -40,
    accuracy: 85,
    progress: 5,
  }
}

function App() {




  return (
    <div className="root">
      <Page data={data} />
    </div>
  );
}

export default App;

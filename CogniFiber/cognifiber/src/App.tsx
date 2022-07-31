import Page from './view/components/Page';
import './view/style/global.scss'


const data = {
  title: 'BENCHMARK: ANOMALY DETECTION (IOT)',
  cognifiber: {
    efficiency: 400,
    speed: 100,
    speedTolerance: 4,
    accuracy: 88,
    accuracyTolerance: 4,
    progress: 100,
  },
  nvidia: {
    efficiency: 1,
    speed: 4.5,
    speedTolerance: 0.2,
    accuracy: 96,
    accuracyTolerance: 2,
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

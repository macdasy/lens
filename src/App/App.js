import StepperComp from '../components/Stepper';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Hello, I am Flexi </h1>
      <h4> I am here to assist you to find you better lens! </h4>
      <div style={{padding:'1% 10%', marginTop:'3%'}}>
        <StepperComp />
      </div>
    </div>
  );
}

export default App;

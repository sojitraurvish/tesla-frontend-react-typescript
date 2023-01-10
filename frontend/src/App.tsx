
import './App.css';
import Header from './components/Header';

import Section from './components/Section';

function App() {
  return (
    <div className="App">
        <Header/>
        <Section mainTitle="Model S" subTitle="Order Online for Touchless Delivery" imgUrl="/images/model-s.jpg"/>
        <Section mainTitle="Model 3" subTitle="Order Online for Touchless Delivery" imgUrl="/images/model-y.jpg"/>
        <Section mainTitle="Model X" subTitle="Order Online for Touchless Delivery" imgUrl="/images/model-x.jpg"/>
        <Section mainTitle="Model Y" subTitle="Order Online for Touchless Delivery" imgUrl="/images/model-3.jpg"/>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
// import MyComponent from './MyComponent';
// import { MyNextComponent } from './MyNextComponent';
// import OmarComponent from './myOmarComponent';
import Clock from './Clock';
function App() {

  // function buttonClicked(){
  //   console.log('Button has been clicked from AppLOL!')
  // }
  return (
    <div>
      <Clock/>
      <Clock/>
      <Clock/>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //   <OmarComponent omarmessage = "AGREED!"/>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <MyComponent title="Learn React Today" onButtonClicked={buttonClicked}/>
    //     <MyNextComponent message="This is my message for the week"/>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

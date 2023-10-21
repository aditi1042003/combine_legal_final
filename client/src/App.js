import React,{ Component} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//-----------------------------------------------------------------------------------
//step1: import form page jsx nnn
import DocSimp from './page/DocSimp/DocSimp';
import TG from './page/TG/TG';
import EL from './page/EL/EL';
import SC from './page/SC/SC';
import LandingPage from './page/Landing/Landing';
//import './app.scss';
import Navbar from './layout/navbar/Navbar';
import logo from './logo.svg';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}

  render (){
    return(
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    //-----------------------------------------------------------------------------
      //step2: route the path for that page

      <Router>
        
            <div className='App'>
            <p className="App-intro">;{this.state.apiResponse}</p>
                <Navbar />
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/DocumentSimplify' element={<DocSimp />} />
                    <Route path='/tg' element={<TG />} />
                    <Route path='/ExploreLaws' element={<EL />} />
                    <Route path='/ScheduleCall' element={<SC />} />
                </Routes>
            </div>
        </Router>
    //</div>
    );
  }
}

export default App;


import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Bjp from './components/BJP/bjp';
import Brs from './components/Brs/brs';
import Congress from './components/CONGRESS/congress';
import Home from './components/home/home';
import NavBar from './components/navbar/navbar';
import Vote from './components/vote/vote';
import Output from './components/output/output';


function App() {
  return (
    <div>
       <BrowserRouter>
<NavBar />
<Routes>
<Route exact path='/' element={<Home/>} />
<Route exact path='/bjp' element={<Bjp/>} />
<Route exact path='/brs' element={<Brs/>} />
<Route exact path='/congress' element={<Congress/>} />
<Route exact path='/vote' element={<Vote/>} />
<Route exact path='/output' element={<Output/>} />

</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;

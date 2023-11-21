import Youtube from "./pages/Youtube"
import {BrowserRouter,Routes, Route} from 'react-router-dom'

const App = () => {
 
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Youtube/>}/>
      </Routes>   
      </BrowserRouter> 
    </div>
  );
};

export default App

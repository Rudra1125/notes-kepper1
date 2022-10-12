import "./App.css";
import Header from './components/Header/Header';
import Addkeeper from "./components/addKepper/AddKeeper";
import { useEffect, useState } from "react";
import ShowKepper from "./components/showKeeper/ShowKepper";
import axios from "axios";


function App() {
  const [keeperList, setKeeperList] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/getAll')
      .then(res => setKeeperList(res.data) )
  },[]);
  
  return (<div className="App">
    
    {console.log("keeperList:",keeperList)}
    <Header/>
    <Addkeeper keeperList={keeperList} setKeeperList={setKeeperList}/>
    <ShowKepper keeperList={keeperList} setKeeperList={setKeeperList} />
  </div>
)}

export default App;

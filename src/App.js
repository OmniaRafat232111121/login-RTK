import Login from "./Component/Login/Login";

import './App.css'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Logout from "./Component/Logout/Logout";
function App() {
  const user=useSelector(selectUser);
  console.log(user)
  return (
    <div className="App">
 {user ? <Logout/>:<Login/>}
    </div>
  );
}

export default App;

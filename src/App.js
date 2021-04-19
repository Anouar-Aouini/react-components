import React from "react";
import MyProfilePhoto from "./Component/Profile/ProfilPhoto";
import MyName from "./Component/Profile/FullName";
import MyAddress from "./Component/Profile/Address";
import "./App.css";
const App = () => (
<>
<div>
<MyProfilePhoto/>
<div className="info">
    <MyName/>
    <br/>
    <MyAddress/> 
</div>
</div>
</>
);
export default App;

import React from "react";
import MyProfilePhoto from "./Component/Profile/ProfilPhoto.js";
import MyName from "./Component/Profile/FullName.js";
import MyAddress from "./Component/Profile/Address.js";
import StyleSheet from "./App.css";
const App = () => (
<>
<div>
<MyProfilePhoto/>
<div className="information">
    <MyName/>
    <br/>
    <MyAddress/> 
</div>
</div>
</>
);
export default App;

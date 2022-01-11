import React from 'react';
import SettingsComponents from '../../components/SettingsComponents/SettingsComponents'

//import { colors } from 'theme'

const Settings = () => {
  const settingsOptions = [
    {title:"My Info", subTitle:"Setup your profile", onPress:()=>{}},
    {title:"Accounts", subTitle:null, onPress:()=>{}},
    {
      title:"Default account",
      subTitle:"aabs@app.com",
      onPress:()=>{}},
    {title:"Contats to display", subTitle:"Setup your profile", onPress:()=>{}},
    {title:"Name format", subTitle:"First name first", onPress:()=>{}},
    {title:"Import", subTitle:null, onPress:()=>{}},
    {title:"Export", subTitle:null, onPress:()=>{}},
    {title:"Blocked numbers", subTitle:null, onPress:()=>{}}
  ]
  return <SettingsComponents settingsOptions={settingsOptions}/>;
};


export default Settings

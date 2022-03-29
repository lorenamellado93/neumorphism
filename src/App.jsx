import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ColorPicker from "./components/Form/ColorPicker";
import { SettingsProvider } from "./context/SettingContext";
import { ChromePicker } from "react-color";

const App = () => {
  const [ background, setBackground ] = useState('#fff')
   return (
    <div style={{
      backgroundColor: background}}>
      <Form />
      <ChromePicker
        color={background}
        onChangeComplete={background => {
          setBackground(background.hex)}}
      />
      <div style={{
      height: '800px'}}></div>
    </div>
  );
};

export default App;

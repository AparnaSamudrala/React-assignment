import logo from './logo.svg';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';
import NavigationComponent from './components/NavigationComponent';

function App() {

  const menuArr= [{menu1: "Home",menu2: "About US",menu3: "Contact US",menu4: "Careers"}];
  return (
    <div className="App">
      <HeaderComponent name="header"></HeaderComponent>
      <NavigationComponent menu={menuArr}></NavigationComponent>
      <ContentComponent name="About US"></ContentComponent>
     <FooterComponent copyright="bapun00@gmail.com" company="mycompany.com"></FooterComponent>
    </div>
  );
}

export default App;

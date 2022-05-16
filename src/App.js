import './App.css';

import Header from './Components/Header';
function App({children}) {
  
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  
  );
}




export default App;

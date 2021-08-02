import './App.css';
//sidebar
import Sidebar from './Components/SideBar/Sidebar';
//feed
import Feed from './Components/Feed/Feed';
//widgets
import Widgets from './Components/Widgets/Widgets';

function App() {
  return (
    <div className='app'>
      {/* SideBar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;

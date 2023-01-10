import './App.css';
import BasicInfo from './components/profile/basicInfo';
import SearchBar from './components/profile/searchBar';


function App() {
  return (
    <div className="px-8 pt-4">
       <SearchBar></SearchBar>
       <BasicInfo></BasicInfo>
    </div>
  );
}

export default App;

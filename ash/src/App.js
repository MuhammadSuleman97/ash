import BasicInfo from './components/profile/basicInfo';
import SearchBar from './components/profile/searchBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <SearchBar></SearchBar>
       <BasicInfo></BasicInfo>
      </header>
    </div>
  );
}

export default App;

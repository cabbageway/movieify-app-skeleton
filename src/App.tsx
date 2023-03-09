import AppHeader from "./common/components/app-header/AppHeader";
import "./App.css"

export enum AppViews {
  MovieOverview = 1,
  MovieDetails
}

function App() {

  return (
    <div className="app">
      <AppHeader />
      <div className="app-content">
      </div>
    </div>
  );
}

export default App;

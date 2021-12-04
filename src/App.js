import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppStateProvider from "./Providers/AppStateProvider";

import AppHeader from "./Components/AppHeader";
import AppFooter from "./Components/AppFooter";

import Main from "./Pages/Main";
import Trade from "./Pages/Trade";
import Report from "./Pages/Report";
// import Suggest from "./Pages/Suggest";
// import Suggestions from "./Pages/Suggestions";
// import Notifications from "./Pages/Notifications";
import Profile from "./Pages/Profile";
// import Privacy from "./Pages/Privacy";
import Upload from "./Pages/Upload";
// import Search from "./Pages/Search";
// import SearchResults from "./Pages/SearchResults";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
// import FindId from "./Pages/FindId";
import FindPw from "./Pages/FindPw";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <AppHeader />
        <Switch>
          <Route path="/" exact component={Main}></Route>

          <Route path="/trade/:id" component={Trade}></Route>
          <Route path="/report/:id" component={Report}></Route>
          {/* <Route path="/suggest/:id" component={Suggest}></Route> */}
          {/* <Route path="/suggestions/:id" component={Suggestions}></Route> */}

          {/* <Route path="/notifications" component={Notifications}></Route> */}
          <Route path="/profile/:userId" component={Profile}></Route>
          {/* <Route path="/privacy" component={Privacy}></Route> */}
          <Route path="/upload" component={Upload}></Route>
          {/* <Route path="/search" component={Search}></Route> */}
          {/* <Route path="/searchresults/:q" component={SearchResults}></Route> */}

          <Route path="/login" component={LogIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
          {/* <Route path="/findid" component={FindId}></Route> */}
          <Route path="/findpw" component={FindPw}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        <AppFooter />
      </BrowserRouter>
    </AppStateProvider>
  );
}

export default App;

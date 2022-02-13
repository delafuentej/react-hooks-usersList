import "./App.css";
//components
import Profile from "./components/Profile";
import UsersList from "./components/UsersList";

//context
import UserState from "./context/User/UserState";

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <UserState>
        <div className="container p-5">
          <div className="row">
            <div className="col-md-7">
              <UsersList />
            </div>
            <div className="col-md-5">
              <Profile />
            </div>
          </div>
        </div>
      </UserState>
    </>
  );
}

export default App;

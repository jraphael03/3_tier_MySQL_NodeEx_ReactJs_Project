import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

//pages
import SignIn from "./pages/SignIn";
import NotFoundPage from "./pages/404";
import Questions from "./pages/Questions";
import Sidebar from "./pages/Sidebar";
import Buttons from "./pages/Buttons"

function App() {
  return (
    <Router>
      <html>
        <body>
          <div className="grid-container">
            <header className="row center">
              <Link to="/">
                <h1>Sports Questions</h1>
              </Link>
            </header>
            <nav>
              <a href="">
                <Link to="/">Register/Sign in</Link>
              </a>
              <a href="">
                <Link to="/questions">Questions Page</Link>
              </a>
            </nav>
            <aside>
              <Sidebar />
            </aside>
            <main className="row center">
              <div className="card">
                <Switch>
                  <Route exact path="/" component={SignIn} />
                  <Route exact path="/questions" component={Questions} />
                  <Route exact path="/404" component={NotFoundPage} />
                  <Redirect to="/404/" />
                </Switch>
              </div>
              <div>
                <Buttons />
              </div>
            </main>
            <footer className="row center">
              <h3>Footer</h3>
            </footer>
          </div>
        </body>
      </html>
    </Router>
  );
}

export default App;

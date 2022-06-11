import './sass/main.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/layout/Home';
import Resume from './components/layout/Resume';
import Works from './components/layout/Works';
import Blogs from './components/layout/Blogs';
import Contact from './components/layout/Contact';

function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/blog" component={Blogs} />
        <Route exact path="/contact" component={Contact}/>
      </Switch>
   </Router>
    </>
  );
}

export default App;

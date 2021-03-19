import React, { FC } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CertifiedUserList, Homes, CourseList, TutorList } from './pages/Overview';




const App: FC = () => {
    return (
        <Router>
            <Sidebar />
            <Switch>

                <Route path="/Homes" component={Homes} exact>{Homes}</Route>
                <Route path="/overview/TutorList" component={TutorList} exact></Route>
                <Route path="/overview/CourseList" component={CourseList} exact></Route>
                <Route path="/overview/CertifiedUserList" component={CertifiedUserList} exact></Route>
            </Switch>
        </Router>

    );
};

export default App;

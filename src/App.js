import React, {useContext, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResultPage from "./component/result_page/ResultPage";
import {BrowserRouter as Router, Route} from "react-router-dom";
import WelcomePage from "./component/welcome_page/WelcomePage";
import LogoNavBar from "./component/LogoNavBar";
import TestPage from "./component/test_page/TestPage";
import ResultContext from "./result_context/ResultContext";
import SurveyContext from "./survey_context/SurveyContext";

function App() {

    const [result, changeResult] = useState(useContext(ResultContext));
    const [survey, changeSurvey] = useState(useContext(SurveyContext));

    return (
        <Router>
            <div className="App">
                <LogoNavBar/>
                <ResultContext.Provider value={result}>
                    <SurveyContext.Provider value={survey}>
                        <Route path='/' exact component={WelcomePage}/>
                        <Route path='/survey' exact component={TestPage}/>
                        <Route path='/result' exact component={ResultPage}/>
                    </SurveyContext.Provider>
                </ResultContext.Provider>
            </div>
        </Router>
    );
}

export default App;

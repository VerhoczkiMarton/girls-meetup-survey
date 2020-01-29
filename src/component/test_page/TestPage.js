import React, {useContext} from "react";
import TestCard from "./TestCard";
import Card from "react-bootstrap/Card";
import SurveyContext from "../../survey_context/SurveyContext";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import calcualate from "../../surveyAnalyzer";
import ResultContext from "../../result_context/ResultContext";

const TestPage = () => {

    const surveyContext = useContext(SurveyContext);
    let resultContext = useContext(ResultContext);

    const handleSubmit = () => {
        let results = calcualate(surveyContext);
        resultContext.forEach((result, index) => {result.value = results.get(index).value});
    };

    return (
        <Card className="text-center"
              style={{width: '95vw', height: 'auto', margin: '0 auto', padding: '10px', position: 'relative'}}>
            <div className="card-container">
                {console.log(Array.from(surveyContext))}
                {Array.from(surveyContext).map( ((value, index) =>
                {return  <TestCard questionId={value[0]} id={value[0]} key={value[0]} question={value[1].label}/>}))}
            </div>
            <div style={{marginTop: '5vh'}}>
                <Link to="/result">
                    <Button onClick={() => handleSubmit()}>Lássuk az eredményeim!</Button>
                </Link>
            </div>

        </Card>
    )
};

export default TestPage;

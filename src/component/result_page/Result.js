import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Result = ({label, score}) => {
    return (
        <React.Fragment>
            <ProgressBar style={{marginTop: "15px"}} min={2} max={15}
                         label={score} now={score}/>
            <span>{label}</span>
        </React.Fragment>
    );
};

export default Result;
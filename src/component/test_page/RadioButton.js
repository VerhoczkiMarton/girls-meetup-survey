import React, {useContext} from 'react';
import Radio from '@material-ui/core/Radio';
import SurveyContext from "../../survey_context/SurveyContext";

export default function RadioButtons({questionId}) {
    const [selectedValue, setSelectedValue] = React.useState('');
    const surveyContext = useContext(SurveyContext);

    const handleChange = event => {
        const value = event.target.value;
        setSelectedValue(value);
        surveyContext.get(questionId).value = parseInt(value);
    };


    return (
        <div>
            1
            <Radio
                checked={selectedValue === '1'}
                onChange={handleChange}
                value="1"
                color="default"
                name="radio-button-demo"
            />
            <Radio
                checked={selectedValue === '2'}
                onChange={handleChange}
                value="2"
                color="default"
                name="radio-button-demo"
            />
            <Radio
                checked={selectedValue === '3'}
                onChange={handleChange}
                value="3"
                color="default"
                name="radio-button-demo"
            />
            <Radio
                checked={selectedValue === '4'}
                onChange={handleChange}
                value="4"
                color="default"
                name="radio-button-demo"
            />
            <Radio
                checked={selectedValue === '5'}
                onChange={handleChange}
                value="5"
                color="default"
                name="radio-button-demo"
            />
             5

        </div>
    );
}

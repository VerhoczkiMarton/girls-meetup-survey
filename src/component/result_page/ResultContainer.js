import React, {useContext} from "react";
import Card from "react-bootstrap/Card";
import Result from "./Result";
import ResultContext from "../../result_context/ResultContext";

const ResultContainer = () => {
    const resultContext = useContext(ResultContext);

    return (
        <div style={{width: '100%', marginBottom: '10vh', marginTop: '2vh'}}>
            <Card className="text-center"
                  style={{width: '90vw', height: 'auto', margin: '0 auto', padding: '10px', position: 'relative'}}>
                <Card.Header>Az eredményeid</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {
                            Array.from(resultContext).map((result) => <Result key={result[0]} label={result[1].label} score={result[1].value}/>)
                        }
                    </Card.Text>
                </Card.Body>
                {/*<Card.Footer><Link to='/'><Button>Vissza a főoldalra</Button></Link></Card.Footer>*/}
            </Card>
        </div>
    );
};

export default ResultContainer;

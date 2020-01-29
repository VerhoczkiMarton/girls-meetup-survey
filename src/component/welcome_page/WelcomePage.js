import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";

const WelcomePage = () => {
    return (
        <div style={{width: '100%', marginBottom: '10vh', marginTop: '2vh'}}>
            <Card className="text-center"
                  style={{width: '90vw', height: 'auto', margin: '0 auto', padding: '10px', position: 'relative'}}>
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <strong>A következő válaszlehetőségek közül választhat:</strong><br/>
                        <span style={{margin: '0'}}> Ha nem érzed fontosnak, válassz 1-et.</span><br/>
                        <span style={{margin: '0'}}> Ha kicsit fontosnak érzed, írj 2-et.</span><br/>
                        <span style={{margin: '0'}}> Ha eléggé fontosnak érzed, írj 3-et.</span><br/>
                        <span style={{margin: '0'}}> Ha fontosnak érzed akkor, írj 4-et.</span><br/>
                        <span style={{margin: '0'}}> Ha nagyon fontosnak érzed, írj 5-et.</span><br/>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to='/survey'><Button>Kezdjük!</Button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default WelcomePage;
import React from "react";
import { Card, Button, CardTitle, CardText, CardLink, CardImg } from 'reactstrap';
import './projects.css';
import SpaceJam from '../../assets/pictures/space-jam.png';
import grandmasAttic from '../../assets/pictures/grandmas-attic.png'

const Projects = () => {
    return (
        <div>
            <div className="projectWrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-4 offset-2 textBackground">
                            <span className="projectText">
                                A web application designed to streamline touring processes for bands and musicians. These folks travel all over the country, and with them comes their equipment.
                            They need places to rest, perform and store their equipment safely. This application targets small businesses, homeowners and essentially any atypical
                            individual with the space and time required. Bands provide a fee in exchange for refuge, equipment storage and a venue.
                            </span>
                        </div>
                        <div className="col-4">
                            <Card body outline color="" className="card" style={{ backgroundColor: '#4e4e50', border: '5px solid #6f2232', borderRadius: '25px' }}>
                                <CardImg width="100%" src={SpaceJam} style={{ borderRadius: '15px' }} />
                                <CardTitle className="cardText"><h3>Space Jam</h3></CardTitle>
                                <CardLink className="visitButton" href="https://tomsmaj.github.io/Space-Jam/"><Button color="danger"><h3 className="visitButton">Visit</h3></Button></CardLink>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 offset-2">
                        <Card body outline color="" className="card" style={{ backgroundColor: '#4e4e50', border: '5px solid #6f2232', borderRadius: '25px' }}>
                                <CardImg width="100%" src={grandmasAttic} style={{ borderRadius: '15px' }} />
                                <CardTitle className="cardText"><h3>Grandma's Attic</h3></CardTitle>
                                <CardLink className="visitButton" href="https://grandmasattic.herokuapp.com/"><Button color="danger"><h3 className="visitButton">Visit</h3></Button></CardLink>
                            </Card>
                        </div>
                        <div className="col-4 textBackground">
                            <span className="projectText">
                                A web application designed to streamline touring processes for bands and musicians. These folks travel all over the country, and with them comes their equipment.
                            They need places to rest, perform and store their equipment safely. This application targets small businesses, homeowners and essentially any atypical
                            individual with the space and time required. Bands provide a fee in exchange for refuge, equipment storage and a venue.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Projects;
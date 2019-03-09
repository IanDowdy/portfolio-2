import React from "react";
import { Card, Button, CardTitle, CardText, CardLink, CardImg } from 'reactstrap';
import './projects.css';
import SpaceJam from '../../assets/pictures/space-jam.png';
import grandmasAttic from '../../assets/pictures/grandmas-attic.png'

const Projects = () => {
    return (
        <div>
                <div className="container">
            <div className="projectWrapper">
                    <div className="row">
                        <div className="col-4 offset-2 textBackground">
                            <span className="projectText">
                                A web application designed to streamline touring processes for bands and musicians. These folks travel all over the country, and with them comes their equipment.
                            They need places to rest, perform and store their equipment safely. This application targets small businesses, homeowners and essentially any atypical
                            individual with the space and time required. Bands provide a fee in exchange for refuge, equipment storage and a venue. A personal flair to 
                            a personal profession.
                            </span>
                        </div>
                        <div className="col-4">
                            <Card body outline color="" className="card" style={{ backgroundColor: '#4e4e50', border: '5px solid #c3073f', borderRadius: '25px' }}>
                                <CardImg width="100%" src={SpaceJam} style={{ borderRadius: '15px' }} />
                                <CardTitle className="cardText"><h3>Space Jam</h3></CardTitle>
                                <CardLink className="visitButton" href="https://tomsmaj.github.io/Space-Jam/"><Button color="danger"><h3 className="visitButton">Visit</h3></Button></CardLink>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 offset-2">
                        <Card body outline color="" className="card" style={{ backgroundColor: '#4e4e50', border: '5px solid #c3073f', borderRadius: '25px' }}>
                                <CardImg width="100%" src={grandmasAttic} style={{ borderRadius: '15px' }} />
                                <CardTitle className="cardText"><h3>Grandma's Attic</h3></CardTitle>
                                <CardLink className="visitButton" href="https://grandmasattic.herokuapp.com/"><Button color="danger"><h3 className="visitButton">Visit</h3></Button></CardLink>
                            </Card>
                        </div>
                        <div className="col-4 textBackground">
                            <span className="projectText">
                               This web application was built around the idea that any local area can have it's own online free antique giveaway.
                               Austin is a large and dense city, and all those people have lots of common/seasonal items that might be somewhat difficult to sell individually.
                               When people no longer want their stuff, we would like to provide them one more option to these unwanted seasonal items.
                               Easter, Christmas, Halloween etc. This app is specifically designed for these common products, with the intention of moving them
                               in bulk at heavily discounted prices. Sort of like auctioning off old storage units, except there's a specific theme to each one.
                               
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Projects;
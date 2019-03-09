import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import picOfMe from '../../assets/pictures/me.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="homeWrapper">
            <div className="container">
                <div className="intro">
                    <div className="row">
                        <div className="col-12">
                            <Container fluid className="greeting">
                                <h1 className="display-3 bio">Hello! :3</h1>
                                <p className="lead">It's nice to meet you.</p>
                            </Container>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"><hr /><br /></div>
                    </div>
                    <div className="row" id="curveEdge">
                        <div className="col-8"><span className="bio">My name is Ian, annihilator of pizza, father to the most adorable cat of all time, lover of irreverent comedies, astronomy,
                                Basketball (Go Spurs Go!), cosmology, Dr. Pepper, music video games, and Coding!.</span>
                            <br /><br />
                            <span className="bio">I am a passionate learner, keen on embracing this new fervor to understand as much about the world of web development as I possibly can.</span>
                            <br /><br />
                        </div>
                        <div className="col-4"><img src={picOfMe} className="img-fluid" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;
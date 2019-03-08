import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './contact.css';

const Contact = () => {
    return (
        <div className="row">
            <div className="col-1"></div>
        <div className="col-10">
        <Form id='contactme' method='post'>
             <legend className="legend">Contact Me</legend>

                <Input type="hidden" name='submitted' id='submitted' value='1' />

                    <FormGroup className="FormGroup">
                    <Label htmlFor="name">Your Full Name*: </Label><br />
                    <Input type="text" name='name' id='name' maxLength="50"/><br/>
                    </FormGroup>

                    <FormGroup className="FormGroup">
                    <Label htmlFor="email">Email Address*: </Label><br />
                    <Input type="text" name='email' id='email' maxLength="50"/><br/>
                    </FormGroup>

                    <FormGroup className="FormGroup">
                    <Label htmlFor="phone">phone*: </Label><br />
                    <Input type="text" name='phone' id='phone' maxLength="15"/><br/>
                    </FormGroup>
                   
                    <FormGroup className="FormGroup">
                    <Label htmlFor="message">Message: </Label><br />
                    <Input type="textarea" rows="10" cols="50" name='name' id='name' maxLength="50" /><br/>
                    </FormGroup>

                    <Button className="btn-lg btn-block" type="submit" name="submit" value="submit"><span className="submit">Submit</span></Button>
        </Form>
        </div>
        <div className="col-12"><br /><br /><br /></div>
        </div>
        
                    )
                }
                
                
export default Contact;
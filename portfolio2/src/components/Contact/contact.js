import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Contact = () => {
    return (
        <div>
        <Form action="https://formspree.io/ian_dowdy@outlook.com" method="POST">
        <textarea name="message" placeholder="Test Message"></textarea>
  <input type="submit" value="Send" />
</Form>
        </div>
                    )
                }
                
                
export default Contact;
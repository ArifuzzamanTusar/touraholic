import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pageheader from '../../Global/Pageheader/Pageheader';

import './Blog.css'

const Blog = () => {
    return (
        <div id='page-blog'>
            <Pageheader title={"Blog"} subtitle={"The Blog Page"} ></Pageheader>
            <div className="page-content py-5">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="question-body my-3 p-3">
                                <h4>Difference between authorization and authentication ?</h4>

                                <table class="table">
                                    <thead>
                                        <tr>
                                         
                                            <th scope="col">authentication</th>
                                            <th scope="col">authorization</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            
                                            <td>Authentication verifies the identity of the user.</td>
                                            <td>What resources a user can access is determined by authorization.</td>
                                            
                                        </tr>
                                        <tr>
                                            
                                            <td>The first stage in a successful identity and access management procedure is authentication.</td>
                                            <td>Authentication is always followed by authorization.</td>
                                           
                                        </tr>
                                        <tr>
                                            
                                            <td>Authorization is the process of a user's access being verified.</td>
                                            <td>Authorization verifies the functionality and access that a user has.</td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="question-body my-3 p-3">
                                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                                <p>Authentication is the process of verifying a user's identity. The process of proving that something is true is known as authentication. It confirms a user's identification. Authorization is the process of a user's access being verified. Authorization determines what functionality and access a user has. This is a security mechanism for determining a user's access level.</p>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="question-body my-3 p-3">
                                <h4>What other services does firebase provide other than authentication?</h4>
                                <p>These are some services that firebase provides us except authentication</p>
                                <ul>
                                    <li>Cloud Firestore</li><li>Cloud Functions</li><li>Cloud Messaging</li><li>Hosting</li><li>Cloud Storage</li><li>Google Analytics</li><li>Predictions</li><li>Dynamic Links</li><li>Remote Config</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default Blog;
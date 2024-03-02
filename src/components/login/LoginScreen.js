// src/components/LoginScreen.js
import React from 'react';
import { useLoginController } from '../../controllers/loginController';
import './LoginScreen.css'; // Import CSS for styling if needed
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SlUser, SlLock } from "react-icons/sl";

const LoginScreen = ({ navigation }) => {
  const { username, password, setUsername, setPassword, handleLogin, loginStatus } = useLoginController();

  return (
    <Container fluid="md" className="center">
        <Row className="center">
            <Col>
                <Row className="logo-title">
                        <img src={require('../../assets/logo-with-text.png')} alt="logo" className='logo'/>
                </Row>
                
                <Row style={{ height: '80vh' }}>
                    <Col className='screen-frame'>
                        <Row className='title'>
                            <h2>Masuk untuk memulai rekapitulasi</h2>
                        </Row>
                        <Row>
                            
                            <div className="input-field-container">
                                <SlUser className='input-logo' />
                                <input
                                    className="input-field"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <div className="input-underline" />
                            </div>
                        </Row>
                        <Row>
                            <div className="input-field-container">
                                <SlLock className='input-logo' />

                                <input
                                    className="input-field"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="input-underline" />
                            </div>
                        </Row>
                        
                        <Row >
                            <button onClick={handleLogin} className='button'>Login</button>
                        </Row>
                        <Row>
                            <div>{loginStatus}</div>
                        </Row>
                    </Col>
                </Row>
                
            </Col>
        </Row>
    </Container>

  );
};

export default LoginScreen;

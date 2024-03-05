import React, { useState } from 'react';
import { useLoginController } from '../../controllers/loginController';
import './MainMenuScreen.css'; // Import CSS for styling if needed
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoCopyOutline } from "react-icons/io5";
import { PiIdentificationCard } from "react-icons/pi";
import Button from 'react-bootstrap/Button';
import { TbTextScan2 } from "react-icons/tb";
import SwitchButton from '../SwitchButton/SwitchButton';
const MainMenuScreen = ({ label, onClick }) => {

  const [copied, setCopied] = useState(false);
  const text = '99AXASDHAJSD';
  const copyToClipboard = ({ text, setCopied }) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
    return (
      <Container className="main-menu">
        <Col >
          <Row>
            
            <ul className='title'>Integrasi Pemilu</ul>
          </Row>
          <SwitchButton />
          <Row className="card-component">
          <div className="info-header">
            <div className="icon-container">
              <PiIdentificationCard className='card-logo'/>
            </div>
            <div className="text-container">
              <ul className='role'>KPPS LN</ul>
            </div>
            
          </div>
          <div className="divider-component" />

            <Col className='info-kpps'>
              <Row>
                <Col xs={5} >
                  <ul className='item-title'>TPS</ul>
                  <ul className='item-value'>TPS 001</ul>
                </Col>
                <Col xs={7} className="info-col">
                  <ul className='item-title'>Kode TPS</ul>
                  <Row>
                    <Col xs={9} className="align-items-start">
                      <ul className='item-code'>99AXASDHASHD</ul>
                    </Col>
                    <Col xs={2} className="align-items-start">
                    <button  className="button-transparent" onClick={() => copyToClipboard({ text, setCopied })}>
                      {copied ? <IoCopyOutline className="copy-button-true"/> : <IoCopyOutline className="copy-button"/>}
                    </button>

                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={5} className="align-items-start ">
                  <ul className='item-title'>Kelurahan</ul>
                  <ul className='item-value'>Seoul, Korea Selatan</ul>
                </Col>
                <Col xs={6} className="align-items-start">
                  <ul className='item-title'>Kecamatan</ul>
                  <ul className='item-value'>Seoul, Korea Selatan</ul>
                </Col>
              </Row>
              <Row>
                <Col xs={5} className="align-items-start">
                  <ul className='item-title'>Kota/Kabupaten</ul>
                  <ul className='item-value'>Seoul, Korea Selatan</ul>
                </Col>
                <Col xs={6} className="align-items-start">
                  <ul className='item-title'>Provinsi</ul>
                  <ul className='item-value'>Luar Negeri</ul>
                </Col>
              </Row>


            </Col>
            <Button  className="special-button" onClick={onClick}>
              Kelola Daftar Hadir
            </Button>
            <Button className="special-button" onClick={onClick}>
            Kelola Tanda Terima & Kejadian Khusus
            </Button>
            <Button className="special-button" onClick={onClick}>
            Waktu Pemungutan Suara
            </Button>  
          </Row>
          <Row className='button-row'>
          <Button variant="warning" className="scan-button" onClick={onClick}>
            <div className="button-content">
              <TbTextScan2 className='scan-logo'/>
              <span className='text-scan-button'>Scan Form-C</span>
            </div>
          </Button>
        </Row>

            
        </Col>
      </Container>
    );
  };
  
  export default MainMenuScreen;
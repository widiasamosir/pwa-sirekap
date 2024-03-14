
import React, { useState, useEffect } from 'react';
import './DetailMenuScreen.css'; // Import CSS for styling if needed
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { TbTextScan2 } from "react-icons/tb";
import SwitchButton from '../SwitchButton/SwitchButton';
import { fetchAndMapDetailData, HandleScan } from '../../controllers/detailMenuController'; // Import the controller

const DetailMenuScreen = ({ detail, onClick }) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAndMap = async () => {
      const mappedData = await fetchAndMapDetailData();
      setData(mappedData);
    };

    fetchDataAndMap();
  }, []);

  const status = [
    { count: data?.totalNotUploaded || 0, label: 'Belum Difoto', className: 'belum-difoto' },
    { count: data?.totalUploaded || 0, label: 'Tercatat', className: 'terfoto' },
    { count: data?.totalVerified || 0, label: 'Terverifikasi', className: 'terverifikasi' }
  ];

    return (
      <Container className="detail-main-menu">
        <Col  >
          <Row>
            
            <ul className='detail-title'>Integrasi Pemilu</ul>
          </Row>
          <SwitchButton />
          <Row className="detail-card-component">
            <Row >
              <ul className='detail-role'>Pemilihan Presiden dan Wakil Presiden</ul>
              <div className="detail-divider-component" />
            </Row>
            <Row>
              <div className="status-container">
              {status.map((item, index) => (
                  <div key={index} className={"status-item "}>
                  <div className={`status-count ${item.className}`}>{item.count}</div>
                  <div className="status-label">{item.label}</div>
                  </div>
              ))}
            </div>
            </Row>
            <Button  className="detail-special-button" onClick={onClick}>
            Lihat Detail Pemilihan
            </Button>
            <Button className="detail-special-button" onClick={onClick}>
            Kelola PPS, Saksi, & PANWAS
            </Button>
            <Button className="detail-special-button" onClick={onClick}>
            Waktu Penghitungan Suara
            </Button>  
          </Row>
          <Row className='detail-button-row'>
          <TbTextScan2 className='detail-scan-logo' />
           <Button  className="detail-scan-button" onClick={HandleScan()}>
              Scan Form-C
            </Button>
          </Row>
            
        </Col>
      </Container>
    );
  };
  
  export default DetailMenuScreen;
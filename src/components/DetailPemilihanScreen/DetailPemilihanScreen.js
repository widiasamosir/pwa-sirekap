import './DetailPemilihanScreen.css';
import { useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { FaFileAlt, FaUpload, FaClipboardCheck } from 'react-icons/fa';
import SwipeButton from '../SwipeButton/SwipeButton';
import ConfirmDialogScreen from '../ConfirmDialog/ConfirmDialogScreen';
import {fetchAndMapDetailData} from '../../controllers/detailPemilihanController';
// import { DetailPemilihanController } from '../../controllers/detailPemilihanController.js';
function HeaderCard({ title }) {
    return <h1 className="card-header">{title}</h1>;
  }



function ActionCard({data,title}) {
    // Example data for demonstration
    
    if (!data) {
        return null; // or render a loading state or placeholder
    }

    // Determine icon color based on data
    const getIconColor = (status) => {
        return status ? 'green' : 'grey';
    };

    return (
        <div className="action-card">
            <div className="action-card-header">{title}</div>
            <div className="action-icons">
                <span className="action-icon" style={{ color: getIconColor(data.isScan) }}>
                    {data.isScan ? <FaFileAlt /> : <FaFileAlt />}
                </span>
                <span className="action-separator" style={{ backgroundColor: getIconColor(data.isScan) }}></span>
                <span className="action-icon" style={{ color: getIconColor(data.isUpload) }}>
                    {data.isUpload ? <FaUpload /> : <FaUpload />}
                </span>
                <span className="action-separator"></span>
                <span className="action-icon" style={{ color: getIconColor(data.isVerified) }}>
                    {data.isVerified ? <FaClipboardCheck /> : <FaClipboardCheck />}
                </span>
            </div>
            <div className="action-detail">
                <button className="detail-button">Detail</button>
            </div>
        </div>
    );
}

export const DetailPemilihanScreen = () => {
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const navigate = useNavigate();
    const handleConfirm = () => {
        // Handle confirmation logic here
        navigate('/', { replace: true });
    };

    const handleCancel = () => {
        // Handle cancel logic here
        console.log('Confirmation cancelled');
        setShowConfirmDialog(false); // Hide the confirm dialog
    };
    const [isChecklistChecked, setIsChecklistChecked] = useState(false);

    const handleChecklistToggle = () => {
        setIsChecklistChecked(!isChecklistChecked);
    };

    const [dataPage1, setDataPage1] = useState(null);
    const [dataPage2, setDataPage2] = useState(null);
    const [dataPage3, setDataPage3] = useState(null);

    useEffect(() => {
        const fetchDataAndMap = async () => {
            const mappedData = await fetchAndMapDetailData();
            setDataPage1(mappedData.dataPage1);
            setDataPage2(mappedData.dataPage2);
            setDataPage3(mappedData.dataPage3);
        };
            fetchDataAndMap();
    }, []);
    const handleGoBack = () => {
        navigate(-1, {replace: true}); // Go back to the previous route
    };
    return (
        <div className="detail-pemilihan-screen">
        <Header title="Detail Pemilihan" onNavigateBack={handleGoBack} />
           
            <div className="election-info-card">
                <HeaderCard title="Informasi Pemilihan" />
                <div className="election-info-separator"></div>
                <div className="info-row">
                    <div className="info-label">Jenis Pemilihan</div>
                    <div className="info-value">Pemilihan Presiden dan Wakil Presiden</div>
                </div>
                <div className="info-row flex-row">
                <div className="info-block">
                    <div className="info-label">Wilayah Pemilihan</div>
                    <div className="info-value">Seoul, Korea Selatan</div>
                </div>
                <div className="info-block">
                    <div className="info-label">Jumlah Pasangan Calon</div>
                    <div className="info-value">3</div>
                </div>
                </div>

            </div>
            <div className="form-title">
                <div className='row-title'>Pengambilan Foto Form C</div>

                <div className="row-check">
                <input type="checkbox" checked={isChecklistChecked} onChange={handleChecklistToggle} />
                <div className="checklist">Sembunyikan halaman yang sudah selesai</div>
                </div>
            </div>
            <div className="row-dp">
                <div className="column-card">
                    {(!isChecklistChecked || !(dataPage1.isScan && dataPage1.isUpload && dataPage1.isVerified)) && (
                        <ActionCard title={"Halaman 1"} data={dataPage1} />
                    )}
                    {(!isChecklistChecked ||! (dataPage2.isScan && dataPage2.isUpload && dataPage2.isVerified)) && (
                        <ActionCard title={"Halaman 2"} data={dataPage2} />
                    )}
                    {(!isChecklistChecked || !(dataPage3.isScan && dataPage3.isUpload && dataPage3.isVerified)) && (
                        <ActionCard title={"Halaman 3"} data={dataPage3} />
                    )}
                </div>
            </div>
            <footer className="scanner-footer">
                <h2>Dokumen Pemilihan</h2>
                <p>Anda dapat melakukan penguncian pemilihan setelah seluruh pengambilan Form C diatas telah selesai</p>
                <div className="swipe-button-wrapper">
                    <SwipeButton setShowConfirmDialog={setShowConfirmDialog} />
                    {showConfirmDialog && <ConfirmDialogScreen
                            title="Apakah Anda yakin ingin mengunci dokumen pemilihan ini?"
                            cancelButtonText="Batalkan"
                            submitButtonText="Kunci"
                            onConfirm={handleConfirm}
                            onCancel={handleCancel}
                        />}
                </div>
            </footer>
        </div>
    );
    };
export default DetailPemilihanScreen;

import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const BackButton = ({handleGoBack}) => {
    const navigate = useNavigate();

    // const handleGoBack = () => {
    //     navigate(-1, {replace: true}); // Go back to the previous route
    // };

    return (
        <IoIosArrowBack size="24px" onClick={handleGoBack} />
    );
};

export default BackButton;

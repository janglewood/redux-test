import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const YearButton = styled.button`
    border: 2px solid #dbd15c;
    outline: none;
    margin: 3px;
    background-color: #282c34;
    border-radius: 3px;
    padding: 20px;
    font-weight: bold;
    color: white;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0 5px;
`;

export const PhotoInfo = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0 5px;
`;
import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    color: #000000;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    z-index: 999;

    padding: 10px 50px 10px 50px;
    font-family: 'Roboto', sans-serif;

    button {
        cursor: pointer;
        width: 100%;
    }

    h2 {
        display: flex;
        justify-content: center;
        font-size: 25px;
        font-weight: bold;
    }
`;

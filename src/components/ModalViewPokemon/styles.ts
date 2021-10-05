import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    color: #000000;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    z-index: 999;

    padding: 10px 10px 10px 30px;
    font-family: 'Roboto', sans-serif;

    button {
        cursor: pointer;
    }

    h2 {
        display: flex;
        justify-content: center;
        font-size: 25px;
        font-weight: bold;
    }

    img {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 10px;
    }

    li {
        list-style-type: none;
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }
`;

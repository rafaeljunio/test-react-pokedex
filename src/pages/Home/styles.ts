import styled from 'styled-components';

export const Container = styled.div`
    height: 822px;
    background-color: #d4c3a3;
    margin: 0 20%;
`;

export const ContainerPagination = styled.div`
    ul {
        list-style: none;
        margin-top: 60px;
    }

    ul li {
        display: inline;
    }
`;

export const ListItemCardsContainer = styled.div`
    display: flex;
    flex: 1;

    flex-wrap: wrap;

    margin-top: 20px;

    h1 {
        font-family: 'Segoe UI', sans-serif;
        margin: 0 0 0 30px;
    }
`;

export const ButtonPagination = styled.button`
    background: #7e7394;
    color: #fff;
    height: 40px;
    border-radius: 10px;
    border: 2px solid #100b16;

    width: 25px;
    height: 30px;
    font-weight: 400;

    font-family: 'Segoe UI';
    margin: 0px 5px;
`;

export const ContainerSelect = styled.div`
    width: 204px;
    padding: 34px 0px 20px 34px;

    font-size: 15px;
    font-family: 'Segoe UI';

    color: #535662;

    label {
        font-size: 12px;
        font-family: 'Segoe UI';
        color: #535662;
    }
`;

export const ContainerCarousel = styled.div`
    display: flex;
    margin: 0 5% 0 5%;
    height: 300px;
`;

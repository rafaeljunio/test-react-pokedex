import styled from 'styled-components';

export const Container = styled.div`
    ul {
        list-style: none;
        margin-top: 60px;
        display: flex;
        justify-content: flex-end;
        padding: 0 5% 0 0;
    }

    ul li {
        display: inline;
    }
`;

export const ButtonPagination = styled.button`
    background: #7e7394;
    color: #fff;
    height: 40px;
    border-radius: 10px;
    border: 2px solid #100b16;

    height: 30px;
    font-weight: 400;
    padding: 0px 10px 0px 10px;
    font-family: 'Segoe UI';
    margin: 0px 5px;
`;

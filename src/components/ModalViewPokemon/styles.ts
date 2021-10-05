import styled from 'styled-components';

export const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background-color: #fff;
    color: #000000;
    width: 60%;
    height: 60%;
    border-radius: 20px;
    z-index: 999;
`;

export const ButtonClose = styled.div`
    background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    right: calc(-100% + 64px);
    top: 16px;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;
    &:before,
    &:after {
        content: ' ';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: #000;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;
export const Content = styled.div`
    margin: 30px;
`;

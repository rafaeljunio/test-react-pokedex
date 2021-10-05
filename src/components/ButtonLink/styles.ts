import styled from 'styled-components';

export const Container = styled.button`
    & {
        color: #fff;
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    width: 45px;
    height: 45px;
    border-radius: 50%;

    border: 0px;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`;

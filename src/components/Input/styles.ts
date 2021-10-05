import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    flex: 1;
    input {
        flex: 1;
        height: 55px;
        display: flex;

        font-family: 'Segoe UI';

        margin-top: 15px;
        width: auto;

        padding: 14px 22px 14px 22px;
        size: 20px;

        color: #000;

        border-radius: 10px;

        &::placeholder {
            color: #535662;
        }
    }
`;

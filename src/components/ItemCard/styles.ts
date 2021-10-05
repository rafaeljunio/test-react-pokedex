import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 33.333333%;
    justify-content: center;
    margin-bottom: 30px;
`;

export const ContainerCard = styled.div`
    width: 180px;
    height: 180px;
    background-color: #b4adbe;
    margin-top: 50px;
    display: flex;
    border: 2px solid #000;
    border-radius: 5px;
    position: relative;

    & {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 50%;
    }
`;

export const BackgroundOptions = styled.div`
    width: 180px;
    height: 180px;

    position: absolute;

    background-color: #000000;
    opacity: 0.24;
    border-radius: 5px;
`;

export const ContainerOptions = styled.div`
    display: flex;
    flex: 1;

    width: 180px;
    height: 180px;

    position: absolute;

    padding: 0 20% 0 20%;

    justify-content: space-between;
    align-items: center;
`;

export const ContainerId = styled.div`
    width: 44.69px;
    height: 46.35px;
    background-color: white;

    transform: rotate(-45deg);
    border-radius: 10px;
    display: table;

    position: absolute;
    margin-top: -180px;

    border: 2px solid #100b16;
    background-color: #535662;
    color: #fff;

    h6 {
        text-align: center;
        vertical-align: middle;
        display: table-cell;
        transform: rotate(45deg);

        font-size: 22px;
        font-weight: 400;
        font-family: 'Poppins';
    }
`;

export const ContainerType = styled.div`
    width: 52px;
    height: 30px;
    background-color: white;

    border-radius: 10px;
    display: table;

    position: absolute;
    float: right;

    margin: 30px;
    margin-top: 135px;

    background-color: #f25d52;
    color: #fff;

    h6 {
        text-align: center;
        vertical-align: middle;
        display: table-cell;

        font-family: 'Poppins';
        font-size: 12px;
        font-weight: normal;
    }
`;

export const ContainerName = styled.div`
    background: #7e7394;
    color: #fff;
    height: 40px;
    border-radius: 10px;
    border: 2px solid #100b16;

    width: 147px;
    height: 57px;
    font-weight: 400;

    font-family: 'Segoe UI';
    display: table;

    position: absolute;
    margin: 170px 0px 0px 0px;

    h6 {
        text-align: center;
        vertical-align: middle;
        display: table-cell;

        font-family: 'Poppins';
        font-size: 16px;
        font-weight: 400;
    }
`;

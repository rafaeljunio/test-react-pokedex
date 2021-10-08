import styled from 'styled-components';

export const Container = styled.div`
    height: 822px;
    background-color: #d4c3a3;
    margin: 0 20%;

    h2 {
        font-family: 'Poppins', sans-serif;
        padding: 50px 0px 20px 20px;
    }

    table {
        width: 100%;
        padding: 0px 20px 0px 20px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;

        thead {
            tr {
                display: flex;
                flex: 1;
                justify-content: space-around;
                align-items: center;
                text-align: center;
            }
        }

        tbody {
            tr {
                width: 100%;
                border-radius: 10px;
                display: flexbox;
                margin-bottom: 20px;
                flex: 1;
                justify-content: space-between;
                td {
                    display: flex;
                    flex: 1;
                    justify-content: space-between;
                    align-items: center;
                    height: 90px;
                    padding: 2px 0px 2px 30px;

                    border: 0px solid #fff;

                    img {
                        display: flex;
                        flex: 1;
                        width: 50%;
                        height: 90%;
                        justify-content: center;
                        align-items: center;
                        margin: 0 auto;
                        border: 2px solid #000000;
                        padding: 10px 10px 10px 10px;
                        border-radius: 5px;
                        background-color: #b4adbe;
                    }
                    &.type {
                        span {
                            color: #fff;
                            background-color: #f25d52;
                            padding: 10px 20px;
                            border-radius: 5px;
                        }
                    }
                }
                background-color: #fff;
                border-radius: 10px;
            }
        }
    }
`;

export const ContainerOptions = styled.div`
    display: flex;
    flex: 1;

    width: 180px;
    height: 180px;

    position: relative;

    padding: 0 20% 0 20%;

    justify-content: space-between;
    align-items: center;
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

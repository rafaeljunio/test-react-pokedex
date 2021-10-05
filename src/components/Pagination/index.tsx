import { render } from '@testing-library/react';
import React, { ButtonHTMLAttributes, useState } from 'react';

import { Container, ButtonPagination } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    pages: number;
    setPage: (value: number) => void;
    page: number;
}

// import Button from '../Button';

const Pagination: React.FC<ButtonProps> = ({
    pages,
    setPage,
    page,
    ...rest
}) => {
    const [offset, setOffset] = useState(0);

    const limit = 6;
    const MAX_ITENS = 9;

    const MAX_LEFT = (MAX_ITENS - 1) / 2;

    const current = offset ? offset / limit + 1 : 1;
    const first = Math.max(current - MAX_LEFT, 1);

    function build() {
        const window = 3;
        let maxLeft = page - Math.floor(window / 2);
        let maxRight = page + Math.floor(window / 2);

        if (maxLeft < 1) {
            maxLeft = 1;
            maxRight = window;
        }

        if (maxRight > pages) {
            maxLeft = pages - (window - 1);
            maxRight = pages;

            if (maxLeft < 1) {
                maxLeft = 1;
            }
        }

        const options = [];

        if (page !== 1) {
            options.push(
                <ButtonPagination
                    style={{ backgroundColor: '#B4ADBE' }}
                    {...rest}
                    onClick={() => setPage(page - 1)}
                >
                    {'<'}
                </ButtonPagination>,
            );
        }

        // eslint-disable-next-line no-plusplus
        for (let i = maxLeft; i <= maxRight; i++) {
            if (i === page) {
                options.push(
                    <ButtonPagination
                        style={{ backgroundColor: '#535662' }}
                        {...rest}
                        onClick={() => setPage(i)}
                    >
                        {i}
                    </ButtonPagination>,
                );
            } else {
                options.push(
                    <ButtonPagination {...rest} onClick={() => setPage(i)}>
                        {i}
                    </ButtonPagination>,
                );
            }
        }

        if (page !== pages && pages !== 0) {
            options.push(
                <ButtonPagination
                    style={{ backgroundColor: '#B4ADBE' }}
                    {...rest}
                    onClick={() => setPage(page + 1)}
                >
                    {'>'}
                </ButtonPagination>,
            );
        }

        return options;
    }

    return (
        <Container>
            <ul>{build()}</ul>
        </Container>
    );
};

export default Pagination;

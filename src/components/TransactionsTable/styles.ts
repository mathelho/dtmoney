import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
    }

    th {
        color: var(--text-body);
        text-align: left;
        line-height: 1.5rem;
        padding: 1rem 2rem;
        font-weight: 400;
    }

    td {
        padding: 1rem 2rem;
        background: var(--shape);
        color: var(--text-body);
        border-radius: 0.25rem;
        border: 0;

        &:first-child { // o primeiro td que virá dentro de um tr
            color: var(--text-title);
        }

        &.deposit {
            color: var(--green);
        }

        &.withdraw {
            color: var(--red);
        }
    }
`;
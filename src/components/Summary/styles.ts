import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem; // 1.5 em baixo e em cima, 2 nas laterais
        color: var(--text-title);
        border-radius: 0.25rem;
    }

    div.highlight-background {
        color: white;
        background: var(--green);
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        font-weight: 500;
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 3rem;
    }
`;
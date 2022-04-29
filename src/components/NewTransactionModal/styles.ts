import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
    h2 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        color: var(--text-title);
    }

    input {
        width: 100%;
        font-size: 1rem;
        font-weight: 400;

        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        background-color: var(--green);
        width: 100%;
        height: 4rem;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        margin-top: 1rem;
        color: var(--shape);
        font-weight: 600;

        border-radius: 0.25rem;
        border: 0;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33cc95',
    red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${props => {return props.isActive 
        ? transparentize(0.8, colors[props.activeColor])
        : 'transparent'}};

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 20px;
        height: 20px;
    }

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`;
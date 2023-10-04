import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
`;

export const Text = styled.p`
    color: grey;
`;

export const Letter = styled.span`
    color: ${(p) => (!p.typed ? '#777' : p.typed === p.letter ? 'yellow' : 'red') };
    background-color: ${(p) => (!p.typed ? '#111' : p.typed === p.letter ? '#333' : '#222') };
`;

export const InputKey = styled.input`
    position: absolute;
    top: 100;
    left: 25%;
    height: 50vh;
    width: 50vw;
    opacity: 0;
    cursor: default;
`;

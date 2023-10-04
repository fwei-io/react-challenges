import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 50vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Clock = styled.div`
    height: 400px;
    width: 400px;
    border: 2px solid salmon;
    border-radius: 50%;
    position: absolute;
    background-color: #444444;
`;

const basicStyle = `
    height: 5px;
    width: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
`

export const HourHand = styled.div`
    ${basicStyle}
    background-color: orange;
    transform: rotate(${p => p.rotation}deg);
    &:after {
        content: '';
        height: 120px;
        width: 5px;
        background-color: orange;
        position: absolute;
        bottom: 0;
    }
`

export const MinuteHand = styled.div`
    ${basicStyle}
    background-color: gold;
    transform: rotate(${p => p.rotation}deg);
    &:after {
        content: '';
        height: 185px;
        width: 5px;
        background-color: gold;
        position: absolute;
        bottom: 0;
    }
`

export const SecondHand = styled.div`
    ${basicStyle}
    background-color: white;
    transform: rotate(${p => p.rotation}deg);
    &:after {
        content: '';
        height: 160px;
        width: 2px;
        background-color: white;
        position: absolute;
        bottom: 0;
    }
`
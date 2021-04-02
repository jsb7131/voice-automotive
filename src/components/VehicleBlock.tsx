import React from 'react';
import styled from 'styled-components';

type VBProps = {
    width: number,
    height: number,
    fontSize: string,
    bgColor: string,
    border: string,
    horiCenter?: boolean,
    hoverColor: string,
    last: boolean,
    click: () => void,
    dealerMake: string,
    dealerModel: string
};

type ContainerProps = {
    width: number,
    height: number,
    fontSize: string,
    bgColor: string,
    border: string,
    horiCenter?: boolean,
    hoverColor: string,
    last: boolean
};

const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: ${p => p.width}px;
    min-height: ${p => p.height}px;
    height: ${p => p.height}px;
    font-size: ${p => p.fontSize};
    color: black;
    background: ${p => p.bgColor};
    border: ${p => p.border};
    border-radius: 10px;
    margin-top: 20px;
    margin-right: ${p => p.horiCenter ? "0" : "20px"};
    margin-bottom: ${p => p.last ? 20 : 0}px;
    &:hover {
        color: white;
        background: ${p => p.hoverColor};
    };
`;

export const VehicleBlock: React.FC<VBProps> = props => {
    return (
        <Container
            className="no-select-pointer"
            width={props.width}
            height={props.height}
            fontSize={props.fontSize}
            bgColor={props.bgColor}
            border={props.border}
            horiCenter={props.horiCenter}
            hoverColor={props.hoverColor}
            last={props.last}
            onClick={props.click}
        >
            {props.dealerMake + " " + props.dealerModel}
        </Container>
    );
};
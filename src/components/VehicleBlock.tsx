import React from 'react';
import styled from 'styled-components';

type VBProps = {
    width: number,
    height: number,
    fontSize: string,
    bgColor: string,
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
    horiCenter?: boolean,
    hoverColor: string,
    last: boolean
};

const Container = styled.div<ContainerProps>`
    width: ${p => p.width}px;
    height: ${p => p.height}px;
    font-size: ${p => p.fontSize};
    color: black;
    background: ${p => p.bgColor};
    border-radius: 10px;
    margin-top: 20px;
    margin-left: ${p => p.horiCenter ? "auto" : 0};
    margin-right: ${p => p.horiCenter ? "auto" : "20px"};
    margin-bottom: ${p => p.last ? 20 : 0}px;
    &:hover {
        color: white;
        background: ${p => p.hoverColor};
    };
`;

export const VehicleBlock: React.FC<VBProps> = props => {
    return (
        <Container
            className="list-item"
            width={props.width}
            height={props.height}
            fontSize={props.fontSize}
            bgColor={props.bgColor}
            horiCenter={props.horiCenter}
            hoverColor={props.hoverColor}
            last={props.last}
            onClick={props.click}
        >
            {props.dealerMake + " " + props.dealerModel}
        </Container>
    );
};
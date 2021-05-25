import React from 'react';
import styled from 'styled-components';
import { CenteredTextBlock } from './CenteredTextBlock';
import { Chin } from './Chin';

type VBProps = {
    width: number,
    height: number,
    fontSize: string,
    bgColor: string,
    border: string,
    horiCenter?: boolean,
    hoverColor: string,
    onClick: () => void,
    dealerMake: string,
    dealerModel: string
};

type ContainerProps = {
    width: number,
    height: number,
    border: string,
    horiCenter?: boolean
};

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    width: ${p => p.width}px;
    min-height: ${p => p.height}px;
    height: ${p => p.height}px;
    border: ${p => p.border};
    border-radius: 10px;
    margin-top: 20px;
    margin-right: ${p => p.horiCenter ? "0" : "20px"};
`;

export const VehicleBlock: React.FC<VBProps> = props => {
    return (
        <Container
            className="no-select-pointer"
            width={props.width}
            height={props.height}
            border={props.border}
            horiCenter={props.horiCenter}
        >
            <CenteredTextBlock
                percentHeight={!props.horiCenter ? 65 : 100}
                fontSize={props.fontSize}
                bgColor={props.bgColor}
                borderRad={10}
                horiCenter={props.horiCenter}
                hoverColor={props.hoverColor}
                onClick={props.onClick}
                text={props.dealerMake + " " + props.dealerModel}
            />
            {!props.horiCenter &&
                <Chin
                    borderRad={10}
                    percentHeight={35}
                    title={props.dealerMake + " " + props.dealerModel}
                />
            }
        </Container>
    );
};
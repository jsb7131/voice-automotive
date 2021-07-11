import React from 'react';
import styled from 'styled-components';
import { useHover } from '../hooks/useHover';
import { CenteredTextBlock } from './CenteredTextBlock';
import { Chin } from './Chin';

type VBProps = {
    width: number,
    height: number,
    fontSize: string,
    bgColor: string,
    borderBoxShadow: string,
    selected?: boolean,
    horiCenter?: boolean,
    hoverColor: string,
    onClick: () => void,
    dealerMake: string,
    dealerModel: string
};

type ContainerProps = {
    width: number,
    height: number,
    borderBoxShadow: string,
    horiCenter?: boolean
};

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    width: ${p => p.width}px;
    min-height: ${p => p.height}px;
    height: ${p => p.height}px;
    box-shadow: ${p => p.borderBoxShadow};
    border-radius: 10px;
    margin-top: 20px;
    margin-right: ${p => p.horiCenter ? "0" : "20px"};
    ${p => !p.horiCenter ? "&:hover { box-shadow: 0 0 0 7px lightblue; };" : ""}
`;

export const VehicleBlock: React.FC<VBProps> = props => {

    const hover = useHover();
    
    return (
        <Container
            ref={hover.targetRef}
            width={props.width}
            height={props.height}
            borderBoxShadow={props.borderBoxShadow}
            horiCenter={props.horiCenter}
        >
            <CenteredTextBlock
                percentHeight={!props.horiCenter ? 65 : 100}
                fontSize={props.fontSize}
                bgColor={props.bgColor}
                borderRad={10}
                horiCenter={props.horiCenter}
                hoverColor={props.hoverColor}
                onClick={props.horiCenter ? props.onClick : () => {}}
                text={props.dealerMake + " " + props.dealerModel}
            />
            {!props.horiCenter &&
                <Chin
                    borderRad={10}
                    percentHeight={35}
                    title={props.dealerMake + " " + props.dealerModel}
                    hovered={hover.hovered || props.selected}
                    onClick={props.onClick}
                />
            }
        </Container>
    );
};
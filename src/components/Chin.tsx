import React from 'react';
import styled from 'styled-components';

type ChinProps = {
    borderRad: number,
    percentHeight: number,
    title: string,
    hovered?: boolean,
    onClick?: () => void
};

type ContainerProps = {
    borderRad: number,
    percentHeight: number
};

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${p => p.percentHeight}%;
    border-top: 1px solid gray;
    border-bottom-left-radius: ${p => p.borderRad}px;
    border-bottom-right-radius: ${p => p.borderRad}px;
    color: gray;
    background: inherit;
`;

export const Chin: React.FC<ChinProps> = props => {
    return (
        <Container
            borderRad={props.borderRad}
            percentHeight={props.percentHeight}
        >
            <div
                style={{marginLeft: "20px"}}
            >
                {props.title}
            </div>
            {props.hovered &&
                <div
                    className="remove-button"
                    onClick={props.onClick}
                    style={{
                        marginRight: "20px",
                        fontSize: "14px",
                        cursor: "pointer"
                    }}
                >
                    Remove from Collection
                </div>
            }
        </Container>
    );
};


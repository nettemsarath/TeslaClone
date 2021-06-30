import React from 'react'
import styled from "styled-components";


function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bg={backgroundImg} >
            <ItemText>
                <h1>
                    {title}
                </h1>
                <p>
                   {description}
                </p>
            </ItemText>
            
                <Buttongroup>
                    <LeftButton>
                        { leftBtnText }
                    </LeftButton>
                    { rightBtnText && 
                        <RightButton>
                            { rightBtnText }
                        </RightButton> 
                    }
                    
                </Buttongroup>
                <DownArrow src="/images/down-arrow.svg" />
           

        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    background-image: ${ props => `url("/images/${props.bg}")` };
    display: flex;
    flex-direction: column;

    align-items: center;
`;

const ItemText = styled.div`
    text-align: center;
    padding-top: 15vh;
    flex-grow:1
`;

const Buttongroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 760px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`;


const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img`
    margin-bottom: 30px
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`;

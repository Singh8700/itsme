import React from 'react';
import styled from 'styled-components';

const VisitingCard = (props) => {
    const cards = [
        { imgs: "./visitingCard/visiting01.jpg", position:  props.positionType},
        { imgs: "./visitingCard/visiting02.jpg", position: props.positionType },
        { imgs: "./visitingCard/fvisiting01.jpg", position: "left" },
        { imgs: "./visitingCard/fvisiting02.jpg", position: props.positionType }
    ];

    const randomNumber = Math.floor(Math.random() * cards.length);

    console.log("Random number is", randomNumber);
// Har card ke liye random position generate karenge (0% - 50%)
const randomPositions = cards.map(() => ({
    top: Math.floor(Math.random() * 30) + '%',
    left: Math.floor(Math.random() * 20) + '%'
}));

    return (
        <Wrapper>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    className={randomNumber === index ? 'active' : ''}
                    top={randomPositions[index].top}
                    position={card.position} // Left ya Right bhej rahe hain
                >
                    <img src={card.imgs} alt="Visiting Card" />
                </Card>
            ))}
        </Wrapper>
    );
};

export default VisitingCard;

const Wrapper = styled.div`
     width: 100vw;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    width: 450px;
    height: max-content;
    background: white;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin: 10px;
    display: none;
    transition: all 0.5s linear;
    position: absolute;
    // Agar position 'left' hai toh left set karo, warna right
    top: ${({ top }) => top}; 
    ${({ position }) => position === "left" ? "left: 05%;" : "right: 8%;"}
    z-index:-1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        transition: all 0.5s linear;
    }

    &.active {
        display: inline-block;
    }
     @media (max-width: 860px) {
        top: ${({ top }) => top};
        width: 300px;
        opacity: 0.9;
    }
    @media (max-width: 660px) {
        top: ${({ top }) => top};
        width: 200px;
        opacity: 0.5;
    }
`;

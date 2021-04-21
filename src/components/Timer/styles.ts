import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: 2em auto;
`;

const TimerContainer = styled.div`
  position: relative;

  width: 250px;
  margin: auto;

  height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 50%;
  background: none;
  border: 1em inset solid ${({ theme }) => `${theme.accent}50`};



  box-shadow: 10px 20px 60px rgba(0,0,0, .3);
`;

const TimerBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  clip-path: circle(50% at 50% 50%);

  background: ${({ theme }) => theme.accent};
`;

const TimerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 10;

  .remain {
    font-size: 3em;
    font-weight: 700;
    color: ${({ theme }) => theme.white};
  }

  .stop-play {
    background: none;
    border: none;

    font-size: 1em;

    margin-top: 1em;

    color: ${({ theme }) => theme.white};
    font-weight: 700;
  }
`;

export { Container, TimerContainer, TimerBar, TimerInfo };

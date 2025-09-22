import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  top: 64px;
  max-height: calc(100vh - 264px);
  padding: 24px calc((100vw - 1400px) / 2);

`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 1400px;
  overflow-y: auto;
`;

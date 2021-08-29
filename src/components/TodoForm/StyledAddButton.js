import styled from 'styled-components';

export const StyledAddButton = styled.button`
  position: relative;
  display: inline-block;
  font-size: 90%;
  font-weight: 700;
  color: rgb(209, 209, 217);
  text-decoration: none;
  text-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);
  padding: 0.5em 1em;
  outline: none;
  border-radius: 3px;
  background: linear-gradient(rgb(110, 112, 120), rgb(81, 81, 86))
    rgb(110, 112, 120);
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px rgba(255, 255, 255, 0.2) inset, 0 3px 5px rgba(0, 1, 6, 0.5),
    0 0 1px 1px rgba(0, 1, 6, 0.2);

  &:hover:not(:active) {
    background: linear-gradient(rgb(126, 126, 134), rgb(70, 71, 76))
      rgb(126, 126, 134);
  }

  &:active {
    top: 1px;
    background: linear-gradient(rgb(76, 77, 82), rgb(56, 57, 62))
      rgb(76, 77, 82);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.5) inset,
      0 2px 3px rgba(0, 0, 0, 0.5) inset, 0 1px 1px rgba(255, 255, 255, 0.1);
  }
`;

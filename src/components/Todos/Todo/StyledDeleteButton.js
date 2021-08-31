import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
  text-decoration: none;
  display: inline-block;
  position: relative;
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  color: white;
  font-size: 14px;
  background: #383d48;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  cursor: pointer;
  margin-left: 18px;

  &:before {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    top: 0;
    right: 0;
    background: linear-gradient(
      225deg,
      #befde6 45%,
      #aaaaaa 50%,
      #cccccc 56%,
      white 80%
    );
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.4);
    transition: 0.3s;
  }

  &:hover:before {
    width: 20px;
    height: 20px;
  }
`;

import { css } from "@emotion/react";

const cssTest = () => css`
  font-size: 34px;
`;

const Header = () => (
  <div className="flex flex-1 py-4">
    <p>{`Nayoung Han\nData Scientist`}</p>
    <div className="ml-4 flex flex-1 justify-between px-24">
      <span css={cssTest}>Home</span>
      <span>About</span>
      <span>Projects</span>
      <span>Recent Post</span>
    </div>
  </div>
);

export default Header;

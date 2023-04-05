import { css } from "@emotion/react";
import Link from "next/link";

const containerStyle = () => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const logoStyle = () => css`
  font-size: 20px;
  font-family: Poppins;
  white-space: pre-line;
  font-weight: bold;
  line-height: 24px;
  color: #42446e;
`;

const linkerWrapperStyle = () => css`
  flex: 1;
  margin: 28px 0 0 240px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 16px;
  font-family: Poppins;
  font-weight: medium;
  cursor: pointer;
`;

const Header = () => (
  <div css={containerStyle}>
    <Link href={"#"} css={logoStyle}>{`Nayoung Han\nAI Researcher`}</Link>
    <div css={linkerWrapperStyle}>
      <Link href={"#"}>Home</Link>
      <Link href={"#"}>About</Link>
      <Link href={"#"}>Projects</Link>
      <Link href={"#"}>Recent Post</Link>
    </div>
  </div>
);

export default Header;

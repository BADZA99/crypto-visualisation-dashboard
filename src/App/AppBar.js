import styled from "styled-components";

const Bar=styled.div`
    display:grid;
    grid-template-columns:100px auto 100px 100px;
    align-items:center;
    justify-content:space-between;
    padding:24px;
`

export default function Appbar () {
  return(
      <Bar>
            <div>CryptoVision</div>
            <div></div>
            <div>Dashboard</div>
            <div>Settings</div>
      </Bar>
  );
}

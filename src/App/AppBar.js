import styled,{css} from "styled-components";

const Bar=styled.div`
    display:grid;
    margin-bottom:40px;
    grid-template-columns:100px auto 100px 100px;
`

const Logo = styled.div`
    font-size:1.5em;
`

function toProperCase(lower){
    return lower.charAt(0).toUpperCase()+lower.substr(1);
}

const ControlButtonElem=styled.div`
    cursor:pointer;
    ${props=> props.active && css`
    color:white;
    text-shadow:0px 0px 60px #03ff03;
`} 
`

function CntrolButtutton({name,active}){
    return(
        <ControlButtonElem active={active}>
             {toProperCase(name)}
        </ControlButtonElem>
    )
}

export default function Appbar () {
  return(
      <Bar>
            <Logo>CryptoVision</Logo>
            <div></div>
            <CntrolButtutton  active name="dashboard"/>

            <CntrolButtutton name="settings"/>
      </Bar>
  );
}

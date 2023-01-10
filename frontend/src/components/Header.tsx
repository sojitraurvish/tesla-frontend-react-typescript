import styled from "styled-components";
const Header=()=>{
    return (
        <Container>
            <Section1>
                s1
            </Section1>
            <Section2>
                s1
            </Section2>
            <Section3>
                s1
            </Section3>
        </Container>
    )
}

const Container=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 20px;
    border: 2px solid red;
    display:flex;
    justify-content: space-between;
`
const Section1=styled.div``
const Section2=styled.div``
const Section3=styled.div``
export default Header;
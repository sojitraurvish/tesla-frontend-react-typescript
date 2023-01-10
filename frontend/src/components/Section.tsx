import styled from "styled-components";

const Section=()=>{
    return (
        <Container>
            <MainText>
                <h1>Model s</h1>
                <p>Order Online for Touchless Delivery</p>
            </MainText>
            <ButtonSection>
                <Buttons>
                    <Btn1>
                        Custom order
                    </Btn1>
                    <Btn2>
                        Existing order
                    </Btn2>
                </Buttons>
                <Arrow src="/images/down-arrow.svg" />
            </ButtonSection>
        </Container>
    )
}

const Container=styled.div`
/* overflow-y:hidden; */
    min-width: 100%;
    min-height: 100vh;
    background-image: url("/images/model-s.jpg");
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
`

const MainText=styled.div`
    /* border:2px solid red; */
    max-width:600px;
    margin:0 auto;
    margin-top: 80px;
    text-align: center;
    font-size: 20px;
`

const ButtonSection=styled.div`
    /* border: 2px solid red; */
    max-width: 100%;
`
const Buttons=styled.div`
    /* border:2px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    margin:0 auto;
    
    @media (max-width:768px){
        flex-direction: column;
    }
`
const Btn1=styled.button`

    display:flex;
    align-items: center;
    justify-content: center;
    /* padding:10px 65px; */
    background-color: rgba(0,0,0,.6);
    color:white;
    border-radius: 50px;
    margin: 15px;
    font-size: 20px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    cursor: pointer;
    width:80%;
    min-height:50px;
`
const Btn2=styled(Btn1)`
    background-color: white;
    color:black;
    opacity:0.9;
`
const Arrow=styled.img`
    margin:15px auto;
    width:40px;
    animation-name:animateDown;
    animation-iteration-count: infinite;
    animation-duration:1.5s;

`
export default Section;
import styled from "styled-components";
import {useState,MouseEvent} from "react" 

const Header=()=>{

    const [handMenu,setHandMenu]=useState<boolean>(false);

    const changMenu=(e:MouseEvent<HTMLButtonElement>)=>{
        setHandMenu(!handMenu);
    }

    return (
        <Container>
            <Section1>
                <a href="">
                    <img src="/images/favicon.ico" alt="" />
                    <img src="/images/logo.svg" alt="" />
                </a>
            </Section1>
            <Section2>
                <a href="">Model X</a>
                <a href="">Model Y</a>
                <a href="">Model S</a>
                <a href="">Model DF</a>
                <a href="">Model ZX</a>
                <a href="">Model 3</a>
            </Section2>
            <Section3>
                <a href="">Shop</a>
                <a href="">Tesla account</a>
                <button onClick={(e)=>changMenu(e)} className="material-symbols-outlined">Menu</button>
            </Section3>
            <RightMenu onClick={(e)=>changMenu(e)} show={handMenu}>
                <Menu show={handMenu}>
                    <button onClick={(e)=>changMenu(e)}  className="material-symbols-outlined">close</button>
                    <Li>
                        <a href="">Existing Inventory</a>
                        <a href="">Used Inventory</a>
                        <a href="">Trade-in</a>
                        <a href="">Cybertrunk</a>
                        <a href="">Roadaster</a>
                        <a href="">Existing Inventory</a>
                        <a href="">Used Inventory</a>
                        <a href="">Trade-in</a>
                        <a href="">Trade-in</a>
                        
                        

                    </Li>
                </Menu>
            </RightMenu>
        </Container>
    )
}

const Container=styled.div`
    position: absolute;
    min-width:100%;
    height: 60px;
    /* border: 2px solid red; */
    display:flex;
    justify-content: space-between;
`
const Section1=styled.div`
    /* border:2px solid blue; */
    
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        max-width:200px;
        img{
            padding: 8px;
            height:100%;
                width:100%;
            &:first-child{
                /* position:relative; */
                
            }
            &:nth-child(2){
                padding-left: 2px;
            }
        }
    }
`
const Section2=styled(Section1)`
    /* border:1px solid red; */
    /* width: 600px; */
    /* overflow-y: hidden; */
    /* margin-left: auto; */
    a{
        display: block;
        /* border:2px solid red; */
        margin:20px;
        font-weight:600;
        font-size: 15px;
        text-decoration: none;
        text-transform: uppercase;
        color:black;
        
        &:hover{
            text-decoration: underline;
        }
        
    }

    @media (max-width:1156px){
        display:none;
    }

`
const Section3=styled(Section2)`
/* border:2px solid red; */
    /* padding-right: 10px; */
    button{
        margin-right:20px;
        border:none;
        background:transparent;
        &:hover{

            font-weight: 600;
            cursor: pointer;
        }
    }
    @media (max-width:1156px){
        display:flex;
    }

`

const RightMenu=styled.button<{show:boolean}>`
    border:none;
    display:${(props)=>{
        if(props.show){
            return "block";
        }
        return "none";
    }};
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:rgba(0,0,0,0.8);
    z-index:1;
    
`

const Li=styled.div`
    margin-top:50px;
    display:flex;
    flex-direction: column;
    
    a{
        /* border:2px solid red; */
        color:black;
        margin:0 10px;
        padding:10px;
        font-size:19px;
        font-weight: 500;
        letter-spacing: 1.5px;
        text-decoration:none;
        border-bottom: 1px solid rgba(0,0,0,0.35);
        &:hover{
            background:rgba(0,0,0,0.60);
            color:white;
            font-weight: 600;
        }
    }
`

const Menu=styled.div<{show:boolean}>`
    position: absolute;
    right:0;
    bottom: 0;
    top:0px;
    background:white;
    /* display: block; */
    min-width: 300px;
    overflow: auto;
    transform:${(props)=> props.show ? "translateX(0%)" : "translateX(100%)"};
    transition:transform 2s ease-in 5s;
    button{
        position:absolute;
        right:15px;
        top:15px;
        border:none;
        background: transparent;
        &:hover{
            cursor: pointer;
            font-weight: 600;
        }
    }
`

export default Header;
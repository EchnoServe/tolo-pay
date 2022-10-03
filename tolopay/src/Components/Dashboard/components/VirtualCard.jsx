import React from 'react'
import styled from 'styled-components'
import chip  from '../assets/chip.png'
import visa from '../assets/visa.png'
import map from '../assets/map.png'
import pattern from '../assets/pattern.png'
import logo from '../assets/logo.svg'


const VirtualCard = () => {
  return (
    <Section>
        <div className="main-container">
            <div className="scene">
                <div className="card">
                    
                    {/* card front */}
                    <div className="card_front">
                    <img src={map} class='map-img'/>
                        <div className="img">
                            <img src={chip} width='60px'/>
                            <img src={visa} width='60px'/>
                        </div>
                        <div className="card_number number">
                        <div className="number-group number-group-0">
                            4011
                        </div>
                        <div className="number-group number-group-1">
                            2022
                        </div>
                        <div className="number-group number-group-2">
                            7239
                        </div>
                        <div className="number-group number-group-3">
                            1586
                        </div>
                        </div>
                        <div className="card_detailes">
                            <div className="card_holder">
                                <span className='card_holder_title'>Card Holder</span>
                                <span className='card_holder_name'>Abebe Kebede</span>
                            </div>
                            <div className="card_expiration">
                                <span className='card_expiration_title'>Valid Till</span>
                                <span className='card_expiration_date'>15/25</span>
                            </div>
                        </div>
                    </div>
                    {/* card back */}
                    <div className="card_back">
                        <div className="card_stripe"></div>
                        <div className="card_signature">
                            <img src={pattern} />
                            <span className='card_cvv-number'>239</span>
                        </div>
                        <p className='card_info'>
                           By using this virtual card the holder agrees to all the terms under which it was issued. </p>
                        <div className="bimg">
                            <img src={logo} width='170px' />
                            <img src={visa} width='70px !important' paddingLeft='5rem'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
       

    </Section>
  )
}

const Section = styled.section`


  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  .main-container{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .scene{
    width: 90%;
    max-width: 35rem;
    height: 20rem;
    margin: 0 auto;
    perspective: 1000px;
  }

  .card{
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: -15px 20px 20px rgba(22, 4, 74, 0.15);
    // background:  #083453;
  }

  .card:hover{
    cursor: pointer;
  }

  .card_front,
  .card_back{
    width: 100%;
    height: 100%;
    position:absolute;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    background-image: linear-gradient(45deg, #083453, #1f77b4);
    top: 0;
    left: 0;
    border-radius: 15px;
    overflow: hidden;
  }

  .card_front{
    padding: 2rem 2rem;
  }

  .img{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card_number{
    display: flex;
    justify-content: space-between;
    // margin-right: 4rem;
    margin-top: 6rem;
    margin-bottom: 2rem;
  }

  .number-group,
  .card_holder_name,
  .card_expiration_date{
    font-family: 'Courier New', Courier, monospace;
    font-size: 2.3rem;
    text-shadow: 0 1.2px #6a6a6a;
    color: #fafafa;
    letter-spacing: 1px;
  }

  .card_detailes{
    display: flex;
    justify-content: space-between;
  }

  .card_holder,
  .card_expiration{
    display: flex;
    flex-direction: column;
  }

  .card_holder_title,
  .card_expiration_title{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #fafafa;
    opacity: 0.7;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .card_holder_name,
  .card_expiration_date{
    text-transform: uppercase;
    font-size: 1.5rem;
  }

  .card_back{
    padding-top: 4rem;
    transform: rotateY(180deg);
  }


  .card_stripe{
    height: 4rem;
    background: #e1e1e1;
  }

  .card_signature{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 4.5rem;
    background: #fafafa;
    margin: 2rem 6rem 0 2rem;
    padding-right: 1rem;
  }

  .card_signature div{
    flex: 1;
  }

  .card_signature img{
    margin-right: 0.8rem;
    width: 90%;
    display: block;
    line-height: 0;
  }

  
  .card_info{
    font-size: 0.75rem;
    padding: 1rem 2rem;
    color: #fafafa;
  }
  
  .bimg{
    display: flex;
    gap: 14rem;
    padding-left: 2rem;
    padding-bottom: 5rem;
  }
   
  .scene:hover .card{
    transform: rotateY(-180deg);

  }

  .map-img{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
  }


  @media only screen and (max-width: 855px) {
    .scene{
        padding-left: 0rem;
        padding-right: 0rem;
    }
    .card{
        margin-left: 0rem;
        width: 32rem;
    }  

    

}

`;

export default VirtualCard
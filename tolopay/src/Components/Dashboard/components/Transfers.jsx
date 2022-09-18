import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";

export default function Transfers() {
  const transactions = [
    {
      name: "From Troye Sivan",
      time: "Today, 16:36",
      amount: "+50,000 Birr",
    },
    {
      name: "To Harry Styles",
      time: "Today, 08:49",
      amount: "-250,000 Birr",
    },
    {
      name: "From Selome Teshome",
      time: "Yesterday, 14:36",
      amount: "+15,000 Birr",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Your Transfers</h2>
      </div>
      <div className="transactions">
        {transactions.map((transaction) => {
          return (
            <div className="transaction">
              <div className="transaction__title">
                <div className="transaction__title__details">
                  <h3>{transaction.name}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="transaction__amount">
                <span>{transaction.amount}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a className="view" href="#">
        View all <HiArrowNarrowRight />
      </a>
    </Section>
  );
}

const Section = styled.section`
// min-height: 19rem;  
margin-top: 6rem;
  ${cardStyles};
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #073604;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        &__details {
        }
      }
      &__amount {
        background-color: #d7e41e1d;
        color: #073604;
        padding: 2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #073604;
          span {
            color: white;
          }
        }
        span {
          color: #073604;
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #073604;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
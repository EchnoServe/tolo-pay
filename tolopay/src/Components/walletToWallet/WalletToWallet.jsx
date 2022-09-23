import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const WalletToWallet = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const [values, setValues] = useState({
    phoneNumber: "",
    amount: "",
    remark: "",
    password: "",
  });

  const handlePhoneNumber = (event) => {
    setValues({ ...values, phoneNumber: event.target.value });
  };

  const handleAmount = (event) => {
    setValues({ ...values, amount: event.target.value });
  };

  const handlePassword = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  async function makePostRequest(values) {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/transaction/transfer",
        values,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmQ1ZDQyNjU1YThmNmZiYzk4NmQxZSIsImlhdCI6MTY2MzkxNzM3OCwiZXhwIjoxNjcxNjkzMzc4fQ.Xhf-UM6lx8n5eP_7x4u9aV7ad1czdlO5L7LwQfJg1Qw",
          },
        }
      );
    } catch (err) {
      console.log("[Login.js] makePostRequest", err);

      ///some thing set to be true
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    makePostRequest(values);
  };

  return (
    <Section>
      <div className="walletToWallet">
        <form className="moneyTransfer" onSubmit={handleSubmit}>
          <h3>wallet to wallet</h3>
          <input
            onChange={handlePhoneNumber}
            value={values.phoneNumber}
            className="form-field"
            placeholder="phone number"
            name="phoneNumber"
          />
          <input
            onChange={handleAmount}
            value={values.amount}
            className="form-field"
            placeholder="Amount"
            name="amount"
          />

          <select className="option" id="remark">
            <option value="">Remark</option>
            <option value="for movies">for movies</option>
            <option value="for food">for food</option>
            <option value="for travel">for travel</option>
          </select>

          <input
            onChange={handlePassword}
            value={values.password}
            className="form-field"
            placeholder="Password"
            // type="password"
            type={passwordShown ? "text" : "password"}
            name="password"
            required
          />
          <button className="btn" type="submit">
            Transfer
          </button>
        </form>
      </div>
    </Section>
  );
};

const Section = styled.section`
  .walletToWallet {
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    .moneyTransfer {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 10px;

      h3 {
        text-align: center;
        text-decoration: 2.5px underline #46833c;
        text-underline-offset: 8px;
      }

      .option {
        color: gray;
      }
      option {
        border: 2px;
        color: #000000;
      }
    }

    .option {
      background-color: #fff;
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: 2px solid #9dc297;
    }

    .option:hover {
      background-color: #fff;
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: 2px solid #46833c;
    }

    .form-field {
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: #41d3fe;
    }

    .form-field:hover {
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: #46833c;
    }

    .btn {
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: none;
    }

    input {
      background: white;
      padding: 15px;
      margin: 10px 0px;
      width: 400px;
    }

    .pass-wrapper {
      position: relative;
      display: flex;
      margin-bottom: 14px;
    }

    i {
      position: absolute;
      top: 38%;
      right: 16%;
    }
    i:hover {
      color: #00fcb6;
      cursor: pointer;
    }

    button {
      background: #46833c;
      color: white;
      cursor: pointer;
      background-image: linear-gradient(to bottom right, #46833c, #9fcb98);
    }

    button:hover {
      background-image: linear-gradient(to bottom right, #285f1f, #7ab671);
    }

    button:disabled {
      cursor: default;
    }
  }
`;

export default WalletToWallet;

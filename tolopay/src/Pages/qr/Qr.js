import "./qr.css";

const Qr = () => {
  return (
    <>
      <div className="qr_container flex-c-r">
        <div className="flex-c-c qr_form">
          <h4>Receive Payment</h4>
          <input placeholder="Amount" className="p-12-10"></input>
          <select className="p-12-10">
            <option>Remark</option>
          </select>
          <button className="p-12-10" id="generate_qr_btn">
            Generate QR code
          </button>
        </div>

        <div className="qr_code_img"></div>
      </div>
    </>
  );
};

export default Qr;

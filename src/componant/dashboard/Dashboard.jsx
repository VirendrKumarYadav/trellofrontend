import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Config from "../../Config.json"

const Dashboard = () => {

  let BaseURL = Config.env[0].API_BASE_URL_LOCAL;
  if (Config.env[0].SERVER == "REMOTE") {
    BaseURL = Config.env[0].API_BASE_URL;
  }
  console.log(BaseURL);
  const navigate = useNavigate();
  const navigateTotheSignin = () => {
    navigate("/login")
  }
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();



  return (
    <div >
      <header>
        <img src="https://trello.com/assets/c8b7bafdbc02d4015366.svg" alt="trello" />
      </header>
      <main>
        <div className="container">
          <div className="left">
            <div className="leftFormContent">
              <h1>Welcome to Trello!</h1>
              <p>We're glad you made it. Let's start organizing your projects so you can get things done.</p>
              <button className="build_board" onClick={navigateTotheSignin}>Go to your board</button>
            </div>
          </div>

          <div className="right">
            <div className="lower">
              <svg viewBox="0 0 594 463" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad2" x1="50%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgb(252, 198, 235)', stopOpacity: 1 }}></stop>
                    <stop offset="100%" style={{ stopColor: 'rgb(192, 182, 242)', stopOpacity: 1 }}></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#grad2)"
                  d="M532 160.739C556 217 630.697 274.586 571 337.586C511.303 400.586 436 408 352 452C268 496 197.915 390.469 151 326C115.876 277.735 0 221.034 0 160.739C0 75.7133 92.1323 7.13798 151 0.739296C197 -4.26072 235.975 17.7392 292 17.7392C371.224 17.7392 418.042 -11.3217 465 32C506 69.8251 508 104.479 532 160.739Z">
                </path>
              </svg>
            </div>
            <div className="upper">
              <img alt="Welcome to Trello!" src="https://trello.com/assets/a7fb768ffd0181cbfc63.svg" />
            </div>
          </div>
        </div>
      </main>
      <div>
        {/* <p>Name: { }</p>
        <button onClick={() => dispatch(auth({ auth: 'John Doe' }))}>Update</button> */}

      </div>
    </div>
  );
};

export default Dashboard;
import { Button, Typography } from "antd";
import React from "react";
import chaseForBusinessImg from "../img/ink-unlimited.avif";
import rootsToFlowersImg from "../img/roots-to-flowers.avif";
import "./AppContent.css";

const { Title, Paragraph } = Typography;

const AppContent = () => {
  return (
    <div className="app-content-wrapper">
      <div className="app-content-inner">
        <div className="app-content-inner-content">
          <div className="app-content-inner-content-left">
            <img
              src={rootsToFlowersImg}
              alt="roots to flowers"
              className="app-content-inner-content-img"
            />
          </div>
          <div className="app-content-inner-content-right">
            <div className="app-content-inner-content-right-text">
              <h1 className="app-content-inner-content-right-text-title">
                Chase for Business
              </h1>
              <p className="app-content-inner-content-right-text-description">
                From banking to payment acceptance to credit cards and local
                support, we offer flexible solutions to help you go far.
              </p>
              <img src={chaseForBusinessImg} alt="chase for business" />
            </div>
            <div className="app-content-inner-content-right-bottom">
              <div className="app-content-inner-content-left-bottom-item">
                <p className="content-bottom-title">NEW BUSINESS CUSTOMERS</p>
                <h2 className="content-bottom-heading">
                  Keep moving forward with Chase
                </h2>
                <p className="content-bottom-description">
                  Open a new Chase Business Complete Checking® account with
                  qualifying activities.
                </p>
                <Button type="primary" className="content-bottom-button">
                  Open account
                </Button>
              </div>
              <div className="app-content-inner-content-right-bottom-item">
                <p className="content-bottom-title">INK BUSINESS UNLIMITED®</p>
                <h2 className="content-bottom-heading">
                  Limited-time offer: $900 bonus cash back
                </h2>
                <p className="content-bottom-description">
                  Plus, earn unlimited 1.5% cash back on every purchase made for
                  your business with Ink Business Unlimited®. Terms apply.
                </p>
                <Button type="primary" className="content-bottom-button">
                  See details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppContent;

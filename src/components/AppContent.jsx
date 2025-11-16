import React from 'react';
import { Button, Row, Col, Typography, Card } from 'antd';
import rootsToFlowersImg from '../img/roots-to-flowers.avif';
import inkUnlimitedImg from '../img/ink-unlimited.avif';
import earn500Img from '../img/earn-500-static.jpg';
import './AppContent.css';

const { Title, Paragraph } = Typography;

const AppContent = () => {
  return (
    <div className="app-content-wrapper">
      <div className="content-main-inner">
        <Row gutter={16} justify="space-between" align="top">
          {/* Left Side - Hero Image and Text */}
          <Col xs={24} sm={24} md={12}>
            <div className="hero-image-wrapper">
              <div className="hero-image-container">
                <img
                  src={rootsToFlowersImg}
                  alt="Armando Soto - From Roots to Flowers"
                  className="hero-image"
                />
                <div className="hero-image-overlay">
                  <div className="hero-name">Armando Soto</div>
                  <div className="hero-title">Co-owner, From Roots to Flowers</div>
                  <div className="hero-subtitle">Chase for Business customer</div>
                  <div className="hero-note">Real business owner compensated</div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side - Promo Content */}
          <Col xs={24} sm={24} md={12}>
            <div className="promo-content-section">
              <Title level={1} className="promo-title">Chase for Business</Title>
              <Paragraph className="promo-description">
                From banking to payment acceptance to credit cards and local support, we offer flexible solutions to help you go far.
              </Paragraph>
              
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                <img alt="Earn $500" src={earn500Img} />
                </Col>
                <Col xs={24} sm={12}>
                    <img alt="Ink Unlimited" src={inkUnlimitedImg}  style={{marginLeft: '20px'}}/>
                </Col>
              </Row>
              {/* Bottom Section - Promo Cards */}
        <div className="content-bottom-section">
          <div className="content-bottom-cards-container">
            <div className="content-bottom-card">
              <p className="content-bottom-title">NEW BUSINESS CUSTOMERS</p>
              <h2 className="content-bottom-heading">Keep moving forward with Chase</h2>
              <p className="content-bottom-description">Open a new Chase Business Complete Checking® account with qualifying activities.</p>
              <Button type="primary" className="content-bottom-button">Open account</Button>
            </div>
            <div className="content-bottom-card">
              <p className="content-bottom-title">INK BUSINESS UNLIMITED®</p>
              <h2 className="content-bottom-heading">Limited-time offer: $900 bonus cash back</h2>
              <p className="content-bottom-description">Plus, earn unlimited 1.5% cash back on every purchase made for your business with Ink Business Unlimited®. Terms apply.</p>
              <Button type="primary" className="content-bottom-button">See details</Button>
            </div>
          </div>
        </div>
            </div>
          </Col>
        </Row>

        
      </div>
    </div>
  );
};

export default AppContent;

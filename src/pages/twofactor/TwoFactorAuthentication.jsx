import {
  CloseOutlined,
  LeftOutlined,
  LeftSquareFilled,
  RightSquareFilled,
} from "@ant-design/icons";
import { Button, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import AppHeader from "../../components/AppHeader";
import printIcon from "../../img/12.png";
import "./TwoFactorAuthentication.css";

const { Header, Sider } = Layout;

const TwoFactorAuthentication = () => {
  const navigate = useNavigate();

  return (
    <Layout className="security-layout">
      <Header className="app-header">
        <AppHeader />
      </Header>
      <div
        style={{
          backgroundColor: "#002E6C",
          color: "white",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "83%",
          margin: "0 auto",
        }}
      >
        <div
          style={{ fontSize: "20px", fontWeight: "500", textAlign: "center" }}
        >
          Secure Messages
        </div>
        <CloseOutlined
          style={{
            fontSize: "18px",
            color: "white",
            cursor: "pointer",
            position: "absolute",
            right: "24px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onClick={() => navigate("/")}
        />
      </div>
      <div
        style={{
          backgroundColor: "#EAEEF0",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <Layout className="security-body" style={{ flex: 1, minHeight: 0 }}>
          {/* 左侧导航栏 */}
          <Sider width={326} className="security-sidebar">
            <div className="sidebar-content">
              <div className="sidebar-item active">
                <span>Inbox (1)</span>
              </div>
              <div className="sidebar-item">
                <span>Sent messages</span>
              </div>
              <div className="sidebar-item">
                <span>Special offers</span>
              </div>
            </div>
          </Sider>

          <div className="navigation-container">
            <div className="navigation-bar">
              <Button
                type="primary"
                icon={<LeftOutlined style={{ fontSize: "12px" }} />}
                className="inbox-button"
                size="small"
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#015FB8",
                  background: "none",
                  border: "1px solid #015FB8",
                }}
                onClick={() => navigate("/security")}
              >
                Inbox
              </Button>
              <div className="navigation-arrows">
                <LeftSquareFilled className="arrow-icon" />
                <RightSquareFilled className="arrow-icon" />
              </div>
            </div>
            <div className="email-detail-container">
              <div className="email-header-left">
                <div className="email-info-row">
                  <span className="email-label">Sent</span>
                  <span className="email-value">Oct 06, 2025 12:44 PMe</span>
                </div>
                <div className="email-info-row">
                  <span className="email-label">From</span>
                  <span className="email-value">Chase Online Banking</span>
                </div>
                <div className="email-info-row email-info-row-with-actions">
                  <div className="email-info-left">
                    <span className="email-label">Subject</span>
                    <span className="email-value">
                      Transaction Limit Update
                    </span>
                  </div>
                  <div className="email-header-right">
                    <div className="email-header-actions">
                      <img
                        src={printIcon}
                        alt="print"
                        className="email-action-icon"
                      />
                      <span className="email-action-divider"></span>
                      <a href="#" className="email-action-link">
                        Delete
                      </a>
                      <span className="email-action-divider"></span>
                      <a href="#" className="email-action-link">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
                <div className="email-divider-horizontal"></div>
              </div>
              <div className="email-content">
                <p className="email-greeting">Dear AVESTRO GLOBAL INC,</p>
                <p className="email-content-text">
                  As you requested, we've changed your current transaction limit
                  for Wire Transfers.
                </p>
                <p className="email-content-text">
                  As of 2025-10-06 11:44:46, your new limit for Wire Transfers
                  will be 500000.
                </p>
                <p className="email-content-text">
                  Please note that all transactions are still subject to
                  available funds in your account. We may revoke access to
                  transactions at any time due to potential fraud or other
                  security concerns.
                </p>
                <p className="email-content-text">
                  If applicable, we also recommend that you adjust any limits
                  for Authorized Users accordingly in Access & Security
                  Manager(SM).
                </p>
                <p className="email-content-text">
                  If you have questions, please contact your Chase Banker.
                </p>
                <p className="email-content-text">
                  Thanks for being a valued Chase Online customer.
                </p>
                <p className="email-content-text">Sincerely,</p>

                <p className="email-content-text">
                  Chase Online for Business Team
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </Layout>
  );
};

export default TwoFactorAuthentication;

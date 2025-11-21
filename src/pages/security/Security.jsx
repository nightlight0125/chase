import { CloseOutlined, RightOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import AppHeader from "../../components/AppHeader";
import deleteIcon from "../../img/delete.png";
import frameIcon from "../../img/Frame.png";
import newMessageIcon from "../../img/plus.png";
import frameIcon2 from "../../img/Vector@2x.png";
import "./Security.css";

const { Header, Content, Sider } = Layout;

const Security = () => {
  const navigate = useNavigate();
  // 消息数据
  const messages = [
    {
      key: "1",
      date: "Oct 06",
      from: "Chase Online Banking",
      message: "Transaction Limit Update",
      isUnread: true,
    },
  ];

  return (
    <Layout className="security-layout">
      <Header className="app-header">
        <AppHeader />
      </Header>
      <div
        className="security-header-bar"
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
        className="security-main-container"
        style={{
          backgroundColor: "white",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <Layout className="security-body" style={{ flex: 1, minHeight: 0 }}>
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

          <Content className="security-content">
            <div className="security-content-inner">
              <div className="content-header">
                <div>
                  <h1 className="content-title">Inbox</h1>
                  <p className="content-description">
                    Your Secure Messages include the alerts, notifications and
                    inquiries you've received or sent within the last 90 days.
                  </p>
                </div>
                <div className="new-message-wrapper">
                  <img
                    src={newMessageIcon}
                    alt="new message"
                    className="new-message-icon"
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "rgb(5, 92, 176)",
                      fontFamily: "PingFangSC",
                    }}
                  >
                    {" "}
                    New message
                  </span>
                </div>
              </div>

              {/* 消息列表表格 */}
              <div className="messages-table-card">
                <div className="messages-table">
                  {/* 表头 */}
                  <div className="messages-table-header">
                    <div
                      className="messages-table-cell"
                      style={{ width: "200px", marginLeft: "30px" }}
                    >
                      Date
                      <span className="table-sorter">
                        <img
                          src={frameIcon}
                          alt="sort"
                          className="sorter-img"
                        />
                      </span>
                    </div>
                    <div
                      className="messages-table-cell"
                      style={{ width: "200px" }}
                    >
                      From
                      <span className="table-sorter">
                        <img
                          src={frameIcon2}
                          alt="sort"
                          className="sorter-img1"
                        />
                      </span>
                    </div>
                    <div className="messages-table-cell" style={{ flex: 1 }}>
                      Message
                      <span className="table-sorter">
                        <img
                          src={frameIcon2}
                          alt="sort"
                          className="sorter-img1"
                        />
                      </span>
                    </div>
                    <div
                      className="messages-table-cell"
                      style={{ width: "100px", textAlign: "right" }}
                    >
                      Actions
                    </div>
                  </div>
                  {/* 表体 */}
                  <div className="messages-table-body">
                    {messages.map((record) => (
                      <div key={record.key} className="messages-table-row">
                        <div
                          className="messages-table-cell"
                          style={{ width: "230px" }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              marginLeft: "20px",
                            }}
                          >
                            {record.isUnread && (
                              <span className="unread-dot"></span>
                            )}
                            <span>{record.date}</span>
                          </div>
                        </div>
                        <div
                          className="messages-table-cell"
                          style={{ width: "200px" }}
                        >
                          {record.from}
                        </div>
                        <div
                          className="messages-table-cell"
                          style={{ flex: 1 }}
                        >
                          <a
                            href="#"
                            className="message-link"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/two-factor-authentication");
                            }}
                          >
                            {record.message}{" "}
                            <RightOutlined
                              style={{ fontSize: "12px", marginLeft: "4px" }}
                            />
                          </a>
                        </div>
                        <div
                          className="messages-table-cell"
                          style={{ width: "100px", textAlign: "right" }}
                        >
                          <img
                            src={deleteIcon}
                            alt="delete"
                            className="delete-icon"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    </Layout>
  );
};

export default Security;

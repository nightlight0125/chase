import {
  InfoCircleOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Layout, Select, Table } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppHeader from "../../components/AppHeader";
import paymentTrackerImg from "../../img/11.png";
import paymentTrackerImg2 from "../../img/12.png";
import "./Statements.css";

const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Option } = Select;

const Statements = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("payment-tracker");

  // 根据 URL 参数初始化 activeMenu
  useEffect(() => {
    if (location.search.includes("all-wire-activity")) {
      setActiveMenu("all-wire-activity");
    } else {
      setActiveMenu("payment-tracker");
    }
  }, [location.search]);

  // 侧边栏菜单数据
  const sidebarMenu = [
    {
      title: "TRACK YOUR PAYMENTS",
      items: [{ label: "Payment tracker", key: "payment-tracker" }],
      hasBackground: true,
    },
    {
      title: "APPROVALS",
      items: [{ label: "Pending approvals", key: "pending-approvals" }],
      hasBackground: true,
    },
    {
      title: "BILL PAY (PENDING/PAST)",
      items: [
        { label: "All bill pay activity", key: "all-bill-pay" },
        { label: "Automatic payments", key: "automatic-payments" },
      ],
      hasBackground: true,
    },
    {
      title: "WIRES & GLOBAL TRANSFERS",
      items: [
        { label: "All wire activity", key: "all-wire-activity" },
        { label: "Repeating wires", key: "repeating-wires" },
      ],
      hasBackground: true,
    },
  ];

  // 处理菜单点击
  const handleMenuClick = (key) => {
    setActiveMenu(key);
    // 如果点击的是 all-wire-activity，更新 URL 参数
    if (key === "all-wire-activity") {
      navigate("/statements?all-wire-activity", { replace: true });
    } else {
      // 其他情况移除参数
      navigate("/statements", { replace: true });
    }
  };

  // Payment tracker 数据
  const paymentRecords = [
    {
      key: "1",
      recipient: "ALPHAWAVE TRADING GLOBAL INC (...3444)",
      type: "Wires",
      sendOn: "Nov 3, 2025",
      status: "Completed",
      amount: 55.0,
    },
    {
      key: "2",
      recipient: "ALPHAWAVE TRADING GLOBAL INC (...3444)",
      type: "Wires",
      sendOn: "Oct 28, 2025",
      status: "Completed",
      amount: 75.0,
    },
  ];

  // All wire activity 数据
  const wireRecords = [
    {
      key: "1",
      wireDate: "Nov 3, 2025",
      status: "Sent",
      wireTo: "ALPHAWAVE TRADING GLOBAL INC",
      transactionNumber: "12040315668",
      transferAmount: 55.0,
      amount: 55.0,
      currency: "USD",
    },
    {
      key: "2",
      wireDate: "Oct 28, 2025",
      status: "Sent",
      wireTo: "ALPHAWAVE TRADING GLOBAL INC",
      transactionNumber: "12039900749",
      transferAmount: 75.0,
      amount: 75.0,
      currency: "USD",
    },
    {
      key: "3",
      wireDate: "Oct 16, 2025",
      status: "Sent",
      wireTo: "ALPHAWAVE TRADING GLOBAL INC",
      transactionNumber: "12039300992",
      transferAmount: 75.0,
      amount: 75.0,
      currency: "USD",
    },
    {
      key: "4",
      wireDate: "Oct 15, 2025",
      status: "Sent",
      wireTo: "Convia FZE",
      transactionNumber: "12039191203",
      transferAmount: 110.0,
      amount: 391.9,
      currency: "USD",
    },
  ];

  // Payment tracker 表格列定义
  const paymentColumns = [
    {
      title: "Recipient",
      dataIndex: "recipient",
      key: "recipient",
      sorter: true,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      sorter: true,
    },
    {
      title: "Send on",
      dataIndex: "sendOn",
      key: "sendOn",
      sorter: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "right",
      sorter: true,
      render: (amount) => `$${amount.toFixed(2)}`,
    },
    {
      title: "",
      key: "action",
      render: () => (
        <a href="#" className="payment-detail-link">
          See details
        </a>
      ),
    },
  ];

  // All wire activity 表格列定义
  const wireColumns = [
    {
      title: "Wire date",
      dataIndex: "wireDate",
      key: "wireDate",
      sorter: true,
      render: (text) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* <RightOutlined style={{ fontSize: "12px", color: "#055CB0" }} /> */}
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: true,
    },
    {
      title: "Wire to",
      dataIndex: "wireTo",
      key: "wireTo",
      sorter: true,
    },
    {
      title: "Transaction number",
      dataIndex: "transactionNumber",
      key: "transactionNumber",
    },
    {
      title: "",
      dataIndex: "transactionNumber1",
      key: "transactionNumber1",
      render: (text) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          Request Info{" "}
          <InfoCircleOutlined style={{ fontSize: "12px", color: "#055CB0" }} />
        </div>
      ),
    },
    {
      title: "Transfer amount",
      dataIndex: "transferAmount",
      key: "transferAmount",
      align: "right",
      sorter: true,
      render: (amount) => `$${amount.toFixed(2)}`,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "right",
      sorter: true,
      render: (amount, record) => `$${amount.toFixed(2)} ${record.currency}`,
    },
  ];

  return (
    <Layout className="statements-layout">
      <Header className="app-header">
        <AppHeader />
      </Header>

      <Layout className="statements-body">
        {/* 左侧导航栏 */}
        <Sider width={280} className="statements-sidebar">
          <div className="sidebar-content">
            {sidebarMenu.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={`sidebar-section ${
                  section.hasBackground ? "has-background" : ""
                } ${sectionIndex === 0 ? "first-section" : ""}`}
              >
                <h3 className="sidebar-section-title">{section.title}</h3>
                {section.items.map((item) => (
                  <div
                    key={item.key}
                    className={`sidebar-item ${
                      activeMenu === item.key ? "active" : ""
                    }`}
                    onClick={() => handleMenuClick(item.key)}
                  >
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Sider>

        {/* 右侧内容区域 */}
        <Content className="statements-content">
          <div className="statements-content-inner">
            {activeMenu === "payment-tracker" ? (
              <>
                {/* Payment tracker 内容 */}
                <div className="content-header-container">
                  <div className="content-header">
                    <div>
                      <h1 className="content-title">Payment tracker</h1>
                      <p className="content-subtitle">
                        Your past week's activity and what's upcoming next week.
                      </p>
                    </div>
                  </div>
                  {/* 过滤部分 */}
                  <div className="filter-card">
                    <div className="filter-section">
                      <span className="filter-label">Filter by</span>
                      <Input
                        placeholder="Recipient name"
                        allowClear
                        className="filter-search"
                        style={{ width: 300 }}
                        prefix={<SearchOutlined style={{ color: "#999" }} />}
                      />
                      <Button className="filter-button">All statuses</Button>
                      <Button className="filter-button">All methods</Button>
                    </div>
                  </div>
                </div>

                {/* 支付活动表格 */}
                <div className="table-card">
                  <div className="table-header-with-icons">
                    <div className="header-icons">
                      <img
                        src={paymentTrackerImg2}
                        alt="payment tracker"
                        className="header-icon"
                      />
                      <img
                        src={paymentTrackerImg}
                        alt="payment tracker"
                        className="header-icon"
                      />
                    </div>
                  </div>
                  <Table
                    columns={paymentColumns}
                    dataSource={paymentRecords}
                    pagination={false}
                    className="payment-tracker-table"
                    size="small"
                  />
                  <div className="table-footer">
                    <p className="footer-text">
                      You've reached the end of your activity.
                    </p>
                  </div>
                </div>
              </>
            ) : activeMenu === "all-wire-activity" ? (
              <>
                <div className="wire-activity-header">
                  <div className="wire-filter-section-full">
                    <span className="filter-label">FILTER BY</span>
                    <Select defaultValue="" className="wire-filter-select-full">
                      <Option value="">Choose one</Option>
                    </Select>
                    <a href="#" className="send-money-link">
                      Send money{" "}
                      <RightOutlined
                        style={{
                          fontSize: "12px",
                          color: "#055CB0",
                          marginTop: "4px",
                        }}
                      />
                    </a>
                  </div>
                  <div className="header-icons1">
                    <img
                      src={paymentTrackerImg}
                      alt="payment tracker"
                      className="header-icon"
                    />
                    <img
                      src={paymentTrackerImg2}
                      alt="payment tracker"
                      className="header-icon"
                    />
                  </div>
                </div>

                <div className="table-card">
                  <Table
                    columns={wireColumns}
                    dataSource={wireRecords}
                    pagination={false}
                    className="payment-tracker-table"
                    size="small"
                  />
                  <div className="table-footer wire-activity-footer">
                    <p className="footer-text">
                      You've reached the end of your activity.
                    </p>
                  </div>
                  <p className="footer-terms">
                    The terms of the{" "}
                    <span style={{ color: "#055CB0" }}>Wire Agreement</span>{" "}
                    apply to these wires.
                  </p>
                  <p className="footer-help">
                    Don't see your payment? Ask us to look for it.{" "}
                    <InfoCircleOutlined
                      style={{ fontSize: "12px", color: "#055CB0" }}
                    />
                  </p>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Statements;

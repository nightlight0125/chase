import { RightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Layout, Row, Select, Table } from "antd";
import { useNavigate } from "react-router-dom";
import AppHeader from "../../components/AppHeader";
import infoIcon from "../../img/awaser.png";
import wiresIcon from "../../img/p1.png";
import achIcon from "../../img/p2.png";
import billPayIcon from "../../img/p3.png";
import zelleIcon from "../../img/p4.png";
import "./PayTransfer.css";

const { Header, Content } = Layout;

const PayTransfer = () => {
  const navigate = useNavigate();
  // 支付记录数据
  const paymentRecords = [
    {
      key: "1",
      recipient: "ALPHAWAVE TRADING GLOBAL INC (-3444) Wires",
      sendOn: "Nov 3, 2025",
      status: "Completed",
      amount: 55.0,
    },
    {
      key: "2",
      recipient: "ALPHAWAVE TRADING GLOBAL INC (-3444) Wires",
      sendOn: "Nov 3, 2025",
      status: "Completed",
      amount: 55.0,
    },
  ];

  // 支付记录表格列
  const paymentColumns = [
    {
      title: "Recipient",
      dataIndex: "recipient",
      key: "recipient",
    },
    {
      title: "Send on",
      dataIndex: "sendOn",
      key: "sendOn",
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

  return (
    <Layout className="pay-transfer-layout">
      <Header className="app-header">
        <AppHeader />
      </Header>

      <Content className="pay-transfer-content">
        <div className="pay-transfer-inner">
          <div className="payment-options-section">
            <div className="section-header">
              <h1 className="section-title">Payment options</h1>
              <a href="#" className="learn-more-link">
                Learn more about these payment methods
              </a>
            </div>

            <Row gutter={[24, 24]} className="payment-cards-row">
              {/* ACH Payment Services */}
              <Col xs={24} sm={12} lg={6}>
                <Card className="payment-card">
                  <div className="payment-card-content payment-card-content-ach">
                    <img src={achIcon} alt="ach" className="payment-icon" />
                    <div className="payment-card-title">
                      ACH Payment Services
                    </div>
                    <p className="payment-card-desc">Pay vendors & employees</p>
                    <a href="#" className="payment-detail-link">
                      See details <RightOutlined />
                    </a>
                  </div>
                  <Button type="primary" className="enroll-button">
                    Enroll now
                  </Button>
                </Card>
              </Col>

              {/* Bill Pay */}
              <Col xs={24} sm={12} lg={6}>
                <Card className="payment-card">
                  <div className="payment-card-content">
                    <img src={zelleIcon} alt="zelle" className="payment-icon" />
                    <div className="payment-card-title">Bill Pay</div>
                    <p className="payment-card-desc">Pay bills & pay Chase</p>
                    <a href="#" className="payment-detail-link">
                      See details <RightOutlined />
                    </a>
                  </div>
                  <Button type="primary" className="enroll-button">
                    Enroll now
                  </Button>
                </Card>
              </Col>

              {/* Zelle® */}
              <Col xs={24} sm={12} lg={6}>
                <Card className="payment-card">
                  <div className="payment-card-content">
                    <img
                      src={billPayIcon}
                      alt="billPay"
                      className="payment-icon"
                    />
                    <div className="payment-card-title">Zelle®</div>
                    <p className="payment-card-desc">
                      Pay people & small businesses
                    </p>
                    <a href="#" className="payment-detail-link">
                      See details <RightOutlined />
                    </a>
                  </div>
                  <Button type="primary" className="enroll-button">
                    Enroll now
                  </Button>
                </Card>
              </Col>

              {/* Wires & global transfers */}
              <Col xs={24} sm={12} lg={6}>
                <Card className="payment-card">
                  <div className="payment-card-content">
                    <img src={wiresIcon} alt="wires" className="payment-icon" />
                    <div className="payment-card-title">
                      Wires & global transfers
                    </div>
                    <p className="payment-card-desc">
                      Send money almost anywhere
                    </p>
                    <div className="wire-details">
                      <div className="wire-detail-item">
                        <span className="wire-detail-label">
                          Delivery time:
                        </span>
                        <span className="wire-detail-value">
                          1 to 5 business days
                        </span>
                      </div>
                      <div className="wire-detail-item">
                        <span className="wire-detail-label">Standard fee:</span>
                        <span className="wire-detail-value">$10 to $40</span>
                      </div>
                      <div className="wire-detail-item">
                        <span className="wire-detail-label">Daily limit:</span>
                        <span className="wire-detail-value">$900,000.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="wire-buttons">
                    <Button
                      className="wire-button"
                      onClick={() => navigate("/customer-insights")}
                    >
                      Schedule wire
                    </Button>
                    <span className="button-separator">|</span>
                    <Button className="wire-button">Add recipient</Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>

          {/* 底部两列布局 */}
          <Row gutter={24} className="bottom-section">
            {/* Track your payments */}
            <Col xs={24} lg={16}>
              <Card className="track-payments-card">
                <div className="track-payments-header">
                  <div>
                    <h2 className="track-payments-title">
                      Track your payments
                      <img src={infoIcon} alt="info" className="info-icon" />
                    </h2>
                    <p className="track-payments-desc">
                      Review your recent activity for all 7 days
                    </p>
                  </div>
                  <div className="status-filter">
                    <span className="filter-label">Status</span>
                    <Select
                      defaultValue="all"
                      style={{ width: 200 }}
                      options={[
                        { value: "all", label: "All" },
                        { value: "completed", label: "Completed" },
                        { value: "pending", label: "Pending" },
                        { value: "failed", label: "Failed" },
                      ]}
                    />
                  </div>
                </div>
                <Table
                  columns={paymentColumns}
                  dataSource={paymentRecords}
                  pagination={false}
                  className="payment-records-table"
                />
                <div
                  className="view-all-link"
                  onClick={() => navigate("/statements")}
                  style={{ cursor: "pointer" }}
                >
                  see all payment activity
                </div>
              </Card>
            </Col>

            {/* Tasks */}
            <Col xs={24} lg={8}>
              <Card className="tasks-card">
                <h2 className="tasks-title">Tasks</h2>
                <div className="task-item">
                  <span>
                    Pending approvals (0)
                    <RightOutlined className="task-arrow" />
                  </span>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default PayTransfer;

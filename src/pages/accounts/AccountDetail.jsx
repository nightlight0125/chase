import { DownOutlined, RightOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Layout,
  Modal,
  Row,
  Select,
  Space,
  Table,
} from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "../../components/AppHeader";
import downloadIcon from "../../img/11.png";
import printIcon from "../../img/12.png";
import searchIcon from "../../img/13.png";
import filterIcon from "../../img/14.png";
import infoIcon from "../../img/e6.png";
import leftArrowIcon from "../../img/left.png";
import offerImg1 from "../../img/p11.png";
import offerImg2 from "../../img/p12.png";
import plusIcon from "../../img/plus.png";
import rectangleImg from "../../img/Rectangle 326@2x.png";
import rightArrowIcon from "../../img/right.png";
import "./AccountDetail.css";

const { Header, Content } = Layout;

const AccountDetail = () => {
  const navigate = useNavigate();
  const [isRoutingModalVisible, setIsRoutingModalVisible] = useState(false);

  // 交易数据
  const transactions = [
    {
      key: "1",
      date: "Nov 03, 2025",
      description:
        "ONLINE DOMESTIC WIRE TRANSFER VIA: EW BK SMRINO/322070381 A/C: ALPHAWAVE TRADING GLOBAL INC NEW YORK NY 10013 US REF: BUSINESS EXPENSES IMAD: 1103MMQFMP2K014093 TRN: 3505425307ES 11/03",
      type: "Outgoing wire transfer",
      amount: -55.0,
      balance: 85.0,
    },
    {
      key: "2",
      date: "Oct 28, 2025",
      description:
        "ONLINE DOMESTIC WIRE TRANSFER VIA: EW BK SMRINO/322070381 A/C: ALPHAWAVE TRADING GLOBAL INC NEW YORK NY 10013 US REF: PURCHASE MATERIAL SAMPLES IMAD: 1028MMQFMP2M006639 TRN: 3156715301ES 10/28",
      type: "Outgoing wire transfer",
      amount: -75.0,
      balance: 140.0,
    },
    {
      key: "3",
      date: "Oct 16, 2025",
      description:
        "ONLINE DOMESTIC WIRE TRANSFER VIA: EW BK SMRINO/322070381 A/C: ALPHAWAVE TRADING GLOBAL INC NEW YORK NY 10013 US REF: BUSINESS EXPENSES IMAD: 1016MMQFMP2N027603 TRN: 3540805289ES 10/16",
      type: "Outgoing wire transfer",
      amount: -75.0,
      balance: 215.0,
    },
    {
      key: "4",
      date: "Oct 15, 2025",
      description:
        "ONLINE INTERNATIONAL WIRE TRANSFER A/C: FOREIGN CUR BUS ACCT BK 1 COLUMBUS NEWARK DE 197132107 US ORG: 00000002905306189 AVESTRO GLOBAL INC BEN:/AE810860000009694073852 CONVIA FZE REF: PAYMENT FOR BUSINESS EXPENSES/OCMT/AED391,90/EXCH/3.5627/CNTR/ 587 94956/TRN: 6754100288RE 10/15",
      type: "Outgoing wire transfer",
      amount: -110.0,
      balance: 290.0,
    },
    {
      key: "5",
      date: "Oct 10, 2025",
      description: "ATM WITHDRAWAL 003195 10/1037 N MILP (...0456)",
      type: "ATM transaction",
      amount: -110.0,
      balance: 400.0,
    },
    {
      key: "6",
      date: "Sep 26, 2025",
      description: "DEPOSIT ID NUMBER 30239",
      type: "Other",
      amount: 500.0,
      balance: 500.0,
      isLink: true,
    },
  ];

  // 表格列定义
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 120,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 180,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 120,
      render: (amount) => (
        <span>
          {amount < 0 ? "-" : "+"}${Math.abs(amount).toFixed(2)}
        </span>
      ),
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      width: 120,
      render: (balance) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "8px",
          }}
        >
          <span className="balance-value">${balance.toFixed(2)}</span>
          <RightOutlined style={{ fontSize: "12px", color: "#055CB0" }} />
        </div>
      ),
    },
  ];

  return (
    <Layout className="account-detail-layout">
      <Header className="app-header">
        <AppHeader />
      </Header>

      <Content className="account-detail-content">
        <div className="account-detail-inner">
          <div className="account-detail-inner-top">
            <div className="account-detail-inner-top-content">
              <div style={{ width: "70%", margin: "0 auto" }}>
                {/* 面包屑导航 */}
                <div className="breadcrumbs">
                  <span className="breadcrumb-link">Overview</span>
                  <span className="breadcrumb-separator">/</span>
                  <span>Account: PLAT BUS CHECKING (...6189)</span>
                </div>
                {/* 账户信息 */}
                <div className="account-header">
                  <h1 className="account-title">PLAT BUS CHECKING (...6189)</h1>
                  <p className="account-company">AVESTRO GLOBAL INC</p>
                </div>
                {/* 余额信息 */}
                <div className="balance-section-flex">
                  <div className="balance-item-flex">
                    <div className="balance-amount">$85.00</div>
                    <div className="balance-label">Available balance</div>
                  </div>
                  <div className="balance-item-flex">
                    <div className="balance-amount-medium balance-amount-medium-credit">
                      $00.00
                    </div>
                    <div className="balance-label">Available credit</div>
                  </div>
                  <div className="balance-item-flex">
                    <div className="balance-amount-medium balance-amount-medium-credit">
                      $85.00
                    </div>
                    <div className="balance-label">Available plus credit</div>
                  </div>
                  <div
                    className="balance-routing-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsRoutingModalVisible(true);
                    }}
                  >
                    <img
                      src={infoIcon}
                      alt="info"
                      className="balance-info-icon"
                    />
                    <span>Account & routing number</span>
                  </div>
                </div>
              </div>
              {/* 操作按钮 */}
              <div className="action-buttons">
                <Button className="detail-action-button">Statements</Button>
                <Button className="detail-action-button">Paperless</Button>
                <Button className="detail-action-button">Transfer money</Button>
                <Dropdown
                  menu={{
                    items: [
                      { key: "1", label: "View details" },
                      { key: "2", label: "Edit account" },
                      { key: "3", label: "Account settings" },
                    ],
                  }}
                  trigger={["click"]}
                >
                  <Button className="detail-action-button">
                    More <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
          </div>

          {/* Uncollected funds */}
          <div className="uncollected-funds-wrapper">
            <div className="uncollected-funds">
              <span className="uncollected-label">Uncollected funds</span>
              <span className="uncollected-total">Total 50.00</span>
            </div>
          </div>

          {/* 推广和优惠卡片 */}
          <div className="promo-offers-wrapper">
            <Row gutter={24} className="promo-offers-row">
              <Col xs={24} lg={12}>
                <Card className="promo-card-detail">
                  <div className="promo-card-wrapper-detail">
                    <div className="promo-image-wrapper-detail">
                      <img
                        src={rectangleImg}
                        alt="Promo"
                        className="promo-image-detail"
                      />
                    </div>
                    <div className="promo-content-detail">
                      <h2 className="promo-title-detail">
                        Sapphire Reserve for Business™ Earn 200,000 bonus points
                      </h2>
                      <div className="promo-details-detail">
                        Receive over $2,500 in annual value. Plus, earn 8x
                        points on Chase Travels, get complimentary access to the
                        Chase Sapphire Lounge® by The Club network and Priority
                        Pass™ Select, and more.
                      </div>
                      <a href="#" className="promo-link-detail">
                        See details <RightOutlined />
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <div className="chase-offers-card">
                  <div className="card-header">
                    <div>
                      <h3 className="chase-offers-title">Chase Offers</h3>
                      <p className="chase-offers-subtitle">
                        Add deals, shop and get cash back
                      </p>
                    </div>
                    <div className="card-header-right">
                      <Button className="offers-badge">121</Button>
                      <RightOutlined className="card-icon" />
                    </div>
                  </div>
                  <div className="offers-carousel">
                    <img
                      src={leftArrowIcon}
                      alt="left"
                      className="carousel-arrow-left"
                    />
                    <div className="offers-carousel-content">
                      <div className="offer-card">
                        <div className="offer-card-left">
                          <img
                            src={offerImg1}
                            alt="offer"
                            className="offer-icon"
                          />
                          <div className="offer-card-content">
                            <div className="offer-merchant">Peak Design</div>
                            <div className="offer-cashback">10% cash back</div>
                          </div>
                        </div>
                        <div className="offer-card-right">
                          <span className="offer-new-badge">New</span>
                          <img
                            src={plusIcon}
                            alt="plus"
                            className="offer-add-button"
                          />
                        </div>
                      </div>
                      <div className="offer-card">
                        <div className="offer-card-left">
                          <img
                            src={offerImg2}
                            alt="offer"
                            className="offer-icon"
                          />
                          <div className="offer-card-content">
                            <div className="offer-merchant">Peak Design</div>
                            <div className="offer-cashback">10% cash back</div>
                          </div>
                        </div>
                        <div className="offer-card-right">
                          <span className="offer-new-badge">New</span>
                          <img
                            src={plusIcon}
                            alt="plus"
                            className="offer-add-button"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      src={rightArrowIcon}
                      alt="right"
                      className="carousel-arrow-right"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* 交易列表 */}
          <h2 className="transactions-title">Transactions</h2>
          <div className="transactions-wrapper">
            <div className="transactions-section">
              <div className="transactions-header">
                <div className="transactions-controls">
                  <div className="transactions-filter">
                    <span className="filter-label">Showing</span>
                    <Select
                      defaultValue="all"
                      className="transactions-select"
                      options={[]}
                    />
                  </div>
                  <Space size="middle" className="transactions-actions">
                    <img
                      src={filterIcon}
                      alt="filter"
                      className="filter-icon"
                    />
                    <img
                      src={searchIcon}
                      alt="search"
                      className="search-icon"
                    />
                    <img src={printIcon} alt="print" className="print-icon" />
                    <img
                      src={downloadIcon}
                      alt="download"
                      className="download-icon"
                    />
                  </Space>
                </div>
              </div>
              <Table
                columns={columns}
                dataSource={transactions}
                pagination={false}
                className="transactions-table"
              />
              <div className="transactions-footer">
                <p className="footer-text">
                  If you have other transactions that aren't shown in your
                  account activity, review your{" "}
                  <a href="#" className="footer-link">
                    monthly statements
                  </a>
                  .
                </p>
                <p className="footer-text">
                  You've reached the end of your account activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Content>

      {/* 账户和路由号码模态框 */}
      <Modal
        title="Full Account and Routing Number"
        open={isRoutingModalVisible}
        onCancel={() => setIsRoutingModalVisible(false)}
        closable={false}
        footer={[
          <Button
            key="close"
            type="primary"
            onClick={() => setIsRoutingModalVisible(false)}
            className="modal-close-button"
          >
            Close
          </Button>,
        ]}
        className="routing-modal"
        width={704}
      >
        <div className="routing-modal-content">
          <div className="routing-info-item">
            <span className="routing-label">
              Account number <span className="routing-value">2905306189</span>
            </span>
            <div className="routing-value-wrapper">
              <img src={printIcon} alt="print" className="print-icon" />
            </div>
          </div>
          <div className="routing-info-row">
            <div className="routing-info-item">
              <span className="routing-label">
                Routing number <span className="routing-value">322271627</span>
              </span>
            </div>
          </div>
          <div className="routing-note">
            This routing number can only be used for direct deposits and ACH
            transactions. For wire transfers, please use routing number
            021000021.
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default AccountDetail;

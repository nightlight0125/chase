import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Row, Col, Card, Button, Badge, Avatar, Dropdown } from 'antd'
import {
  PrinterOutlined,
  RightOutlined,
  BarChartOutlined,
  WalletOutlined,
  CheckCircleOutlined,
  CreditCardOutlined,
  DollarOutlined,
  ShopOutlined,
  BankOutlined,
  BookOutlined,
  GiftOutlined,
  UpOutlined,
  DownOutlined,
} from '@ant-design/icons'
import AppHeader from '../../components/AppHeader'
import analyticsImg from '../../img/1.png'
import businessSnapshotImg from '../../img/2.png'
import checkingImg from '../../img/3.png'
import creditCardImg from '../../img/4.png'
import loansFinancingImg from '../../img/5.png'
import acceptCardPaymentsImg from '../../img/6.png'
import savingsImg from '../../img/7.png'
import retirementImg from '../../img/8.png'
import justForYouImg from '../../img/9.png'
import knowledgeCenterImg from '../../img/10.png'
import offerImg1 from '../../img/Rectangle 312.png'
import offerImg2 from '../../img/Rectangle 313.png'
import offerImg3 from '../../img/Rectangle 314.png'
import './Accounts.css'

const { Header, Content } = Layout

const Accounts = () => {
  const navigate = useNavigate()
  const [isBankAccountsExpanded, setIsBankAccountsExpanded] = useState(true)
  const [isExternalAccountsExpanded, setIsExternalAccountsExpanded] = useState(true)
  const menuItems = [
    { key: 'overview', label: 'Overview' },
    { key: 'customer-insights', label: 'Customer Insights' },
    { key: 'statements', label: 'Statements & documents' },
    { key: 'profile', label: 'Profile & settings' },
  ]

  const businessProducts = [
    { icon: <img src={checkingImg} alt="checking"  className='sidebar-icon'/>, label: 'Checking' },
    { icon: <img src={creditCardImg} alt="credit card"  className='sidebar-icon'/>, label: 'Credit cards' },
    { icon: <img src={loansFinancingImg} alt="loans financing"  className='sidebar-icon'/>, label: 'Loans & financing' },
    { icon: <img src={acceptCardPaymentsImg} alt="accept card payments"  className='sidebar-icon'/>, label: 'Accept card payments' },
    { icon: <img src={savingsImg} alt="savings"  className='sidebar-icon'/>, label: 'Savings' },
    { icon: <img src={retirementImg} alt="retirement"  className='sidebar-icon'/>, label: 'Retirement' },
    { icon: <img src={justForYouImg} alt="just for you"  className='sidebar-icon'/>, label: 'Just for you' },
    { icon: <img src={knowledgeCenterImg} alt="knowledge center"  className='sidebar-icon'/>, label: 'Knowledge center' },
  ]

  return (
    <Layout className="accounts-layout">
      <Header className="app-header">
        <AppHeader />
      </Header>
      <Content className="accounts-content">
        <div className="accounts-content-inner">
          <h1 className="greeting">Good afternoon</h1>

          <Row gutter={[24, 24]}>
            {/* 左列 - 主要内容 */}
            <Col xs={24} lg={16}>
              <Card className={`account-card ${!isBankAccountsExpanded ? 'collapsed' : ''}`}>
                <div className="card-header">
                  <h2 className="card-title">Bank accounts</h2>
                  <div className="card-header-actions">
                    <PrinterOutlined className="card-icon" />
                    <button
                      className="collapse-button"
                      onClick={() => setIsBankAccountsExpanded(!isBankAccountsExpanded)}
                      aria-label={isBankAccountsExpanded ? 'Collapse' : 'Expand'}
                    >
                      {isBankAccountsExpanded ? (
                        <UpOutlined className="collapse-icon" />
                      ) : (
                        <DownOutlined className="collapse-icon" />
                      )}
                    </button>
                  </div>
                </div>
                <div className={`card-content ${!isBankAccountsExpanded ? 'collapsed' : ''}`}>
                  <div className="account-info">
                    <div className="account-name">AVESTRO GLOBAL INC</div>
                  </div>
                  <div className="account-details-row">
                    <div 
                      className="account-details"
                      onClick={() => navigate('/accounts/detail')}
                      style={{ cursor: 'pointer' }}
                    >
                      <span>PLAT BUS CHECKING (...6189)</span>
                      <RightOutlined className="arrow-icon" />
                    </div>
                    <div className="card-actions">
                      <Button type="primary" className="action-button action-button-primary">
                        Transfer money
                      </Button>
                      <Dropdown
                        menu={{
                          items: [
                            { key: '1', label: 'View details' },
                            { key: '2', label: 'Edit account' },
                            { key: '3', label: 'Account settings' },
                          ],
                        }}
                        trigger={['click']}
                      >
                        <Button className="action-button">
                          More <DownOutlined />
                        </Button>
                      </Dropdown>
                    </div>
                  </div>
                  <Row gutter={16} className="balance-row">
                    <Col span={8}>
                      <div className="balance-amount">$85.00</div>
                      <div className="balance-label">Available</div>
                    </Col>
                    <Col span={8}>
                      <div className="balance-amount1">$85.00</div>
                      <div className="balance-label">Present balance</div>
                    </Col>
                    <Col span={8}>
                      <div className="balance-amount1">$0.00</div>
                      <div className="balance-label">Available credit</div>
                    </Col>
                  </Row>
                </div>
              </Card>

              {/* Pending approvals 卡片 */}
              <Card className="account-card">
                  <h2 className="card-title">Pending approvals (0)</h2>
              </Card>

              {/* External accounts 卡片 */}
              <Card className={`account-card ${!isExternalAccountsExpanded ? 'collapsed' : ''}`}>
                <div className="card-header">
                  <h2 className="card-title">External accounts</h2>
                  <div className="card-header-actions">
                    <button
                      className="collapse-button"
                      onClick={() => setIsExternalAccountsExpanded(!isExternalAccountsExpanded)}
                      aria-label={isExternalAccountsExpanded ? 'Collapse' : 'Expand'}
                    >
                      {isExternalAccountsExpanded ? (
                        <UpOutlined className="collapse-icon" />
                      ) : (
                        <DownOutlined className="collapse-icon" />
                      )}
                    </button>
                  </div>
                </div>
                <div className={`card-content ${!isExternalAccountsExpanded ? 'collapsed' : ''}`}>
                  <p className="card-description">
                    Link your external accounts to better organize your money, budget and plan for the future.
                  </p>
                  <div className="link-button-wrapper">
                    <Button type="primary" className="link-button">
                      Link account
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Sapphire Reserve 推广卡片 */}
              <Card className="account-card promo-card-large">
                <div className="promo-content">
                  <h2 className="promo-title">Sapphire Reserve for Business™ Earn 200,000 bonus points</h2>
                  <div className="promo-details">
                    Receive over 52,500 in annual value, 8x points on Chase Travels, and complimentary access to the Chase Sapphire Lounge® by The Club network and Priority Pass™ Select.
                  </div>
                  <a href="#" className="promo-link">
                    See details <RightOutlined />
                  </a>
                </div>
              </Card>
            </Col>

            {/* 右列 - 侧边栏 */}
            <Col xs={24} lg={8}>
              <Card className="sidebar-card">
                <h3 className="sidebar-title">Grow your business with our analytics</h3>
                <div className="sidebar-card-content">
                  <div className="sidebar-icon-wrapper">
                    <img src={analyticsImg} alt="analytics"  className='sidebar-icon'/>
                  </div>
                  <p className="sidebar-text">
                    Process payments with Chase to see sales data and get actionable insights.
                  </p>
                  <RightOutlined className="sidebar-arrow" />
                </div>
              </Card>

              {/* Business Snapshot 卡片 */}
              <Card className="sidebar-card">
                <h3 className="sidebar-title">Business Snapshot</h3>
                <div className="sidebar-card-content">
                  <div className="sidebar-icon-wrapper">
                    <img src={businessSnapshotImg} alt="business snapshot"  className='sidebar-icon'/>
                  </div>
                  <p className="sidebar-text">
                  Your money in this month is 50 30 second read
                  </p>
                  <RightOutlined className="sidebar-arrow" />
                </div>
              </Card>

              {/* Explore business products */}
              <Card className="sidebar-card">
                <h3 className="sidebar-title">Explore business products</h3>
                <Row gutter={[16, 16]} className="products-grid">
                  {businessProducts.map((product, index) => (
                    <Col span={6} key={index}>
                      <div className="product-item">
                        <div className="product-icon-wrapper">
                          {product.icon}
                        </div>
                        <div className="product-label">{product.label}</div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card>

              {/* Chase Offers 卡片 */}
              <Card className="sidebar-card">
                <div className="card-header">
                  <h3 className="sidebar-title">Chase Offers</h3>
                  <div className="card-header-right">
                    <Badge count={121} className="offers-badge" />
                    <RightOutlined className="card-icon" />
                  </div>
                </div>
                <p className=" card-description-chase-offers">
                  Add deals, shop and get cash back PLAT BUS CHECKING (6189)
                </p>
                <div className="offers-images">
                  <div className="offer-thumbnail">
                    <img src={offerImg1} alt="Offer 1" />
                  </div>
                  <div className="offer-thumbnail">
                    <img src={offerImg2} alt="Offer 2" />
                  </div>
                  <div className="offer-thumbnail">
                    <img src={offerImg3} alt="Offer 3" />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  )
}

export default Accounts



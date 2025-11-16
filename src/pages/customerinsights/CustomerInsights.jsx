import { useState } from 'react'
import { Layout, Button, Tabs } from 'antd'
import {
  FileTextOutlined,
  ClockCircleOutlined,
  WalletOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons'
import AppHeader from '../../components/AppHeader'
import './CustomerInsights.css'
import sendMoneyImg from '../../img/p3.png'
import whatToHaveReadyImg from '../../img/p5.png'
import deliveryTimeImg from '../../img/p6.png'
import dailyLimitImg from '../../img/p7.png'
import domesticFeesImg from '../../img/p8.png'

const { Header, Content } = Layout

const CustomerInsights = () => {
  const [activeTab, setActiveTab] = useState('domestic')

  const tabItems = [
    {
      key: 'domestic',
      label: 'Domestic (U.S.)',
    },
    {
      key: 'international',
      label: 'International',
    },
  ]

  return (
    <Layout className="customer-insights-layout">
      <Header className="app-header">
        <AppHeader />
      </Header>

      <Content className="customer-insights-content">
        <div className="customer-insights-inner">
          {/* Logo 和标题 */}
          <div className="insights-header">
            <div className="insights-logo">
              <img src={sendMoneyImg} alt="send money" className='send-money-img'/>
            </div>
            <h1 className="insights-title">
              Send money safely for the payments that matter most
            </h1>
          </div>

          {/* 标签页 */}
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            items={tabItems}
            className="transfer-tabs"
            centered
          />

          {/* 信息卡片网格 */}
          <div className="info-cards-grid">
            {/* What to have ready */}
            <div className="info-card">
              <div className="info-card-header">
                <img src={whatToHaveReadyImg} alt="what to have ready" className="info-card-icon"/>
                <h3 className="info-card-title">What to have ready</h3>
              </div>
              <div className="info-card-content">
              <ul className="info-card-list">
                <li>Recipient's name</li>
                <li>Recipient account and routing numbers</li>
                <li>Recipient address</li>
                <li>Mobile device for verification</li>
              </ul>
              <a href="#" className="info-card-link">
                Learn more about what to have ready <span>&gt;</span>
              </a>
              </div>
            </div>

            {/* Delivery time */}
            <div className="info-card">
              <div className="info-card-header">
                <img src={deliveryTimeImg} alt="delivery time" className="info-card-icon" />
                <h3 className="info-card-title">Delivery time</h3>
              </div>
              <div className="info-card-content">
                <p className="info-card-text">
                  Most domestic wires arrive within 1 business day. You can check your status on the 'Payment activity' page.
                </p>
                <a href="#" className="info-card-link">
                  Learn more about delivery time <span>&gt;</span>
                </a>
              </div>
            </div>

            {/* Daily limit */}
            <div className="info-card">
              <div className="info-card-header">
                <img src={dailyLimitImg} alt="daily limit" className="info-card-icon" />
                <h3 className="info-card-title">Daily limit</h3>
              </div>
              <div className="info-card-content">
                <p className="info-card-text">
                  Your daily online wire limit is $500,000. If you need to send more, visit any Chase branch.
                </p>
              </div>
            </div>

            {/* Fees card - 根据选中的 tab 显示不同的内容 */}
            {activeTab === 'domestic' ? (
              <div className="info-card">
                <div className="info-card-header">
                  <img src={domesticFeesImg} alt="domestic fees" className="info-card-icon" />
                  <h3 className="info-card-title">Domestic fees</h3>
                </div>
                <div className="info-card-content">
                  <p className="info-card-text">
                    When you enter your wire info, you'll see the applicable Chase wire transfer fee. Note, your recipient may have charges from their bank that could impact the amount they receive.
                  </p>
                  <a href="#" className="info-card-link">
                    Ways to send money without fees <span>&gt;</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="info-card">
                <div className="info-card-header">
                  <img src={dailyLimitImg} alt="international fees" className="info-card-icon" />
                  <h3 className="info-card-title">International fees</h3>
                </div>
                <div className="info-card-content">
                  <p className="info-card-text">
                    When you enter your wire info, you'll see the applicable Chase wire transfer fee. Note your recipient may have charges from their bank that could impact the amount they receive.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 底部按钮 */}
          <div className="insights-actions">
            <Button className="action-button-outline">Add a recipient</Button>
            <Button type="primary" className="action-button-outline action-button-primary">
              Schedule a wire
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default CustomerInsights


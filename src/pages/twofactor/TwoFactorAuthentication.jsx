import { Layout } from 'antd'
import AppHeader from '../../components/AppHeader'
import './TwoFactorAuthentication.css'
import printIcon from '../../img/12.png'
import deleteIcon from '../../img/delete.png'

const { Header, Content, Sider } = Layout

const TwoFactorAuthentication = () => {

  return (
    <Layout className="security-layout">
      <Header className="app-header">
        <AppHeader />
      </Header>
      <div style={{backgroundColor: '#EAEEF0'}}>
      <Layout className="security-body">
        {/* 左侧导航栏 */}
        <Sider width={280} className="security-sidebar">
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

        {/* 右侧内容区域 */}
        <Content className="security-content">
          <div className="security-content-inner">
            {/* 邮件详情 */}
            <div className="email-detail-card">
              {/* 邮件头部 */}
              <div className="email-header">
                <div className="email-header-info">
                  <div className="email-header-row">
                    <span className="email-label">Sent</span>
                    <span className="email-value">Oct 06, 2025 12:44 PMe</span>
                  </div>
                  <div className="email-header-row">
                    <span className="email-label">From</span>
                    <span className="email-value">Chase Online Banking</span>
                  </div>
                  <div className="email-header-row email-header-row-with-actions">
                    <div>
                      <span className="email-label">Subject</span>
                      <span className="email-value">Transaction Limit Update</span>
                    </div>
                    <div className="email-header-actions">
                      <img src={printIcon} alt="print" className="email-action-icon" />
                      <span className="email-action-divider"></span>
                      <a href="#" className="email-action-link">Delete</a>
                      <span className="email-action-divider"></span>
                      <a href="#" className="email-action-link">Reply</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 邮件正文 */}
              <div className="email-body">
                <p className="email-greeting">Dear AVESTRO GLOBAL INC,</p>
                <p className="email-content">
                  As you requested, we've changed your current transaction limit for Wire Transfers.
                  As of 2025-10-06 11:44:46, your new limit for Wire Transfers will be 500000.
                </p>
                <p className="email-content">
                  Please note that all transactions are still subject to available funds in your account. We may revoke access to transactions at any time due to potential fraud or other security concerns.
                </p>
                <p className="email-content">
                  If applicable, we also recommend that you adjust any limits for Authorized Users accordingly in Access & Security Manager (SM).
                </p>
                <p className="email-content">
                  If you have questions, please contact your Chase Banker.
                </p>
                <p className="email-content">
                  Thanks for being a valued Chase Online customer.
                </p>
                <p className="email-signature">
                  Sincerely,<br />
                  Chase Online for Business Team
                </p>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
      </div>
    </Layout>
  )
}

export default TwoFactorAuthentication


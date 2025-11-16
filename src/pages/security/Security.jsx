import { Layout, Button, Table, Badge, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import {
  PlusOutlined,
  DeleteOutlined,
  RightOutlined,
} from '@ant-design/icons'
import AppHeader from '../../components/AppHeader'
import './Security.css'
import deleteIcon from '../../img/delete.png'
import newMessageIcon from '../../img/plus.png'

const { Header, Content, Sider } = Layout

const Security = () => {
  const navigate = useNavigate()
  // 消息数据
  const messages = [
    {
      key: '1',
      date: 'Oct 06',
      from: 'Chase Online Banking',
      message: 'Transaction Limit Update',
      isUnread: true,
    },
  ]

  // 表格列定义
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: 120,
      sorter: true,
      render: (text, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {record.isUnread && <span className="unread-dot"></span>}
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from',
      sorter: true,
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
      render: (text) => (
        <a 
          href="#" 
          className="message-link"
          onClick={(e) => {
            e.preventDefault()
            navigate('/two-factor-authentication')
          }}
        >
          {text} <RightOutlined style={{ fontSize: '12px', marginLeft: '4px' }} />
        </a>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 100,
      render: () => (
        <img src={deleteIcon} alt="delete" className="delete-icon" />
      ),
    },
  ]

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
            {/* 标题和描述 */}
            <div className="content-header">
              <div>
                <h1 className="content-title">Inbox</h1>
                <p className="content-description">
                  Your Secure Messages include the alerts, notifications and inquiries you've received or sent within the last 90 days.
                </p>
              </div>
              <div className="new-message-wrapper">
                <img src={newMessageIcon} alt="new message" className="new-message-icon" />
                <span style={{fontSize: '16px', fontWeight: '500', color: '#015FB8'}}> New message</span>
              </div>
            </div>

            {/* 消息列表表格 */}
            <div className="messages-table-card">
              <Table
                columns={columns}
                dataSource={messages}
                pagination={false}
                className="messages-table"
              />
            </div>
          </div>
        </Content>
      </Layout>
      </div>
    </Layout>
  )
}

export default Security


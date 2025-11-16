import { Layout } from 'antd'
import AppHeader from '../../components/AppHeader'
import AppContent from '../../components/AppContent'
import '../../App.css'

const { Header, Content } = Layout

const Login = () => {
  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <AppHeader />
      </Header>
      <Content className="app-content">
        <AppContent />
      </Content>
    </Layout>
  )
}

export default Login
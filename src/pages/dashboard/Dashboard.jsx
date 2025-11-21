import { Layout } from "antd";
import "../../App.css";
import AppContent from "../../components/AppContent";
import ChaseHeader from "../../components/ChaseHeader";

const { Header, Content } = Layout;

const Dashboard = () => {
  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <ChaseHeader />
      </Header>
      <Content className="app-content">
        <AppContent />
      </Content>
    </Layout>
  );
};

export default Dashboard;

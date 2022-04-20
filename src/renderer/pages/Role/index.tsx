import { Space, Card } from 'antd';
import './index.less';

const Role = () => {
  return (
    <div className="role">
      <div className="role-wrap">
        <Space direction="vertical" size={48}>
          <Card>播放源</Card>
          <Card>观众</Card>
        </Space>
      </div>
    </div>
  );
};

export default Role;

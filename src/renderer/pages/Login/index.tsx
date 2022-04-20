import { Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less';

const Login = () => {
  const onFinish = () => {
    console.log('xxxx');
  };

  return (
    <div className="login">
      <div className="login-wrap">
        <div className="login-logo" />
        <div className="login-form">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="phone"
              rules={[{ required: true, message: '请输入您的手机号！' }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="手机号"
              />
            </Form.Item>
            <Form.Item
              name="captcha"
              rules={[{ required: true, message: '请输入验证码！' }]}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Input
                  style={{ flex: '1 1 0%', marginRight: '8px' }}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="验证码"
                />
                <Button style={{ display: 'block' }}>获取验证码</Button>
              </div>
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                忘记密码
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                block
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登 录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

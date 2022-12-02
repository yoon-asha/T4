import React from 'react';
import {
  Breadcrumb,
  Layout,
  Menu,
  Col,
  Row,
  Divider,
  Image,
  Space,
} from 'antd';
import { useRouter } from 'next/router';
import {
  InfoCircleOutlined,
  MailOutlined,
  SlackOutlined,
  SwapOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const menuItem = [
  {
    id: '0',
    name: '로그인',
    path: '/copyrights',
  },
  // {
  //   id: '1',
  //   name: '지갑생성',
  //   path: '/mypage',
  // },
  {
    id: '2',
    name: '마이페이지',
    path: '/mypage',
  },
  {
    id: '3',
    name: '서비스 소개',
    path: '/',
  },
  {
    id: '4',
    name: 'Binance',
    path: '/Binance',
  },
];

const DefaultLayout = ({ children }: any) => {
  const router = useRouter();

  return (
    <Row justify="center">
      <Col style={{ width: '1200px' }}>
        <Layout
          className="layout"
          style={{ minHeight: '100vh', background: '#fff' }}
        >
          {router.pathname === '/' || router.pathname === '' ? (
            <div
              style={{
                height: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image src="/topLogo.png" alt="toplogo" preview={false}></Image>
            </div>
          ) : (
            <div />
          )}
          <Header style={{ background: '#fff' }}>
            <Menu
              theme="light"
              mode="horizontal"
              style={{ justifyContent: 'center' }}
              defaultSelectedKeys={['2']}
              items={menuItem.map((item) => ({
                key: item.id,
                label: item.name,
                onClick: () => router.push(item.path),
              }))}
            />
          </Header>
          <Content>
            <div className="site-layout-content" style={{ background: '#fff' }}>
              {children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              width: '100%',
              background: '#fff',
              borderTop: '1px solid #CCCCCC',
            }}
          >
            <Row justify="center" gutter={[16, 32]}>
              <Col span={24}>
                <Image src="/logo.png" alt="logo" preview={false}></Image>
              </Col>
              <Col span={4}>
                <Space>
                  <InfoCircleOutlined />
                  서비스 소개
                </Space>
              </Col>
              <Col span={4}>
                <Space>
                  <SwapOutlined />
                  거래하기
                </Space>
              </Col>
              <Col span={4}>
                <Space>
                  <SlackOutlined />
                  커뮤니티
                </Space>
              </Col>
              <Col span={4}>
                <Space>
                  <MailOutlined />
                  메일 문의
                </Space>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </Col>
    </Row>
  );
};

export default DefaultLayout;

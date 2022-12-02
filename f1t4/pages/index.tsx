import { Button, Image, Typography, Col, Row, Space } from 'antd';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import HousePreview from '../components/HousePreview';

const { Title } = Typography;

export default function Home() {
  const router = useRouter();
  return (
    <Row justify="center">
      <Col span={24}>
        <Space size={'large'} direction="vertical" style={{ width: '100%' }}>
          <HousePreview>
            <Space
              direction="vertical"
              align="center"
              style={{ width: '100%' }}
            >
              <Button
                type="primary"
                size="large"
                style={{ padding: '0px 32px 0px 32px' }}
                onClick={() => router.push('/mypage')}
              >
                마이페이지
              </Button>
            </Space>
          </HousePreview>
          <Row justify="center" style={{ margin: '50px 0px' }}>
            <Col span={22}>
              <Title level={4}>내일의 집에서 할 수 있는 일</Title>
              <Image
                preview={false}
                style={{ width: '100%', height: '100%' }}
                src={'/img1.png'}
                alt="preview"
              />
            </Col>
          </Row>
        </Space>
      </Col>
    </Row>
  );
}

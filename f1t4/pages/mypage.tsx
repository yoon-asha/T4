import {
  Button,
  Image,
  Typography,
  Col,
  Row,
  Space,
  Card,
  Avatar,
  Carousel,
} from 'antd';
import HousePreview from '../components/HousePreview';
import { ShareAltOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Text } = Typography;

const contentStyle: React.CSSProperties = {
  height: '300px',
  width: '300px',
  color: '#fff',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#ccc',
};

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};

const onChange = (currentSlide: number) => {
  console.log(currentSlide);
};

export default function Home() {
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
              <Card
                style={{
                  width: '650px',
                  height: '300px',
                  transform: 'translateY(250px)',
                }}
                bodyStyle={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Row justify={'center'} style={{ width: '100%' }}>
                  <Col
                    span={10}
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Avatar
                      size={180}
                      src="https://joeschmoe.io/api/v1/random"
                    />
                  </Col>
                  <Col
                    span={14}
                    style={{ display: 'flex', justifyContent: 'start' }}
                  >
                    <Space
                      direction="vertical"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <Text strong style={{ fontSize: 30 }}>
                        닉네임
                      </Text>
                      <Text style={{ fontSize: 24 }}>포인트 0P</Text>
                      <Button size="middle" type="primary">
                        <ShareAltOutlined />
                        My room URL
                      </Button>
                    </Space>
                  </Col>
                </Row>
              </Card>
            </Space>
          </HousePreview>
          <Row justify="center" style={{ margin: '300px 0px 200px 0px' }}>
            <Col span={22}>
              <Space
                size={'large'}
                direction="vertical"
                style={{ width: '100%' }}
              >
                <Button type="primary" ghost>
                  받은 메시지 리스트
                </Button>
                <Title level={5}>보유 아이템 관리</Title>
                <Carousel {...settings}>
                  <div>
                    <CarouselItem style={contentStyle}>
                      <Button className="sell-btn" type="primary">
                        판매하기
                      </Button>
                    </CarouselItem>
                  </div>
                  <div>
                    <CarouselItem style={contentStyle}>
                      <Button className="sell-btn" type="primary">
                        판매하기
                      </Button>
                    </CarouselItem>
                  </div>
                  <div>
                    <CarouselItem style={contentStyle}>
                      <Button className="sell-btn" type="primary">
                        판매하기
                      </Button>
                    </CarouselItem>
                  </div>
                  <div>
                    <CarouselItem style={contentStyle}>
                      <Button className="sell-btn" type="primary">
                        판매하기
                      </Button>
                    </CarouselItem>
                  </div>
                  <div>
                    <CarouselItem style={contentStyle}>
                      <Button className="sell-btn" type="primary">
                        판매하기
                      </Button>
                    </CarouselItem>
                  </div>
                </Carousel>
                <Title level={5}>보낸 아이템 목록</Title>
                <Carousel {...settings}>
                  <div>
                    <CarouselItem style={contentStyle}>
                      <Button className="sell-btn" type="primary">
                        판매하기
                      </Button>
                    </CarouselItem>
                  </div>
                  <div>
                    <CarouselItem style={contentStyle}>
                      <Button className="sell-btn" type="primary">
                        판매하기
                      </Button>
                    </CarouselItem>
                  </div>
                  <div>
                    <CarouselItem style={contentStyle}>
                      <Button className="sell-btn" type="primary">
                        판매하기
                      </Button>
                    </CarouselItem>
                  </div>
                  <div>
                    <CarouselItem style={contentStyle}>
                      <Button className="sell-btn" type="primary">
                        판매하기
                      </Button>
                    </CarouselItem>
                  </div>
                  <div>
                    <CarouselItem style={contentStyle}>
                      <Button className="sell-btn" type="primary">
                        판매하기
                      </Button>
                    </CarouselItem>
                  </div>
                </Carousel>
              </Space>
            </Col>
          </Row>
        </Space>
      </Col>
    </Row>
  );
}

const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  cursor: pointer;

  .sell-btn {
    display: none;
    padding-left: 32px;
    padding-right: 32px;
  }
  &:hover {
    border: 2px solid #9381ff;
    .sell-btn {
      display: inline-block;
    }
  }
`;

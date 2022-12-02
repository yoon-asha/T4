import {
  Button,
  Col,
  DatePicker,
  Image,
  Input,
  Radio,
  Row,
  Space,
  Typography,
} from 'antd';
import React, { useState } from 'react';
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';

const { Title, Text } = Typography;
const { TextArea } = Input;

const onChange = (
  value: DatePickerProps['value'] | RangePickerProps['value'],
  dateString: [string, string] | string
) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};

const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
  console.log('onOk: ', value);
};

const SendItem = () => {
  const [isReservation, setIsReservation] = useState(false);

  return (
    <Row justify="center">
      <Col span={24}>
        <Row justify="center" style={{ margin: '50px 0px 200px 0px' }}>
          <Col span={16}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Space
                direction="vertical"
                align="center"
                size={'large'}
                style={{ width: '100%' }}
              >
                <Image
                  preview={false}
                  style={{ width: '500px', height: '500px' }}
                  src={'/reveal.png'}
                  alt="preview"
                />
              </Space>
              <Space style={{ width: '100%' }} direction="vertical">
                <Title level={4}>카테고리</Title>
                <Radio.Group
                  defaultValue="a"
                  buttonStyle="solid"
                  size={'large'}
                >
                  <Radio.Button value="a">벽</Radio.Button>
                  <Radio.Button value="b">바닥</Radio.Button>
                  <Radio.Button value="c">랜덤</Radio.Button>
                </Radio.Group>
              </Space>
              <Space style={{ width: '100%' }} direction="vertical">
                <Title level={4}>메시지</Title>
                <TextArea rows={6} placeholder="메시지를 입력해주세요." />
              </Space>
              <Space style={{ width: '100%' }} direction="vertical">
                <Title level={4}>예약</Title>
                {isReservation ? (
                  <Space
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                    <Button type="primary" ghost size={'large'}>
                      날짜 선택
                    </Button>
                    <DatePicker
                      showTime
                      onChange={onChange}
                      onOk={onOk}
                      size={'large'}
                      style={{ width: '450px', borderColor: '#9381FF' }}
                    />
                    <Button
                      type="primary"
                      ghost
                      onClick={() => setIsReservation(false)}
                      size={'large'}
                    >
                      X
                    </Button>
                  </Space>
                ) : (
                  <Button
                    type="primary"
                    ghost
                    onClick={() => setIsReservation(true)}
                    size={'large'}
                  >
                    예약하기
                  </Button>
                )}
              </Space>
              {isReservation ? (
                <Button type="primary" size="large" style={{ width: '100%' }}>
                  예약 전송
                </Button>
              ) : (
                <Button type="primary" size="large" style={{ width: '100%' }}>
                  전송
                </Button>
              )}
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SendItem;

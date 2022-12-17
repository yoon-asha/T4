import { Button, Col, Row, Layout, Tabs } from 'antd'
import styled from 'styled-components'
import room from '../public/room-sample.svg'
import Image from 'next/image'
import { useState } from 'react'

const { Content } = Layout
const { TabPane } = Tabs

const Room = styled(Col)`
  height: 80vh;
  background: url(${room.src}) no-repeat center / contain;
`

const Btns = styled(Col)`
  display: flex;
  justify-content: right;
  position: relative;
  top: 85%;
  right: 40px;
`
const Finish = styled(Button)`
  border-color: #ff8c00;
  color: #ff8c00;
  font-weight: 600;
  padding: 0 24px;
`
const ItemWrap = styled(Col)`
  background: #ffebdc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
const Items = styled(Col)`
  border: 1px solid #ff8c00;
  width: 100%;
  height: 100%;
  padding: 20px;
`
const ItemTabs = styled(Tabs)`
  margin-top: 15px;

  .ant-tabs-nav-list {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .ant-tabs-tab {
    // width: 50%;
  }
  .ant-tabs-tab-active {
    // border-bottom: 2px solid #ff8c00;
  }
  .ant-tabs-ink-bar {
    display: none;
    // background-color: #ff8c00 !important;
    // width: 50% !important;
  }

  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #ff8c00 !important;
    font-weight: bold;
    // border-bottom: 2px solid red !important;
  }

  .ant-tabs-content-holder {
    border-width: 1px;
    border-color: #f0f0f0;
    border-style: solid;
    border-top-style: none;
    padding: 1rem;
  }
`
const WallItems = styled.div`
  box-shadow: none;
  border: none;
  width: 80px;
  height: 80px;
  cursor: pointer;
`
const Myroom = () => {
  const [wall1, setWall1] = useState('/clickhere.png')
  const [wallh1, setWallh1] = useState(20)

  const [floor1, setFloor1] = useState('/clickhere.png')
  const [floorh1, setFloorh1] = useState(20)

  const Deco = styled(Button)`
    border: none;
    box-shadow: none;
    height: 20px;
    background: url('/clickhere.png') no-repeat center / contain;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
    position: relative;
  `

  const changeItem = () => {
    setWall1('/images/wall/bookcase06.png')
    setWallh1(80)
  }
  const changeItem2 = () => {
    setFloor1('/images/floor/bed10.png')
    setFloorh1(150)
  }
  return (
    <Content>
      <Row
        style={{
          textAlign: 'center',
          // background: "#fff6f0",
          background: '#fffeee',
          minWidth: '735px',
        }}
      >
        <Room span={16}>
          {/* 벽 왼쪽부터 */}
          <Deco
            style={{
              top: '160px',
              right: '10px',
              background: `url(${wall1}) no-repeat center / contain`,
              width: `${wallh1}px`,
              height: `${wallh1}px`,
            }}
          >
            {' '}
          </Deco>
          <Deco style={{ top: '150px', left: '150px' }}> </Deco>
          {/* 바닥 왼쪽부터 */}
          <Deco style={{ top: '380px', right: '100px' }}> </Deco>
          <Deco
            style={{
              top: '300px',
              right: '10px',
              background: `url(${floor1}) no-repeat center / contain`,
              width: `${floorh1}px`,
              height: `${floorh1}px`,
            }}
          >
            {' '}
          </Deco>
          <Deco style={{ top: '330px', left: '50px' }}> </Deco>
          <Deco style={{ top: '365px', left: '70px' }}> </Deco>
          <Deco style={{ top: '400px', left: '90px' }}> </Deco>

          <Btns>
            <Finish>공유</Finish>
            <Finish style={{ marginLeft: 10 }}>저장</Finish>
          </Btns>
        </Room>

        <ItemWrap span={8}>
          <Items>
            {/* <Itemspan>Items</Itemspan> */}
            <ItemTabs defaultActiveKey='1'>
              <TabPane tab='벽' key='1'>
                <WallItems onClick={changeItem}>
                  <Image
                    width={80}
                    height={80}
                    alt='items'
                    src={`/images/wall/bookcase06.png`}
                  />
                </WallItems>
                {/* <WallItems
                  style={{
                    background: `url(/images/wall/bookcase06.png)  no-repeat center / cover`,
                  }}
                ></WallItems> */}
              </TabPane>
              <TabPane tab='바닥' key='2'>
                <WallItems onClick={changeItem2}>
                  <Image
                    width={80}
                    height={80}
                    alt='items'
                    src={`/images/floor/bed10.png`}
                  />
                </WallItems>
              </TabPane>
            </ItemTabs>
          </Items>
        </ItemWrap>
      </Row>
    </Content>
  )
}

export default Myroom

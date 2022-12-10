import { Button, Col, Row, Layout } from 'antd'
import Image from 'next/image'
import styled from 'styled-components'
// import Image from "next/image"
import room from '../public/room-sample.svg'
// const buttonStyle = {
//   background: "url(/clickhere.png) no-repeat center / contain",
//   border: "none",
// }

const { Content } = Layout

const Room = styled(Col)`
  height: 80vh;
  background: url(${room.src}) no-repeat center / contain;
`
// background: url(/room-sample.svg) no-repeat center / contain;

const Deco = styled(Button)`
  border: none;
  // background: red;
  background: url(/clickhere.png) no-repeat center / contain;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  position: relative;
`
const Btns = styled(Col)`
  display: flex;
  justify-content: right;
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
`

const Items = styled(Col)`
  border: 1px solid #ff8c00;
  width: 95%;
  height: 98%;
`

const Myroom = () => {
  return (
    <Content>
      <Row
        // justify="center"
        style={{
          textAlign: 'center',
          // background: "#fff6f0",
          background: '#fffeee',
          // minWidth: '800px',
          // overflow: 'scroll',
        }}
      >
        <Room span={16}>
          {/* 반응형 하려면 사이즈 별로  */}
          <Deco style={{ top: '28%', right: '3%' }}> </Deco>
          <Deco style={{ top: '50%', left: '3%' }}> </Deco>
          <Deco style={{ top: '65%', right: '13%' }}> </Deco>
          <Deco style={{ top: '58%', left: '7%' }}> </Deco>
          <Deco style={{ top: '66%', left: '12%' }}> </Deco>
          <Deco style={{ top: '27%', left: '5%' }}> </Deco>

          <Btns>
            <Finish>공유</Finish>
            <Finish style={{ marginLeft: 10 }}>저장</Finish>
          </Btns>
        </Room>

        <ItemWrap span={8}>
          <Items>dkdkdk</Items>
        </ItemWrap>
      </Row>
    </Content>
  )
}

export default Myroom

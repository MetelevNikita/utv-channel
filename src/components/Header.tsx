import { FC } from 'react'

// src

import logoUTV from './../asset/logoUTV.svg'


//

import { Col, Row } from 'react-bootstrap'
import MyButton from './UI/MyButton'

const Header = () => {


  const menuHeader = ['Новости', 'Телепрограмма', 'Проекты', 'Прямой эфир', 'О канале']


  return (

    <Row md={12} className='d-flex justify-content-center align-items-center mt-3'>

      <Col md={2} className='d-flex flex-md-row flex-column justify-content-around align-items-center mb-2'>
        <img src={logoUTV} alt="" />
      </Col>

      <Col md={8} className='d-flex flex-md-row flex-column justify-content-around align-items-center mb-2'>

        {menuHeader.map((item: string) => {return <Col className='d-flex justify-content-around align-items-center mb-2' style={{fontSize: '19px'}}>{item}</Col>})}

      </Col>

      <Col md={2} className='d-flex flex-md-row flex-column justify-content-around align-items-center'>

        <MyButton text='8-989-951-90-63' onClick={() => {}} style={{width: 'maxContent', height: 'maxContent', borderRadius: '20px', border: '1px solid #FEA633', color: '#FEA633', background: 'none' ,paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px'}}/>

      </Col>

    </Row>

  )
}

export default Header

import { FC } from 'react'

// img

import ok from './../asset/social/ok.svg'
import vk from './../asset/social/vk.svg'
import tg from './../asset/social/vk.svg'
import yt from './../asset/social/yt.svg'
import wa from './../asset/social/wa.svg'

//

import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const socialLinks : {img: string, link: string}[] = [
  {
    img : vk,
    link: 'https://vk.com/unews'
  },

  {
    img : yt,
    link: 'https://www.youtube.com/channel/UCvCcbnj9Ls2RrxFfUZVGi_w'
  },

  {
    img : tg,
    link: 'https://t.me/s/utvufa'
  },

  {
    img : wa,
    link: 'https://dzen.ru/utv.ru'
  },

  {
    img : ok,
    link: 'https://ok.ru/utvrussia'
  }
]





const Social = () => {
  return (

    <div style={{width: '100%', height: 'maxContent', background: 'linear-gradient(94deg, rgba(242,173,16,0.9020044543429844) 0%, rgba(255,218,0,1) 0%, rgba(232,24,12,1) 100%)', position: 'absolute', left: '0px'}}>

      <Row md={12} className='d-flex justify-content-center align-items-center'>

      <Col md={6} className='d-flex flex-column justify-content-center align-items-center'>
        <Col>Давайте дружить</Col>
        <Col>подписывайтесь на наши соцсети</Col>
      </Col>

      <Col md={6} className='d-flex flex-row justify-content-center align-items-center'>

        {socialLinks.map((item) => {
          return <Link to={item.link}><img src={item.img} /></Link>
        })}

      </Col>


      </Row>

      </div>

  )
}

export default Social

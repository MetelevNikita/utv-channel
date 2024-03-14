import { FC } from 'react'

//

interface Button {
  text: string
  onClick: () => void
  style?: object
}



const MyButton: FC<Button> = ({ text, onClick, style }) => {
  return (
    <button onClick={onClick} style={style}>{text}</button>
  )
}


export default MyButton

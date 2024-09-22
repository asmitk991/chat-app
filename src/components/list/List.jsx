import Userinfo from "./userInfo/Userinfo"
import Chatlist from "./chatList/Chatlist"
import "./list.css" 

const List = () => {
  return (
    <div className='list'>
      <Userinfo/>
      <Chatlist/>
    </div>
  )
}

export default List

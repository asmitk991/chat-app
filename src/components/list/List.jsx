import Userinfo from "./userInfo/UserInfo"
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
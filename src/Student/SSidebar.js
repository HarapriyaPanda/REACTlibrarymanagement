import { BsGrid1X2Fill } from 'react-icons/bs'
import {
  BsFillPersonCheckFill,  BsDatabaseAdd,BsBookFill,BsBookHalf
} from 'react-icons/bs'

import { Menu } from "antd"
import { useNavigate } from 'react-router-dom';
const SSidebar = () => {
    const navigate = useNavigate();
  return (
    <div className="SideMenu">
    <Menu className=' menu'
   
      onClick={(item) => {
        // item.key
        navigate(item.key);
      }}
      items={[
        {
          label: "Dashboard",
          icon: <BsGrid1X2Fill />,
          key: '/Student',
        },
        {
          label: "Book",
          icon: <BsBookFill/>,
          key: '/Sbooks'
        },
        {
          label: "Issued Book",
          icon: <BsBookHalf />,
          key: '/SIssue'
        },
        {
          label: "Cart",
          icon: <BsDatabaseAdd />,
          key: '/SCart'
        },
        // {
        //   label: "Return",
        //   icon: <BsBookHalf />,
        //   key: '/Return'
        // },
        // {
        //   label: "Borrowed",
        //   icon: <BsBookFill />,
        //   key: '/Borrowed'
        // },
        {
            label: "Fine",
            icon: <BsFillPersonCheckFill />,
            key: '/SFine'
          },
        {
          label: "Profile",
          icon: <BsFillPersonCheckFill />,
          key: '/SProfile'
        },
        

      ]}>

    </Menu>
  </div>
  )
}

export default SSidebar

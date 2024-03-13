import Home from './Home'
import Search from './Search'
import Notifications from './Notifications'
import CreatePost from './CreatePost'
import ProfileAvatar from './ProfileAvatar'

import { useParams } from "react-router-dom"
import useAuthStore from '../../store/useAuthStore'

const SideBarItems = () => {

    const { userId } = useParams()
    const currentUser = useAuthStore((state) => state.user);

    return <>
        <Home />
        <Search />
        <Notifications />
        <CreatePost />
        <ProfileAvatar />
    </>
}

export default SideBarItems
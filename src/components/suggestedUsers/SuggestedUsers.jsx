import Avatar from '../avatar/Avatar'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = ({ name, followers, img }) => {
    return (
        <div className="">



            <div className="mt-2 ">
                <SuggestedUser name={name} followers={followers} img={img} />
            </div>

        </div>

    )
}

export default SuggestedUsers
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = ({ user }) => {
    return (
        <div className="">
            <div className="mt-2 ">
                <SuggestedUser user={user} />
            </div>

        </div>

    )
}

export default SuggestedUsers
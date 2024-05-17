import Button from "../../components/Button";
import Header from "../../components/Header";
import { ProfileInfo } from "../../components/ProfileInfo";
import { useAuth } from "../../contexts/authContext/useAuth";

function Profile() {
    const {logout, user} = useAuth();
    console.log(user);
    
    return (
        <div className='h-screen flex justify-center items-center font-nunito bg-large-bg relative'>
            <Header
            classes={['absolute top-0']}>
                <Button
                    type={undefined}
                    value="Logout"
                    classes={['h-11', 'w-[272px]']}
                    onClick={logout}
                     />
            </Header>
            <div className='border bg-white gap-y-8 py-10 px-6 rounded-[18px] flex justify-center flex-col items-center w-[438px]' >
                <div className="flex flex-col justify-center items-center gap-y-4 w-[77px]">
                    <h6 className="font-semibold text-xs">
                        Profile picture
                    </h6>
                    <img className="rounded-lg" src={`${user?.avatar.low}`} alt={`Avatar de ${user?.name}`} />
                </div>

                <div className="flex flex-col  gap-y-4">
                    <ProfileInfo.Root>
                        <ProfileInfo.Label
                            label="Name" />
                        <ProfileInfo.Info
                            info={user?.name}/>
                    </ProfileInfo.Root>
                    <ProfileInfo.Root>
                        <ProfileInfo.Label
                            label="E-mail" />
                        <ProfileInfo.Info
                            info={user?.email} />
                    </ProfileInfo.Root>
                </div>
            </div>
        </div>
    )
}

export default Profile;
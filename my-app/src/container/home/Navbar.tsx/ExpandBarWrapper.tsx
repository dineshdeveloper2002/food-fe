import expandBarImg from '@container/assets/Images/logo.png';
import { UserExpandBar } from '@container/container/user/UserExpandBar';
import { ReactNode, useEffect } from 'react';
import { ChatExpandBar } from '../ChatExpandBar';
import { HomeExpandBar } from '../HomeExpandBar';
import { WindowSharp } from '@mui/icons-material';



interface ExpandBarWrapper {
    children?: ReactNode
}


const getRouteDetails = (key: string) => {
    let path = window.location.pathname
    console.log(path)
}


export const ExpandBarWrapper = ({ children }: ExpandBarWrapper) => {

    useEffect(() => {
        let path = window.location.pathname
        console.log(path)
    })

    const handleClick = (ele: ReactNode) => {
        switch (ele) {
            case 'users':
                return <UserExpandBar />
                break;
            case 'chat':
                return <ChatExpandBar />
                break;
            case 'home':
                return <HomeExpandBar />
        }
    }
    return (
        <div className="w-[320px]">
            <div className='flex justify-center'>
                <img
                    src={expandBarImg}
                    alt="Expand bar"
                    className="w-24"
                />
            </div>
            <UserExpandBar />
        </div>
    )
}
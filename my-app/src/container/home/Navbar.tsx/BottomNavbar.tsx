import { Typography } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

interface HOME {
    [key: string]: string
}

interface AVATAR {
    [key: string]: string
}

export const BottomNavBar = () => {

    const value: { HOME: HOME, AVATAR: AVATAR } = {
        HOME: {
            AVATAR: "profile",
            NOTIFICATIONS: "Notifications"
        },
        AVATAR: {
            SETTINGS: "settings",
            LOGOUT: "logout",
            Pricing: "pricing"
        }
    }
    return (
        <div className='flex justify-center items-center flex-col'>
            <div>
                <NotificationsNoneIcon />
            </div>
            <div className="bg-amber-600 h-10 w-10 rounded-[36px] flex items-center justify-center">
                <Typography>D</Typography>
            </div>
        </div>
    )
}
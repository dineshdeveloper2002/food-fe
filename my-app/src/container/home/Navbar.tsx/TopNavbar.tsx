import MenuIcon from '@mui/icons-material/Menu';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import GroupIcon from '@mui/icons-material/Group';
import { useAppDispatch, useAppSelector } from '@container/store/storetypedhooks';
import { IconButton, Typography } from '@mui/material';
import { setBar } from '@container/store/home/HomeStoreSlice';
import { openbar } from '@container/store/home/HomeStoreSelectors';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import { UserExpandBar } from '@container/container/user/UserExpandBar';
type NavKey = "HOME" | "EAI" | "USERS";

export const TopNavbar = () => {
    const dispatch = useAppDispatch();
    const open = useAppSelector(openbar);
    const navigate = useNavigate();

    const handleNavClick = (key: any) => {
        switch (key) {
            case 'HOME':
                navigate('/home')

                break;
            case 'EAI':
                navigate('/chat')
                break;
            case 'USERS':
                navigate('/users')

                break;
        }
    }
    const homenavbar: { [key: string]: string } = {
        HOME: "Home",
        EAI: "EAI",
        USERS: "Users"
    }

    const Icons: any = {
        HOME: <HomeTwoToneIcon />,
        EAI: <AutoAwesomeTwoToneIcon />,
        USERS: <GroupIcon />
    }

    const handleClick = () => {
        dispatch(setBar(!open))
    }

    return (
        <div className="h-[813px] flex flex-col gap-8">
            <div className="w-[64px] h-[54px] flex justify-center">
                <IconButton onClick={handleClick}>
                    {open ? <MenuOpenIcon /> : <MenuIcon />}
                </IconButton>

            </div>

            {
                <div className="w-[64px] h-[54px] flex flex-col justify-center items-center">
                    <IconButton>
                        <AddCircleOutlineIcon />
                    </IconButton>
                    <Typography>Add</Typography>
                </div>
            }
            {
                Object.keys(homenavbar).map((ele) => (
                    <div key={ele} className="flex flex-col justify-around items-center hover:cursor-pointer" onClick={(e) => {
                        console.log(e.currentTarget)
                        handleNavClick(ele)
                    }
                    }>
                        {Icons[ele]}
                        <Typography>{homenavbar[ele]}</Typography>
                    </div>

                ))
            }
        </div>
    )
}
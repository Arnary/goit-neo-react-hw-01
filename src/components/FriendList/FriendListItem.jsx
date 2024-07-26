import css from './FriendListItem.module.css'
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={css.item}>
            <img src={avatar} alt="Avatar" width="68" />
            <p className={css['friend-name']}>{name}</p>
            <p className={clsx(isOnline ? css.online : css.offline)}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
};

export default FriendListItem;

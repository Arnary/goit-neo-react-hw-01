import css from './Profile.module.css';

const Profile = ({name, tag, location, image, stats: {followers, views, likes}}) => {
    return (
        <div className={css.card}>
            <div className={css.info}>
                <img
                    className={css.avatar}
                    src={image}
                    alt="User avatar"
                />
                <p className={css["info-name"]}>{name}</p>
                <p className={css["info-tag"]}>@{tag}</p>
                <p className={css["info-location"]}>{location}</p>
            </div>

            <ul className={css["activity-list"]}>
                <li className={css["activity-item"]}>
                    <span>Followers</span>
                    <span className={css["activity-nums"]}>{followers}</span>
                </li >
                <li className={css["activity-item"]}>
                    <span>Views</span>
                    <span className={css["activity-nums"]}>{views}</span>
                </li>
                <li className={css["activity-item"]}>
                    <span>Likes</span>
                    <span className={css["activity-nums"]}>{likes}</span>
                </li>
            </ul>
        </div>

    );
};

export default Profile;

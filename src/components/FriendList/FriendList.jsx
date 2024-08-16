import styles from "./FriendList.module.css"

const FriendListItem = ({avatar, name,isOnline})=>{
    return(
        <div className={styles.card}>
           <img src={avatar} alt={`${name} avatar`} width="48"/>
           <p className={styles.name}>{name}</p>
           <p className={isOnline ? styles.online : styles.offline}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    )
}
const FriendList= ({friends})=>{
return(<ul className={styles.list}>

        
        {friends.map((friend) => (
            <li key={friend.id}>
              <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
        </li>
 
    ))}
</ul>
)
}
export default FriendList;
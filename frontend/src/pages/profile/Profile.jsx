import styles from './Profile.module.css'
import MyButton from '../../components/buttons/MyButton'

export default function Profile() {
  return (
    <div className={styles.pageContainer}>
      <nav>
        <div className={styles.mobileNavbarItems}>
          <img
            className={styles.navbarLink}
            src='/imgs/icons/arrow-left.svg'
            alt=''
          />
          <h3>Profile</h3>
          <img src='/imgs/icons/home.svg' alt='' />
        </div>
      </nav>

      <div className={styles.profileHeader}>
        <img src='/imgs/icons/user.svg' alt='' />
        <div className={styles.profileInfos}>
          <h3>Usuário Teste</h3>
          <p>teste@email.com</p>
        </div>
      </div>
      <hr />
      <div className={styles.pageContent}>
        <div className={styles.contentItems}>
          <h4>General</h4>
          <h3>Edit Profile</h3>
          <hr />
          <h3>Notificatios</h3>
          <hr />
          <h3>Wishlist</h3>
          <hr />
        </div>

        <div className={styles.contentItems}>
          <h4>Legal</h4>
          <h3>Terms of Use</h3>
          <hr />
          <h3>Privacy Policy</h3>
          <hr />
        </div>

        <div className={styles.contentItems}>
          <h4>Personal</h4>
          <h3>Report a Bug</h3>
          <hr />
          <MyButton>Logout</MyButton>
        </div>
      </div>
    </div>
  )
}

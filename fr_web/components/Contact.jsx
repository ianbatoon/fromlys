import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.left1}>
                        <h5>Contact Information</h5>
                        <p>Fill up the form and out team will get back to <br></br>you within 24 hours.</p>
                        <div className={styles.spread}><img src='/images/phone.png'/><h6>+9220505743</h6></div>
                        <div className={styles.spread}><img src='/images/lope.png'/><h6>JCRED@gmail.com</h6></div>
                        <div className={styles.spread}><img src='/images/loc.png'/><h6>8XW8+2CH, Carlos Trinidad Ave, <br></br>Salawag, Dasmarinas, Cavite</h6></div>
                        <div className={styles.logo}><a href='/Home'><img src='/images/Logo.png'/></a></div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right1}>
                        <div>
                            <h5>First Name</h5>
                            <input type="Name"></input>
                            <h5>Email</h5>
                            <input type="Email"></input>
                            <h5>Message</h5>
                            <textarea id='Message' name='Message' rows='3' cols='40' placeholder='Write your message'></textarea>
                        </div>
                        <div className={styles.right2}>
                            <h5>Last Name</h5>
                            <input type="Name"></input>
                            <h5>Phone</h5>
                            <input type="Num"></input>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Contact;
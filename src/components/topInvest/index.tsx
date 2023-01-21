import styles from '../../assets/styles/app.module.scss'

function TopInsvest(){
    var value="Bitcoin +0,46(+1,74%)";
    var mais="26,95 BRL"
    var status="Mercado Aberto nov,14,16:18:02"

    return(
        <div className={styles.TopInvest} >
          <p>{value}
            </p>
            <p className={styles.Main}>
                {mais}
                </p>
                <p className={styles.Status}>
            <br />
            {status}
            </p>
          
        </div>
    )
}
export default TopInsvest;
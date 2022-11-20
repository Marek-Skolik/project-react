import styles from './Favorite.module.scss';
import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";

const Favorite = () => {
    return (
      <Container>
            <div className={styles.favorite}>
                <PageTitle>FAVORITE</PageTitle>
                <div className={styles.contents}>
                  <p>Lorem ipsum</p>
                </div>
            </div>
      </Container>
    )
}

export default Favorite;
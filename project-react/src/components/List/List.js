import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
  return (
    <div class="list">
      <header class={styles.header}>
        <h2 class={styles.title}>Things to do<span>soon</span></h2>
      </header>
      <p class={styles.description}>Interesting things I want to check out</p>
      <section className={styles.columns}>
        <Column title="Books" icon="book" />
        <Column title="Movies" icon="film" />
        <Column title="Games" icon="gamepad" />
      </section>
    </div>
    );
};

export default List;
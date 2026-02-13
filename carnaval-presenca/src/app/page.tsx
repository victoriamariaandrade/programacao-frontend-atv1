import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Mensagem especial de Carnaval</h1>
          <p>
            "Família, aproveitem bem o carnaval, com muita paz e diversão."
          </p>
        </div>
      </main>
    </div>
  );
}

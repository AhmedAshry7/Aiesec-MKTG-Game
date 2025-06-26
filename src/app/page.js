import Image from "next/image";
import styles from "./page.module.css";
import Box from "./Box";
import image1 from "./assets/image1.jpeg"

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.titleholder}>
        <div className={styles.title}>
          Aiesec in
        </div>
        <div className={styles.title}>
          Cairo University
        </div>
        
        <div className={styles.welcome}>
          Welcome to the game
        </div>
      </div>
      <Box question={"You hang me and dance under me, what am I?"} imageSrc={image1} number={1} invisible={false}/>
      <Box question={"You hang me and dance under me, what am I?"} imageSrc={image1} number={2} invisible={false}/>
      <Box question={"You hang me and dance under me, what am I?"} imageSrc={image1} number={3} invisible={false}/>
      <Box question={"You hang me and dance under me, what am I?"} imageSrc={image1} number={4} invisible={true}/>
    </div>
  );
}

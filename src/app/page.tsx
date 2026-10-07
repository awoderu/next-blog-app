import Image from "next/image";
import styles from "./page.module.css";
// import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className={`flex flex-col md:grid lg:grid lg:grid-cols-2 gap-2 sm:gap-8 lg:gap-12 items-center text-center lg:text-left ${styles.container}`}>
      <div className={`${styles.item} leading leading-tight items-center space-x-2 px-3 sm:px-4 py-1.5`}> 
        <h1 className ={styles.title}>
          Better design for your digital products.</h1>
        <p className={styles.desc}>
          Turning your idea into reality. We bring together the teams from  the global tech industry
        </p>
        <button className={styles.button}>
          See our works
        </button>
      </div>
      
      <div className={`${styles.item} leading leading-tight items-center space-x-2 px-3 sm:px-4 py-1.5`}> 
        <Image
          src="/hero.png"
          width={500}
          height={500}
          className={`${styles.img} pb-12`}
          alt="hero image"
          loading="eager"
        />
        </div>
    </div>
  );
}

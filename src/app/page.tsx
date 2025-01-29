'use client'
// import Image from "next/image";
import styles from "./page.module.css";
import './styles/styles.css'
import './styles/Page.css'
import HeaderBar from "./components/HeaderBar";
import StatPage from "./StatPage";
import ProfilePage from "./pages/ProfilePage";
import PageBackground from "./pages/PageBackground";
import ItemsPage from "./pages/ItemsPage";
import PageStepper from "./components/PageStepper";
import { useState } from "react";


export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [characterID, setCharacterID] = useState('test');
//   useEffect(() =>{
//     saveCharacterProfileData(createRandomCharacterProfileData())
// })

  return (
    <div className="Page_root">
    {/* <div className={styles.page}> */}
      {/* <main className={styles.main}> */}
      <main className="Page_main">
        <div className="Page_content">

        <div className="Page_pokedex">
          <div className="Page_leftSide">
            <HeaderBar />
            <div className="Page_leftSideContent">
            <PageBackground src='/PlaceholderCharacter.png'/>

              <div className="Page_leftSideHeader">

              </div>
              {currentPage == 0 &&
                <ProfilePage characterID={characterID}/>
              }
              {currentPage == 1 &&
               <ItemsPage characterID={characterID}/>
              }
              
              <div className="Page_leftSideFooter">
                <PageStepper pages={2} onPageChange={(currentPage: number) => {setCurrentPage(currentPage)}}/>
              </div>
            </div>
          </div>

          <div className="Page_rightSide">
            <div className="Page_rightSideContent">
              <StatPage id={characterID}/>
            </div>
          </div>
        </div>
        </div>
        
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}

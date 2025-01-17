'use client'
// import Image from "next/image";
import  { SkillData, SkillGroup } from "./components/SkillBox";
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
                <ProfilePage characterID="test"/>
              }
              {currentPage == 1 &&
               <ItemsPage />
              }
              
              <div className="Page_leftSideFooter">
                <PageStepper pages={2} onPageChange={(currentPage: number) => {setCurrentPage(currentPage)}}/>
              </div>
            </div>
          </div>

          <div className="Page_rightSide">
            <div className="Page_rightSideContent">
              <StatPage/>
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

'use client'
// import Image from "next/image";
import AttributeBox from "./components/AttributeBox";
import SkillBox, { SkillData, SkillGroup } from "./components/SkillBox";
import styles from "./page.module.css";
import Image from "next/image"
import './styles/styles.css'
import './styles/Page.css'
import IconCheckbox from "./components/IconCheckbox";
import BadgeList from "./components/BadgeList";
import { BadgeData } from "./helpers/BadgeHelper";
import HeaderBar from "./components/HeaderBar";
import StatPage from "./StatPage";
import ProfilePage from "./pages/ProfilePage";
import PageBackground from "./pages/PageBackground";
import ItemsPage from "./pages/ItemsPage";
import PageStepper from "./components/PageStepper";
import { useState } from "react";

/** Character info:
 * x Name
 * x age
 * x concept
 * x nature
 * x confidence
 * x player Name
 * x Profile picture
 * x rank
 * x money
 * - pokemon (6 slots)
 * - pokemon caught/seen
 * 
 * x hp
 * x will
 */

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);


  const skills: SkillGroup[] = [];

  const skillGroup: SkillGroup = {
    skills: [],
  }

  const skill:SkillData = {
    label: 'skill', 
    currentValue: 2,
    maxValue: 5,
    category: 'category',
  }
  
  skillGroup.skills.push(skill);
  skillGroup.skills.push(skill);
  skillGroup.skills.push(skill);
  skillGroup.skills.push(skill);

  skills.push(skillGroup);
  skills.push(skillGroup);
  skills.push(skillGroup);
  skills.push(skillGroup);

  // const badges: BadgeData[] = [
  //   {name: 'badge 0', image: '/volcanoBadge.png', obtained: true, ID: 0},
  //   {name: 'badge 1', image: '/volcanoBadge.png', obtained: true, ID: 1},
  //   {name: 'badge 2', image: '/volcanoBadge.png', obtained: false, ID: 2},
  //   {name: 'badge 3', image: '/volcanoBadge.png', obtained: false, ID: 3},
  //   {name: 'badge 4', image: '/volcanoBadge.png', obtained: false, ID: 4},
  //   {name: 'badge 5', image: '/volcanoBadge.png', obtained: false, ID: 5},
  //   {name: 'badge 6', image: '/volcanoBadge.png', obtained: true, ID: 6},
  //   {name: 'badge 7', image: '/volcanoBadge.png', obtained: false, ID: 7},
  // ]


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
                <ProfilePage />
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

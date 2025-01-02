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

export default function Home() {
 
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

          </div>
          <div className="Page_rightSide">
            <div className="Page_rightSideContent">
              <div className="Page_attributeContainer">
                <AttributeBox label={"Strength"} maxValue={5} currentValue={3} />
                <AttributeBox label={"Strength"} maxValue={5} currentValue={3} />
                <AttributeBox label={"Strength"} maxValue={5} currentValue={3} />
                <AttributeBox label={"Strength"} maxValue={5} currentValue={3} />

              </div>
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

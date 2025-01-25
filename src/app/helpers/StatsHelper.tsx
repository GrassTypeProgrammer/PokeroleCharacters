
// TODO Rename this SkillTypes
export enum Skills {
    Brawl,
    Throw,
    Evasion,
    Weapons,
    Alert,
    Athletic,
    Nature,
    Stealth,
    Allure,
    Etiquette,
    Intimidate,
    Perform,
    Crafts,
    Lore,
    Medicine,
    Science,
}

export const SkillGroupsLUT: Record<SkillGroups,Skills[]>= {
    0: [Skills.Brawl, Skills.Throw, Skills.Evasion, Skills.Weapons],
    1: [Skills.Alert, Skills.Athletic, Skills.Nature, Skills.Stealth],
    2: [Skills.Allure, Skills.Etiquette, Skills.Intimidate, Skills.Perform],
    3: [Skills.Crafts, Skills.Lore, Skills.Medicine, Skills.Science],
    4: [],
}

export enum SkillGroups {
    Fight = 0,
    Survival,
    Stealth,
    Knowledge, 
    _Length,
}

export enum Attributes {
    Strength, 
    Dexterity,
    Vitality, 
    Insight,
}

export enum SocialAttributes {
    Tough,
    Cool,
    Beautify,
    Clever,
    Cute,
}


export function getSkillName(skill: Skills){
    let name = '';

    switch (skill) {
        case Skills.Alert:
            name = 'Alert';
            break;
        case Skills.Allure:
            name = 'Allure';
            break;
        case Skills.Athletic:
            name = 'Athletic';
            break;
        case Skills.Brawl:
            name = 'Brawl';
            break;
        case Skills.Crafts:
            name = 'Crafts';
            break;
        case Skills.Etiquette:
            name = 'Etiquette';
            break;
        case Skills.Evasion:
            name = 'Evasion';
            break;
        case Skills.Intimidate:
            name = 'Intimidate';
            break;
        case Skills.Lore:
            name = 'Lore';
            break;
        case Skills.Medicine:
            name = 'Medicine';
            break;
        case Skills.Nature:
            name = 'Nature';
            break;
        case Skills.Perform:
            name = 'Perform';
            break;
        case Skills.Science:
            name = 'Science';
            break;
        case Skills.Stealth:
            name = 'Stealth';
            break;
        case Skills.Throw:
            name = 'Throw';
            break;
        case Skills.Weapons:
            name = 'Weapons';
            break;
    }

    return name;
}

export function getSkillGroupName(skillGroup: SkillGroups){
    let name: string = '';

    switch (skillGroup) {
        case SkillGroups.Fight:
            name = 'Fight';
            break;
        case SkillGroups.Knowledge:
            name = 'Knowledge';
            break;
        case SkillGroups.Stealth:
            name = 'Stealth';
            break;
        case SkillGroups.Survival:
            name = 'Survival';
            break;
    }

    return name;
}
import React from 'react'
import logoReact from '../assets/react.svg'
import logoDocker from '../assets/logo-docker.svg'
import logoJavascript from '../assets/logo-javascript.svg'
import logoTailwindcss from '../assets/Tailwind_CSS_Logo.svg'
import logoSass from '../assets/logo-sass-pink.svg'
import logoPostgrest from '../assets/Postgresql_elephant.svg'
import logoVite from '../assets/logo-vite.svg'
import logoMongoDB from '../assets/mongodb-svgrepo-com.svg'
import IconSkill from './IconSkill'
import './SkillGrid.css'

function SkillGrid() {
  return (
    <div className='skillGrid-container'>
        <IconSkill source={logoReact} name={"React"}/>
        <IconSkill source={logoDocker} name={"Docker"}/>
        <IconSkill source={logoJavascript} name={"JavaScript"}/>
        <IconSkill source={logoTailwindcss} name={"Tailwindcss"}/>
        <IconSkill source={logoSass} name={"React"}/>
        <IconSkill source={logoVite} name={"Vite"}/>
        <IconSkill source={'https://styled-components.com/icon.png'} name={"Styled"}/>
        <IconSkill source={logoPostgrest} name={"PostgreSQL"}/>
        <IconSkill source={logoMongoDB} name={"MongoDB"}/>
        {/* */}

    </div>
  )
}
export default SkillGrid
import React from 'react'
import PropTypes, { string } from 'prop-types'

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={"flex items-center gap-3 rounded-2xl ring-2 ring-inset ring-zinc-50/10 p-3 hover:bg-zinc-800 transition-colors group " + classes}>
        <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
            <img src={imgSrc} alt={label} width={32} height={32}/>

        </figure>
        <div>
            <h3>{label}</h3>
            <p>
                {desc}
            </p>
        </div>
    </div>
  )
}

SkillCard.proptypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired
}

export default SkillCard
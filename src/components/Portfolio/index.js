import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

const stackColor = {
  'React': 'success',
  'Material UI': 'primary',
  'Express': 'info',
  'Laravel': 'secondary',
  'Firebase': 'danger',
}

const statusColor = {
  'En cours de réalisation': 'primary',
  'Fini': 'success',
}


function Card ( { name, status, description, stacks, url, repo, urlDisable, repoDisable }) {
  return (
    <div className='col col--4 padding--md'>
    <div className={clsx(styles.card,"card")}>
      <div className="card__body color-primary">
        <h4>{name}</h4>
        <div>
            <span className={`margin--xs badge badge--${statusColor[status]}`}>{status}</span>
        </div>
        <div>
          {stacks.map((stack) => (
            <span key={stack} className={`margin--xs badge badge--${stackColor[stack]}`}>{stack}</span>
          ))}
        </div>
        <small>
          {description}
        </small>
      </div>
      <div className="card__footer">
        <a target="_blank" rel="noreferrer noopener" className={clsx(styles.link,"button button--primary button--block margin-vert--sm " + urlDisable)} href={url}>Site</a>
        <a target="_blank" rel="noreferrer noopener" className={clsx(styles.link,"button button--secondary button--block margin-vert--sm " + repoDisable)} href={repo}>Repo</a>
      </div>
    </div>
  </div>
  )
}

const projectsList = [
  {
    name: "Bookmark",
    status: "En cours de réalisation",
    description: "Bookmark est une application permettant d'enregistrer tous les éléments culturels (livres, jeux vidéos, séries, films) que nous souhaitons commencer, avons commencé ou fini, tout en indiquant nos progressions",
    stacks: ["React","Material UI","Firebase",],
    url: 'https://bookmark-yd.web.app/',
    urlDisable: '',
    repo:'https://github.com/Yusuf-Demiryurek/bookmark',
    repoDisable: '',
  },
  {
    name: "Musclay",
    status: "En cours de réalisation",
    description: "Musclay est une application de sport. Celle-ci permet aux pratiquants de créer leurs entrainements et de les planifier. Cette application a été réalisée par une équipe de 4 personnes comme projet de fin de formation",
    stacks: ["React","Material UI","Laravel",],
    url: 'https://musclay.web.app/',
    urlDisable: '',
    repo:'',
    repoDisable: 'disabled',
  },
  {
    name: "My Dream Shuttle",
    status: "En cours de réalisation",
    description: "Il s'agit d'un site professionnel pour un chauffeur VTC. Les utilisateurs pourront réserver leur course directement depuis le site et payer une partie ou l'intégralité de la course",
    stacks: ["React", "Material UI", "Express",],
    url: '',
    urlDisable: 'disabled',
    repo:'',
    repoDisable: 'disabled',
  },
]

export default function Portfolio() {
  return (
    <div className={styles.portfolio} id='portfolio'>
      <h2>Portfolio 💼</h2>
      <div className='row'>
        {projectsList.map((project) =>
          <Card key={project.name} {...project} />
        )}
      </div>
    </div>
  )
}

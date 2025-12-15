import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

const stackColor = {
  'React': 'success',
  'Material UI': 'primary',
  'Express': 'info',
  'Laravel': 'secondary',
  'Firebase': 'danger',
  'Electronique': 'success',
  'Informatique': 'secondary',
  'n8n': 'primary',
  'IA': 'info',
  'LLM': 'danger',
}

const statusColor = {
  'En cours de réalisation': 'primary',
  'Fini': 'success',
}


function Card({ name, status, description, stacks, url, repo, urlDisable, repoDisable }) {
  return (
    <div className='col col--3 padding--md'>
      <div className={clsx(styles.card, "card")}>
        <div className="card__body color-primary">
          <h4>{name}</h4>
          {/*         <div>
            <span className={`margin--xs badge badge--${statusColor[status]}`}>{status}</span>
        </div> */}
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
          <a target="_blank" rel="noreferrer noopener" className={clsx(styles.link, "button button--primary button--block margin-vert--sm " + urlDisable)} href={url}>Lien</a>
          {/* <a target="_blank" rel="noreferrer noopener" className={clsx(styles.link, "button button--secondary button--block margin-vert--sm " + repoDisable)} href={repo}>Repo</a> */}
        </div>
      </div>
    </div>
  )
}

const projectsList = [
  {
    name: "Amélioration et réparation Simulateur 2 DOF",
    status: "Fini",
    description: "Diagnostic, réparation et remplacement de composants (moteurs, carte mère) sur un simulateur de mouvement 2 DOF, avec intégration d’une solution logicielle permettant l’interfaçage du matériel avec plusieurs applications de simulation.",
    stacks: ["Electronique", "Informatique",],
    url: 'https://www.xsimulator.net/community/threads/accelid-ds3-motion-rig.19433/',
    urlDisable: '',
    repo: '',
    repoDisable: 'disabled',
  },
  {
    name: "Ok Google, démarre ma voiture",
    status: "Fini",
    description: "Conception et câblage d’un système de démarrage pour véhicule ancien via relais avec ESP32, piloté par commande vocale.",
    stacks: ["Electronique", "Informatique",],
    url: 'https://youtube.com/shorts/XMa8AaIs7JA?si=X6kKRRFH4AgV0Mcr',
    urlDisable: '',
    repo: '',
    repoDisable: 'disabled',
  },
  {
    name: "N8N commande vocale IA pour ERP",
    status: "Fini",
    description: "Mise en place d’un workflow n8n intégrant une IA locale permettant de déclencher des commandes d’achat par commande vocale sur un ERP cloud via API.",
    stacks: ["n8n", "IA", "LLM",],
    url: 'https://drive.google.com/file/d/1Ks-K7YmcAMnqHccoRuQErg1ap9TE8cWq/view?usp=drive_web',
    urlDisable: '',
    repo: '',
    repoDisable: 'disabled',
  },
  /*   {
      name: "Bookmark",
      status: "En cours de réalisation",
      description: "Bookmark est une application permettant d'enregistrer tous les éléments culturels (livres, jeux vidéos, séries, films) que nous souhaitons commencer, avons commencé ou fini, tout en indiquant nos progressions",
      stacks: ["React","Material UI","Firebase",],
      url: 'https://bookmark-yd.web.app/',
      urlDisable: '',
      repo:'https://github.com/Yusuf-Demiryurek/bookmark',
      repoDisable: '',
    }, */
  {
    name: "Musclay",
    status: "En cours de réalisation",
    description: "Musclay est une application de sport. Celle-ci permet aux pratiquants de créer leurs entrainements et de les planifier. Cette application a été réalisée par une équipe de 4 personnes comme projet de fin de formation",
    stacks: ["React", "Material UI", "Laravel",],
    url: 'https://musclay.web.app/',
    urlDisable: '',
    repo: '',
    repoDisable: 'disabled',
  },
  {
    name: "Magical Cab",
    status: "En cours de réalisation",
    description: "Il s'agit d'un site professionnel d'une société de VTC.",
    stacks: ["React", "Material UI", "Express",],
    url: 'https://magicalcab.vercel.app/',
    urlDisable: '',
    repo: '',
    repoDisable: 'disabled',
  },
]

export default function Portfolio() {
  return (
    <div className={styles.portfolio} id='portfolio'>
      <h2>Réalisations 💼</h2>
      <div className='row'>
        {projectsList.map((project) =>
          <Card key={project.name} {...project} />
        )}
      </div>
    </div>
  )
}

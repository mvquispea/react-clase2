import React from 'react'
import PropTypes from 'prop-types'

const Curso = ({title, image, price, profesor}) => (

<article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src={image} alt={title} />
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="t5 s-mb-2 s-center">
      {title}
    </h3>
    <div className="s-mb-2 s-main-center">
      <div className="card__teacher s-cross-center">
        <div className="card__avatar s-mr-1">
          <div className="circle img-container">
            <img src="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-10/josh.png" alt="Tutor" />
          </div>
        </div>
        <span className="small">{profesor}</span>
      </div>
    </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="#">{price}</a>
    </div>
  </div>
</article>

)
// propiedades por defecto
Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  profesor: PropTypes.string
}

Curso.defaultProps = {
  title: "No se encintro titulo",
  image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/Vue-JS.png",
  price: "--",
  profesor: " "
}

export default Curso;

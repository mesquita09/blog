import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Sobre" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            olá!
          </h2>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3 id="dynamic-styles"></h3>
          <p>
            Sou apaixonado por tecnologia e a forma como ela pode transformar a
            sociedade. Tenho um background em administração com especialização
            em finanças, contudo, atualmente me dedico a aprender programação,
            mais recentemente flutter e linux ♥.
          </p>
          <p>
            Gosto de ter um apredizado continuo, sempre me desafiando e
            aprendendo coisas interessantes. A vontade de evoluir me alimenta na
            busca de muitos interesses, hobbies, áreas de estudo e
            empreendimentos. Sou um aprendiz rápido, capaz de adquirir novas
            habilidades e conciliar projetos e funções diferentes com relativa
            facilidade.
          </p>

          <p>
            O pesquisador Edgar Dale dizia que depois de duas semanas, o cérebro
            humano lembra 10% do que leu; 20% do que ouviu; 30% do que viu; 50%
            do que viu e ouviu; 70% do que disse em uma conversa/debate; e 90%
            do que vivenciou a partir de sua prática. O estudo ficou conhecido
            pelo nome{" "}
            <a
              href="https://miro.medium.com/max/3752/1*rewFR_9JPe9RoCHFKdezTg.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              The cone of learning
            </a>
            ."
          </p>
          <p>
            Criei esta página com o objetivo de solidificar e compartilhar um
            pouco dos meus estudos.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "dev_isometric.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)

/*
 *
 * This template is used to lay out the INSERT PAGE CATEGORY
 * pages that are generated programatically by gatsby-node
 * using the data in INSERT-FILE.yml.
 *
 */

function Template({ data }) {
  const pages = useTemplatesData()
  let prevLink, nextLink
  const template = data.allTemplatesYaml.edges[0].node
  const { title, siteUrl } = useSiteMetadata()

  function generatePrevNextLinks() {
    const currentTemplateIndex = pages.findIndex(
      page => page.node.slug === template.slug
    )

    if (currentTemplateIndex > 0) {
      nextLink = pages[currentTemplateIndex - 1].node.slug
    }

    if (currentTemplateIndex < pages.length - 1) {
      prevLink = pages[currentTemplateIndex + 1].node.slug
    }
  }

  generatePrevNextLinks()

  return (
    <Base>
      <Metadata
        page={{
          title: `${template.title.replace(`&nbsp;`, ` `)} | ${title}`,
          description: template.description,
          url: `${siteUrl}/${template.slug}`,
        }}
      />

      <Main id="main-content">
        <h1>{template.title}</h1>

        {prevLink && (
          <StyledLink href={`/${prevLink}`}>
            Previous<SrText> template page</SrText>
          </StyledLink>
        )}

        {nextLink && (
          <StyledLink href={`/${nextLink}`}>
            Next<SrText> template page</SrText>
          </StyledLink>
        )}

        <StyledLink href="/">Go back home</StyledLink>
      </Main>
    </Base>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Main = styled.main`
  padding: var(--s8) var(--s4);
`

const StyledLink = styled(Link)`
  display: block;
  margin-top: var(--s4);
`

///////////////////////////////////////////////////////////////////////////////////

// NOTE: leave this query here (can't extract to usStaticQuery if using variables)
// See: https://github.com/gatsbyjs/gatsby/issues/9047#issuecomment-471104084
export const query = graphql`
  query($slug: String!) {
    allTemplatesYaml(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          slug
          pageMetadata {
            title
            description
            url
          }
        }
      }
    }
  }
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Base from '../Base'
import Metadata from '../Metadata'
import { Link, SrText } from '../elements'
import useSiteMetadata from '../../data/useSiteMetadata'
import useTemplatesData from '../../data/examples/useTemplatesData'

export default Template

function TemplatesExample() {
  const templates = useTemplatesData()

  return (
    <Section>
      <h2>Template</h2>
      <Code>useTemplates</Code>

      <ul>
        {templates.map(template => (
          <PageLink key={template.title} href={`/${template.slug}/`}>
            Go to page "{template.title}"
          </PageLink>
        ))}
      </ul>
    </Section>
  )
}

///////////////////////////////////////////////////////////////////////////////////

const Section = styled.section`
  padding: var(--s8) var(--s4) 0;
`

const Code = styled.code`
  display: inline-flex;
  margin-top: var(--s1);
  background-color: var(--lightest-blue);
  padding: var(--s1) 0;
`

const PageLink = styled(Link)`
  display: block;
  margin-top: var(--s4);
`

const Text = styled.p`
  padding-top: var(--s2);
  padding-bottom: var(--s2);
  ${copy}
`

///////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import styled from 'styled-components'

import Link from '../elements/Link'
import useTemplatesData from '../../queries/examples/useTemplatesData'
import { copy } from '../../styles'

export default TemplatesExample

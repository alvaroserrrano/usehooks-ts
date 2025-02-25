import React from 'react'

import Container from '@mui/material/Container'
import { navigate } from 'gatsby'

import Hero from '~/components/hero'
import SEO from '~/components/seo'

/**
 * I use this page for developing and testing the hooks
 * (I know, it would be better to do TDD instead, it comes),
 * it does not appear in production.
 *
 * The hook is implemented in the "Component" component below,
 * and called in the "TestPage" page.
 */

// Usage
function Component() {
  return <div>Example</div>
}

function TestPage() {
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    void navigate('/')
  }

  return (
    <>
      <SEO title="Tests page" />

      <Hero
        title="Tests page"
        description="I use this page for testing my hooks, it does not appear in production."
      />

      <Container maxWidth="md">
        <Component />
      </Container>
    </>
  )
}

export default TestPage

function useMediaQuery(query, defaultMatches) {
  const [matches, setMatches] = useState(defaultMatches)

  useEffect(
    () => {
      if (typeof window !== `undefined`) {
        let mounted = true
        const mediaQuery = window.matchMedia(query)

        const onChange = () => {
          if (!mounted) return
          setMatches(!!mediaQuery.matches)
        }

        mediaQuery.addListener(onChange)
        setMatches(mediaQuery.matches)

        return () => {
          mounted = false
          mediaQuery.removeListener(onChange)
        }
      }
    },
    [query]
  )

  return matches
}

/*
 *
 * Imports & Exports
 *
 */

import { useState, useEffect } from 'react'

export default useMediaQuery

/*

Use CSS media queries in JS. The hook returns a boolean value indicating whether the CSS grid currently matches which automatically updates when the browser is resized.

See: https://github.com/streamich/use-media/blob/master/src/index.ts

USAGE:

function Articles({ articles }) {
  const gridSupported = useDetectGridSupport()
  const mdScreen = useMediaQuery(`(min-width: 48em)`)
  const xlScreen = useMediaQuery(`(min-width: 75em)`)

  const [limit, setLimit] = useState(() => setLimitByScreenSize())
  const [visibleArticles, setVisibleArticles] = useState(articles)

  useEffect(
    async () => {
      await setLimit(setLimitByScreenSize)
      setVisibleArticles(articles.slice(0, limit))
    },
    [limit, gridSupported, mdScreen, xlScreen]
  )

  function setLimitByScreenSize() {
    let limitByScreen

    if (gridSupported) {
      if (mdScreen) limitByScreen = 2
      if (xlScreen) limitByScreen = 3
    } else {
      limitByScreen = 3
    }

    return limitByScreen
  }

  return (
    <ul className="articles-grid nt5 pt3 md:pt4 pb5">
      {visibleArticles.map(article => (
        <Article key={article.node.title} article={article.node} />
      ))}
    </ul>
  )
}

*/

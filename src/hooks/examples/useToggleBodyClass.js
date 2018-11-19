function useToggleBodyClass(value, [on, off]) {
  useEffect(() => {
    document.body.classList.remove(value ? off : on)
    document.body.classList.add(value ? on : off)
  })
}

/*
 *
 * Imports & Exports
 *
 */

import { useEffect } from 'React'

export default useToggleBodyClass

/*
 *
 * Usage
 *
 */

/*

See: https://twitter.com/thekitze/status/1060835281090285568

function Home() {
  const [night, setNight] = useState(false)
  useToggleBodyClass(night, [`dark`, `light`])
}

*/

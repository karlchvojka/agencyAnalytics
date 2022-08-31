// Library Imports
import styled from 'styled-components'
import { mediaQueries } from 'globalConfig/mobile'

const StyledApp = styled.section`
/* MOBILE FIRST DEFAULT STYLES */
  width: 100%;

/* Min width of 375 */
  ${mediaQueries('iphoneSe')`
  `}

/* Min width of 414 */
  ${mediaQueries('iphoneXr') `
    
  `}

/* Min width of 576 */
  ${mediaQueries('landscapePhones') `
    
  `}

/* Min width of 768 */
  ${mediaQueries('tablet') `
    
  `}

/* Min width of 1024 */
  ${mediaQueries('desktop') `
    
  `}

/* Min width of 1200 */
  ${mediaQueries('widescreen') `
    
  `}

/* Min width of 1980 */
  ${mediaQueries('udh') `
    
  `}
`

export default StyledApp

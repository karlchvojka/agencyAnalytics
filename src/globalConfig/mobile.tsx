// Variable Declarations
const sizes = {
  udh: 1980,
  widescreen: 1200,
  desktop: 1024,
  tablet: 768,
  landscapePhones: 576,
  iphoneXr: 414,
  iphoneSe: 375,
}

/**
 * This function allows us to define the size needed dynamically.
 */
export const mediaQueries = (key: keyof typeof sizes) => {
  return (style: TemplateStringsArray | string) => {
    return `@media (min-width: ${sizes[key]}px) { ${style} }`
  }
}

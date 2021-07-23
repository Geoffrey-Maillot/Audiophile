/// <reference types="node" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly PUBLIC_URL: string
  }
}

declare module '*.svg' {

  const src: string
  export default src
}


declare module '*.scss' {

  const src: string
  export default src
}

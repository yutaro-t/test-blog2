declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export const metadata: any;
  export default MDXComponent
}
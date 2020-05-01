declare module '*.md' {
  declare const res: {
    html: string;
    attributes: {
      thumbnail: string;
      title: string;
      date: string;
      category: string;
      description: string;
    }
  }
  export default res;
}
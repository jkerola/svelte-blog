declare module '*.md' {
  const value: string;
  export default value;
}

type Post = {
  title: string;
  date: string;
  path: string;
};

import { defineMDSveXConfig } from 'mdsvex';
import { fileURLToPath } from 'url';
import * as path from 'path';
import addClasses from 'rehype-add-classes';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');
const mdsvexConfig = defineMDSveXConfig({
  extensions: ['.md', '.svx'],
  smartypants: { dashes: 'oldschool' },
  rehypePlugins: [
    [
      addClasses,
      {
        ul: 'markdown-ul',
        li: 'markdown-li',
        p: 'markdown-p',
        img: 'markdown-img',
      },
    ],
  ],
  layout: {
    blog: path.join(dirname, 'src/routes/blog/_layout.svelte'),
  },
});

export default mdsvexConfig;

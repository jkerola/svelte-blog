export async function GET() {
  const files = import.meta.glob('./**/*.{md,svx}', { eager: true });

  const posts = Object.entries(files).map(([path, post]) => {
    return { ...(post as any).metadata, path: path.slice(2, -3) };
  });

  const sorted = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  if (sorted.length === 0) {
    return { body: { posts: [] } };
  } else if (!sorted.length) {
    return { status: 404 };
  }

  return { body: { posts: sorted } };
}

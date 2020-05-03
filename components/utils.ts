import { Blog } from "./type";
import fs from 'fs';
import path from 'path';

export async function getAllBlogs(): Promise<Blog[]> {
  const all =  await Promise.all(
    fs.readdirSync(path.resolve(process.cwd(), 'content/blogs'))
      .map(filename => getBlog(filename))
  );
  all.sort((a, b) => b.date.localeCompare(a.date));
  return all;
}

export async function getNewestBlogs(max: number): Promise<Blog[]> {
  return (await getAllBlogs()).slice(0, max);
}

export async function getCategoryBlogs(category: string, max: number): Promise<Blog[]> {
  return (await getAllBlogs())
    .filter(blog => blog.category === category)
    .slice(0, max);
}


export async function getBlog(filename: string): Promise<Blog | null> {
  const file = await import(`../content/blogs/${filename}`).catch(() => null);
  if(file === null) return null;
  return { html: file.html, ...file.attributes } as Blog;
}

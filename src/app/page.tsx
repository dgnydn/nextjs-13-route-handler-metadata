import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "All Posts from dgnydn blog.doganaydin.org",
  description: "All Posts from blog.doganaydin.org",
  keywords: "doganaydin, blog, posts",
  creator: "doganaydin",
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    site: "@doganbuilds",
    title: "All Posts from doganaydin",
    description: "All Posts from doganaydin",
  },
  openGraph: {
    title: "All Posts from doganaydin",
    description: "All Posts from doganaydin",
    images: [
      {
        url: "https://doganaydin.org/og.png",
        width: 1280,
        height: 720,
        alt: "All Posts from doganaydin",
      },
    ],
  },
};

async function getBlogPosts() {
  const response = await fetch(
    "https://nextjs-route-handler-metadata.vercel.app/blogs",
    {
      cache: "no-cache",
    }
  );
  const data = await response.json();
  return data.user.publication.posts;
}

export default async function Page() {
  const posts = await getBlogPosts();
  return (
    <div>
      <h1>All Posts from doganaydin</h1>
      {posts.map((post: any) => (
        <div key={post._id}>
          {post.coverImage && (
            <Image
              src={post.coverImage}
              alt={post.title}
              height={720}
              width={1280}
            ></Image>
          )}
          <h2>{post.title}</h2>
          <p>{post.brief}</p>
          <span>Added: {new Date(post.dateAdded).toLocaleDateString()}</span>
        </div>
      ))}
    </div>
  );
}

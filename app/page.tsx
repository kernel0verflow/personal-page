import Link from "next/link";
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";



export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  return (
    <div>
      <h1 className="mb-10 text-4xl font-bold">Welcome to my Blog!</h1>
      {postPreviews}
    </div>
  );
}

import Link from "next/link";
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  const postMetadata = getPostMetadata();

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {postMetadata.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
          <Card key={post.slug} className="max-w-xs mx-auto transition-transform duration-125 ease-in-out hover:scale-120">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.date}</p>
            </CardContent>
            <CardFooter>
            </CardFooter>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}


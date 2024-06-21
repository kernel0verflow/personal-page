import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <div key={props.slug}>
        <Link href={`/posts/${props.slug}`}>
          <h2 className="text-lg font-bold">{props.title}</h2>
          <p>{props.subtitle}</p>
          <p>{props.date}</p>
          <br />
          <br />
        </Link>
      </div>
    )
}

export default PostPreview;
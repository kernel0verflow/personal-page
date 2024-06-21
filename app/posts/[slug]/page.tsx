import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetadata';
import styles from "../../../styles/markdown.module.scss"

const getContent = (slug: string) => {
    const dir = "posts/";
    const file = `${dir}${slug}.md`;
    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content)
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getContent(slug);
    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">{post.data.title} - {post.data.date}</h1>
            <Markdown className={styles.markdown}>{post.content}</Markdown>
        </div>
    )
}

export default PostPage;
import {getPosts} from '../lib/posts'
import Link from 'next/link';
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"

export async function getStaticProps(context) {
    const posts = await getPosts()
  
    if (!posts) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {posts}
    }
  }

export default function PostList(props) {
    return (
        <UnorderedList spacing={3}>
        {props.posts.map(post => (
          <ListItem>
      <Link class="link" key={post.id} href={`/${post.slug}`}>
        <a>{post.title}</a>
      </Link>
      </ListItem>
    ))}
  </UnorderedList>
    )
}
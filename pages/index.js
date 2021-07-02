
import styles from '../styles/Home.module.css'
import {getPosts} from '../lib/posts'
import Link from 'next/link';
import { Box } from "@chakra-ui/react"
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import Header from '../components/Header'
import Example from '../hooks/Example';

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

export default function Home(props) {
  return (
    <Box className="">
       <Header></Header>
       <Example></Example>
       <UnorderedList spacing={3}>
        {props.posts.map(post => (
          <ListItem>
            <Link class="link" key={post.id} href={`/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>

    </Box>
  )
}

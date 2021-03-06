import { getSinglePost, getPosts } from '../lib/posts';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from '@chakra-ui/layout';

export async function getStaticPaths() {
  const posts = await getPosts()

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false }
}


// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post }
  }
}

// PostPage page component
export default function PostPage(props){
    // Render post title and content in the page from props
    return (
      <div>
        <Header></Header>
       <Container p="6">
       <h1>{props.post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
       </Container>
        <Footer></Footer>
      </div>
    )
  }
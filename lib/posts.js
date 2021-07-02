import GhostContentApi from '@tryghost/content-api'

const api = new  GhostContentApi({

    url: process.env.URL,
    key: process.env.CONTENT_KEY,
    version: "v3"

});

export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all"
        })
        .catch(err => {
            console.log(err);
        })
}

export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getPages() {
    return await api.pages
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }
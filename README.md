<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Challenge 4: React introduction
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-04?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-04/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-04?style=social">
  </a>
</p>

## :rocket: About the challenge

Make an application from zero using **Webpack, Babel, Webpack Dev Server e ReactJS**.

In this application you will develop a **interface** such as the **Facebook** using React.

Informations that are contained in the interface are **static** and don't need to reflect any REST API or back-end.

### Application screen

![Facebook](https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-04/master/.github/facebook.png)

Layout doesn't have to be exactly the same, you can use your creativity to change into the way you like.

Most importantly is that all the elements show on sreen.

The layout of the application is [this link](.github/layout.sketch) that can be open with this free online tool: https://www.figma.com/

On the image below stands out each component that you will create and below the image is the description and resposabilitys of each one:

![Components](https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-04/master/.github/components.png)

**Header (Yellow):** Responsible to show the logo and the link to access the profile;

**PostList (Green):** Responsible to storage the data on the post listing, this data must be inside the `state`of the component and not a common variable, such as:


```js
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2
        // Restante dos dados de um novo post
      }
    ]
  };
}
```
**Post (Red):** Responsible to show the post data, this data must come through a property received from the component PostList, that meaning, in the PostList you will have something like this:

```js
posts.map(post => <Post key={post.id} data={post} />);
```
**Comment (Blue):** Responsible to show a comment. The data of the comments will come through a component property. Inside the Post component you will have a new `.map`to list the post comments:


```js
data.comments.map(comment => <Comment key={comment.id} data={comment} />);
```

---

This project was given by RocketSeat, please access www.rocketseat.com.br to learn more.

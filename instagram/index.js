const posts = [
  {
    name: 'Fatima Najafi',
    location: 'Kabul, Afghanistan',
    avatar: 'image/profile.jpg',
    post: 'image/six-post.jpeg',
    comment: ' ❤️👍🏼💼🎨📚',
    likes: 2100,
  },
  {
    name: 'Fatima Najafi',
    location: 'Kabul, Afghanistan',
    avatar: 'image/profile.jpg',
    post: 'image/first-post.jpg',
    comment:
      "Coding is not just a passion; it is my life's dedication. I am committed to mastering it. 💻",
    likes: 2100,
  },
  {
    name: 'Fatima Najafi',
    location: 'Kabul , Afghanistan',
    avatar: 'image/profile.jpg',
    post: 'image/second-post.png',
    comment: 'Still I am thinking why 🤔',
    likes: 40000,
  },
  {
    name: 'Fatima Najafi',
    location: 'Kabul, Afghanistan',
    avatar: 'image/profile.jpg',
    post: 'image/third-post.jpg',
    comment: 'Best method for ignoring the problem that our code works 😅',
    likes: 1520,
  },
  {
    name: 'Fatima Najafi',
    location: 'Kabul, Afghanistan',
    avatar: 'image/profile.jpg',
    post: 'image/fourth-post.png',
    comment: 'Keep ordering coffee ☕️. If your brain is still empty, 🧠🤷‍♂️.',
    likes: 1520,
  },
  {
    name: 'Fatima Najafi',
    location: 'Kabul, Afghanistan',
    avatar: 'image/profile.jpg',
    post: 'image/seven-post.jpeg',
    comment: "For me 100% why it doesn't work ❓🤔",
    likes: 1520,
  },
  {
    name: 'Fatima Najafi',
    location: 'Kabul, Afghanistan',
    avatar: 'image/profile.jpg',
    post: 'image/eight-post.jpg',
    comment: 'Please, God, help me 🙏🏼🌟',
    likes: 1520,
  },
];
posts.forEach((project) => {
  const container = document.getElementById('container');
  const post = document.createElement('div');
  post.classList.add('post');
  post.innerHTML = `<div class="posts-header">
        <img src='${project.avatar}' alt="" class="avatar" />
        <div class="author-info">
          <h3 class="name">${project.name}</h3>
          <p class="location">${project.location}</p>
        </div>
        <img src="image/blue-tick.png" alt="" class="blue-tick" />
      </div>
      <img src='${project.post}' alt="" class="img-post" />

      <div class="icons">
        <i class="fa-regular fa-heart fa-lg" data-liked="false"></i>
        <i class="fa-regular fa-comment fa-lg"></i>
        <i class="fa-regular fa-paper-plane fa-lg"></i>
        <div class="bookmark">
          <i class="fa-regular fa-bookmark fa-lg"></i>
        </div>
      </div>
      <p class="likes">${project.likes} likes</p>
      <p class="comment">${project.comment}</p>`;

  container.appendChild(post);

  // Like Functionality
  const likeButton = post.querySelector('.fa-heart');
  likeButton.addEventListener('click', function () {
    const isLiked = JSON.parse(this.getAttribute('data-liked'));

    if (isLiked) {
      project.likes -= 1;
      this.style.color = '';
    } else {
      project.likes += 1;
      this.style.color = 'red';
    }

    const likesCount = post.querySelector('.likes');
    likesCount.textContent = `${project.likes} likes`;

    this.setAttribute('data-liked', !isLiked);
  });

  // Comment Functionality
  const commentIcon = post.querySelector('.fa-comment');
  commentIcon.addEventListener('click', function () {
    const commentInput = prompt('Enter your comment:');
    if (commentInput) {
      const commentSection = post.querySelector('.comment');
      const newComment = document.createElement('p');
      newComment.textContent = commentInput;
      commentSection.appendChild(newComment);
      commentSection.appendChild(document.createElement('br'));
    }
  });
});

//stores
const stories = [
  {
    image: 'image/profile.jpg',
    name: 'Your story',
  },
  {
    image: 'image/2.jpeg',
    name: 'programmer',
  },
  {
    image: 'image/3.png',
    name: 'programmer',
  },
  {
    image: 'image/4.jpeg',
    name: 'programmer',
  },
  {
    image: 'image/5.jpeg',
    name: 'programmer',
  },
];
stories.forEach((mystory) => {
  const contStories = document.getElementById('stories');
  const story = document.createElement('div');
  story.classList.add('story');
  story.innerHTML = `
           <img src='${mystory.image}' alt="" class="story-img" />
       <p >${mystory.name}</p>  `;
  contStories.appendChild(story);
});

var posts=["2024/01/21/hello-world/","2023/05/02/双星达成！！！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
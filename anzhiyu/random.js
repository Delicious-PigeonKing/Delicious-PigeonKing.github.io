var posts=["2023/05/02/双星达成！！！/","2024/07/02/记一次小事/","2024/07/02/暑假干什么/","2024/07/02/高一结束了！！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
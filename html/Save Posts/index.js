var postAuthorOut = document.getElementById("post-author-out")
var postTitleOut = document.getElementById("post-title-out")
var postLinkOut = document.getElementById("post-link-out")
var postLikesOut = document.getElementById("post-likes-out")
var postDateOut = document.getElementById("post-date-out")
var postTextOut = document.getElementById("post-text-out")

console.log(postAuthorOut)


function press()
{
var postAuthor = document.getElementById("post-author").value
var postTitle = document.getElementById("post-title").value
var postLink = document.getElementById("post-link").value
var postLikes = document.getElementById("post-likes").value
var postDate = document.getElementById("post-date").value
var postText = document.getElementById("post-text").value

postAuthorOut.innerText = postAuthor;
postTitleOut.innerText = postTitle;
postLinkOut.innerText = postLink;
postLikesOut.innerText = postLikes;
postDateOut.innerText = postDate;
vpostTextOut.innerText = postText;
const postArray = [postAuthor, postTitle, postLink, postLikes, postDate, postText,]


}
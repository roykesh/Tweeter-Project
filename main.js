const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

// Add post
const post = function () {
    tweeter.addPost($('#input').val())
    renderer.renderPosts(tweeter.getPosts())
}

// delete post
$('body').on('click', '.delete', function () {
    let postID = $(this).closest('.post').data().id
    tweeter.removePost(postID)
    renderer.renderPosts(tweeter.getPosts())
})

// add comment
$('body').on('click', '#comment', function () {
    let commentInput = $(this).siblings('#commentinput').val()
    let postID = $(this).closest('.post').data().id
    tweeter.addComment(commentInput, postID)
    renderer.renderPosts(tweeter.getPosts())
})

// delete comment
$('body').on('click', '.delete-comment', function () {
    let postID = $(this).closest('.post').data().id
    let commentID = $(this).closest('div').data().id
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(tweeter.getPosts())
})

const Renderer = () => {

    const renderPosts = (posts) => {
        $('#posts').empty()
        appendPosts(posts)
    }

    const appendPosts = function (posts) {
        for (let post of posts) {
            let postBox = $(`<div class="post" id="header" data-id=${post.id}><p class="post-text" >${post.text}</p>
            <div class="comments"> ${getCommentText(post)}</div>
            <input type="text" placeholder="Got something to say?" id="commentinput">
            <button id="comment" onclick="comment()">Comment</button>
            </div>`)
            $('#posts').append(postBox)
        }
    }

    const getCommentText = function (post) {
        let allComments = ''
        for (let comment of post.comments) {
            let currentCommentText = `<div data-id="${comment.id}"><i class="fas fa-trash-alt delete-comment"></i>	
            ${comment.text}</div>`
            allComments += currentCommentText
        }
        return allComments;
    }

    return {
        renderPosts: renderPosts,
        appendPosts: appendPosts
    }


}

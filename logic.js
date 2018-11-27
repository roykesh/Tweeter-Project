const Tweeter = () => {

    let postCount = 2;
    let commentCount = 6;

    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    const getPosts = () => {
        return _posts
    }

    const addPost = text => {
        postCount++
        _posts.push({
            text: text,
            id: `p${postCount}`,
            comments: []
        })
    }

    const findPostID = ID => {
        for (postIndex in _posts) {
            if (_posts[postIndex].id === ID) {
                return postIndex
            }
        }
    }

    const removePost = postID => _posts.splice(findPostID(postID), 1)

    const addComment = (text, postID) => {
        commentCount++
        for (postIndex in _posts) {
            _posts[postIndex].id === postID ?
                _posts[postIndex].comments.push({
                    id: `c${commentCount}`,
                    text: text
                }) : null
        }
    }

    const removeComment = (postID, commentID) => {
        for (commentIndex in _posts[findPostID(postID)].comments) {
            _posts[findPostID(postID)].comments[commentIndex].id === commentID ?
                _posts[findPostID(postID)].comments.splice(commentIndex, 1) : null
        }
    }



    return {
        getPosts: getPosts,
        addPost: addPost,
        findPostID: findPostID,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}


const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
//console.log(tweeter.getPosts())

//tweeter.removePost("p1")
// console.log(tweeter.getPosts())

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
//console.log(tweeter.getPosts())

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
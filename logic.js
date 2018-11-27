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

    // const uniqueId = arr => {
    //     if (arr.length === 0) {
    //         return 1
    //     } else {
    //         return arr.length + 1
    //     }
    // }

    // const addPost = text => {
    //     _posts.push({
    //         text: text,
    //         id: `p${uniqueId(_posts)}`,
    //         comments: []
    //     })
    // }

    // simple addPost
    const addPost = text => {
        postCount++
        _posts.push({
            text: text,
            id: `p${postCount}`,
            comments: []
        })
    }

    const removePost = postID => {
        //parseInt(postID)
        for (postIndex in _posts) {
            _posts[postIndex].id === postID ?
                _posts.splice(postIndex, 1) : null
        }
    }

    // const addComment = (text, postID) => {
    //     for (postIndex in _posts) {
    //         _posts[postIndex].id === postID ?
    //             _posts[postIndex].comments.push({
    //                 id: `c${uniqueId(_posts[postIndex].comments)}`,
    //                 text: text
    //             }) : null
    //     }
    // }

    // simple addComment
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
        let localCommentArray = _posts[postIndex].comments
        for (postIndex in _posts) {
            //console.log(postIndex)
            if (_posts[postIndex].id === postID) {
                console.log(_posts[postIndex].id) // p2
                for (commentIndex in _posts[postIndex].comments) {
                    console.log(commentIndex)
                    console.log(commentID)
                    //console.log(localCommentArray[commentIndex].id)
                    if (localCommentArray[commentIndex].id === commentID) {
                        console.log(localCommentArray[commentIndex].id)
                        //localCommentArray[commentIndex].splice(commentIndex, 1)
                    } else { console.log(commentIndex) }
                }
            }
        }
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}

const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
//console.log(tweeter.getPosts())

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
//console.log(tweeter.getPosts())

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
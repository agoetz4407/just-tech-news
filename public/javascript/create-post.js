const createPostHandler = async function(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value
    const post_url = document.querySelector('#post-url').value

    const response = await fetch('/api/posts', {
        method: 'post',
        body: JSON.stringify({
            title,
            post_url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.new-post-form').addEventListener('submit', createPostHandler)
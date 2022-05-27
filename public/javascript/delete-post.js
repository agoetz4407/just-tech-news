//TODO: fix database issue to make deleting posts work

const deletePostHandler = async function() {
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'delete'
    })

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deletePostHandler)
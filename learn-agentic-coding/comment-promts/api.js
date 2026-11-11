//MODEL FUNCTION
export async function getPostById(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch post with ID ${postId}`);  
    }
    return response.json();
}

export async function getUserById(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch user with ID ${userId}`);
    }
    return response.json();
}
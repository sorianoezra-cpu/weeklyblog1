// Load and display individual weekly post
document.addEventListener('DOMContentLoaded', function() {
    const postContent = document.getElementById('post-content');
    
    if (postContent && weeklyPosts) {
        // Get post ID from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));
        
        // Find the post
        const post = weeklyPosts.find(p => p.id === postId);
        
        if (post) {
            displayPost(post);
        } else {
            postContent.innerHTML = `
                <div style="text-align: center; padding: 3rem;">
                    <h2 style="font-size: 40px; margin-bottom: 1rem;">Post Not Found</h2>
                    <p style="font-size: 17px; color: var(--text-secondary); margin-bottom: 2rem;">The weekly post you're looking for doesn't exist.</p>
                    <a href="index.html" class="back-link">Back to Archive</a>
                </div>
            `;
        }
    }
});

function displayPost(post) {
    const postContent = document.getElementById('post-content');
    
    // Update page title
    document.title = `${post.title} - Weekly Digest`;
    
    let itemsHTML = '';
    post.items.forEach(item => {
        itemsHTML += createContentItemHTML(item);
    });
    
    postContent.innerHTML = `
        <a href="index.html" class="back-link">Back to Archive</a>
        <article>
            <div class="post-detail-header">
                <div class="post-detail-date">${post.week}</div>
                <h1 class="post-detail-title">${post.title}</h1>
            </div>
            <div class="weekly-post-content">
                <p>${post.intro}</p>
            </div>
            <div class="content-items">
                ${itemsHTML}
            </div>
        </article>
    `;
}

function createContentItemHTML(item) {
    const linkHTML = item.url 
        ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="content-item-link">Read more</a>`
        : '';
    
    const noteHTML = item.note 
        ? `<div class="content-item-note">${item.note}</div>`
        : '';
    
    return `
        <div class="content-item">
            <div class="content-item-header">
                <span class="content-item-type ${item.type}">${item.type}</span>
            </div>
            <h3 class="content-item-title">
                ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}</a>` : item.title}
            </h3>
            <p class="content-item-description">${item.description}</p>
            ${linkHTML}
            ${noteHTML}
        </div>
    `;
}

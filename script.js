// Load and display weekly posts on the homepage
document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    
    if (postsContainer && weeklyPosts) {
        // Sort posts by date (newest first)
        const sortedPosts = [...weeklyPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Generate HTML for each weekly post
        sortedPosts.forEach(post => {
            const postElement = createWeeklyPost(post);
            postsContainer.appendChild(postElement);
        });
    }
});

function createWeeklyPost(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'weekly-post';
    
    // Create preview of first 3 items
    const previewItems = post.items.slice(0, 3);
    const remainingCount = post.items.length - 3;
    
    let itemsHTML = '';
    previewItems.forEach(item => {
        itemsHTML += createContentItemHTML(item);
    });
    
    if (remainingCount > 0) {
        itemsHTML += `<p style="color: var(--text-secondary); font-size: 17px; margin-top: 1rem;">+ ${remainingCount} more item${remainingCount > 1 ? 's' : ''}</p>`;
    }
    
    postDiv.innerHTML = `
        <div class="weekly-post-header">
            <div class="weekly-post-date">${post.week}</div>
            <h2 class="weekly-post-title">
                <a href="post.html?id=${post.id}">${post.title}</a>
            </h2>
        </div>
        <div class="weekly-post-content">
            <p>${post.intro}</p>
        </div>
        <div class="content-items">
            ${itemsHTML}
        </div>
    `;
    
    return postDiv;
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

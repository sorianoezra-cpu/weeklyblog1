// Form handling for adding new weekly entries
let itemCount = 0;

document.addEventListener('DOMContentLoaded', function() {
    const addItemBtn = document.getElementById('add-item-btn');
    const form = document.getElementById('entry-form');
    const itemsContainer = document.getElementById('content-items-container');
    
    // Add first content item
    addContentItem();
    
    addItemBtn.addEventListener('click', addContentItem);
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        generateCode();
    });
});

function addContentItem() {
    itemCount++;
    const container = document.getElementById('content-items-container');
    const itemDiv = document.createElement('div');
    itemDiv.className = 'content-item-form';
    itemDiv.id = `item-${itemCount}`;
    
    itemDiv.innerHTML = `
        <div class="form-group">
            <label class="form-label">Type</label>
            <select class="form-select item-type" required>
                <option value="article">Article</option>
                <option value="podcast">Podcast</option>
                <option value="tweet">Tweet</option>
                <option value="thought">Thought</option>
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Title</label>
            <input type="text" class="form-input item-title" placeholder="Content title" required>
        </div>
        <div class="form-group">
            <label class="form-label">Description</label>
            <textarea class="form-textarea item-description" placeholder="Brief description" required></textarea>
        </div>
        <div class="form-group">
            <label class="form-label">URL (optional)</label>
            <input type="url" class="form-input item-url" placeholder="https://example.com">
        </div>
        <div class="form-group">
            <label class="form-label">Your Note (optional)</label>
            <textarea class="form-textarea item-note" placeholder="Your thoughts or notes about this item"></textarea>
        </div>
        <button type="button" class="remove-item-btn" onclick="removeItem(${itemCount})">Remove Item</button>
    `;
    
    container.appendChild(itemDiv);
}

function removeItem(id) {
    const item = document.getElementById(`item-${id}`);
    if (item) {
        item.remove();
    }
}

function generateCode() {
    const form = document.getElementById('entry-form');
    const week = document.getElementById('week').value;
    const date = document.getElementById('date').value;
    const title = document.getElementById('title').value;
    const intro = document.getElementById('intro').value;
    
    // Get all content items
    const itemForms = document.querySelectorAll('.content-item-form');
    const items = [];
    
    itemForms.forEach(form => {
        const type = form.querySelector('.item-type').value;
        const itemTitle = form.querySelector('.item-title').value;
        const description = form.querySelector('.item-description').value;
        const url = form.querySelector('.item-url').value;
        const note = form.querySelector('.item-note').value;
        
        const item = {
            type: type,
            title: itemTitle,
            description: description
        };
        
        if (url) item.url = url;
        if (note) item.note = note;
        
        items.push(item);
    });
    
    // Find the next ID
    const nextId = weeklyPosts.length > 0 
        ? Math.max(...weeklyPosts.map(p => p.id)) + 1 
        : 1;
    
    // Generate the code
    const code = `{
        id: ${nextId},
        week: "${week}",
        date: "${date}",
        title: "${title.replace(/"/g, '\\"')}",
        intro: "${intro.replace(/"/g, '\\"').replace(/\n/g, '\\n')}",
        items: [
${items.map(item => {
    let itemCode = `            {
                type: "${item.type}",
                title: "${item.title.replace(/"/g, '\\"')}",
                description: "${item.description.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`;
    if (item.url) itemCode += `,\n                url: "${item.url}"`;
    if (item.note) itemCode += `,\n                note: "${item.note.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`;
    itemCode += '\n            }';
    return itemCode;
}).join(',\n')}
        ]
    }`;
    
    // Display the output
    const output = document.getElementById('output');
    const outputCode = document.getElementById('output-code');
    outputCode.textContent = code;
    output.style.display = 'block';
    output.scrollIntoView({ behavior: 'smooth' });
}


# Weekly Digest Blog

A minimal, elegant blog website inspired by Apple's design aesthetic. Perfect for curating and sharing weekly collections of articles, podcasts, tweets, and your own thoughts.

## Features

- 🍎 **Apple-inspired Design** - Clean, minimal aesthetic with lots of white space and elegant typography
- 📅 **Weekly Digest Format** - Organize content by week with multiple items per post
- 🎯 **Multiple Content Types** - Support for articles, podcasts, tweets, and personal thoughts
- ✍️ **Easy Content Addition** - Simple form-based interface to add new weekly entries
- 📱 **Fully Responsive** - Beautiful on all devices (mobile, tablet, desktop)
- 🎨 **Smooth Animations** - Subtle transitions and hover effects
- 🚀 **Lightweight** - No frameworks, pure HTML, CSS, and JavaScript

## Getting Started

1. **Open the website**:
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

2. **View your blog**:
   - Navigate to `http://localhost:8000` (or the port you chose)
   - Browse weekly posts on the homepage
   - Click on any week to see all content items

## File Structure

```
blog1/
├── index.html          # Homepage with weekly post listings
├── post.html           # Individual weekly post page
├── add.html            # Form to add new weekly entries
├── styles.css          # Apple-inspired styling
├── script.js           # Homepage JavaScript
├── post.js             # Post page JavaScript
├── add.js              # Form handling for adding entries
├── blog-data.js        # Weekly posts data (edit here or use form)
└── README.md           # This file
```

## Adding Content

### Method 1: Using the Form (Easiest)

1. Open `add.html` in your browser
2. Fill in the week, date, title, and introduction
3. Add content items (articles, podcasts, tweets, thoughts)
4. Click "Generate Entry Code"
5. Copy the generated code and paste it into `blog-data.js` in the `weeklyPosts` array

### Method 2: Direct Editing

Edit `blog-data.js` and add a new object to the `weeklyPosts` array:

```javascript
{
    id: 4,  // Unique ID (increment from last)
    week: "Week of February 12, 2024",
    date: "2024-02-12",  // YYYY-MM-DD format
    title: "Your Weekly Title",
    intro: "A brief introduction about this week's content.",
    items: [
        {
            type: "article",  // article, podcast, tweet, or thought
            title: "Article Title",
            description: "Brief description of the article",
            url: "https://example.com/article",  // Optional
            note: "Your personal notes or thoughts"  // Optional
        },
        {
            type: "podcast",
            title: "Podcast Episode",
            description: "What this podcast is about",
            url: "https://example.com/podcast",
            note: "Key takeaways..."
        }
        // Add more items as needed
    ]
}
```

## Content Types

- **article** - Blog posts, news articles, long-form content
- **podcast** - Podcast episodes, audio content
- **tweet** - Twitter threads, social media posts
- **thought** - Your own reflections (no URL needed)

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --bg-color: #ffffff;
    --text-primary: #1d1d1f;
    --text-secondary: #86868b;
    --accent-blue: #0071e3;
    /* ... other variables */
}
```

### Modifying Typography

The design uses Apple's SF Pro Display font. You can change fonts in `styles.css` by modifying the `font-family` property in the `body` selector.

## Design Philosophy

This blog follows Apple's design principles:
- **Clarity** - Clear hierarchy and readable typography
- **Deference** - Content is the focus, design supports it
- **Depth** - Subtle animations and transitions add life
- **Minimalism** - Lots of white space, clean layouts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips

- Keep weekly introductions brief and engaging
- Add personal notes to content items to make it your own
- Mix different content types for variety
- Use the "thought" type for your own reflections without external links

---

Happy curating! 📚

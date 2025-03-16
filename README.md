# I'm Sorry Madam Ji - Apology Website

This is a beautiful apology website with animated balloons, background video, and a contact form.

## Features

- Background video
- Music player with synchronized lyrics
- Animated balloons
- Glassmorphism design
- Contact form for receiving responses
- Thank you page with confetti animation

## GitHub Pages Deployment

This website is designed to work with GitHub Pages, which doesn't support PHP. Instead, it uses Formspree for form handling.

### 1. Fork or Clone this Repository

First, fork or clone this repository to your GitHub account.

### 2. Set Up Formspree

1. Go to [Formspree](https://formspree.io/) and create a free account
2. Create a new form and get your form endpoint (it will look like `https://formspree.io/f/xrgdkpaz`)
3. Open `message.html` and replace `YOUR_FORMSPREE_ENDPOINT` with your actual endpoint:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT" method="POST">
   ```

4. Also update the redirect URL with your GitHub username and repository name:
   ```html
   <input type="hidden" name="_next" value="https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/thank_you.html">
   ```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" > "Pages"
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a few minutes for your site to be published
6. Visit `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME` to see your website

## How to Use

1. Users visit your website and see the apology message with animations
2. They can click the "Maaf me here" button to see your detailed message
3. On the message page, they can fill out the contact form to respond
4. After submitting the form, they'll be redirected to a thank you page
5. You'll receive their message in your Formspree dashboard and via email

## Customization

- Replace `video.mp4` with your own background video
- Replace `local.mp3` with your own background music
- Edit the lyrics in `js/script.js` to match your audio
- Modify the apology message in `message.html`
- Customize the thank you page in `thank_you.html`

## Troubleshooting

If the contact form is not working:

1. Make sure you've set up Formspree correctly
2. Check that you've updated the form action URL with your endpoint
3. Verify that the redirect URL is correct
4. Test the form by submitting a test message

## Credits

- Fonts: Google Fonts (Poppins)
- Icons: Font Awesome
- Form handling: Formspree 
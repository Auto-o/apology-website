from PIL import Image, ImageDraw, ImageFont
import os

# Create directory for images if it doesn't exist
img_dir = 'img'
if not os.path.exists(img_dir):
    os.makedirs(img_dir)

# Colors for the images
colors = [
    (255, 182, 193),  # Light pink
    (255, 105, 180),  # Hot pink
    (219, 112, 147),  # Pale violet red
    (255, 20, 147),   # Deep pink
    (199, 21, 133),   # Medium violet red
    (238, 130, 238)   # Violet
]

# Create 6 placeholder images
for i in range(1, 7):
    # Create a new image with a pink background
    img = Image.new('RGB', (400, 400), color=colors[i-1])
    draw = ImageDraw.Draw(img)
    
    # Try to use a font, fall back to default if not available
    try:
        font = ImageFont.truetype("arial.ttf", 40)
    except IOError:
        font = ImageFont.load_default()
    
    # Add text to the image
    text = f"Photo {i}"
    text_width, text_height = draw.textsize(text, font=font) if hasattr(draw, 'textsize') else (150, 40)
    position = ((400 - text_width) // 2, (400 - text_height) // 2)
    
    # Draw text
    draw.text(position, text, fill=(255, 255, 255), font=font)
    
    # Save the image to the img directory
    img.save(os.path.join(img_dir, f"img{i}.jpg"))

print(f"Created 6 placeholder images in {img_dir} directory: img1.jpg through img6.jpg") 
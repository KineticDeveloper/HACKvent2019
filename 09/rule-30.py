import math
from PIL import Image

# Open original QR-Code and resize it to ensure 1 block = 1 pixel
im = Image.open("./09/qr-code.png")
width, height = im.size
im = im.resize((int(width / 5), int(height / 5)))
width, height = im.size

# Store it for reference
im.save("./09/pix/qr-code.png")
im.show()

# Create a new image to store the Rule 30 generation in RGBA
# im2 = Image.new('RGBA', (width*4, height*2))
im2 = Image.new('RGBA', (width*2, height))
width, height = im2.size
for y in range(0,height):
    for x in range(0,width):
        if y == 0: 
            # First row is the special row: only 1 pixel is active
            if x == math.floor(width/2):
                im2.putpixel((x,y), (0,0,0,255))
            else:
                im2.putpixel((x,y), (255,255,255,0))
        else:
            # Every other row is referencing the row above to calculate the next generation
            if x > 0 and x < width-1:
                left_cell = im2.getpixel((x-1,y-1))[0] == 0
                center_cell = im2.getpixel((x,y-1))[0] == 0
                right_cell = im2.getpixel((x+1,y-1))[0] == 0
                if  left_cell != (center_cell or right_cell):
                    pix = (0,0,0,255)
                else:
                    pix = (255,255,255,0)
            else:
                pix = (255,255,255,0)
            im2.putpixel((x,y),pix)

# Save the pyramid for later reference
im2.save("./09/pix/Pyramid.png")
# im2.show()

# Overlay the two images (QR code and rule 30 pyramid) using XOR
for xoffset in range(0,30):
    im3 = im.copy()
    width, height = im3.size
    for y in range(0,height):
        for x in range(0,width):
            pix1 = im.getpixel((x,y)) > 0
            pix2 = im2.getpixel((x+xoffset,y))[0] > 0
            if pix1^pix2:
                pix = 0
            else:
                pix = 255
            im3.putpixel((x,y),pix)

    im3.save(f"./09/pix/combo-{xoffset}.png")
# im.show()
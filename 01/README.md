# HV19.01 censored

https://academy.hacking-lab.com/events/6/challenges/25

![censored image](image.jpg)

From the hint in the excercise we expect to find a useful thumbnail image in the JPEG file.  
As I do not have a tool displaying the raw thumbnail of a jpeg on my Mac, I'm looking to find something useful in the web. Image Magick should be able to do it... But as I was not successfull in extracting the thumbnail using imagemagick (`convert image.jpg exif:thumbnail`), I turned to raw byte manipulation.

According to http://www.fastgraph.com/help/jpeg_header_format.html the JPEG header starts with the JPEG SOI marker: `FF D8`

Checking with `hexdump -C image.jpg | head -22` we find the sequence `ff d8` twice in the data. Once at the beginning (offset 0) and in the EXIF data section (offset 332). Supposing that this is the thumbnail image, I'm extracting the data with the command `dd if=image.jpg of=thumbnail.jpeg bs=1 skip=332`, which results in a displayable thumbnail JPEG file with the QR code, leading to the code:

    HV19{just-4-PREview!}

![Thumbnail JPEG](thumbnail.jpeg)
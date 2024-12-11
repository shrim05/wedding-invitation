import glob
from pathlib import Path
from PIL import Image, ImageOps

BASE_PATH = Path("/docs/images")
if __name__ == "__main__":
    images = glob.glob(f"{BASE_PATH}/*.jpg")
    for img in images:
        path_obj = Path(img)
        if path_obj.stem.endswith("thumb"):
            continue
        base_width = 1024
        img = Image.open(img)
        wpercent = (base_width / float(img.size[0]))
        hsize = int((float(img.size[1])* float(wpercent)))
        img = img.resize((base_width, hsize), Image.Resampling.LANCZOS)
        img = ImageOps.exif_transpose(img)
        thumb_path = path_obj.parent.joinpath(f"{path_obj.stem}_thumb.jpg")
        img.save(thumb_path)

    
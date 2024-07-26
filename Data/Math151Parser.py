import fitz
import re
from PIL import Image
import pytesseract

class Math151Parser:
    def __init__(self, pdf_path):
        self.pdf_path = pdf_path
        self.exam_data = []
    
    def parse_pdf(self):
        doc = fitz.open(self.pdf_path)
        text = ""
        for page in doc:
            text += page.get_text()

            for img in page.get_images(full=True):
                xref = img[0]
                pix = fitz.Pixmap(doc, xref)
                pix.save(f"image_{xref}.png")
                pix = None
        doc.close()

        return text
    
    def parse_
                
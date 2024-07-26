import PyPDF2
import re
import csv

class Math151_Parser:
    def __init__(self, pdf_path):
        self.pdf_path = pdf_path
        self.exam_data = []

    def parse_pdf(self):
        with open(self.pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ''
            for page in reader.pages:
                text += page.extract_text()
            return text
        

    def parse_exam_questions(self, text):
        parts = re.split(r'Part [I]+:', text)[1:]
        
        if "Multiple Choice" in parts[0]:
            self.parse_multiple_choice(parts[0])
            self.parse_free_response(parts[1])
        else:
            self.parse_free_response(parts[0])
            self.parse_multiple_choice(parts[1])
        

    def parse_free_response(self, section_text):
        pass

    def parse_multiple_choice(self, section_text):
        questions = re.split(r'\d+\.', section_text)
        for question in questions:
            self.exam_data.append(question)

    
    def write_to_csv(self, output_path):
        with open(output_path, 'w', newline = '') as file:
            writer = csv.DictWriter(file, fieldnames=[
                'Question #', 'Section', 'Question Text',
                'Option A', 'Option B', 'Option C', 'Option D',
                'Option E'

            ])
            writer.writeheader()
            for row in self.exam_data:
                writer.writerow(row)

        

if __name__ == "__main__":
    parser = Math151_Parser("../exams/Math151/Exam1-2022.pdf")
    text = parser.parse_pdf()
    parts = parser.parse_exam_questions(text)
    print(parser.exam_data[1])
    
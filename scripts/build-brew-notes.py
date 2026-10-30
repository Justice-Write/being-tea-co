"""Build the existing free brew-log prototype, without external dependencies or network."""
from pathlib import Path
from hashlib import sha256
import json
import argparse
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4, letter
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import simpleSplit
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parent
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--output-dir', type=Path, default=ROOT / 'output' / 'pdf')
OUTPUT = parser.parse_args().output_dir.resolve()
OUTPUT.mkdir(parents=True, exist_ok=True)
INK = HexColor('#17382d')
RULE = HexColor('#9aa99f')

def build(name, size):
    path = OUTPUT / name
    width, height = size
    margin = 40
    usable = width - 2 * margin
    c = canvas.Canvas(str(path), pagesize=size, pageCompression=1)
    c.setTitle('Free Brew Notes | Being Tea Co.')
    c.setAuthor('Being Tea Co.')
    c.setSubject('Free personal-use observation sheet; not a paid offer or product review')
    c.setFillColor(INK)
    y = height - margin

    def text(value, font='Helvetica', point=9, leading=12, space=0):
        nonlocal y
        c.setFillColor(INK)
        c.setFont(font, point)
        for line in simpleSplit(value, font, point, usable):
            c.drawString(margin, y, line)
            y -= leading
        y -= space

    def heading(value):
        nonlocal y
        y -= 8
        text(value, 'Helvetica-Bold', 11, 15)

    def fields(labels, row_height=46):
        nonlocal y
        col_gap = 18
        col_width = (usable - col_gap) / 2
        for i in range(0, len(labels), 2):
            for j, label in enumerate(labels[i:i+2]):
                x = margin + j * (col_width + col_gap)
                c.setFillColor(INK)
                c.setFont('Helvetica', 8.5)
                c.drawString(x, y, label)
                c.setStrokeColor(RULE)
                c.setLineWidth(.5)
                c.line(x, y - row_height + 12, x + col_width, y - row_height + 12)
            y -= row_height

    text('BEING TEA CO.  /  FREE BREW NOTES', 'Helvetica-Bold', 9, 34)
    text('Notice. Record. Adjust.', 'Times-Roman', 27, 33)
    text('Use the cup you already have. Record what you know and mark what you do not.', point=10, leading=14)
    text('There is no required tasting vocabulary.', point=10, leading=14, space=2)
    heading('Tea and source')
    fields(['Date / tea name', 'Seller / lot identifier', 'Maker / origin', 'Harvest / processing / storage'])
    text('Label each detail: seller statement, documented record, or unknown. A seller description is not independent verification.', point=8, leading=11)
    heading('Your brew')
    fields(['Leaf amount (g, or describe your measure)', 'Water volume (mL) / water source', 'Water temperature (degrees C or F)', 'Time / infusion number / vessel'])
    heading('Your observations')
    text('Aroma / texture / flavor / finish / what surprised you:', point=9, leading=12)
    for _ in range(3):
        y -= 25
        c.setStrokeColor(RULE)
        c.line(margin, y, width-margin, y)
    y -= 16
    text('Separate your observations from seller tasting notes. Flavor alone does not establish provenance or a health benefit.', point=8, leading=11)
    heading('Compare one change')
    col_width = usable / 3
    table_top = y + 3
    table_height = 80
    c.setStrokeColor(RULE)
    c.rect(margin, table_top-table_height, usable, table_height, stroke=1, fill=0)
    for i in [1, 2]:
        x = margin + i*col_width
        c.line(x, table_top, x, table_top-table_height)
    c.line(margin, table_top-22, width-margin, table_top-22)
    c.setFont('Helvetica-Bold', 8)
    for i, label in enumerate(['Keep the same', 'Change one variable', 'Notice next time']):
        c.drawString(margin + 8 + i*col_width, table_top-15, label)
    y = table_top-table_height-19
    text('Being Tea Co. field guidance: notice carefully, record what is known, and separate seller descriptions from your own observations.', point=7.5, leading=10)
    text('Free personal-use printable. Copyright Being Tea Co. | No account, email address, or purchase required.', point=7.5, leading=10)
    assert y >= margin, f'Layout overflow in {name}: {y}'
    c.showPage()
    c.save()
    reader = PdfReader(path)
    assert len(reader.pages) == 1
    extracted = reader.pages[0].extract_text()
    for required in ['Notice. Record. Adjust.', 'Compare one change', 'Being Tea Co. field guidance', 'Water volume']:
        assert required in extracted, required
    assert not reader.is_encrypted
    return {'filename': name, 'bytes':path.stat().st_size, 'sha256':sha256(path.read_bytes()).hexdigest(), 'pages':1, 'page_size_points':[round(width,2),round(height,2)], 'bottom_content_y':round(y,2)}

manifest={'status':'LOCAL PROOF - NOT PUBLISHED', 'offer':'Existing free brew notes', 'files':[build('being-tea-brew-notes-a4.pdf', A4), build('being-tea-brew-notes-letter.pdf', letter)], 'verification':{'single_page':True,'required_text':True,'encrypted':False,'visual_review':'pending','physical_print':'unrun'}}
(OUTPUT/'brew-notes-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n',encoding='utf-8')
print(json.dumps(manifest,indent=2))

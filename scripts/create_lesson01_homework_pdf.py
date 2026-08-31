from pathlib import Path
from shutil import copy2

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output/pdf/ilk-qadam-01-uyga-vazifa.pdf"
PUBLIC = ROOT / "public/materials/ilk-qadam/01-uyga-vazifa.pdf"
FONT = Path("/System/Library/Fonts/HelveticaNeue.ttc")


def make_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC.parent.mkdir(parents=True, exist_ok=True)
    pdfmetrics.registerFont(TTFont("Physica", str(FONT), subfontIndex=0))
    styles = getSampleStyleSheet()
    title = ParagraphStyle("title", parent=styles["Title"], fontName="Physica", fontSize=22, leading=27, textColor=colors.HexColor("#09090B"), alignment=TA_LEFT, spaceAfter=8)
    meta = ParagraphStyle("meta", parent=styles["Normal"], fontName="Physica", fontSize=10, leading=15, textColor=colors.HexColor("#52525B"), spaceAfter=18)
    heading = ParagraphStyle("heading", parent=styles["Heading2"], fontName="Physica", fontSize=13, leading=18, textColor=colors.HexColor("#09090B"), spaceBefore=10, spaceAfter=8)
    question = ParagraphStyle("question", parent=styles["Normal"], fontName="Physica", fontSize=11, leading=18, textColor=colors.HexColor("#18181B"), spaceAfter=11)

    doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, leftMargin=22 * mm, rightMargin=22 * mm, topMargin=20 * mm, bottomMargin=20 * mm, title="Ilk qadam - 01 uyga vazifa")
    questions = [
        "1. Quyidagilardan qaysilari fizik kattalik ekanini yozing: uzunlik, kitob, vaqt, harorat, ruchka, massa.",
        "2. Stolning uzunligini o‘lchash uchun eng mos asbobni tanlang va sababini bir jumlada yozing.",
        "3. 4,8 km ni metrda ifodalang.",
        "4. 325 sm ni metrda ifodalang.",
        "5. 2,75 kg ni grammda ifodalang.",
        "6. 18 minutni sekundda ifodalang.",
        "7. 0,006 m ni millimetrda ifodalang.",
        "8. 3,2 x 10³ m yozuvini oddiy son ko‘rinishida yozing.",
        "9. Velosipedchi 1,8 km yo‘lni 6 minutda bosib o‘tdi. Masofa va vaqtni SI birliklariga aylantiring.",
        "10. Bir kosmik modulning kabeli 250 sm, ikkinchisi 1,75 m. Ularning umumiy uzunligini metrda toping.",
    ]
    story = [
        Paragraph("01-dars: Fizik kattaliklar, o‘lchash va SI xalqaro birliklar sistemasi", title),
        Paragraph("Ustoz: Abdulvosit Zokirjonov<br/>Uyga vazifa - 10 ta mashq. Javoblarni alohida daftarga yozing.", meta),
        Paragraph("Ko‘rsatma", heading),
        Paragraph("Har bir hisoblashda birliklarni ko‘rsating. Bu material hozircha avtomatik tekshirilmaydi.", question),
        Spacer(1, 4 * mm),
        Paragraph("Mashqlar", heading),
    ]
    story.extend(Paragraph(item, question) for item in questions)
    doc.build(story)
    copy2(OUTPUT, PUBLIC)


if __name__ == "__main__":
    make_pdf()

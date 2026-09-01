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

PROBLEMS = [
    ("1. Uzunlikni aylantirish", "Toshkent va Samarqand shaharlari orasidagi masofa taxminan 310 km. Ushbu masofani metr (m) larda ifodalang."),
    ("2. Vaqtni aylantirish", "Dars davomiyligi 45 minut. Ushbu vaqtni sekund (s) larda toping."),
    ("3. Massani aylantirish", "Laboratoriya tarozisida detal massasi 350 g chiqdi. Detal massasini SI asosiy birligi — kilogramm (kg) da ifodalang."),
    ("4. Maydon birligi", "Daftar sahifasining yuzi 300 sm². Ushbu yuzani kvadrat metr (m²) larda ifodalang. (1 m² = 10 000 sm²)."),
    ("5. Hajm birligi", "Idishdagi sharbat hajmi 2.5 litr. 1 litr = 1000 sm³ ekanligini bilgan holda, sharbat hajmini kub santimetr (sm³) da toping."),
    ("6. Tezlik birligi", "Tezyurar poyezd 108 km/soat tezlik bilan harakatlanmoqda. Poyezd tezligini SI birligi — m/s larda ifodalang."),
    ("7. Zichlik birligi", "Alyuminiy bo‘lagining zichligi 2.7 g/sm³. Alyuminiy zichligini SI birligi — kg/m³ da ifodalang. (1 g/sm³ = 1000 kg/m³)."),
    ("8. Nano-texnologiya hisobi", "Zamonaviy protsessordagi tranzistor o‘lchami 3 nanometr (3 nm = 3 × 10⁻⁹ m). 1.5 millimetr (1.5 mm = 1.5 × 10⁻³ m) uzunlikdagi bo‘lakka qatorasiga nechta shunday tranzistor sig‘adi?"),
    ("9. Mars Rover o‘rtacha tezligi", "Mars roveri 1.8 km masofani 2.5 soatda bosib o‘tdi. Uning o‘rtacha tezligini santimetr sekundiga (sm/s) larda hisoblang."),
    ("10. Odam bosimi va SI birliklari", "Massasi 80 kg bo‘lgan odamning oyoq kiyimlari tagining umumiy yuzi 400 sm² = 0.04 m². Odamning yerga ko‘rsatadigan bosimini Kilopaskal (kPa) larda toping. (g = 10 m/s², P = F / S)."),
]


def make_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC.parent.mkdir(parents=True, exist_ok=True)
    pdfmetrics.registerFont(TTFont("Physica", str(FONT), subfontIndex=0))
    styles = getSampleStyleSheet()
    title = ParagraphStyle("title", parent=styles["Title"], fontName="Physica", fontSize=18, leading=23, textColor=colors.HexColor("#09090B"), alignment=TA_LEFT, spaceAfter=6)
    meta = ParagraphStyle("meta", parent=styles["Normal"], fontName="Physica", fontSize=9.5, leading=14, textColor=colors.HexColor("#52525B"), spaceAfter=14)
    heading = ParagraphStyle("heading", parent=styles["Heading2"], fontName="Physica", fontSize=11, leading=15, textColor=colors.HexColor("#09090B"), spaceBefore=10, spaceAfter=4)
    question = ParagraphStyle("question", parent=styles["Normal"], fontName="Physica", fontSize=9.5, leading=14, textColor=colors.HexColor("#18181B"), spaceAfter=6)
    note = ParagraphStyle("note", parent=styles["Normal"], fontName="Physica", fontSize=9, leading=13, textColor=colors.HexColor("#52525B"), spaceBefore=8)

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=20 * mm,
        rightMargin=20 * mm,
        topMargin=18 * mm,
        bottomMargin=18 * mm,
        title="Ilk qadam - 01 Uyga vazifa",
    )

    story = [
        Paragraph("01-dars: Fizik kattaliklar, o‘lchash va SI sistemasi", title),
        Paragraph("Ustoz: Abdulvosit Zokirjonov | 10 ta amaliy masala (Soddadan murakkabga)", meta),
        Paragraph("Ko‘rsatma", heading),
        Paragraph("Har bir masalani daftaringizga yeching va hisoblash qadamlarini to‘liq yozing. Javoblaringizni platformaning «Uyga vazifa» sahifasida darhol tekshirib olishingiz mumkin.", question),
        Spacer(1, 2 * mm),
    ]

    for prob_title, prob_desc in PROBLEMS:
        story.append(Paragraph(prob_title, heading))
        story.append(Paragraph(prob_desc, question))

    story.append(Spacer(1, 3 * mm))
    story.append(Paragraph("Eslatma: Ushbu 10 ta masalaning barchasi platformada avtomatik tekshiriladi va har bir to‘g‘ri javob uchun XP beriladi.", note))

    doc.build(story)
    copy2(OUTPUT, PUBLIC)
    print(f"PDF muvaffaqiyatli yaratildi: {PUBLIC.relative_to(ROOT)}")


if __name__ == "__main__":
    make_pdf()

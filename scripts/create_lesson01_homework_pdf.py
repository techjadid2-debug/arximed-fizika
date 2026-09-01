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

# Mashqlar dars bo‘limlariga mos ravishda guruhlangan.
SECTIONS = [
    (
        "A. Atamalar va tushunchalar",
        [
            "1. Quyidagilardan qaysilari fizik kattalik ekanini yozing: uzunlik, kitob, vaqt, harorat, ruchka, massa, tezlik.",
            "2. Fizik kattalik nechta qismdan iborat? Har birini «12,5 m» misolida ko‘rsatib bering.",
            "3. Quyidagi kattaliklarni skalyar va vektorga ajrating: massa, kuch, vaqt, tezlik, harorat, ko‘chish, energiya.",
            "4. Fizik hodisa bilan kimyoviy hodisa farqini yozing va har biriga ikkitadan misol keltiring.",
        ],
    ),
    (
        "B. SI birliklari",
        [
            "5. SI ning 7 ta asosiy birligini nomi va belgisi bilan yozing, har biri qaysi kattalikni o‘lchashini ko‘rsating.",
            "6. Quyidagilardan qaysi biri hosilaviy birlik: kelvin, nyuton, kandela, mol? Javobingizni asoslang.",
            "7. Nyutonni asosiy birliklar orqali yozing: 1 N = ? Xuddi shunday joul uchun ham yozing.",
            "8. «SI» qisqartmasi qaysi tildagi qaysi iboradan olingan? O‘zbek tilidagi to‘liq nomini yozing.",
        ],
    ),
    (
        "C. Birliklarni aylantirish",
        [
            "9. Metrda ifodalang: a) 4,8 km   b) 325 sm   c) 0,006 km   d) 750 mm",
            "10. a) 2,75 kg ni grammda,  b) 18 minutni sekundda,  c) 1,5 soatni sekundda ifodalang.",
            "11. 90 km/soat tezlikni m/s ga aylantiring. Hisoblash yo‘lini to‘liq ko‘rsating.",
            "12. a) 3 m² necha sm²?   b) 2 m³ necha sm³?   Nega ko‘paytuvchi 100 emasligini bir jumlada tushuntiring.",
        ],
    ),
    (
        "D. Ilmiy yozuv va prefikslar",
        [
            "13. Ilmiy yozuvda ifodalang: a) 384 000 000 m   b) 0,0000075 m   c) 5 970 000 000 000 000 000 000 000 kg",
            "14. Oddiy son ko‘rinishida yozing: a) 3,2 x 10³ m   b) 4,5 x 10⁻⁴ s   c) 1,2 x 10⁶ g",
            "15. Prefikslarni 10 ning darajasi bilan moslang: nano, milli, santi, kilo, mega, mikro.",
        ],
    ),
    (
        "E. O‘lchash va aniqlik",
        [
            "16. Lineykada 0 va 5 sm orasida 50 ta bo‘linma bor. Bo‘linish qiymatini toping.",
            "17. l = (24,0 ± 0,5) sm o‘lchash natijasining nisbiy xatoligini foizda hisoblang.",
            "18. Velosipedchi 1,8 km yo‘lni 6 minutda bosib o‘tdi. Masofa va vaqtni SI birliklariga aylantiring, so‘ng o‘rtacha tezlikni m/s da toping.",
        ],
    ),
]


def make_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC.parent.mkdir(parents=True, exist_ok=True)
    pdfmetrics.registerFont(TTFont("Physica", str(FONT), subfontIndex=0))
    styles = getSampleStyleSheet()
    title = ParagraphStyle("title", parent=styles["Title"], fontName="Physica", fontSize=20, leading=25, textColor=colors.HexColor("#09090B"), alignment=TA_LEFT, spaceAfter=8)
    meta = ParagraphStyle("meta", parent=styles["Normal"], fontName="Physica", fontSize=10, leading=15, textColor=colors.HexColor("#52525B"), spaceAfter=16)
    heading = ParagraphStyle("heading", parent=styles["Heading2"], fontName="Physica", fontSize=12, leading=17, textColor=colors.HexColor("#09090B"), spaceBefore=12, spaceAfter=7)
    question = ParagraphStyle("question", parent=styles["Normal"], fontName="Physica", fontSize=10.5, leading=17, textColor=colors.HexColor("#18181B"), spaceAfter=9)
    note = ParagraphStyle("note", parent=styles["Normal"], fontName="Physica", fontSize=9.5, leading=15, textColor=colors.HexColor("#52525B"), spaceBefore=6)

    total = sum(len(items) for _, items in SECTIONS)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=22 * mm,
        rightMargin=22 * mm,
        topMargin=20 * mm,
        bottomMargin=20 * mm,
        title="Ilk qadam - 01 uyga vazifa",
    )

    story = [
        Paragraph("01-dars: Fizikaga kirish va Xalqaro birliklar sistemasi (SI)", title),
        Paragraph(
            f"Ustoz: Abdulvosit Zokirjonov<br/>Uyga vazifa - {total} ta mashq. Javoblarni alohida daftarga yozing.",
            meta,
        ),
        Paragraph("Ko‘rsatma", heading),
        Paragraph(
            "Har bir hisoblashda birlikni albatta ko‘rsating - birliksiz son javob hisoblanmaydi. "
            "Aylantirishlarda oraliq qadamlarni yozing. Kasrlarda vergul ishlating (masalan 13,3 m/s).",
            question,
        ),
        Spacer(1, 3 * mm),
    ]

    for section_title, items in SECTIONS:
        story.append(Paragraph(section_title, heading))
        story.extend(Paragraph(item, question) for item in items)

    story.append(Spacer(1, 4 * mm))
    story.append(
        Paragraph(
            "Eslatma: 5, 9, 10, 11 va 12-mashqlarga o‘xshash topshiriqlarni sayt ustidagi "
            "«Tez tekshiruv» bo‘limida darhol tekshirib ko‘rishingiz mumkin.",
            note,
        )
    )

    doc.build(story)
    copy2(OUTPUT, PUBLIC)
    print(f"{total} ta mashq -> {PUBLIC.relative_to(ROOT)}")


if __name__ == "__main__":
    make_pdf()

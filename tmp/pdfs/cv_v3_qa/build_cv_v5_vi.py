from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    Image,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[3]
WORK = Path(__file__).resolve().parent
PORTRAIT = ROOT / "public" / "images" / "ldt-portrait.jpg"
OUTPUT = (
    ROOT
    / "public"
    / "documents"
    / "archive"
    / "CV_LuongDucTrong_FrontendDeveloper_v5_vi_23082026.pdf"
)

NAVY = colors.HexColor("#173A63")
TEXT = colors.HexColor("#252525")
MUTED = colors.HexColor("#506784")
RULE = colors.HexColor("#C4CED9")
LINK = colors.HexColor("#173F6F")


def register_fonts() -> None:
    fonts = {
        "NotoSans": WORK / "NotoSans-Regular.ttf",
        "NotoSans-Bold": WORK / "NotoSans-Bold.ttf",
        "NotoSans-Italic": WORK / "NotoSans-Italic.ttf",
    }
    for name, path in fonts.items():
        pdfmetrics.registerFont(TTFont(name, str(path)))
    pdfmetrics.registerFontFamily(
        "NotoSans",
        normal="NotoSans",
        bold="NotoSans-Bold",
        italic="NotoSans-Italic",
        boldItalic="NotoSans-Bold",
    )


register_fonts()

PAGE_WIDTH, _ = A4
LEFT = 51
RIGHT = 51
CONTENT_WIDTH = PAGE_WIDTH - LEFT - RIGHT

styles = {
    "name": ParagraphStyle(
        "Name",
        fontName="NotoSans-Bold",
        fontSize=24,
        leading=26,
        textColor=colors.black,
        spaceAfter=3,
    ),
    "role": ParagraphStyle(
        "Role",
        fontName="NotoSans-Bold",
        fontSize=12.5,
        leading=15,
        textColor=NAVY,
        spaceAfter=1,
    ),
    "contact": ParagraphStyle(
        "Contact",
        fontName="NotoSans",
        fontSize=9.2,
        leading=12,
        textColor=TEXT,
        spaceAfter=0,
    ),
    "section": ParagraphStyle(
        "Section",
        fontName="NotoSans-Bold",
        fontSize=12.5,
        leading=15,
        textColor=NAVY,
        spaceAfter=1.5,
    ),
    "body": ParagraphStyle(
        "Body",
        fontName="NotoSans",
        fontSize=10,
        leading=13,
        textColor=TEXT,
        spaceAfter=0,
    ),
    "bullet": ParagraphStyle(
        "Bullet",
        fontName="NotoSans",
        fontSize=10,
        leading=13,
        textColor=TEXT,
        bulletFontName="NotoSans",
        bulletFontSize=10,
        bulletIndent=0,
        leftIndent=10,
        firstLineIndent=0,
        spaceAfter=1.5,
    ),
    "title": ParagraphStyle(
        "Title",
        fontName="NotoSans-Bold",
        fontSize=10.5,
        leading=13,
        textColor=TEXT,
        spaceAfter=0,
    ),
    "date": ParagraphStyle(
        "Date",
        fontName="NotoSans-Italic",
        fontSize=10,
        leading=13,
        textColor=MUTED,
        alignment=TA_RIGHT,
        spaceAfter=0,
    ),
    "context": ParagraphStyle(
        "Context",
        fontName="NotoSans-Bold",
        fontSize=10,
        leading=13,
        textColor=TEXT,
        spaceAfter=0,
    ),
}


def link(url: str, label: str) -> str:
    return f'<link href="{url}" color="{LINK.hexval()}"><u>{label}</u></link>'


def section(title: str, before: float = 17) -> list:
    return [
        Spacer(1, before),
        Paragraph(title, styles["section"]),
        HRFlowable(
            width="100%",
            thickness=0.55,
            color=RULE,
            spaceBefore=0,
            spaceAfter=7,
        ),
    ]


def title_date(title: str, date: str) -> Table:
    table = Table(
        [[Paragraph(title, styles["title"]), Paragraph(date, styles["date"])]],
        colWidths=[CONTENT_WIDTH - 112, 112],
        hAlign="LEFT",
    )
    table.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        )
    )
    return table


def body(text: str) -> Paragraph:
    return Paragraph(text, styles["body"])


def bullet(text: str) -> Paragraph:
    return Paragraph(text, styles["bullet"], bulletText="-")


def header() -> Table:
    portrait = Image(str(PORTRAIT), width=54, height=72)
    identity = [
        Paragraph("LƯỢNG ĐỨC TRỌNG", styles["name"]),
        Paragraph("Lập trình viên Frontend (Junior)", styles["role"]),
        Paragraph(
            "Thành phố Hồ Chí Minh, Việt Nam&nbsp;&nbsp;|&nbsp;&nbsp;(+84) 867 520 049&nbsp;&nbsp;|&nbsp;&nbsp;"
            + link("mailto:luongductrong2004@gmail.com", "luongductrong2004@gmail.com"),
            styles["contact"],
        ),
        Paragraph(
            link("https://luongductrong.dev", "luongductrong.dev")
            + "&nbsp;&nbsp;|&nbsp;&nbsp;"
            + link("https://github.com/luongductrong", "github.com/luongductrong")
            + "&nbsp;&nbsp;|&nbsp;&nbsp;"
            + link(
                "https://linkedin.com/in/luongductrong2004",
                "linkedin.com/in/luongductrong2004",
            ),
            styles["contact"],
        ),
    ]
    table = Table(
        [[portrait, identity]],
        colWidths=[66, CONTENT_WIDTH - 66],
        hAlign="LEFT",
    )
    table.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("LEFTPADDING", (1, 0), (1, 0), 12),
                ("VALIGN", (0, 0), (0, 0), "MIDDLE"),
                ("VALIGN", (1, 0), (1, 0), "MIDDLE"),
            ]
        )
    )
    return table


def decorate_page(canvas, doc) -> None:
    canvas.setAuthor("Lượng Đức Trọng")
    canvas.setTitle("Lượng Đức Trọng - Lập trình viên Frontend (Junior)")
    canvas.setSubject("Hồ sơ ứng tuyển - Lập trình viên Frontend (Junior)")
    canvas.setKeywords(
        "Lượng Đức Trọng, Lập trình viên Frontend (Junior), React, Next.js, TypeScript, Vue.js, Nuxt"
    )
    canvas.setCreator("Lượng Đức Trọng")

    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.55)
    canvas.line(LEFT, 42, PAGE_WIDTH - RIGHT, 42)
    canvas.setFillColor(MUTED)
    canvas.setFont("NotoSans", 8.5)
    canvas.drawString(LEFT, 26, "Lượng Đức Trọng - Lập trình viên Frontend (Junior)")
    canvas.drawRightString(PAGE_WIDTH - RIGHT, 26, f"Trang {doc.page} / 2")
    canvas.restoreState()


story = [header()]

story += section("TÓM TẮT CHUYÊN MÔN", 17)
story += [
    body(
        "Là lập trình viên Frontend (Junior) với gần 2 năm kinh nghiệm thực tế trong việc xây dựng và "
        "cải tiến các ứng dụng web đang vận hành bằng React, Next.js và TypeScript. Có kỹ năng về kiến "
        "trúc frontend, hệ thống UI tái sử dụng, kết xuất phía máy chủ, tích hợp API và triển khai tự động. "
        "Có thể làm việc với Vue.js và Nuxt, có nền tảng React Native cơ bản, đồng thời đang mở rộng theo "
        "định hướng phát triển full-stack cho web và mobile."
    )
]

story += section("KỸ NĂNG CHUYÊN MÔN", 16)
story += [
    bullet("<b>Frontend:</b> JavaScript, TypeScript, React, Next.js, Vue.js, Nuxt, HTML, CSS"),
    bullet("<b>Mobile:</b> React Native"),
    bullet(
        "<b>UI &amp; dữ liệu:</b> Tailwind CSS, shadcn/ui, TanStack Query, Zustand, REST APIs, Axios"
    ),
    bullet(
        "<b>Công cụ &amp; nền tảng:</b> Git, GitHub Actions, Vite, pnpm, PostgreSQL, SQLite, SAP OData"
    ),
]

story += section("KINH NGHIỆM LÀM VIỆC", 14)
story += [
    title_date("Lập trình viên Frontend theo dự án | FTES Co., Ltd.", "04/2025 - 08/2026"),
    Paragraph("Từ xa", styles["context"]),
    Spacer(1, 3),
    bullet(
        "Thiết kế, phát triển và bảo trì các tính năng frontend cho những dự án web sử dụng React, "
        "Next.js và TypeScript."
    ),
    bullet(
        "Xây dựng các thành phần UI tái sử dụng, tích hợp REST APIs, quản lý trạng thái phía client và "
        "dữ liệu phía server bằng Zustand và TanStack Query, đồng thời bảo đảm giao diện thích ứng và "
        "khả năng bảo trì."
    ),
    bullet(
        "Tham gia phát triển ứng dụng mobile bằng Flutter, chủ yếu bảo trì và cải thiện các tính năng có sẵn."
    ),
    Spacer(1, 12),
    title_date("Thực tập sinh SAP | FPT Software", "01/2025 - 04/2025"),
    Paragraph("Thành phố Hồ Chí Minh, Việt Nam", styles["context"]),
    Spacer(1, 3),
    bullet(
        "Tích lũy kinh nghiệm thực tế về kiến trúc ứng dụng SAP, mô hình hóa dữ liệu, phương pháp lập "
        "trình ABAP và quy trình phát triển phần mềm trong môi trường doanh nghiệp."
    ),
]

story += section("HỌC VẤN", 14)
story += [
    title_date("Cử nhân Công nghệ Thông tin - Kỹ thuật Phần mềm", "2022 - 06/2026"),
    Paragraph("Trường Đại học FPT, Thành phố Hồ Chí Minh", styles["context"]),
    Spacer(1, 3),
    bullet("Xếp loại tốt nghiệp <b>Giỏi</b>&nbsp;&nbsp;|&nbsp;&nbsp;<b>GPA: 8.11/10</b>"),
    bullet(
        "Đạt thành tích <b>Top 100 sinh viên có thành tích học tập tốt nhất</b> tại cơ sở Thành phố Hồ "
        "Chí Minh trong học kỳ Fall 2025."
    ),
    PageBreak(),
]

story += section("DỰ ÁN TIÊU BIỂU", 0)
story += [
    title_date("Nền tảng học tập FunnyCode | Lập trình viên Frontend", "04/2025 - Hiện tại"),
    Spacer(1, 3),
    body("Sản phẩm mẫu: " + link("https://beta.funnycode.vn", "beta.funnycode.vn")),
    body(
        "Mã nguồn: "
        + link(
            "https://github.com/luongductrong/re-funnycode-frontend",
            "github.com/luongductrong/re-funnycode-frontend",
        )
    ),
    Spacer(1, 3),
    body("Nền tảng học trực tuyến tích hợp thương mại phục vụ đào tạo lập trình."),
    Spacer(1, 2),
    bullet("Tiếp quản codebase có sẵn, sau đó độc lập bảo trì và mở rộng frontend."),
    bullet(
        "Phát triển và duy trì các luồng chính gồm khám phá và học khóa học, xác thực người dùng, lộ "
        "trình có AI hỗ trợ, tiến độ học tập và thương mại khóa học."
    ),
    bullet(
        "Hiện đại hóa frontend lên Next.js 16 và React 19, áp dụng kết xuất trước một phần (Partial "
        "Prerendering), đồng thời xây dựng các lớp UI và dữ liệu nhất quán với shadcn/ui, TanStack Query "
        "và Zustand."
    ),
    body(
        "<b>Công nghệ:</b> Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Zustand, Axios"
    ),
    Spacer(1, 14),
    title_date(
        "File Attachment Management Fiori Application | Phụ trách kỹ thuật Frontend",
        "01/2026 - 05/2026",
    ),
    Paragraph("Đồ án tốt nghiệp | Nhóm 5 thành viên", styles["context"]),
    Spacer(1, 3),
    body(
        "Mã nguồn: "
        + link(
            "https://github.com/luongductrong/react-fiori-style",
            "github.com/luongductrong/react-fiori-style",
        )
    ),
    Spacer(1, 3),
    body(
        "Ứng dụng quản lý tệp đính kèm theo mô hình doanh nghiệp, được triển khai nội bộ trong môi trường "
        "SAP của Trường Đại học FPT."
    ),
    Spacer(1, 2),
    bullet(
        "Dẫn dắt mảng frontend cùng một thành viên khác, đồng thời đưa ra các quyết định chính về kiến "
        "trúc, công nghệ và UI."
    ),
    bullet(
        "Phát triển khoảng 10 màn hình cho các quy trình quản lý tệp đính kèm, đối tượng nghiệp vụ, người "
        "dùng, cấu hình và giám sát."
    ),
    bullet(
        "Tích hợp React với các dịch vụ SAP RAP qua OData v4, bao gồm xử lý API dùng chung, quản lý CSRF "
        "token, điều hướng theo vai trò, chọn tệp từ Google Drive và tự động triển khai lên SAP."
    ),
    body(
        "<b>Công nghệ:</b> React, TypeScript, SAP UI5 Web Components, React Query, Zustand, SAP OData v4"
    ),
]

doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=A4,
    leftMargin=LEFT,
    rightMargin=RIGHT,
    topMargin=51,
    bottomMargin=56,
    title="Lượng Đức Trọng - Lập trình viên Frontend (Junior)",
    author="Lượng Đức Trọng",
    subject="Hồ sơ ứng tuyển - Lập trình viên Frontend (Junior)",
    creator="Lượng Đức Trọng",
)
doc.build(story, onFirstPage=decorate_page, onLaterPages=decorate_page)
print(OUTPUT)

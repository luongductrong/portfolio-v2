from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[3]
WORK = Path(__file__).resolve().parent
OUTPUT = (
    ROOT
    / "public"
    / "documents"
    / "archive"
    / "CV_LuongDucTrong_FrontendDeveloper_v5_en_23082026.pdf"
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
        fontSize=10,
        leading=13,
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


def decorate_page(canvas, doc) -> None:
    canvas.setAuthor("Lượng Đức Trọng")
    canvas.setTitle("Lượng Đức Trọng - Junior Frontend Developer")
    canvas.setSubject("Curriculum Vitae - Junior Frontend Developer")
    canvas.setKeywords(
        "Lượng Đức Trọng, Junior Frontend Developer, React, Next.js, TypeScript, Vue.js, Nuxt"
    )
    canvas.setCreator("Lượng Đức Trọng")

    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.55)
    canvas.line(LEFT, 42, PAGE_WIDTH - RIGHT, 42)
    canvas.setFillColor(MUTED)
    canvas.setFont("NotoSans", 8.5)
    canvas.drawString(LEFT, 26, "Luong Duc Trong - Junior Frontend Developer")
    canvas.drawRightString(PAGE_WIDTH - RIGHT, 26, f"Page {doc.page} of 2")
    canvas.restoreState()


story = [
    Paragraph("LƯỢNG ĐỨC TRỌNG", styles["name"]),
    Paragraph("Junior Frontend Developer", styles["role"]),
    Paragraph(
        "Ho Chi Minh City, Vietnam&nbsp;&nbsp;|&nbsp;&nbsp;(+84) 867 520 049&nbsp;&nbsp;|&nbsp;&nbsp;"
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

story += section("PROFESSIONAL SUMMARY", 17)
story += [
    body(
        "Junior Frontend Developer with nearly 2 years of hands-on experience building and improving "
        "production web applications using React, Next.js, and TypeScript. Skilled in frontend "
        "architecture, reusable UI systems, server rendering, API integration, and automated deployment. "
        "Comfortable with Vue.js and Nuxt, with foundational React Native experience and currently "
        "expanding toward full-stack web and mobile development."
    )
]

story += section("TECHNICAL SKILLS", 16)
story += [
    bullet("<b>Frontend:</b> JavaScript, TypeScript, React, Next.js, Vue.js, Nuxt, HTML, CSS"),
    bullet("<b>Mobile:</b> React Native"),
    bullet(
        "<b>UI and Data:</b> Tailwind CSS, shadcn/ui, TanStack Query, Zustand, REST APIs, Axios"
    ),
    bullet(
        "<b>Tools and Platforms:</b> Git, GitHub Actions, Vite, pnpm, PostgreSQL, SQLite, SAP OData"
    ),
]

story += section("PROFESSIONAL EXPERIENCE", 14)
story += [
    title_date("Project-based Frontend Developer | FTES Co., Ltd.", "Apr 2025 - Aug 2026"),
    Paragraph("Remote", styles["context"]),
    Spacer(1, 3),
    bullet(
        "Design, develop, and maintain frontend features across web projects using React, Next.js, and "
        "TypeScript."
    ),
    bullet(
        "Build reusable UI components, integrate REST APIs, manage client-side state and server data with "
        "Zustand and TanStack Query, and support responsive, maintainable implementations."
    ),
    bullet(
        "Contribute to mobile application development with Flutter by maintaining and improving existing "
        "features."
    ),
    Spacer(1, 12),
    title_date("SAP Intern | FPT Software", "Jan 2025 - Apr 2025"),
    Paragraph("Ho Chi Minh City, Vietnam", styles["context"]),
    Spacer(1, 3),
    bullet(
        "Gained practical experience with SAP application architecture, data modeling, ABAP programming "
        "practices, and enterprise development workflows."
    ),
]

story += section("EDUCATION", 14)
story += [
    title_date(
        "Bachelor of Information Technology - Software Engineering",
        "2022 - Jun 2026",
    ),
    Paragraph("FPT University, Ho Chi Minh City", styles["context"]),
    Spacer(1, 3),
    bullet("<b>Very Good</b> degree classification&nbsp;&nbsp;|&nbsp;&nbsp;<b>GPA: 8.11/10</b>"),
    bullet(
        "Recognized among the <b>Top 100 students for academic performance</b> at the Ho Chi Minh City "
        "campus in Fall 2025."
    ),
    PageBreak(),
]

story += section("SELECTED PROJECTS", 0)
story += [
    title_date("FunnyCode Learning Platform | Frontend Developer", "Apr 2025 - Present"),
    Spacer(1, 3),
    body("Live Demo: " + link("https://beta.funnycode.vn", "beta.funnycode.vn")),
    body(
        "Source Code: "
        + link(
            "https://github.com/luongductrong/re-funnycode-frontend",
            "github.com/luongductrong/re-funnycode-frontend",
        )
    ),
    Spacer(1, 3),
    body("A production e-learning and commerce platform for programming education."),
    Spacer(1, 2),
    bullet(
        "Independently maintained and extended the frontend after taking over the existing codebase."
    ),
    bullet(
        "Develop and maintain core flows for course discovery and learning, authentication, AI-assisted "
        "roadmaps, learner progress, and course commerce."
    ),
    bullet(
        "Modernized the frontend with Next.js 16, React 19, Partial Prerendering, and consistent UI and "
        "data layers built with shadcn/ui, TanStack Query, and Zustand."
    ),
    body(
        "<b>Technologies:</b> Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, "
        "Zustand, Axios"
    ),
    Spacer(1, 14),
    title_date(
        "File Attachment Management Fiori Application | Frontend Technical Owner",
        "Jan 2026 - May 2026",
    ),
    Paragraph("Graduation Project | Team of 5", styles["context"]),
    Spacer(1, 3),
    body(
        "Source Code: "
        + link(
            "https://github.com/luongductrong/react-fiori-style",
            "github.com/luongductrong/react-fiori-style",
        )
    ),
    Spacer(1, 3),
    body(
        "An enterprise-style file attachment management application deployed internally in FPT "
        "University's SAP environment."
    ),
    Spacer(1, 2),
    bullet(
        "Led the frontend work with one other contributor and made the main architecture, technology, "
        "and UI decisions."
    ),
    bullet(
        "Developed about 10 screens for attachment, business object, user, configuration, and monitoring "
        "workflows."
    ),
    bullet(
        "Integrated React with SAP RAP services through OData v4, including shared API handling, CSRF "
        "token management, role-aware navigation, Google Drive file selection, and automated SAP deployment."
    ),
    body(
        "<b>Technologies:</b> React, TypeScript, SAP UI5 Web Components, React Query, Zustand, SAP OData v4"
    ),
]

doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=A4,
    leftMargin=LEFT,
    rightMargin=RIGHT,
    topMargin=51,
    bottomMargin=56,
    title="Lượng Đức Trọng - Junior Frontend Developer",
    author="Lượng Đức Trọng",
    subject="Curriculum Vitae - Junior Frontend Developer",
    creator="Lượng Đức Trọng",
)
doc.build(story, onFirstPage=decorate_page, onLaterPages=decorate_page)
print(OUTPUT)

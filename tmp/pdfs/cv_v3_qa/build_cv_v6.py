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
OUTPUT_DIR = ROOT / "output" / "pdf"
OUTPUT_EN = OUTPUT_DIR / "CV_LuongDucTrong_FrontendDeveloper_v6_en_22092026.pdf"
OUTPUT_VI = OUTPUT_DIR / "CV_LuongDucTrong_FrontendDeveloper_v6_vi_22092026.pdf"

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


def section(title: str, before: float = 14, after: float = 7) -> list:
    return [
        Spacer(1, before),
        Paragraph(title, styles["section"]),
        HRFlowable(
            width="100%",
            thickness=0.55,
            color=RULE,
            spaceBefore=0,
            spaceAfter=after,
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


def english_header() -> list:
    return [
        Paragraph("LƯỢNG ĐỨC TRỌNG", styles["name"]),
        Paragraph("Frontend Developer", styles["role"]),
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


def vietnamese_header() -> Table:
    portrait = Image(str(PORTRAIT), width=54, height=72)
    identity = [
        Paragraph("LƯỢNG ĐỨC TRỌNG", styles["name"]),
        Paragraph("Lập trình viên Frontend", styles["role"]),
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
    table = Table([[portrait, identity]], colWidths=[66, CONTENT_WIDTH - 66], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("LEFTPADDING", (1, 0), (1, 0), 12),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ]
        )
    )
    return table


def decorate_english(canvas, doc) -> None:
    canvas.setAuthor("Lượng Đức Trọng")
    canvas.setTitle("Lượng Đức Trọng - Frontend Developer")
    canvas.setSubject("Curriculum Vitae - Frontend Developer")
    canvas.setKeywords(
        "Lượng Đức Trọng, Frontend Developer, JavaScript, TypeScript, React, Next.js"
    )
    canvas.setCreator("Lượng Đức Trọng")
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.55)
    canvas.line(LEFT, 42, PAGE_WIDTH - RIGHT, 42)
    canvas.setFillColor(MUTED)
    canvas.setFont("NotoSans", 8.5)
    canvas.drawString(LEFT, 26, "Luong Duc Trong - Frontend Developer")
    canvas.drawRightString(PAGE_WIDTH - RIGHT, 26, f"Page {doc.page} of 2")
    canvas.restoreState()


def decorate_vietnamese(canvas, doc) -> None:
    canvas.setAuthor("Lượng Đức Trọng")
    canvas.setTitle("Lượng Đức Trọng - Lập trình viên Frontend")
    canvas.setSubject("Hồ sơ ứng tuyển - Lập trình viên Frontend")
    canvas.setKeywords(
        "Lượng Đức Trọng, Lập trình viên Frontend, JavaScript, TypeScript, React, Next.js"
    )
    canvas.setCreator("Lượng Đức Trọng")
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.55)
    canvas.line(LEFT, 42, PAGE_WIDTH - RIGHT, 42)
    canvas.setFillColor(MUTED)
    canvas.setFont("NotoSans", 8.5)
    canvas.drawString(LEFT, 26, "Lượng Đức Trọng - Lập trình viên Frontend")
    canvas.drawRightString(PAGE_WIDTH - RIGHT, 26, f"Trang {doc.page} / 2")
    canvas.restoreState()


def english_story() -> list:
    story = english_header()
    story += section("PROFESSIONAL SUMMARY", 14)
    story += [
        body(
            "Frontend Developer with nearly 2 years of hands-on experience building and improving "
            "production web applications, primarily using JavaScript, TypeScript, React, and Next.js. "
            "Skilled in frontend architecture, reusable UI systems, server rendering, API integration, "
            "and automated deployment. Comfortable taking ownership of existing codebases and delivering "
            "responsive, maintainable interfaces. A proactive and fast learner, ready to contribute in "
            "roles that extend beyond frontend into full-stack web or mobile development."
        )
    ]
    story += section("TECHNICAL SKILLS", 13)
    story += [
        bullet(
            "<b>Programming Languages:</b> JavaScript, TypeScript; basic knowledge of C#, Java, and Python"
        ),
        bullet(
            "<b>Frontend &amp; Mobile:</b> React, Next.js, HTML5, CSS3; additional hands-on experience "
            "with Vue.js, Nuxt, and React Native"
        ),
        bullet(
            "<b>UI &amp; Data:</b> Tailwind CSS, shadcn/ui, TanStack Query, Zustand, REST APIs, Axios, SAP OData"
        ),
        bullet("<b>Tools &amp; Platforms:</b> Git, GitHub Actions, Vite, pnpm"),
    ]
    story += section("PROFESSIONAL EXPERIENCE", 12)
    story += [
        title_date("Project-based Frontend Developer | FTES Co., Ltd.", "Apr 2025 - Aug 2026"),
        Paragraph("Remote", styles["context"]),
        Spacer(1, 3),
        bullet(
            "Design, develop, and maintain frontend features across web projects using React, Next.js, "
            "and TypeScript."
        ),
        bullet(
            "Build reusable UI components, integrate REST APIs, manage client-side state and server data "
            "with Zustand and TanStack Query, and support responsive, maintainable implementations."
        ),
        bullet(
            "Contribute to mobile application development with Flutter by maintaining and improving "
            "existing features."
        ),
        Spacer(1, 10),
        title_date("SAP Intern | FPT Software", "Jan 2025 - Apr 2025"),
        Paragraph("Ho Chi Minh City, Vietnam", styles["context"]),
        Spacer(1, 3),
        bullet(
            "Gained practical experience with SAP application architecture, data modeling, ABAP "
            "programming practices, and enterprise development workflows."
        ),
    ]
    story += section("EDUCATION", 12)
    story += [
        title_date("Bachelor of Information Technology - Software Engineering", "2022 - Jun 2026"),
        Paragraph("FPT University, Ho Chi Minh City", styles["context"]),
        Spacer(1, 3),
        bullet("<b>Very Good</b> degree classification&nbsp;&nbsp;|&nbsp;&nbsp;<b>GPA: 8.11/10</b>"),
        bullet(
            "Recognized among the <b>Top 100 students for academic performance</b> at the Ho Chi Minh "
            "City campus in Fall 2025."
        ),
    ]
    story += section("LANGUAGES", 11, 5)
    story += [
        bullet("<b>Vietnamese:</b> Native"),
        bullet(
            "<b>English:</b> Able to read technical documentation and handle basic workplace communication"
        ),
        PageBreak(),
    ]
    story += section("SELECTED PROJECTS", 0)
    story += english_projects()
    return story


def vietnamese_story() -> list:
    story = [vietnamese_header()]
    story += section("TÓM TẮT CHUYÊN MÔN", 14)
    story += [
        body(
            "Là lập trình viên Frontend với gần 2 năm kinh nghiệm thực tế trong việc xây dựng và cải "
            "tiến các ứng dụng web đang vận hành, chủ yếu sử dụng JavaScript, TypeScript, React và "
            "Next.js. Có kỹ năng về kiến trúc frontend, hệ thống UI tái sử dụng, kết xuất phía máy chủ, "
            "tích hợp API và triển khai tự động. Có khả năng tiếp quản codebase, phát triển giao diện "
            "thích ứng và bảo đảm khả năng bảo trì. Với khả năng học hỏi nhanh và chủ động, sẵn sàng làm "
            "việc ở các vị trí có phạm vi mở rộng từ frontend sang full-stack web hoặc phát triển mobile."
        )
    ]
    story += section("KỸ NĂNG CHUYÊN MÔN", 13)
    story += [
        bullet(
            "<b>Ngôn ngữ lập trình:</b> JavaScript, TypeScript; có kiến thức cơ bản về C#, Java và Python"
        ),
        bullet(
            "<b>Frontend &amp; mobile:</b> React, Next.js, HTML5, CSS3; có thêm kinh nghiệm thực tế với "
            "Vue.js, Nuxt và React Native"
        ),
        bullet(
            "<b>UI &amp; dữ liệu:</b> Tailwind CSS, shadcn/ui, TanStack Query, Zustand, REST APIs, Axios, SAP OData"
        ),
        bullet("<b>Công cụ &amp; nền tảng:</b> Git, GitHub Actions, Vite, pnpm"),
    ]
    story += section("KINH NGHIỆM LÀM VIỆC", 12)
    story += [
        title_date("Lập trình viên Frontend theo dự án | FTES Co., Ltd.", "04/2025 - 08/2026"),
        Paragraph("Làm việc từ xa", styles["context"]),
        Spacer(1, 3),
        bullet(
            "Thiết kế, phát triển và bảo trì các tính năng frontend cho những dự án web sử dụng React, "
            "Next.js và TypeScript."
        ),
        bullet(
            "Xây dựng các thành phần UI tái sử dụng, tích hợp REST APIs, quản lý trạng thái phía client "
            "và dữ liệu phía server bằng Zustand và TanStack Query, đồng thời bảo đảm giao diện thích ứng "
            "và khả năng bảo trì."
        ),
        bullet(
            "Tham gia phát triển ứng dụng mobile bằng Flutter, chủ yếu bảo trì và cải thiện các tính năng có sẵn."
        ),
        Spacer(1, 10),
        title_date("Thực tập sinh SAP | FPT Software", "01/2025 - 04/2025"),
        Paragraph("Thành phố Hồ Chí Minh, Việt Nam", styles["context"]),
        Spacer(1, 3),
        bullet(
            "Tích lũy kinh nghiệm thực tế về kiến trúc ứng dụng SAP, mô hình hóa dữ liệu, phương pháp "
            "lập trình ABAP và quy trình phát triển phần mềm trong môi trường doanh nghiệp."
        ),
    ]
    story += section("HỌC VẤN", 12)
    story += [
        title_date("Cử nhân Công nghệ Thông tin - Kỹ thuật Phần mềm", "2022 - 06/2026"),
        Paragraph("Trường Đại học FPT, Thành phố Hồ Chí Minh", styles["context"]),
        Spacer(1, 3),
        bullet("Xếp loại tốt nghiệp <b>Giỏi</b>&nbsp;&nbsp;|&nbsp;&nbsp;<b>GPA: 8.11/10</b>"),
        bullet(
            "Đạt thành tích <b>Top 100 sinh viên có thành tích học tập tốt nhất</b> tại cơ sở Thành phố "
            "Hồ Chí Minh trong học kỳ Fall 2025."
        ),
    ]
    story += section("NGÔN NGỮ", 11, 5)
    story += [
        bullet("<b>Tiếng Việt:</b> Bản ngữ"),
        bullet(
            "<b>Tiếng Anh:</b> Có khả năng đọc hiểu tài liệu kỹ thuật và giao tiếp cơ bản trong công việc"
        ),
        PageBreak(),
    ]
    story += section("DỰ ÁN TIÊU BIỂU", 0)
    story += vietnamese_projects()
    return story


def english_projects() -> list:
    return [
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
        bullet("Independently maintained and extended the frontend after taking over the existing codebase."),
        bullet(
            "Develop and maintain core flows for course discovery and learning, authentication, "
            "AI-assisted roadmaps, learner progress, and course commerce."
        ),
        bullet(
            "Modernized the frontend with Next.js 16, React 19, Partial Prerendering, and consistent UI "
            "and data layers built with shadcn/ui, TanStack Query, and Zustand."
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
            "Developed about 10 screens for attachment, business object, user, configuration, and "
            "monitoring workflows."
        ),
        bullet(
            "Integrated React with SAP RAP services through OData v4, including shared API handling, "
            "CSRF token management, role-aware navigation, Google Drive file selection, and automated "
            "SAP deployment."
        ),
        body(
            "<b>Technologies:</b> React, TypeScript, SAP UI5 Web Components, React Query, Zustand, SAP OData v4"
        ),
    ]


def vietnamese_projects() -> list:
    return [
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
            "Phát triển và duy trì các luồng chính gồm khám phá và học khóa học, xác thực người dùng, "
            "lộ trình có AI hỗ trợ, tiến độ học tập và thương mại khóa học."
        ),
        bullet(
            "Hiện đại hóa frontend lên Next.js 16 và React 19, áp dụng kết xuất trước một phần (Partial "
            "Prerendering), đồng thời xây dựng các lớp UI và dữ liệu nhất quán với shadcn/ui, TanStack "
            "Query và Zustand."
        ),
        body(
            "<b>Công nghệ:</b> Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, "
            "Zustand, Axios"
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
            "Ứng dụng quản lý tệp đính kèm theo mô hình doanh nghiệp, được triển khai nội bộ trong môi "
            "trường SAP của Trường Đại học FPT."
        ),
        Spacer(1, 2),
        bullet(
            "Dẫn dắt mảng frontend cùng một thành viên khác, đồng thời đưa ra các quyết định chính về "
            "kiến trúc, công nghệ và UI."
        ),
        bullet(
            "Phát triển khoảng 10 màn hình cho các quy trình quản lý tệp đính kèm, đối tượng nghiệp vụ, "
            "người dùng, cấu hình và giám sát."
        ),
        bullet(
            "Tích hợp React với các dịch vụ SAP RAP qua OData v4, bao gồm xử lý API dùng chung, quản lý "
            "CSRF token, điều hướng theo vai trò, chọn tệp từ Google Drive và tự động triển khai lên SAP."
        ),
        body(
            "<b>Công nghệ:</b> React, TypeScript, SAP UI5 Web Components, React Query, Zustand, SAP OData v4"
        ),
    ]


def build() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    en_doc = SimpleDocTemplate(
        str(OUTPUT_EN),
        pagesize=A4,
        leftMargin=LEFT,
        rightMargin=RIGHT,
        topMargin=48,
        bottomMargin=56,
        title="Lượng Đức Trọng - Frontend Developer",
        author="Lượng Đức Trọng",
        subject="Curriculum Vitae - Frontend Developer",
        creator="Lượng Đức Trọng",
    )
    en_doc.build(english_story(), onFirstPage=decorate_english, onLaterPages=decorate_english)

    vi_doc = SimpleDocTemplate(
        str(OUTPUT_VI),
        pagesize=A4,
        leftMargin=LEFT,
        rightMargin=RIGHT,
        topMargin=48,
        bottomMargin=56,
        title="Lượng Đức Trọng - Lập trình viên Frontend",
        author="Lượng Đức Trọng",
        subject="Hồ sơ ứng tuyển - Lập trình viên Frontend",
        creator="Lượng Đức Trọng",
    )
    vi_doc.build(vietnamese_story(), onFirstPage=decorate_vietnamese, onLaterPages=decorate_vietnamese)
    print(OUTPUT_EN)
    print(OUTPUT_VI)


if __name__ == "__main__":
    build()

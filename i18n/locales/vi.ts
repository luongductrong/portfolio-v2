import { skillsI18n } from '@/features/skills/locales/vi';
import { contactI18n } from '@/features/contact/locales/vi';
import { projectsI18n } from '@/features/projects/locales/vi';
import { portfolioI18n, terminalI18n } from '@/features/portfolio/locales/vi';

export default {
  language: {
    label: 'Ngôn ngữ',
    change: 'Thay đổi ngôn ngữ',
  },
  header: {
    home: 'Trang chủ',
    navigation: {
      primary: 'Điều hướng chính',
      mobile: 'Điều hướng trên thiết bị di động',
      title: 'Điều hướng',
      description: 'Khám phá dự án, kỹ năng và các cách kết nối với mình.',
      open: 'Mở menu điều hướng',
      close: 'Đóng menu điều hướng',
      items: {
        about: 'Giới thiệu',
        projects: 'Dự án',
        skills: 'Kỹ năng',
        contact: 'Liên hệ',
      },
    },
  },
  footer: {
    vietnameseNameTitle: 'Lượng Đức Trọng',
    copyright: '© {year}. Một sản phẩm của Lượng Đức Trọng ❤️.',
  },
  theme: {
    switchToLight: 'Chuyển sang giao diện sáng',
    switchToDark: 'Chuyển sang giao diện tối',
  },
  error: {
    notFound: {
      title: 'Không tìm thấy trang.',
      description:
        'Trang này có thể đã được di chuyển, đổi tên hoặc chưa từng tồn tại. Bạn có thể về trang chủ hoặc tiếp tục xem các dự án của mình.',
    },
    unexpected: {
      title: 'Đã xảy ra lỗi.',
      description: 'Ứng dụng gặp sự cố không mong muốn. Bạn có thể quay về trang an toàn và thử lại.',
    },
    actions: {
      home: 'Về trang chủ',
      projects: 'Xem dự án',
    },
  },
  contact: contactI18n,
  portfolio: portfolioI18n,
  projects: projectsI18n,
  skills: skillsI18n,
  terminal: terminalI18n,
};

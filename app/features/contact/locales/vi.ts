import type { ContactI18n } from './type';

export const contactI18n = {
  seo: {
    title: 'Liên hệ - Lượng Đức Trọng',
    description: 'Liên hệ với Lượng Đức Trọng về phát triển web, cơ hội hợp tác và các dự án công nghệ.',
  },
  header: {
    eyebrow: 'Sẵn sàng hợp tác',
    firstLine: 'Cùng nhau',
    secondLine: 'Kết nối.',
    note: 'Hãy cùng trao đổi về một thử thách kỹ thuật hoặc dự án hợp tác.',
  },
  direct: {
    ariaLabel: 'Các phương thức liên hệ trực tiếp',
    title: 'Liên hệ trực tiếp',
    description: 'Liên hệ trực tiếp với mình qua',
    emailCopied: 'Đã sao chép email',
    copyEmail: 'Sao chép địa chỉ email',
  },
  network: {
    title: 'Hoặc kết nối qua',
  },
  awaitingInput: '// đang chờ...',
  form: {
    ariaLabel: 'Biểu mẫu liên hệ',
    subject: 'Liên hệ qua portfolio từ {name}',
    placeholders: {
      name: 'Nhập tên của bạn',
      email: 'Nhập email của bạn',
      message: 'Nhập nội dung tin nhắn...',
    },
    responseTime: '// Phản hồi dự kiến trong vòng 24 giờ',
    send: 'Gửi tin nhắn',
    sending: 'Đang gửi...',
    feedback: {
      success: 'Đã gửi tin nhắn thành công.',
      successDescription: 'Mình sẽ phản hồi bạn sớm.',
      captchaError: 'Xác minh bảo mật thất bại. Vui lòng thử lại.',
      error: 'Không thể gửi tin nhắn. Vui lòng thử lại.',
    },
  },
} satisfies ContactI18n;

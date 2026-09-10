import type { ProjectId, ProjectTranslation } from '../types';

const items = {
  funnyCode: {
    summary:
      'Nền tảng học trực tuyến dành cho người Việt, giúp người học phát triển kỹ năng lập trình qua các khóa học có cấu trúc, bài học thực hành và lộ trình được AI hỗ trợ.',
    category: 'Nền tảng học trực tuyến',
    media: {
      cover: {
        alt: 'Ảnh bìa FunnyCode Learning Platform với kiểu chữ đỏ nổi bật và các từ khóa về công nghệ học tập',
        caption: 'FunnyCode Learning Platform.',
      },
      images: [
        {
          alt: 'Trang chi tiết khóa học FunnyCode với video xem trước, các phần bài học và thông tin đăng ký',
          caption: 'Bài học được tổ chức thành các phần rõ ràng.',
        },
        {
          alt: 'Danh mục khóa học FunnyCode với tìm kiếm, bộ lọc, đánh giá và giá bán',
          caption: 'Tìm kiếm, lọc, đánh giá và giá khóa học.',
        },
        {
          alt: 'Biểu mẫu lộ trình AI của FunnyCode để tạo lộ trình học tập cá nhân hóa',
          caption: 'Lộ trình AI dựa trên mục tiêu và kỹ năng của người học.',
        },
        {
          alt: 'Màn hình đăng nhập FunnyCode với tùy chọn email và nhà cung cấp bên thứ ba',
          caption: 'Xác thực bằng email và bên thứ ba.',
        },
      ],
    },
    metadata: {
      role: 'Lập trình viên Frontend / Phụ trách tái cấu trúc',
      timeline: '06/2025 - đầu năm 2026',
      teamSize: '5 thành viên frontend',
      platform: 'Ứng dụng web thích ứng (responsive)',
    },
    stackLabels: ['Frontend', 'Hệ thống UI', 'Trạng thái & Dữ liệu', 'Học tập & Thời gian thực'],
    overview: [
      'FunnyCode dẫn dắt người học từ khám phá khóa học đến quá trình học tập thực tiễn có cấu trúc.',
      'Frontend được xây dựng theo hướng feature-based, kết hợp nội dung phong phú, tính năng mua khóa học, theo dõi tiến độ và lộ trình học tập có AI hỗ trợ.',
    ],
    objectives: [
      {
        title: 'Xây dựng hành trình học tập có cấu trúc',
        description: 'Dẫn dắt người học từ khám phá khóa học đến các bài học thực hành.',
      },
      {
        title: 'Hỗ trợ nội dung phong phú',
        description: 'Thống nhất video, tài liệu, slide và bài tập trong một trải nghiệm.',
      },
      {
        title: 'Cá nhân hóa việc học',
        description: 'Tạo lộ trình dựa trên mục tiêu và kỹ năng của từng người học.',
      },
    ],
    features: [
      {
        title: 'Thị trường khóa học',
        description: 'Tìm kiếm, so sánh và mua khóa học.',
      },
      {
        title: 'Nội dung học đa định dạng',
        description: 'Học qua video, tài liệu, slide và bài tập.',
      },
      {
        title: 'Lộ trình học tập có AI hỗ trợ',
        description: 'Xây dựng lộ trình từ mục tiêu và kỹ năng cá nhân.',
      },
      {
        title: 'Tiến độ và tài khoản',
        description: 'Theo dõi khóa học đã sở hữu, tiến độ, điểm và chứng chỉ.',
      },
    ],
    responsibilities: [
      'Dẫn dắt quá trình tái cấu trúc frontend từ Next.js 14 lên Next.js 16 với PPR.',
      'Thống nhất giao diện bằng shadcn/ui và Tailwind CSS 4.',
      'Cải thiện ranh giới render, lượng JavaScript phía client và quá trình phân phối hình ảnh.',
    ],
    challenges: [
      {
        title: 'Cấu trúc khóa học phức tạp',
        problem: 'Khóa học kết hợp nhiều phần và nhiều định dạng bài học.',
        solution:
          'Mô hình hóa các thành phần bài học sao cho dễ tái sử dụng, đồng thời giữ cho giao diện học tập luôn thống nhất.',
      },
      {
        title: 'Trang có lượng nội dung lớn',
        problem: 'Dữ liệu động, nội dung đa phương tiện và bài học dài tạo áp lực lên quá trình phân phối.',
        solution: 'Kết hợp server rendering, truy xuất dữ liệu có chọn lọc và tối ưu hóa nội dung đa phương tiện.',
      },
    ],
    outcomes: [
      { value: '95 / 95', label: 'Hiệu năng / Hỗ trợ tiếp cận', description: 'Đánh giá Lighthouse.' },
      { value: '100', label: 'Những phương pháp hay nhất', description: 'Đánh giá Lighthouse.' },
      { value: '100', label: 'SEO', description: 'Đánh giá Lighthouse.' },
    ],
  },
  reactFioriStyle: {
    summary:
      'Ứng dụng React theo định hướng Fiori để quản lý tệp đính kèm SAP, Business Object và các quy trình quản trị.',
    category: 'Ứng dụng web doanh nghiệp',
    media: {
      cover: {
        alt: 'Ảnh bìa React Fiori Style với kiểu chữ xanh lấy cảm hứng từ SAP và các từ khóa về quy trình doanh nghiệp',
        caption: 'React Fiori Style.',
      },
      images: [
        {
          alt: 'Danh sách tệp đính kèm theo phong cách SAP Fiori với bộ lọc tìm kiếm, metadata tệp và thông tin phiên bản',
          caption: 'Tìm kiếm tệp đính kèm, metadata và quản lý phiên bản.',
        },
        {
          alt: 'Màn hình chi tiết tệp đính kèm hiển thị metadata, thông tin kiểm tra, bản xem trước và lịch sử phiên bản',
          caption: 'Xem trước tệp, nhật ký hoạt động và lịch sử phiên bản.',
        },
        {
          alt: 'Launchpad theo phong cách SAP Fiori với các ô chức năng nghiệp vụ và quản trị',
          caption: 'Launchpad nghiệp vụ và quản trị theo vai trò.',
        },
        {
          alt: 'Bảng điều khiển quản trị theo phong cách SAP Fiori với số liệu tệp đính kèm, đối tượng, người dùng và cấu hình',
          caption: 'Số liệu hệ thống và công cụ quản trị.',
        },
      ],
    },
    metadata: {
      role: 'Người duy trì Frontend / Phụ trách kỹ thuật',
      timeline: '01/2026 - 05/2026',
      teamSize: '2 thành viên frontend',
      platform: 'Ứng dụng web SAP Fiori',
    },
    stackLabels: ['Frontend', 'Giao diện Fiori', 'Trạng thái & Dữ liệu', 'SAP & Triển khai', 'Tích hợp bên ngoài'],
    overview: [
      'React Fiori Style tinh gọn các quy trình xử lý tệp đính kèm trong môi trường SAP.',
      'Cổng thông tin theo vai trò kết nối công cụ nghiệp vụ, quản trị, dịch vụ OData và quy trình triển khai Fiori tự động.',
    ],
    objectives: [
      {
        title: 'Đơn giản hóa thao tác với tệp đính kèm',
        description: 'Giúp việc tìm kiếm, xem trước và quản lý phiên bản trở nên trực quan.',
      },
      {
        title: 'Duy trì trải nghiệm Fiori',
        description: 'Giữ các tương tác SAP quen thuộc xuyên suốt mọi quy trình.',
      },
      {
        title: 'Kết nối tệp với bối cảnh nghiệp vụ',
        description: 'Liên kết tệp đính kèm với Business Object và dữ liệu kiểm tra.',
      },
    ],
    features: [
      {
        title: 'Launchpad theo vai trò',
        description: 'Hiển thị công cụ nghiệp vụ và quản trị theo cấp độ truy cập.',
      },
      {
        title: 'Quản lý tệp đính kèm',
        description: 'Tìm kiếm, tạo, xem trước và quản lý phiên bản tệp đính kèm.',
      },
      {
        title: 'Liên kết Business Object',
        description: 'Kết nối tệp với bối cảnh nghiệp vụ SAP tương ứng.',
      },
      {
        title: 'Công cụ quản trị',
        description: 'Quản lý người dùng, cấu hình, tệp đã xóa và số liệu hệ thống.',
      },
    ],
    responsibilities: [
      'Phụ trách kiến trúc frontend, lựa chọn công nghệ và định hướng giao diện.',
      'Xây dựng ứng dụng React và lớp tích hợp OData v4 dùng chung.',
      'Triển khai kiểm soát truy cập và tự động hóa quá trình triển khai SAP Fiori.',
    ],
    challenges: [
      {
        title: 'Fiori trong React',
        problem: 'Ứng dụng React hiện đại vẫn cần mang lại cảm giác tự nhiên trong hệ sinh thái SAP.',
        solution: 'Kết hợp các control UI5 với cách tổ chức giao diện dựa trên Tailwind.',
      },
      {
        title: 'Tích hợp dịch vụ SAP',
        problem: 'Yêu cầu OData cần bối cảnh SAP và cơ chế bảo vệ CSRF.',
        solution: 'Tập trung cả hai yếu tố trong một lớp Axios dùng chung.',
      },
    ],
    outcomes: [],
  },
  game2048: {
    summary:
      'Trò chơi giải đố 2048 với chuyển động ô số mượt mà, hỗ trợ hoàn tác, lưu điểm cao và điều khiển thân thiện với thiết bị có màn hình cảm ứng.',
    category: 'Trò chơi trên web',
    media: {
      cover: {
        alt: 'Ảnh bìa Game 2048 với kiểu chữ hồng vui nhộn, các ô số và từ khóa tương tác',
        caption: 'Game 2048.',
      },
      images: [
        {
          alt: 'Bàn chơi Game 2048 giữa ván với các ô số chuyển động và điểm số hiện tại',
          caption: 'Lối chơi 4x4 và theo dõi điểm số.',
        },
        {
          alt: 'Bàn chơi khởi đầu của Game 2048 với hai ô số, các nút điều khiển và điểm cao đã lưu',
          caption: 'Điều khiển ván mới, hoàn tác và điểm cao.',
        },
        {
          alt: 'Hộp thoại xác nhận bắt đầu ván mới trong Game 2048',
          caption: 'Xác nhận bắt đầu ván mới.',
        },
        {
          alt: 'Hộp thoại kết thúc trò chơi Game 2048 hiển thị trên bàn đã đầy',
          caption: 'Kết thúc khi không còn nước đi.',
        },
      ],
    },
    metadata: {
      role: 'Lập trình viên độc lập',
      timeline: '11/2024 - 08/2026',
      teamSize: 'Dự án cá nhân',
      platform: 'Trò chơi web thích ứng (responsive)',
    },
    stackLabels: ['Frontend', 'Giao diện & Chuyển động', 'Kiến trúc trò chơi', 'Công cụ & Triển khai'],
    overview: [
      'Game 2048 đưa trò chơi giải đố kinh điển lên máy tính và thiết bị di động với điều khiển cùng phản hồi mượt mà.',
      'Engine TypeScript độc lập với framework giúp tách biệt luật chơi khỏi React và hiệu ứng chuyển động (animations).',
    ],
    objectives: [
      {
        title: 'Giữ nguyên cơ chế kinh điển',
        description: 'Đảm bảo di chuyển, hợp nhất, tính điểm và trạng thái kết thúc luôn nhất quán.',
      },
      {
        title: 'Giữ engine độc lập',
        description: 'Tách luật chơi khỏi quá trình render của React.',
      },
      {
        title: 'Hỗ trợ mọi thiết bị',
        description: 'Cung cấp điều khiển bàn phím và cảm ứng thích ứng.',
      },
    ],
    features: [
      {
        title: 'Lối chơi 4x4 kinh điển',
        description: 'Trượt và hợp nhất các ô để đạt đến 2048.',
      },
      {
        title: 'Lưu điểm lâu dài',
        description: 'Theo dõi điểm hiện tại và lưu thành tích cá nhân tốt nhất.',
      },
      {
        title: 'Hoàn tác và chơi lại',
        description: 'Khôi phục bàn chơi trước đó hoặc bắt đầu lại.',
      },
      {
        title: 'Chuyển động ô số mượt mà',
        description: 'Tạo chuyển động tự nhiên khi ô di chuyển, xuất hiện và hợp nhất.',
      },
    ],
    responsibilities: [
      'Thiết kế kiến trúc engine trò chơi TypeScript độc lập với framework.',
      'Xây dựng giao diện React, đồng bộ store và chuyển động của các ô số.',
      'Cấu hình workspace, quá trình build và triển khai lên GitHub Pages.',
    ],
    challenges: [
      {
        title: 'Tạo chuyển động cho bàn chơi 2D',
        problem: 'Các ô di chuyển và hợp nhất cần ID cố định.',
        solution: 'Ánh xạ các ô có ID cố định duy nhất với layout animation của Framer Motion.',
      },
      {
        title: 'Giữ luật chơi bên ngoài React',
        problem: 'Logic gắn với UI sẽ khiến lối chơi phụ thuộc vào quá trình render.',
        solution: 'Kết nối một store độc lập thông qua các snapshot bất biến.',
      },
    ],
    outcomes: [],
  },
  portfolioV2: {
    summary:
      'Portfolio cá nhân giới thiệu các dự án tiêu biểu, năng lực kỹ thuật và phương thức liên hệ qua một website tĩnh nhanh, thích ứng đa thiết bị.',
    category: 'Website portfolio',
    media: {
      cover: {
        alt: 'Ảnh bìa Portfolio v2 với kiểu chữ lập trình viên màu xanh, nhãn công nghệ, dấu nhắc terminal và họa tiết giao diện web dạng quỹ đạo',
        caption: 'Nhận diện hình ảnh của Portfolio v2.',
      },
      images: [
        {
          alt: 'Trang chủ Portfolio v2 với phần giới thiệu lập trình viên, trạng thái sẵn sàng làm việc và lời kêu gọi xem dự án',
          caption: 'Vai trò, trạng thái sẵn sàng và các dự án tiêu biểu.',
        },
        {
          alt: 'Trang dự án Portfolio v2 hiển thị danh mục case study thích ứng',
          caption: 'Các dự án tiêu biểu dưới dạng case study có cấu trúc.',
        },
        {
          alt: 'Trang kỹ năng Portfolio v2 tổ chức ngôn ngữ, công nghệ frontend, cơ sở dữ liệu và công cụ triển khai',
          caption: 'Năng lực được nhóm theo vai trò trong sản phẩm.',
        },
        {
          alt: 'Trang liên hệ Portfolio v2 với biểu mẫu, địa chỉ email trực tiếp và liên kết mạng lưới nghề nghiệp',
          caption: 'Biểu mẫu liên hệ và các liên kết trực tiếp.',
        },
      ],
    },
    metadata: {
      role: 'Người sáng tạo / Lập trình viên Frontend',
      timeline: '07/2026 - Hiện tại',
      teamSize: 'Dự án cá nhân',
      platform: 'Website tĩnh thích ứng (responsive)',
    },
    stackLabels: ['Frontend', 'Giao diện & Chuyển động', 'Trải nghiệm', 'Triển khai & Dịch vụ'],
    overview: [
      'Portfolio v2 giới thiệu dự án, năng lực và bối cảnh nghề nghiệp của mình qua các luồng khám phá rõ ràng.',
      'Khả năng tạo website tĩnh (Static Site Generation) của Nuxt giúp quá trình phân phối đơn giản, đồng thời hỗ trợ theme, bố cục thích ứng (responsive) và hiệu ứng chuyển động.',
    ],
    objectives: [
      {
        title: 'Trình bày dự án đầy đủ bối cảnh',
        description: 'Chuyển các dự án thành những case study ngắn gọn, có cấu trúc.',
      },
      {
        title: 'Làm rõ định hướng nghề nghiệp',
        description: 'Truyền đạt trọng tâm, năng lực và trạng thái sẵn sàng làm việc.',
      },
      {
        title: 'Giữ quá trình phân phối gọn nhẹ',
        description: 'Sử dụng tạo website tĩnh và triển khai tự động.',
      },
    ],
    features: [
      {
        title: 'Case study dự án',
        description: 'Trình bày bối cảnh dự án qua một bố cục có thể tái sử dụng.',
      },
      {
        title: 'Danh mục thích ứng',
        description: 'Khám phá các dự án tiêu biểu trên nhiều kích thước màn hình.',
      },
      {
        title: 'Theme và chuyển động thích ứng',
        description: 'Kết hợp chế độ sáng/tối được lưu lại với những chuyển động tinh tế.',
      },
      {
        title: 'Luồng liên hệ được bảo vệ',
        description: 'Dùng Netlify Forms ở deployment chính và Formspree với Turnstile ở alias external.',
      },
    ],
    responsibilities: [
      'Thiết kế và xây dựng portfolio bằng Nuxt, Vue và Tailwind CSS.',
      'Tạo hệ thống hình ảnh, mô hình dữ liệu dự án và các case study có thể tái sử dụng.',
      'Triển khai luồng liên hệ được bảo vệ và quá trình triển khai website tĩnh tự động.',
    ],
    challenges: [
      {
        title: 'Case study nhất quán',
        problem: 'Các dự án khác nhau cần dùng chung một mô hình trình bày linh hoạt.',
        solution: 'Tạo schema có kiểu dữ liệu rõ ràng và các phần chi tiết có thể tái sử dụng.',
      },
      {
        title: 'Bảo vệ biểu mẫu liên hệ công khai',
        problem: 'Cơ chế chống spam cần hoạt động mà không gây gián đoạn.',
        solution: 'Chọn xác thực Cloudflare Turnstile với Netlify Forms hoặc Formspree tùy theo môi trường triển khai.',
      },
    ],
    outcomes: [],
  },
  ghVault: {
    summary:
      'Công cụ quản lý tài nguyên tự host dành cho cá nhân, tối ưu ảnh ngay trên trình duyệt, lưu tệp vào các repository GitHub và tạo URL jsDelivr bất biến được ghim theo commit SHA.',
    category: 'Công cụ lập trình / Quản lý tài nguyên',
    media: {
      cover: {
        alt: 'Ảnh bìa Vault thể hiện mô hình lưu trữ tài nguyên bằng GitHub và phân phối qua CDN bất biến',
        caption: 'Nhận diện hình ảnh của Vault.',
      },
      images: [
        {
          alt: 'Bảng điều khiển Vault hiển thị hai vault dùng GitHub làm nơi lưu trữ, cùng số lượng tệp, dung lượng, trạng thái và thao tác tạo hoặc mở vault',
          caption: 'Quản lý các vault GitHub độc lập và theo dõi dung lượng tại một nơi.',
        },
        {
          alt: 'Hộp thoại Preview and Convert của Vault hiển thị ảnh xem trước, kích thước, lựa chọn WebP, thanh chất lượng và thao tác tải lên',
          caption: 'Thay đổi kích thước, định dạng và chất lượng ảnh ngay trên trình duyệt trước khi tải lên vault.',
        },
        {
          alt: 'Màn hình Personal Images trong Vault hiển thị thông tin repository GitHub, dung lượng, danh sách tệp có tìm kiếm và thao tác xem trước, sao chép hoặc mở tài nguyên CDN',
          caption: 'Tìm kiếm tệp đã tải lên và truy cập URL jsDelivr bất biến qua các thao tác nhanh.',
        },
        {
          alt: 'Màn hình đăng nhập Vault với trường tên người dùng và mật khẩu dành cho quyền truy cập cá nhân được bảo vệ',
          caption: 'Màn hình đăng nhập tối giản bảo vệ công cụ quản lý vault riêng tư.',
        },
      ],
    },
    metadata: {
      role: 'Lập trình viên Full-stack',
      timeline: '09/2026 - Hiện tại',
      teamSize: 'Dự án cá nhân',
      platform: 'Ứng dụng web serverless',
    },
    stackLabels: ['Ứng dụng', 'Giao diện', 'Trải nghiệm phía máy khách', 'Dữ liệu & Xác thực', 'Lưu trữ & Phân phối'],
    overview: [
      'Vault xuất phát từ một nhu cầu lặp lại khi làm các dự án frontend: nền tảng host tĩnh chỉ cache tài nguyên công khai trong thời gian ngắn, tính vào quota triển khai hoặc yêu cầu import qua build để có tên tệp hash không thuận tiện cho URL dùng lại.',
      'Ứng dụng tạo các vault độc lập dùng repository GitHub làm nơi lưu trữ, tối ưu ảnh trên trình duyệt, commit tệp qua GitHub REST API và trả về URL jsDelivr lâu dài được ghim theo commit SHA.',
      'Mô hình triển khai riêng tư cho một người dùng giữ thông tin xác thực và GitHub token ở phía server, đồng thời cung cấp giao diện tập trung để quản lý tài nguyên dùng lại cho nhiều dự án.',
    ],
    objectives: [
      {
        title: 'Giảm chi phí host media',
        description:
          'Dùng repository GitHub và jsDelivr thay vì tiêu thụ quota lưu trữ và băng thông của nền tảng triển khai ứng dụng.',
      },
      {
        title: 'Tạo URL tài nguyên an toàn với cache',
        description:
          'Ghim mỗi URL CDN vào đúng commit SHA để tệp đã tải lên luôn bất biến và không trả về phiên bản cũ.',
      },
      {
        title: 'Tối ưu trước khi tải lên',
        description:
          'Đổi kích thước, định dạng và chất lượng ảnh trên trình duyệt trước khi tải lên, giảm tiêu thụ dung lượng repository hoặc giới hạn payload serverless.',
      },
      {
        title: 'Đơn giản hóa quá trình tự triển khai',
        description:
          'Cung cấp ứng dụng serverless cho nhu cầu cá nhân mà không cần hạ tầng object storage chuyên dụng hay cơ sở dữ liệu người dùng.',
      },
    ],
    features: [
      {
        title: 'Vault được lưu trữ trên GitHub',
        description: 'Tạo các vault độc lập gắn với repository cá nhân hoặc tổ chức được cấp tự động.',
      },
      {
        title: 'Tối ưu ảnh phía client',
        description:
          'Chuyển đổi PNG và JPEG, WEBP, điều chỉnh chất lượng và đổi kích thước theo tỷ lệ cố định bằng Canvas API.',
      },
      {
        title: 'Phân phối CDN bất biến',
        description: 'Tạo URL jsDelivr được ghim theo commit SHA trả về sau mỗi lần tải tệp lên GitHub.',
      },
      {
        title: 'Trình duyệt tệp có tìm kiếm',
        description:
          'Duyệt tệp bằng phân trang vô hạn, tìm kiếm debounce, sắp xếp, xem trước và sao chép URL CDN bằng một thao tác.',
      },
      {
        title: 'Tải lên không ghi đè tên tệp',
        description: 'Phát hiện tên tệp trùng và tự thêm hậu tố số thay vì ghi đè tài nguyên hiện có.',
      },
      {
        title: 'Bảo vệ quyền truy cập riêng tư',
        description:
          'Kết hợp cookie phiên JWT đã ký với cơ chế giới hạn tần suất đăng nhập (rate limit) theo IP bằng Netlify Edge.',
      },
    ],
    responsibilities: [
      'Thiết kế và triển khai toàn bộ ứng dụng SvelteKit full-stack cùng giao diện thích ứng.',
      'Xây dựng kiến trúc mỗi vault tương ứng với một repository và tích hợp GitHub REST API.',
      'Xây dựng luồng chuyển đổi ảnh, đổi kích thước, điều chỉnh chất lượng và theo dõi tiến trình tải lên bằng Canvas.',
      'Thiết kế mô hình dữ liệu Drizzle và Turso cho vault cùng metadata tệp bất biến.',
      'Triển khai bảo vệ phiên JWT, xử lý rate limit của GitHub và cấu hình triển khai Netlify.',
    ],
    challenges: [
      {
        title: 'Tránh tài nguyên CDN bị lỗi thời',
        problem: 'Việc dùng lại cùng tên và đường dẫn có thể khiến người dùng nhận phiên bản cũ đã được cache dài hạn.',
        solution:
          'Tạo mọi URL jsDelivr bằng đúng commit SHA do GitHub trả về, giúp mỗi phiên bản tải lên trở thành một tài nguyên bất biến.',
      },
      {
        title: 'Payload serverless bị giới hạn dung lượng',
        problem: 'Mã hóa Base64 làm request lớn hơn trong khi nền tảng serverless giới hạn chặt kích thước body.',
        solution:
          'Áp dụng giới hạn 4 MB ở cả client và server, đồng thời cho phép tối ưu ảnh trên trình duyệt trước khi tải lên.',
      },
      {
        title: 'Xử lý khả năng hỗ trợ ảnh của trình duyệt',
        problem:
          'Khả năng xuất ảnh từ Canvas khác nhau giữa các trình duyệt và định dạng không hỗ trợ có thể thất bại âm thầm.',
        solution:
          'Kiểm tra các định dạng được hỗ trợ khi ứng dụng chạy, đồng thời ẩn/khóa các tùy chọn chuyển đổi không khả dụng trước khi bắt đầu xử lý.',
      },
      {
        title: 'Bảo vệ một công cụ serverless riêng tư',
        problem: 'Ứng dụng cần kiểm soát truy cập mà không tạo thêm cơ sở dữ liệu người dùng hay phiên có trạng thái.',
        solution:
          'Dùng cookie JWT HttpOnly đã ký cho phiên stateless và Netlify Edge Function để giới hạn tần suất đăng nhập (rate limit) theo IP.',
      },
    ],
    outcomes: [],
  },
} satisfies Record<ProjectId, ProjectTranslation>;

export default {
  seo: {
    title: 'Dự án - Lượng Đức Trọng',
    detailTitle: '{project} - Lượng Đức Trọng',
    description: 'Các dự án web, di động và kỹ thuật tiêu biểu của Lượng Đức Trọng.',
  },
  gallery: {
    eyebrow: 'Dự án tiêu biểu',
    firstLine: 'Lập trình',
    secondLine: 'Web.',
    note: 'Những dự án kết hợp giao diện chỉn chu với nền tảng kỹ thuật đáng tin cậy và có khả năng mở rộng.',
    archive: 'Danh mục dự án',
    count: '{count} dự án',
  },
  card: {
    viewLabel: 'Xem dự án {project}',
    technologies: 'Các công nghệ được sử dụng',
    viewCaseStudy: 'Xem dự án',
  },
  statuses: {
    completed: 'Đã hoàn thành',
    inDevelopment: 'Đang phát triển',
    maintained: 'Đang được duy trì',
    archived: 'Đã lưu trữ',
  },
  detail: {
    allProjects: 'Tất cả dự án',
    liveDemo: 'Xem demo',
    sourceCode: 'Xem mã nguồn',
    quickHighlights: 'Điểm nổi bật',
    overview: 'Tổng quan dự án',
    objectives: 'Mục tiêu',
    features: 'Tính năng chính',
    challengesAndDecisions: 'Thách thức và quyết định',
    challenge: 'Thách thức',
    decision: 'Quyết định',
    contribution: 'Đóng góp của mình',
    information: 'Thông tin dự án',
    facts: 'Thông tin chính',
    role: 'Vai trò',
    timeline: 'Thời gian',
    team: 'Đội ngũ',
    platform: 'Nền tảng',
    technologyStack: 'Công nghệ sử dụng',
    resources: 'Tài nguyên dự án',
    readDocumentation: 'Đọc tài liệu',
  },
  media: {
    previewImage: 'Xem trước ảnh {index}: {description}',
    showImage: 'Hiển thị ảnh {index}: {description}',
    thumbnails: 'Ảnh thu nhỏ của dự án',
    dialogTitle: 'Xem trước hình ảnh dự án',
    dialogDescription: 'Dùng nút trước, sau hoặc phím mũi tên để duyệt hình ảnh dự án.',
    previousImage: 'Ảnh trước',
    nextImage: 'Ảnh tiếp theo',
  },
  items,
};

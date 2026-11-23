// copy.jsx — KO / EN content dictionary for the SparrowLabs site

const COPY = {
  ko: {
    lang: 'ko',
    brand: { ko: '참새연구소', en: 'SparrowLabs' },
    nav: { about: 'about', products: 'products', notes: 'notes', contact: 'contact' },
    hero: {
      tagline: 'small tools, real life.',
      titleA: '일상의 작은 불편함을',
      titleB: '푸는',
      titleAccent: '실용적인',
      titleC: '소프트웨어.',
      lede:
        '참새연구소는 거창한 문제보다 매일 마주치는 사소한 마찰을 줄이는 ' +
        '모바일 앱을 만드는 1인 소프트웨어 스튜디오입니다. 기획부터 개발, 배포까지 혼자 합니다.',
      meta: [
        { k: 'studio', v: 'SparrowLabs' },
        { k: 'established', v: '2026' },
        { k: 'based in', v: 'Seoul, KR' },
        { k: 'focus', v: 'iOS · Android' },
      ],
    },
    about: {
      section: 'about',
      paragraphs: [
        '참새는 작지만 어디에나 있고, 사람 곁에 가장 가까이 있는 새입니다. ' +
          '참새연구소는 그 이름처럼 크고 거창한 문제보다 일상에서 자주 마주치는 ' +
          '작고 소소한 불편함을 해결하는 소프트웨어를 만듭니다.',
        '소프트웨어 엔지니어로 오래 일해왔고, 직접 겪은 불편함을 직접 고치는 방식으로 ' +
          '참새연구소를 시작했습니다. 1인 스튜디오로 운영하며, 도구 하나하나를 천천히, ' +
          '그러나 끝까지 다듬는 것을 지향합니다.',
      ],
    },
    products: {
      section: 'products',
      intro: '현재 세 개의 앱을 만들고 있으며, 앞으로 조금씩 늘려갈 계획입니다.',
      items: [
        {
          idx: '01 / app',
          title: 'TinySSH',
          role: 'for developers · sysadmins',
          status: '개발 · Google Play출시',
          copy:
            '모바일에서 SSH 터미널에 빠르게 접속할 수 있는 앱. ' +
            '간결한 UI로 서버 연결의 번거로움을 줄였습니다. ' +
            '언제 어디서나 손 안에서 서버를 점검하세요.',
        },
        {
          idx: '02 / app',
          title: 'RemoteHub',
          role: 'for families · helpers',
          status: '개발 중 · 출시 예정',
          copy:
            '가족이나 지인의 스마트폰 화면을 원격으로 보며 통화할 수 있는 앱. ' +
            '“엄마, 거기 버튼 눌러봐”라고 말할 필요가 없어집니다. ' +
            '기술에 익숙하지 않은 가족을 곁에서 도와주고 싶은 모든 사람을 위한 도구.',
        },
        {
          idx: '03 / game',
          title: 'Piece Out',
          role: 'for puzzle lovers',
          status: 'Google Play 출시 · App Store 출시 예정',
          href: 'pieceout/?lang=ko',
          link: '지원 페이지 —>',
          copy:
            '3D 블록을 화살표 방향으로 하나씩 빼내는 힐링 퍼즐 게임. ' +
            '12개 테마 월드, 960개 스테이지에서 블록으로 만든 동물과 물건을 해체합니다. ' +
            '누구나 바로 시작할 수 있지만 갈수록 머리를 쓰게 됩니다.',
        },
      ],
    },
    trust: {
      section: 'notes',
      intro:
        '아직 초기 단계입니다. 출시 후 사용자 후기, 스크린샷, 데모, ' +
        '커뮤니티 반응을 이 자리에 차근차근 채워나갈 예정입니다.',
      cells: [
        { k: '// 01 — reviews', v: '앱 다운로드 수 / 사용자 후기 — TBD' },
        { k: '// 02 — media', v: '스크린샷 및 데모 영상 — TBD' },
        { k: '// 03 — coverage', v: '언론 노출 · 커뮤니티 반응 — TBD' },
      ],
    },
    contact: {
      section: 'contact',
      titleA: '앱을 써보고,',
      titleB: '짧게라도 의견을 들려주세요.',
      paragraph:
        '버그 제보, 기능 제안, 협업 문의 모두 환영합니다. ' +
        '한 사람이 운영하는 만큼, 모든 메일을 직접 읽고 답신드립니다.',
      rows: [
        {
          k: '// email',
          v: 'rockman0320+sparrowlabs@gmail.com',
          cta: 'mail —>',
          disabled: false,
        },
        {
          k: '// newsletter',
          v: '신규 앱 출시 알림 — 준비 중',
          cta: 'subscribe —>',
          disabled: true,
        },
        {
          k: '// feedback',
          v: '앱 내 피드백 폼 또는 이메일로 전달해 주세요.',
          cta: 'feedback —>',
          disabled: false,
        },
      ],
    },
    footer: {
      left: ['참새연구소 · SparrowLabs', 'Seoul, KR'],
      right: '© 2026 SparrowLabs. All rights reserved.',
    },
  },

  en: {
    lang: 'en',
    brand: { ko: 'SparrowLabs', en: '참새연구소' },
    nav: { about: 'about', products: 'products', notes: 'notes', contact: 'contact' },
    hero: {
      tagline: 'small tools, real life.',
      titleA: 'Practical software',
      titleB: 'for the small',
      titleAccent: 'frictions',
      titleC: 'of daily life.',
      lede:
        'SparrowLabs is a one-person software studio that builds mobile apps to ' +
        'smooth over the small, everyday frictions—rather than chase grand problems. ' +
        'Planning, development, and release are done by one person.',
      meta: [
        { k: 'studio', v: 'SparrowLabs' },
        { k: 'established', v: '2026' },
        { k: 'based in', v: 'Seoul, KR' },
        { k: 'focus', v: 'iOS · Android' },
      ],
    },
    about: {
      section: 'about',
      paragraphs: [
        'A sparrow is small, but it’s everywhere—the bird that lives closest to people. ' +
          'Like its namesake, SparrowLabs builds software that addresses the small, ' +
          'ordinary inconveniences of daily life rather than grand problems.',
        'I’ve worked as a software engineer for a long time, and started SparrowLabs ' +
          'by fixing the frictions I’d personally felt. As a one-person studio, I take ' +
          'my time to polish each tool—slowly, but all the way through.',
      ],
    },
    products: {
      section: 'products',
      intro: 'Three apps so far, with more to come over time.',
      items: [
        {
          idx: '01 / app',
          title: 'TinySSH',
          role: 'for developers · sysadmins',
          status: 'Available on Google Play',
          copy:
            'A mobile SSH terminal app for quick server access. ' +
            'A clean UI removes the friction of getting on a server. ' +
            'Check on your machines from the palm of your hand, anywhere.',
        },
        {
          idx: '02 / app',
          title: 'RemoteHub',
          role: 'for families · helpers',
          status: 'Coming soon to Google Play',
          copy:
            'View a family member or friend’s phone screen remotely while on a call. ' +
            'No more “Mom, tap that button there.” ' +
            'A tool for anyone helping people who aren’t comfortable with technology.',
        },
        {
          idx: '03 / game',
          title: 'Piece Out',
          role: 'for puzzle lovers',
          status: 'On Google Play · App Store coming soon',
          href: 'pieceout/?lang=en',
          link: 'support —>',
          copy:
            'A relaxing 3D puzzle game: slide blocks out the way their arrows point, one by one. ' +
            'Take apart animals and objects built from blocks across 12 themed worlds and 960 stages. ' +
            'Easy to pick up, and it keeps you thinking.',
        },
      ],
    },
    trust: {
      section: 'notes',
      intro:
        'Still early days. Once the apps ship, this section will fill up with ' +
        'reviews, screenshots, demos, and community responses.',
      cells: [
        { k: '// 01 — reviews', v: 'Downloads & user reviews — TBD' },
        { k: '// 02 — media', v: 'Screenshots & demo videos — TBD' },
        { k: '// 03 — coverage', v: 'Press · community response — TBD' },
      ],
    },
    contact: {
      section: 'contact',
      titleA: 'Try the apps,',
      titleB: 'and share a thought—even a brief one.',
      paragraph:
        'Bug reports, feature requests, partnership inquiries—all welcome. ' +
        'As a one-person studio, every email is read and replied to personally.',
      rows: [
        {
          k: '// email',
          v: 'rockman0320+sparrowlabs@gmail.com',
          cta: 'mail —>',
          disabled: false,
        },
        {
          k: '// newsletter',
          v: 'New app launch alerts — in progress',
          cta: 'subscribe —>',
          disabled: true,
        },
        {
          k: '// feedback',
          v: 'Send via the in-app feedback form or email.',
          cta: 'feedback —>',
          disabled: false,
        },
      ],
    },
    footer: {
      left: ['SparrowLabs · 참새연구소', 'Seoul, KR'],
      right: '© 2026 SparrowLabs. All rights reserved.',
    },
  },
};

window.COPY = COPY;

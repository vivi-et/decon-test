// =============================== MAIN CATEGORIES ===============================
const main = categoryList = [
  { korname: '로고&아이덴티티', engname: 'logo' },
  { korname: '웹&앱 디자인', engname: 'web' },
  { korname: '비즈니스&광고', engname: 'business' },
  { korname: '아트&일러스트', engname: 'art' },
  { korname: '패키지&라벨', engname: 'packages' },
  { korname: '북&매거진', engname: 'book' },
];

const logo = [
  { korname: '로고 디자인', engname: 'design' },
  { korname: '브랜드 아이덴티티', engname: 'identity' },
  { korname: '브랜드 가이드', engname: 'guide' },
  { korname: '소셜미디어 팩', engname: 'social' },
  { korname: '명함', engname: 'card' },
  { korname: '문구류', engname: 'stationery ' },
];

const web = [
  { korname: '웹페이지 디자인', engname: 'webpage' },
  { korname: '렌딩 페이지 디자인', engname: 'landing' },
  { korname: '아이콘 또는 버튼', engname: 'iconbutton' },
  { korname: '앱 디자인', engname: 'app' },
  { korname: '소셜미디어 페이지', engname: 'social' },
  { korname: '배너광고', engname: 'banner ' },
  { korname: '기타 웹 또는 앱 디자인', engname: 'etc ' },
];

const business = [
  { korname: '엽서,전단지 또는 인쇄물', engname: 'bbbbbbbbbbbbb' },
  { korname: '포스터', engname: 'bbbbbbbbbbbbb' },
  { korname: '인포그래픽', engname: 'bbbbbbbbbbbbb' },
  { korname: '소책자', engname: 'bbbbbbbbbbbbb' },
  { korname: '자동차 등 랩핑', engname: 'bbbbbbbbbbbbb' },
  { korname: '간판', engname: 'bbbbbbbbbbbbb' },
  { korname: '파워포인트 템플릿', engname: 'bbbbbbbbbbbbb' },
  { korname: '메뉴판', engname: 'bbbbbbbbbbbbb' },
  { korname: '앨범표지', engname: 'bbbbbbbbbbbbb' },
  { korname: '기타 비즈니스 또는 광고', engname: 'bbbbbbbbbbbbb' },
  { korname: '옷&사물 디자인', engname: 'bbbbbbbbbbbbb' },
  { korname: '상품', engname: 'bbbbbbbbbbbbb' },
  { korname: '티셔츠', engname: 'bbbbbbbbbbbbb' },
  { korname: '의류', engname: 'bbbbbbbbbbbbb' },
  { korname: '컵', engname: 'bbbbbbbbbbbbb' },
  { korname: '상표', engname: 'bbbbbbbbbbbbb' },
  { korname: '기타 의류 또는 상품', engname: 'bbbbbbbbbbbbb' },
];

const art = [
  { korname: '일러스트레이션 또는 그래픽', engname: 'bbbbbbbbbbbbb' },
  { korname: '카드 또는 초대장', engname: 'bbbbbbbbbbbbb' },
  { korname: '캐리커쳐 또는 캐릭터', engname: 'bbbbbbbbbbbbb' },
  { korname: '타투', engname: 'bbbbbbbbbbbbb' },
  { korname: '3D', engname: 'bbbbbbbbbbbbb' },
  { korname: '기타 예술 또는 일러스트레이션', engname: 'bbbbbbbbbbbbb' },
];

const packages = [
  { korname: '제품 포장', engname: 'bbbbbbbbbbbbb' },
  { korname: '제품 라멜', engname: 'bbbbbbbbbbbbb' },
  { korname: '기타 제품 포장 또는 라벨', engname: 'bbbbbbbbbbbbb' },
];

const book = [
  { korname: '책표지', engname: 'bbbbbbbbbbbbb' },
  { korname: '잡지표지', engname: 'bbbbbbbbbbbbb' },
  { korname: '조판', engname: 'bbbbbbbbbbbbb' },
  { korname: '이미지로 조판', engname: 'bbbbbbbbbbbbb' },
  { korname: '기타 책 또는 잡지', engname: 'bbbbbbbbbbbbb' },
];

const error = ['error'];
module.exports = (name) => {
  const categoryList = [];

  switch (name) {
    case 'main':
      return main;
    case 'logo':
      return logo;
    case 'web':
      return web;
    case 'business':
      return business;
    case 'art':
      return art;
    case 'packages':
      return packages;
    case 'book':
      return book;

    default:
      return error;
  }
};

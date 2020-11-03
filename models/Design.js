const { Sequelize } = require('sequelize');

const db = require('../config/db');

const Design = db.define('design', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  experience: {
    type: Sequelize.INTEGER,
    unique: true,
    comment: '디자인 관련 주문해본 경험, 1 경험자, 2 비경험자',
  },
  duration: {
    type: Sequelize.INTEGER,
    comment: '계약 형태 1단기 2장기',
  },
  projectname: {
    type: Sequelize.STRING,
    comment: '프로젝트명',
  },
  projectdesc: {
    type: Sequelize.STRING,
    comment: '프로젝트 설명',
  },
  projecttype: {
    type: Sequelize.INTEGER,
    comment: '프로젝트 유형 1 일회성, 2 진행중, 3 복잡한',
  },
  files1: {
    type: Sequelize.JSON,
    comment: '참조 파일',
  },
  files2: {
    type: Sequelize.JSON,
    comment: '영감을 주는 파일',
  },
  links: {
    type: Sequelize.JSON,
    comment: '첨부 링크들',
  },
  resulttype: {
    type: Sequelize.JSON,
    comment: '결과물 형식 PDF, PNG 등',
  },
  resultunit: {
    type: Sequelize.STRING,
    comment: '결과물 규격',
  },
  width: {
    type: Sequelize.INTEGER,
    comment: '결과물 x',
  },
  height: {
    type: Sequelize.INTEGER,
    comment: '결과물 y',
  },
  dpi: {
    type: Sequelize.INTEGER,
    comment: 'DPI',
  },
  tools: {
    type: Sequelize.JSON,
    comment: '작업 도구 (포토샵 등)',
  },
  options: {
    type: Sequelize.JSON,
    comment: '옵션',
  },
  designerexperience: {
    type: Sequelize.INTEGER,
    comment: '디자이너 경험도 1상 2중 3하',
  },
  requiredtime: {
    type: Sequelize.INTEGER,
    comment: '프로젝트 기간 1 = 48시간내',
  },
  paymenttype: {
    type: Sequelize.INTEGER,
    comment: '1 시간단위, 2 고정가격',
  },
  pricemin: {
    type: Sequelize.INTEGER,
    comment: '최소가격',
  },
  pricemax: {
    type: Sequelize.INTEGER,
    comment: '최대가격',
  },
  personnel: {
    type: Sequelize.INTEGER,
    comment: '필요한 프리랜서수',
  },
  questions: {
    type: Sequelize.JSON,
    comment: '질문',
  },

});

module.exports = Design;

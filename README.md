# Week1.5_Assignment_Clickable-Image 🖼

1. [프로젝트 소개 🚀](#1-프로젝트-소개-)
2. [구현 기능 📍](#2-구현-기능-)
3. [프로젝트 구조 🗂](#3-프로젝트-구조-)
4. [프로젝트 설치 및 실행 ✨](#4-프로젝트-설치-및-실행-)

<br/>

[🌍 배포 링크](https://61fa9dd6badce4007a80d5d5--keen-joliot-80986a.netlify.app/)

<br />

## 1. 프로젝트 소개 🚀

- 개요 : 원티드 프론트엔드 프리온보딩 2기 1번째 개인 과제
- 주제 : 집꾸미기 게시판 기능 중 이미지 좌표에 따라 상품 정보가 나오는 페이지 구현
- 기간 : 2022.01.30 ~ 2022.02.03

<br />

## 2. 구현 기능 📍

- 페이지 최상단 이벤트 배너 구현
- 네비게이션바 구현 (페이지 이동 및 이벤트 배너 닫기 시 페이지 최상단으로 이동)
- 게시글 타이틀, 게시 날짜, 해시태그, 보관함, 댓글 구현
- 이미지 내 제품 위치에 API 좌표를 활용해 아이콘 구현
  - 아이콘 클릭시 툴팁 생성 (제품 정보)
  - 아이콘 클릭시 하단 서브 이미지 체크
  - 이미지를 클릭하거나 닫기 버튼을 누르면 체크 해제

<br />

## 3. 프로젝트 구조 🗂

```bash
src
├── API
├── Components
│   ├── Common
│   │    ├── EventBar
│   │    └── Navigation
│   └── Main
│        ├── Contents
│        │   ├── ImagePointList
│        │   ├── SubImageList
│        │   └── ToolTip
│        ├── Title
│        └── index.tsx
├── Hooks
│   └── useProduct
├── Pages
├── Styles
│   └── GlobalStyles
├── Types
├── App.tsx
└── index.tsx
```

<br/>

## 4. 프로젝트 설치 및 실행 ✨

<br/>

1. Git Clone

```plaintext
$ git clone https://github.com/sangseophwang/Week1.5_Personal_Assignment-Clickable_Image.git
```

2. 프로젝트 패키지 설치

```plaintext
$ yarn install
```

3. 프로젝트 실행

```plaintext
$ yarn start
```

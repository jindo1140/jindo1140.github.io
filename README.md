# 박진원 포트폴리오

경력기술서에 기반한 반응형 정적 포트폴리오. 빌드 과정이나 외부 라이브러리가 필요 없습니다.

## 미리보기

이 폴더에서 `python -m http.server 4173`을 실행하고 http://localhost:4173 에 접속합니다. `index.html`을 직접 열어도 표시됩니다.

## GitHub Pages 배포

1. GitHub에 **jindo1140** 계정으로 로그인합니다.
2. 이름이 정확히 **jindo1140.github.io**인 공개 저장소를 만듭니다.
3. 이 폴더의 `index.html`, `styles.css`, `script.js`, `favicon.svg`, `.nojekyll` 및 `assets` 폴더를 저장소 최상위에 업로드합니다.
4. 저장소 **Settings → Pages → Build and deployment → Deploy from a branch**를 선택합니다.
5. 브랜치는 **main**, 폴더는 **/ (root)**로 선택하고 저장합니다.
6. 배포 완료 후 https://jindo1140.github.io 에서 확인합니다.

배포에는 해당 계정의 저장소 생성 / 관리 권한이 필요합니다. GitHub CLI 사용 시 `gh auth status`로 현재 계정을 확인합니다.

## 수정

- 소개, 경력, 프로젝트 본문: `index.html`
- 색상, 타이포그래피, 반응형 레이아웃: `styles.css`
- 프로젝트 분류 필터: `script.js`

프로젝트별 ‘문제 해결 과정 보기’ 등을 누르면 상세 설명을 펼칠 수 있습니다. 프레임워크 개념도의 업무 유형 선택과 프로젝트 분류 필터를 지원합니다. 휴대폰 화면, 키보드 탐색, 동작 줄이기 설정에 대응합니다. 한글 Pretendard 폰트는 `assets`에서 직접 제공하며 라이선스도 함께 포함되어 있습니다. 외부 폰트 서버나 분석 도구에 의존하지 않습니다.

이번 시안은 프레임워크 설계와 AI 활용을 중심으로 구성했습니다. Impeccable과 Taste Skill의 정보 구조를 참고하고, 사용자가 요청한 Apple Liquid Glass 및 Dimillian의 SwiftUI Liquid Glass 원칙을 웹용 CSS로 적용했습니다. SwiftUI 네이티브 API를 실행하는 웹사이트는 아닙니다. 정적 파일로 GitHub Pages에 배포할 수 있습니다.

Glass UI 스타일은 `glass.css`에서 관리합니다. 투명한 탐색 및 조작 표면, 배경 흐림, 밝은 가장자리와 눌림 반응을 사용합니다. 본문은 불투명도를 높여 가독성을 확보했습니다. 배경 흐림 미지원 환경, 투명도 줄이기, 대비 높이기 및 동작 줄이기 설정에는 대체 스타일이 적용됩니다.

한글 폰트는 Pretendard를 자체 제공하며 라이선스는 `assets/FONT-LICENSE.txt`에 있습니다. 사진은 사용하지 않았고 S-Frame 설명용 개념도를 직접 구현했습니다. 실제 업무 화면 또는 프레임워크 실행 결과는 아닙니다.

`assets/career-profile.txt`는 제공된 경력기술서 원문입니다. 포트폴리오의 경력기술서 다운로드 링크에서 받을 수 있습니다.

참고: https://developer.apple.com/documentation/technologyoverviews/liquid-glass 및 https://github.com/Dimillian/Skills/tree/main/swiftui-liquid-glass

자료 기준: 제공된 2026년 10월 28일 경력기술서. 성과는 해당 문서의 기재 내용이며 GitHub 공개 코드로 검증한 결과가 아닙니다. 시스템 도식은 설명용이며 회사의 실제 업무 화면과 코드, 원본 데이터는 포함하지 않았습니다. 연락처는 제공되지 않아 GitHub 링크로 연결했습니다.

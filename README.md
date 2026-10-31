# 하루계산기

글자수 세기, 만 나이, D-day, 평수 변환을 브라우저에서만 처리하는 정적 사이트입니다.

https://a01075696193-oss.github.io/haru-calc/

`node test.js`로 계산 로직을 확인합니다. canonical, og:image, `sitemap.xml`, `robots.txt`는 `build_pages.py`의 `BASE_URL`(끝에 슬래시 없음)을 기준으로 `python3 build_pages.py`가 다시 만듭니다.

`main`에 푸시하면 `.github/workflows/pages.yml`이 사이트 파일만 GitHub Pages에 배포합니다.

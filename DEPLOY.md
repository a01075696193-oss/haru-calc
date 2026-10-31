# 하루계산기 배포 가이드

## 0. 배포 전 (필수)
1. `build_pages.py`에서 `BASE_URL`을 실제 주소로 바꾸기 (예: `https://<user>.github.io/haru-calc` 또는 `https://haru-calc.pages.dev`)
2. `python3 build_pages.py` 실행 (sitemap, canonical, og:image 주소를 다시 만듦)
3. `contact.html`, `privacy.html`의 TODO 이메일을 실제 이메일로 바꾸기
4. `node test.js` → "16 tests passed" 확인

## A. GitHub Pages
```bash
cd haru-calc
git init && git add . && git commit -m "launch"
gh repo create haru-calc --public --source=. --push      # gh auth login 먼저 필요
gh api -X POST repos/{owner}/haru-calc/pages -f "source[branch]=main" -f "source[path]=/"
```
주소: `https://<user>.github.io/haru-calc/` (반영까지 1~2분). 404.html은 자동으로 적용됩니다.

## B. Cloudflare Pages (권장: 빠르고 무료, 깔끔한 주소)
```bash
npx wrangler login
npx wrangler pages deploy . --project-name haru-calc --branch main
```
주소: `https://haru-calc.pages.dev`. 404.html은 자동으로 적용됩니다.

## 배포 후
- Google Search Console과 네이버 서치어드바이저에 사이트를 등록하고 `sitemap.xml`을 제출
- AdSense 승인 후 `<!-- AD SLOT -->` 자리의 `.ad` div를 광고 코드로 교체하고, 루트에 `ads.txt` 추가

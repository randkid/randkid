<p align="center">
  <img src="https://raw.githubusercontent.com/randkid/Randkid/master/logo.svg" width="200"></img>
</p>
<h1 align="center">
  Randkid
</h1>

## 목적
- 게임 NPC용 데이터 생성
- 봇 프로필 데이터 생성
- 프로필의 체계적인 분류
## 목표
- 가능한 한 많은 프로필 항목
- 빠른 생성
- 무작위적인 생성
## 목표가 아닌 것
- 모든 경우의 수 대응
## 프로젝트 구조
- 각 항목(Material)은 별개의 레포지토리에서 관리
- import/export로 연결
- 기본적으로 Deno 환경에 맞춰 개발
## 자료 대상
- 2000~2010년 출생 한국인
- 최소 2 시그마(95.4%) 이상 범위의 데이터를 사용; 범위 외의 데이터는 처리 속도 향상을 위해 삭제 가능
## 구현된 항목
- 성별
- 혈액형
- (성별) => 이름
- 성
- 생년월일
- (성별, 생년월일) => 신체 (키, 몸무게 등)

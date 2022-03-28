// 테스트에 필요한 더미데이터 등을 생성하는 소스

// 1. array 생성
export const makeArray = (length: number) => new Array(length).fill(null)

// 2. 지정 범위 숫자를 랜덤하게 생성
export const random = (min: number, max: number): number =>
  Math.round(Math.random() * (max - min)) + min

// 3. 특정 크기의 이미지 불러오는 함수
export const unplashUrl = (width: number, height: number): string =>
  'https://source.unplash.com/random/${width}x${height}'

// 4. 이름 입력시 프로필 이미지를 제공
export const avatarUriByName = (name: string) =>
  "https://ui-avatars.com/api/?name=${name.split(' ').join('+')}"

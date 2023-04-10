# Crypted Frontend 과제

## Tabview Application 구현

### 1. [CryptedTab.tsx](src%2Fcomponent%2Ftab%2FCryptedTab.tsx), [CryptedTabHeader.tsx](src%2Fcomponent%2Ftab%2FCryptedTabHeader.tsx) 구현
#### Tab 기능을 가진 컴포넌트를 구현하세요
### [설명]
#### 예시된 CryptedTab, CryptedTabHeader 간 function은 정의만 해두었지만 원하시는 방법이 있으면 변경하셔도 무관합니다.
#### 단 header click 이벤트 선택에 따라 화면은 변경되어야 합니다.
#### 제약조건은 없으며 3. 문제인 무한스크롤에 대한 scroll 유지 되어야 하는 조건도 없습니다.

### 2. [TabOrigin.tsx](src%2Fcomponent%2Ftab%2FTabOrigin.tsx) 구현
#### 리스트 뷰 화면 구현 하세요
### [설명]
#### [transaction.json](src%2Fdata%2Ftransaction.json) 내용을 리스트 뷰 형태로 출력
#### 뷰형식은 아래와 같이 출력 바랍니다. (디자인은 자유)
```
   (성공/실패) : status <br/>
   (토큰심볼) : symbol <br/>
   (금액) : amount <br/>
   (from) : fromAddressForDisplay <br/>
   (to) : toAddressForDisplay <br/>
```

### 3. [TabInfinityScroll.tsx](src%2Fcomponent%2Ftab%2FTabInfinityScroll.tsx) 구현
#### 무한 스크롤 리스트 뷰 구현하세요
### [설명]
#### UI는 2번과 동일하게 구현하셔도 됩니다. 
#### 단 window scroll 이 bottom 이동시 동일한 데이터 로드하는 무한 스크롤을 구현되어야 합니다. 
#### library 사용제한은 없으며 데이터는 제공된 [transaction.json](src%2Fdata%2Ftransaction.json) 10개의 리스트가 다시 화면에 계속 추가 되면 됩니다.

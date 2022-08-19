# nodejs_study

nodejs-express와 mysql을 이용해 crud기능 공부

db.js는 정보때문에 template만 올림


* db 회원 테이블

| user_id(PK) | username | password | email |
| --- | --- | --- | --- |
| bigint | varchar(15) | varchar(255) | varchar(255) |

-----
* 로그인 세션 구현

사용자에 따라 기능 제한(수정, 삭제 권한)

exports.renderList = function (data, authStatusUI = '<a href="/user/login">login</a>', checkUser, checkAdmin) {
  let resultHTML;
  resultHTML = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="../css/style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>UserList</title>
    </head>
    <body>
      <h2 id="title">회원관리 프로그램</h2>
      <div style="display : ${checkUser!==undefined ? "none" : ""};">회원관리 목록을 조회하려면 로그인을 하십시오.</div>
      <div>회원은 본인 정보만 수정만 가능, 관리자는 모든 회원 수정,삭제 그리고 회원 추가까지 가능</div>
      <div id="user-login-area">${authStatusUI}</div>
        <table border="1" style="display : ${checkUser!==undefined ? "" : "none"};">
            <th scope="col">회원번호</th>
            <th scope="col">이름</th>
            <th scope="col">이메일</th>
            `;
  data.forEach((element) => {
    console.log(element.user_id);
    resultHTML += `<tr>
        <td>${element.user_id}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td><a href="/topic/update/${element.user_id}">${element.user_id === checkUser||checkAdmin ? "수정" : ""}</a></td>
        <td style="display : ${checkAdmin ? "" : "none"};"> <form action="/topic/delete_process/${element.user_id}" method="post">
        <input type="submit" value="delete">
</form></td>
        </tr>
        `;
  });
  resultHTML += `
    </table>
    <a href="/topic/create" style="display : ${checkUser!==undefined && checkAdmin ? "" : "none"};">Create User</a>
</body>
</html>`;
  return resultHTML;
};

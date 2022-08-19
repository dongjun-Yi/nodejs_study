exports.renderList = function (data, authStatusUI = '<a href="/auth/login">login</a>', checkUser) {
  console.log(checkUser);
  let resultHTML;
  resultHTML = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>UserList</title>
    </head>
    <body>
    ${authStatusUI}
        <table border="1">
            <th>회원번호</th>
            <th>이름</th>
            <th>비밀번호</th>
            <th>이메일</th>
            `;
  data.forEach((element) => {
    console.log(element.user_id);
    resultHTML += `<tr>
        <td>${element.user_id}</td>
        <td>${element.username}</td>
        <td>${element.password}</td>
        <td>${element.email}</td>
        <td><a href="/topic/update/${element.user_id}">${element.user_id === checkUser ? "수정" : ""}</a></td>
        <td style="display : ${element.user_id===checkUser? "" : "none"};"> <form action="/topic/delete_process/${element.user_id}" method="post">
        <input type="submit" value="delete">
</form></td>
        </tr>
        `;
  });
  resultHTML += `
    </table>
    <a href="/topic/create">Create</a>
</body>
</html>`;
  return resultHTML;
};

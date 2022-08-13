exports.renderUserUpdate = function (id, name, email) {
  let resultHTML;
  resultHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>update</title>
    </head>
    <body>
    <form action="/topic/update_process/${id}" method="post">
        <p><input type="text" name="username" placeholder="${name}"></p>
        <p>
          <input type="password" name="password">
        </p>
        <p><input type="text" name="email" placeholder="${email}"></p>
        <p>
          <input type="submit">
        </p>
      </form>
    `;
  return resultHTML;
};
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(id, username, password) values (0, ?, ?)',
        select:'select username,password from user'
    }
}

module.exports = sqlMap;
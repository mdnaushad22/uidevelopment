function userInfo() {
    const userId = process.env.TEST_USER_ID;
    const userName = process.env.TEST_USER_NAME;
    const userEmail = process.env.TEST_USER_EMAIL;
    return {
        id: userId,
        name: userName,
        email: userEmail
    };
}

export default userInfo;
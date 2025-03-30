function setAuthToken(token,expireInMinute){
    const expirationalDate=new Date().getTime()+expireInMinute*60000;
    const tokenData={
        token:token,
        expiration:expirationalDate
    }
    localStorage.setItem('authToken',JSON.stringify(tokenData))
}
setAuthToken('abc1234',30);
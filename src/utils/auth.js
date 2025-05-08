const tokenName = 'itinero-token'

export const setToken = (token) => {
    localStorage.setItem(tokenName, token)
}

export const getToken = () => {
    return localStorage.getItem(tokenName)
}

export const removeToken = () => {
    localStorage.removeItem(tokenName)
}

export const getUserFromToken = () => {
    // 1. Get token fom locall storage
    const token = getToken()
    // 2. Check if the token was defined, if not, return null
    if (!token) return null
    //  3. If the user exists, we need to split(.) the token and get the
    //  second string, this represents the user object
    const payload = token.split('.')[1]
    // 4. Decode that data to get the user object
    const payloadAsObject = JSON.parse(atob(payload))
    // 5. Check that the expiry date is valid
    const timeNow = Date.now()
    const expTime = payloadAsObject.exp
    // 6. If the token is expired - the expiry time(in seconds) is smaller than 
    // the time right now(in millseconds), remove it from storage, return null
    if (expTime < timeNow) {
        removeToken()
        return null
    }
    // 7. If the token is not expired, return user object 
    return payloadAsObject.user
}
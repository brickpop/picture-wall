export function isServer() {
    return typeof window === 'undefined'
}

export function throwIfNotBrowser() {
    if (typeof window == "undefined") throw new Error("This code can only run on the web browser")
}

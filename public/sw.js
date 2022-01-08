self.addEventListener("install",e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([".",
           
           "",
            "./airbnb.png"]);
       }).then(_ => this.skipWaiting())
    );
});
self.addEventListener("fetch",e => {
    // console.error(`Intercepting fetch request for: ${e.request.url}`);
});
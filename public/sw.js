let catchData = "appV1";


self.addEventListener("install",(event) =>{
    event.waitUntil(
        caches.open(catchData).then((cache)=>{
            cache.addAll([

                "static/js/bundle.js",
                "static/js/main.chunk.js",
                "static/js/0.chunk.js",
                "/index.html",
                "/static/js/vendors~main.chunk.js",
                "/favicon.ico",
                "/",
                "/users",
                "/manifest.json",
                "/logo192.png",
                "/testData",
                "/about"


            ])
        })

    )
})

self.addEventListener("fetch",(event) =>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((res)=>{
                if(res){
                    return res
                }
                //api caches

                let requestUrl= event.request.clone();

                return fetch(requestUrl)
    
            })
    
        )

    }

})


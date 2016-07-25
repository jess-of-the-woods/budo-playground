# budo-playground
learning budo

I had this error with firefox:

[The connection to ws://localhost:35729/livereload was interrupted while the page was loading.](https://github.com/livereload/livereload-js/issues/40)

Inserting the following code (from above link) worked.
```javascript
window.addEventListener('beforeunload', function(window){
    return function(){
        if (window.LiveReload){
            window.LiveReload.connector.socket.close();
        }
    }
}(window));
```

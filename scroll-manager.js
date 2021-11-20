//Resets the scroll position when the page is reloaded
history.scrollRestoration = 'manual';

var observer = new IntersectionObserver(function (entries) {
    const entry = entries[0];

    if (entry.isIntersecting === true) {
        document.getElementById(entry.target.id).notifyVisible();
    }
}, {
    root: document.getElementById('sections'),
    rootMargin: '-48px 0px 0px 0px',
    threshold: [1]
});

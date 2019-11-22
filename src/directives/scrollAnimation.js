const DEFAULT_THRESHOLD = 0.5;

export default {
    bind(el, binding) {
        el.classList.add('before-intersect');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('intersect');
                    entry.target.classList.remove('before-intersect');
                    observer.unobserve(entry.target);
                }
            })
        }, {threshold: binding.value || DEFAULT_THRESHOLD})

        observer.observe(el);
    }
}
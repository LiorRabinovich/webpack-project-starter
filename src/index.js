/* Scss */
import './scss/main.scss'

/* Javascripts */
import Main from './js/Main.js';

class Index {
    constructor() {
        this.ready(() => {
            new Main();
        });
    }

    ready(fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
}

new Index();
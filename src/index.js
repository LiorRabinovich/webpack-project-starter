/* Javascripts */
import Main from './js/Main.js';
import Utilities from './js/Utilities.js';

/* Scss */
import(/* webpackChunkName: "[request]" */ './scss/platforms/'+Utilities.getPlatform()+'.scss');

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
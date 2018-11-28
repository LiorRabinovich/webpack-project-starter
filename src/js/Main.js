class Main {
    constructor() {
        this.buttonSound = new Audio('/sounds/button.mp3');
        this.$listItems = document.getElementsByTagName('li');

        this.addEventsListener();
    }

    addEventsListener() {
        let self = this;
        Array.from(this.$listItems).forEach(function ($element) {
            $element.addEventListener('click', function () {
                self.buttonSound.pause();
                self.buttonSound.currentTime = 0;
                self.buttonSound.play();
            });
        });
    }

}

export default Main;
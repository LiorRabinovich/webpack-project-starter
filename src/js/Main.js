import buttonSound from '../sounds/button.mp3';
class Main {
    constructor() {
        this.buttonSound = new Audio(buttonSound);
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
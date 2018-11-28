const Utilities = {
    getPlatform() {
        if(window.innerWidth < 960){
            return 'mobile';
        }
        return 'desktop';
    }
}

export default Utilities;
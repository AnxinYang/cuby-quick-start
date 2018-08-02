const View = {
    saveViewportSize() {
        let viewportSize = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        CubY.storeValue('viewportSize', viewportSize);
    },
    resetMainContentSectionSize(size) {
        let mainContentSection = root.select('#mainContentSection');
        let width = size.width <= 800?'100%':'66.66%';
        mainContentSection.style('width', width);
    }
};

export default View;
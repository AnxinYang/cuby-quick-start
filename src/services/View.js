const View = {
    saveViewportSize() {
        let viewportSize = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        CubY.storeValue('viewportSize', viewportSize);
    },
    resetMainContentSectionSize(size) {
        let contentContainer = root.select('#contentContainer');
        let mainContentSection = contentContainer.select('#mainContentSection');
        let secondContentSection = contentContainer.select('#secondContentSection');
        if(size.width<=800){
            mainContentSection.style({
                flexGrow: 7,
            });
            secondContentSection.style({
                flexGrow: 3,
            });
            contentContainer.style({
                flexDirection: 'column'
            })
        } else{
            mainContentSection.style({
                flexGrow: 8,
            });
            secondContentSection.style({
                flexGrow: 2,
            });
            contentContainer.style({
                flexDirection: 'row'
            })
        }

    }
};

export default View;
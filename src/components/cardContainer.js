const CARD_STYLE = {
    "background": "white",
    "height": "98%",
    "width": "98%",
    "left": "0",
    "top": "0",
    "position": "absolute",
    "right": "0",
    "bottom": "0",
    "margin": "auto",
    "boxShadow": "lightgrey 0px 0px 1px 0px"
};

let card = {
    createCard: function (id) {
        let card = CubY.createElement('div', id)
            .style(CARD_STYLE);
        return card;
    }
};
export default card;
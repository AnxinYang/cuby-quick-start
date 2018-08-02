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
    "boxShadow": "0 0 4px 2px lightgrey"
};

let card = {
    createCard: function (id) {
        let card = CubY.createElement('div', id)
            .style(CARD_STYLE);
        return card;
    }
};
export default card;
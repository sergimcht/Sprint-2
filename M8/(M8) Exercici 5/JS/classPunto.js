class Punto {
    constructor(pX, pY) {
        this.pX = pX;
        this.pY = pY;
    }
    distanciaCentros(pX2, pY2) {
        return (Math.sqrt((pX2-this.pX)**2 + (pY2-this.pY)**2));
    }
    sonConcentricos(pX2, pY2) {
        if ((pX2 - this.pX == 0) && (pY2 - this.pY == 0)) {
            return "son"
        } else {
            return "no son"
        }
    }
}
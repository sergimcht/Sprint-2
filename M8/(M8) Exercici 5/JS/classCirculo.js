class Circulo {
    constructor (center, r) {
        this.center = center;
        this.r = r;
    }
    distanciaCentros(circulo2) {
        return (Math.sqrt((circulo2.center.pX-this.center.pX)**2 + (circulo2.center.pY-this.center.pY)**2));
    }
    igualdadCirculos(circulo2) {
        if ((circulo2.center.pX - this.center.pX == 0) && (circulo2.center.pY - this.center.pY == 0) && (circulo2.r - this.r == 0)) {
            return "son"
        } else {
            return "no son"
        }
    }
    sonConcentricos(circulo2) {
        if ((circulo2.center.pX - this.center.pX == 0) && (circulo2.center.pY - this.center.pY == 0)) {
            return "son"
        } else {
            return "no son"
        }
    }
    igualdadRadio(circulo2) {
        if (circulo2.r - this.r == 0) {
            return "tienen"
        } else {
            return "no tienen"
        }
    }
    sonTangentes(circulo2) {
        if ((this.distanciaCentros(circulo2) == (circulo2.r + this.r)) || (this.distanciaCentros(circulo2) == Math.abs(circulo2.r - this.r))) {
            return "son"
        } else {
            return "no son"
        }
    }
    sonSecantes(circulo2) {
        if ((this.distanciaCentros(circulo2) < (circulo2.r + this.r)) && (this.distanciaCentros(circulo2) > Math.abs(circulo2.r - this.r))) {
            return "son"
        } else {
            return "no son"
        }
    }
    seTocan(circulo2) {
        if ((this.distanciaCentros(circulo2) <= (circulo2.r + this.r)) && (this.distanciaCentros(circulo2) >= Math.abs(circulo2.r - this.r))) {
            return "se"
        } else {
            return "no se"
        }
    }
}
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var vehicule_1 = require("../vehicule");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marque, couleur, prix, moteur) {
        return _super.call(this, marque, couleur, prix, moteur) || this;
    }
    return Camion;
}(vehicule_1.Vehicule));
exports.Camion = Camion;
//# sourceMappingURL=camion.js.map
"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function Inject(injectId) {
    return function (target, propertyKey) {
        var userService = Reflect.getMetadata("design:key", target, propertyKey); //获取原有的UserService类型
        var user = new userService();
    };
}
function get(path) {
    return function (target, propertyKey, descriptor) {
        Reflect.defineMetadata('path', path, target, propertyKey); //将路径绑定在原型的方法上 
    };
}
function Controller(path) {
    return function (targetClass) {
        Object.keys(targetClass.prototype).forEach(function (method) {
            var mePath = Reflect.getMetadata('path', targetClass.prototype, method);
            console.log('mePath', mePath);
        });
    };
}
var UserService = /** @class */ (function () {
    function UserService() {
    }
    return UserService;
}());
//属性--方法参数--方法--类
var AuthController = function () {
    var _classDecorators = [Controller('auth')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _userService_decorators;
    var _userService_initializers = [];
    var _login_decorators;
    var AuthController = _classThis = /** @class */ (function () {
        function AuthController_1() {
            this.userService = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _userService_initializers, void 0));
        }
        AuthController_1.prototype.login = function () { };
        return AuthController_1;
    }());
    __setFunctionName(_classThis, "AuthController");
    (function () {
        _userService_decorators = [Inject('userService')];
        _login_decorators = [get('/login')];
        __esDecorate(_classThis, null, _login_decorators, { kind: "method", name: "login", static: false, private: false, access: { has: function (obj) { return "login" in obj; }, get: function (obj) { return obj.login; } } }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _userService_decorators, { kind: "field", name: "userService", static: false, private: false, access: { has: function (obj) { return "userService" in obj; }, get: function (obj) { return obj.userService; }, set: function (obj, value) { obj.userService = value; } } }, _userService_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        AuthController = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthController = _classThis;
}();

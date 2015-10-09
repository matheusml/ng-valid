# ngValid

An AngularJS directive to trigger a method when an input is valid (or invalid).

## The problem

This inside a controller:

```javascript
if (form.inputName.$valid) {
    doSomething()
}
```

and also this:

```javascript
$scope.$watch('inputName', function(value) {
    if (isValid(value)) {
        doSomething()
    }
});
```

## The solution

```html
<input type="text" ng-model="inputName" ng-valid="doSomething()" required>
```

## How to install it

- Bower:

```bash
bower install --save ng-valid
```

- HTML:

```html
<script src="bower_components/angular.js"></script>
<script src="bower_components/ng-valid/ng-valid.min.js"></script>
```

- AngularJS:

```javascript
var app = angular.module('app', ['ngValid']);
```

## How to use it

Just add the ```ng-valid``` attribute and a method to be called when the input is valid:

```html
<input type="text" ng-model="inputName" ng-valid="doSomething()" required>
```

You can also add the optional attribute ```ng-invalid``` to invoke a method when the input is not valid:

```html
<input type="text" ng-model="inputName" ng-valid="doSomething()" ng-invalid="doSomethingElse()" required>
```

## License

See the [LICENSE](https://github.com/matheusml/ng-valid/blob/master/LICENSE) file.

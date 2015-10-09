# ngValid

An AngularJS directive to trigger a method when an input is valid (or invalid).

## The problem

This inside a controller:

```javascript
if (form.inputName.$valid) {
	// doSomething()
}
```

and also this:

```javascript
$scope.$watch('inputName', function(value) {
	if (isValid(value)) {
		// doSomething()
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
<script src="bower_components/ng-valid/app.js"></script>
```

- AngularJS:

```javascript
var app = angular.module('app', ['ngValid']);
```

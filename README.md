<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# itercumean

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [arithmetic mean][arithmetic-mean].

<section class="intro">

The cumulative [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:cumulative_arithmetic_mean" align="center" raw="\bar{x}_n = \frac{1}{n} \sum_{i=0}^n x_i" alt="Equation for the cumulative arithmetic mean."> -->

```math
\bar{x}_n = \frac{1}{n} \sum_{i=0}^n x_i
```

<!-- <div class="equation" align="center" data-raw-text="\bar{x}_n = \frac{1}{n} \sum_{i=0}^n x_i" data-equation="eq:cumulative_arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@409c465a46090d66ce8ea7980f14e8f28a95e9be/lib/node_modules/@stdlib/stats/iter/cumean/docs/img/equation_cumulative_arithmetic_mean.svg" alt="Equation for the cumulative arithmetic mean.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import itercumean from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-cumean@deno/mod.js';
```

#### itercumean( iterator )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a cumulative [arithmetic mean][arithmetic-mean].

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@deno/mod.js';

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itercumean( arr );

var m = it.next().value;
// returns 2.0

m = it.next().value;
// returns 1.5

m = it.next().value;
// returns 2.0

m = it.next().value;
// returns -0.25

m = it.next().value;
// returns -1.2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **all** future iterations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import runif from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-uniform@deno/mod.js';
import itercumean from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-cumean@deno/mod.js';

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a cumulative mean:
var it = itercumean( rand );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'mean: %d', v.value );
    }
    if ( v.done ) {
        break;
    }
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-iter/cumidrange`][@stdlib/stats/iter/cumidrange]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative mid-range.</span>
-   <span class="package-name">[`@stdlib/stats-iter/cusum`][@stdlib/stats/iter/cusum]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a cumulative sum.</span>
-   <span class="package-name">[`@stdlib/stats-iter/mean`][@stdlib/stats/iter/mean]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean over all iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-cumean.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-cumean

[test-image]: https://github.com/stdlib-js/stats-iter-cumean/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/stats-iter-cumean/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-cumean/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-cumean?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-cumean.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-cumean/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-iter-cumean/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-iter-cumean/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-iter-cumean/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-iter-cumean/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-cumean/main/LICENSE

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/cumidrange]: https://github.com/stdlib-js/stats-iter-cumidrange/tree/deno

[@stdlib/stats/iter/cusum]: https://github.com/stdlib-js/stats-iter-cusum/tree/deno

[@stdlib/stats/iter/mean]: https://github.com/stdlib-js/stats-iter-mean/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->

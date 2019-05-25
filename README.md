# Quantecon (the functional approach)

This libary is a porting of some of the functions from the amazing [quantecon](https://lectures.quantecon.org) library, onto typescript! I would be using them for side projects but feel free to contribute. Because of this I will try and port them in a "functional" way because it serve my coding style better. For this I will be using the [umbrella ☂️](https://github.com/thi-ng/umbrella) library in particular `/transducers-stats` and `/math`.

**Disclaimer:** I will be writing the formulas in a `ts` method for two reasons:

- Mimic the libary
- Configuring laTex 'round here seems not possible in finite time

## Von Neumann Growth Model

The objective variables are:

- α: expansion rate
- β: the interest factor
- x: optimal intensities
- p: prices

Assume as input `A` and `B`, two matrix of the quantity (`a`) of goods (`i`) consumed/produced by agent (`j`).

Then according to the upper definition:

```ts
import * as m from "@thi.ng/matrices";

const consumption = m.mulM(x, A);
const production = m.multM(x, B);
const const = m.multM(A, p)
const revenues = m.multM(B, p)
```

We would see how this solves into a pure game theory problem, specifically a zero-sum two player game.

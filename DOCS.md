## scrollanimation directive

v-scrollanimation adds 2 classes to every element it is bound to
1. before-intersect (the class it has before intersection occurs)
2. intersect (the class it has after intersection occurs)

Intersection threshold is 0.5 by default

## FadeTranslateTransition

Fade in left on enter
Fade out left on leave
Control mode and duration by passing arguments in like a normal transition

<FadeTranslateTransition duration='0.2s' mode='out-in'>

# Lagrange algorithm

 [![Node.js CI](https://github.com/alejandro-kid/lagrange-api/actions/workflows/api-tests.yaml/badge.svg)](https://github.com/alejandro-kid/lagrange-api/actions/workflows/api-tests.yaml)

## Problema

Hace poco te peleaste con tu profesor de matemáticas. No sólo ese empollón te exige el conocimiento de todos los teoremas, ¡sino que se ha vuelto un devoto constructivista! Después de que recitaras de memoria el teorema de Lagranges de la suma de cuatro cuadrados, ahora te exige un programa informático para obtener dicha descomposición, para así ver que realmente entiendes un tema. ¡Qué bajón!Recuerdas bien el teorema. Cualquier entero positivo se puede descomponer en una suma de cuatro cuadrados de enteros. No parece muy difícil... Pero después de una discusión, tu profesor quiere sangre. Al parecer va a probar tu programa con números extremadamente grandes... Y más vale que tu programa termine de funcionar antes del descanso: no querrás suspender, ¿verdad?Consejo: las pruebas aleatorias incluyen 20 números de hasta $2^128$ y 20 números de hasta $2^1024$.

## Solución

La solución encontrada utilizando bignumber.js satisface la premisa de poder manejar numeros grandes, esta sigue sin ser óptima, o al menos en menos del tiempo $O(log n)^2$ si se implementa el algortimo de Rabin y Shallit. El problema sigue siendo el manejo de los grandes números y hacer dichos calculos optimamente. Por lo que el tiempo de respuesta del algortimo estará acotada por la complejidad de éstas expuesta anteriormente. Podrían haberse implementado métodos matemáticos basado en todos los nuevos algortimos y teoremas que partieron de dicho Teorema de Lagrange de la suma de cuatro cuadrados, y de hecho se utilizaron en pruebas algortimos auxiliares para calcular rápidamente soluciones a la ecuación de Pell $x^2 - d *y^2 = 1$, a la ecuacion de Cornacchia $x^2 + d* y^2 = p$ , para encontrar una raíz cuadrada de $n mod p$ usando el algortimo de Tonelli-Shanks cuando el numero que se quiere descomponer es de la forma $4^k *(8* m + 7)$ , por solo citar tres ejemplos, pero el problema sigue siendo el mismo, el manejo óptimo de grandes números. Qué garantiza el algoritmo actual? Dar una solucion manejando grandes números pero siempre basado en el tiempo dado anteriormente, puesto que mientras mayor sea dicho número mayor será el tiempo de espera.

## Vida real?

En una aplicación de la vida real cuando se requiere una solucion para este tipo de problemas usualmente se usa un leguage cómodo en el cual se pueda manejar este tipo de datos con facilidad, dígase C/C++ o Python. Lo óptimo en una aplicacion de la vida real sería hacer dicho algortimo en C/C++, por ejemplo, compilar dicha solucion y desplegarlo donde mismo se despliega el servicio, posteriormente a este se realiza un wrapper, que permita hacer una llamada a dicha compilacion en C/C++ para luego ser utilizado el resultado de dicha consulta en el endpoint en cuestión.

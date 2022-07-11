- [«pi](function.pi.md)
- [rad2deg »](function.rad2deg.md)

- [PHP Manual](index.md)
- [Математичні функції](ref.math.md)
-   Зведення в ступінь

# pow

(PHP 4, PHP 5, PHP 7, PHP 8)

pow — Зведення в ступінь

### Опис

**pow**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$num`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$exponent`): int\|float\|object

Повертає 'num', зведене до ступеня 'exponent'.

> **Примітка**:
>
> Замість функції можна використовувати оператор
> [\*\*](language.operators.arithmetic.md).

### Список параметрів

`num`
підстава

`exponent`
Показник ступеня

### Значення, що повертаються

Основа `num` зведена в ступінь `exponent`. Якщо обидва аргументи -
невід'ємні цілі та результат може бути представлений як ціле, то
повертається результат типу int. В іншому випадку результат буде
типу float.

### Приклади

**Приклад #1 Приклади використання **pow()****

`<?phpvar_dump(pow(2, 8)); //int(256)echopow(-1,20); // 1echo pow(0, 0); // 1echo pow(10, -1); // 0.1echo pow(-1, 5.5); // NAN?> `

### Примітки

> **Примітка**:
>
> Функція перетворює всі вхідні значення, навіть нескалярні,
> числовим, що може призвести до "дивних" результатів.

### Дивіться також

- [exp()](function.exp.md) - Обчислює рівень числа e
- [sqrt()](function.sqrt.md) - Квадратний корінь
- [bcpow()](function.bcpow.md) - Зведення в ступінь чисел з
довільною точністю
- [gmp_pow()](function.gmp-pow.md) - Зводить число до ступеня

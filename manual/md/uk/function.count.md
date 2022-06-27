- [«compact](function.compact.md)
- [current »] (function.current.md)

- [PHP Manual](index.md)
- [Функції для роботи з масивами](ref.array.md)
- Підраховує кількість елементів масиву або Countable об'єкті

# count

(PHP 4, PHP 5, PHP 7, PHP 8)

count — Підраховує кількість елементів масиву або
[Countable](class.countable.md) об'єкт

### Опис

**count**([Countable](class.countable.md)\|array `$value`, int `$mode`
u003d **`COUNT_NORMAL`**): int

Підраховує всі елементи масиву, якщо використовується масив. Якщо
використовується об'єкт, який реалізує інтерфейс
[Countable](class.countable.md), функція повертає результат
виконання методу [Countable::count()](countable.count.md).

### Список параметрів

`value`
Масив чи об'єкт, що реалізує [Countable](class.countable.md).

`mode`
Якщо необов'язковий параметр `mode` встановлено на **`COUNT_RECURSIVE`**
(або 1), **count()** рекурсивно підраховуватиме кількість елементів
масиву. Це особливо корисно для підрахунку всіх елементів багатовимірних
масивів.

**Застереження**
**count()** вміє визначати рекурсію для уникнення нескінченного циклу,
але при кожному виявленні виводить помилку рівня **`E_WARNING`** (у
випадку, якщо масив містить себе більше одного разу) і повертає
більше, ніж очікувалося.

### Значення, що повертаються

Повертає кількість елементів у `value`. До PHP 8.0.0, якщо параметр
не був ні масивом (array), ні об'єктом (object), що реалізує інтерфейс
[Countable](class.countable.md), поверталося `1`, якщо значення
параметра `value` не було **`null`**, у цьому випадку поверталось `0`.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------------------------------------|
| 8.0.0 | **count()** тепер викидає [TypeError](class.typeerror.md), якщо переданий неприпустимий обчислюваний тип до параметра `value`. |
| 7.2.0 | **count()** тепер буде видавати попередження про недопустимі обчислювані типи, передані в параметр `value`. |

### Приклади

**Приклад #1 Приклад використання **count()****

` <?php$a[0] u003d 1;$a[1] u003d 3;$a[2] u003d 5;var_dump(count($a));$b[0]  u003d 7;$b[5] u003d 9;$b[10] u003d 11;var_dump(count($b));?> `

Результат виконання цього прикладу:

int(3)
int(3)

**Приклад #2 Приклад використання **count()** з незліченним типом
(Поганий приклад - не робіть так) **

` <?php$b[0]  u003d 7;$b[5]  u003d 9;$b[10] u003d 11;var_dump(count($b));var_dump(count(null));var_dump(count(false) ));?> `

Результат виконання цього прикладу:

int(3)
int(0)
int(1)

Результат виконання цього прикладу в PHP 7.2:

int(3)

Warning: count(): Parameter must be an array or an object that implements Countable in … on line 12
int(0)

Warning: count(): Parameter must be an array or an object that implements Countable in … on line 14
int(1)

Результат виконання цього прикладу в PHP 8:

int(3)

Error error: Uncaught TypeError: count(): Argument #1 ($var) повинен бути Type Countable .. on line 12

**Приклад #3 Приклад рекурсивного використання **count()****

` <?php$food u003d array('fruits' u003d> array('orange', 'banana', 'apple'),              'veggie' u003d> array('carrot','') // рекурсивний підрахунокvar_dump(count($food, COUNT_RECURSIVE));// звичайний підрахунокvar_dump(count($food));?> `

Результат виконання цього прикладу:

int(8)
int(2)

**Приклад #4 Об'єкт, що реалізує інтерфейс
[Countable](class.countable.md)**

`<?phpclass CountOfMethods implements Countable{    private function someMethod()    {    }   public function count(): int| }}$obj u003d new CountOfMethods();var_dump(count($obj));?> `

Результат виконання цього прикладу:

int(2)

### Дивіться також

- [is_array()](function.is-array.md) - Визначає, чи є
змінна масивом
- [isset()](function.isset.md) - Визначає, чи було встановлено
змінна значенням, відмінним від null
- [empty()](function.empty.md) - Перевіряє, чи порожня змінна
- [strlen()](function.strlen.md) - Повертає довжину рядка
- [is_countable()](function.is-countable.md) - Перевірити, що
вміст змінної є лічильним значенням
- [Массиви](language.types.array.md)

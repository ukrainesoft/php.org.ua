- [«is_resource](function.is-resource.md)
- [is_string »](function.is-string.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Перевіряє, чи є змінна скалярним значенням

#is_scalar

(PHP 4 \>u003d 4.0.5, PHP 5, PHP 7, PHP 8)

is_scalar — Перевіряє, чи є змінна скалярним значенням

### Опис

**is_scalar**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Перевіряє, чи ця змінна є скалярним значенням.

Скалярні змінні – це змінні з типами int, float, string та
bool. Типи array, object, resource і null є скалярними.

> **Примітка**:
>
> **is_scalar()** не вважає змінні типу resource скалярними, так
> як ресурси є абстрактними типами даних, що в даний час
> час засновані цілому типі. Не варто покладатися на цю деталь
> реалізації, оскільки може змінитися.

> **Примітка**:
>
> **is_scalar()** не вважає NULL скаляром.

### Список параметрів

`value`
Перевірена змінна.

### Значення, що повертаються

Повертає **`true`**, якщо `value` є скалярним значенням, або
**`false`** інакше.

### Приклади

**Приклад #1 Приклад використання **is_scalar()****

` <?phpfunction show_var($var){    if (is_scalar($var)) {       echo $var; } else {       var_dump($var); }}$pi u003d 3.1416;$proteins u003d array("hemoglobin", "cytochrome c oxidase", "ferredoxin");show_var($pi);show_var($proteins)?> `

Результат виконання цього прикладу:

3.1416
array(3) {
[0]u003d>
string(10) "hemoglobin"
[1]u003d>
string(20) "cytochrome c oxidase"
[2]u003d>
string(10) "ferredoxin"
}

### Дивіться також

- [is_float()](function.is-float.md) - Перевіряє, чи є
змінна числом із плаваючою точкою
- [is_int()](function.is-int.md) - Перевіряє, чи є змінна
цілим числом
- [is_numeric()](function.is-numeric.md) - Перевіряє, чи є
змінна числом або рядком, що містить число
- [is_real()](function.is-real.md) - Псевдонім is_float
- [is_string()](function.is-string.md) - Перевіряє, чи є
змінним рядком
- [is_bool()](function.is-bool.md) - Перевіряє, чи є
змінна булева
- [is_object()](function.is-object.md) - Перевіряє, чи є
змінна об'єктом
- [is_array()](function.is-array.md) - Визначає, чи є
змінна масивом

- [«ErrorException::\_\_construct](errorexception.construct.md)
- [Error»](class.error.md)

- [PHP Manual](index.md)
- [ErrorException](class.errorexception.md)
- Отримує серйозність виключення

#ErrorException::getSeverity

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

ErrorException::getSeverity — Отримує серйозність виключення

### Опис

final public **ErrorException::getSeverity**(): int

Повертає серйозність виключення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рівень серйозності виключення.

### Приклади

**Приклад #1 Приклад використання **ErrorException::getSeverity()****

` <?phptry {    throw new ErrorException("Повідомлення про виключення", 0,E_USER_ERROR);} catch(ErrorException $e) {    echo "Серьез        $e->getSeverity(); var_dump($e->getSeverity() u003du003du003d E_USER_ERROR);}?> `

Результатом виконання цього прикладу буде щось подібне:

Серйозність цього винятку дорівнює: 256
bool(true)

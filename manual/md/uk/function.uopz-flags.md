- [«uopz_extend](function.uopz-extend.md)
- [uopz_function »](function.uopz-function.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Отримати або встановити прапори для функції чи класу

#uopz_flags

(PECL uopz 2 \>u003d 2.0.2, PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_flags — Отримати або встановити прапори для функції або класу

### Опис

**uopz_flags**(string `$function`, int `$flags` u003d PHP_INT_MAX): int

**uopz_flags**(string `$class`, string `$function`, int `$flags` u003d
PHP_INT_MAX): int

Отримати або встановити прапори для запису функції або класу під час
виконання

### Список параметрів

`class`
Ім'я класу

`function`
Назва функції. Якщо заданий `class` і порожній рядок передано як `function`,
**uopz_flags()** отримує або встановлює прапори запису класу.

`flags`
Коректний набір прапорів ZEND_ACC. Якщо не задані, **uopz_flags()**
використовується як гетер.

### Значення, що повертаються

При встановленні нових прапорів повертає старі прапори, інакше повертає
поточні прапори

### Помилки

Починаючи з PHP 7.4.0, якщо передано параметр `flags`, **uopz_extends()**
викидає [RuntimeException](class.runtimeexception.md), якщо
[OPcache](book.opcache.md) включений і запис класу або `class`, або
`parent` (якщо це ознака) незмінні.

### Список змін

| Версія | Опис |
|-----------------|------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| PECL uopz 5.0.0 Параметр `flags` тепер необов'язковий. Раніше **`ZEND_ACC_FETCH`** повинен був передаватися, щоб **uopz_flags()** використовувався як гетер. |

### Приклади

**Приклад #1 Приклад використання **uopz_flags()****

`<?phpclass Test {    public function method() {        return __CLASS__; }}$flags u003d uopz_flags("Test", "method");var_dump((bool) (uopz_flags("Test", "method") & ZEND_ACC_PRIVATE));var_dump((bool) (uopz_flags) method") & ZEND_ACC_STATIC));var_dump(uopz_flags("Test", "method", $flags|ZEND_ACC_STATIC|ZEND_ACC_PRIVATE));var_dump((bool) (uopz_flags("Test", | var_dump((bool) (uopz_flags("Test", "method") & ZEND_ACC_STATIC));?> `

Результат виконання цього прикладу:

bool(false)
bool(false)
int(1234567890)
bool(true)
bool(true)

**Приклад #2 "Скасувати final" класу**

` <?phpfinal class MyClass{}$flags u003d uopz_flags(MyClass::class, '');uopz_flags(MyClass::class, '', $flags & ~ZEND_ACC_FINAL);var_dump((neclass| )->isFinal());?> `

Результат виконання цього прикладу:

bool(false)

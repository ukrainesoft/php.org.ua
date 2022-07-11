- [« Опції PHP/інформаційні функції](ref.info.md)
- [assert »] (function.assert.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Встановлення та отримання настройок механізму перевірки затверджень

#assert_options

(PHP 4, PHP 5, PHP 7, PHP 8)

assert_options — Встановлення та отримання настройок механізму перевірки
тверджень

### Опис

**assert_options**(int `$what`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Встановлення значень параметрів механізму перевірки тверджень
[assert()](function.assert.md) або отримання поточних значень.

> **Примітка**: Починаючи з PHP 7.0.0, використання **assert_options()**
> не рекомендується на користь встановлення та отримання `php.ini` директив
> [zend.assertions](ini.core.md#ini.zend.assertions) та
> [assert.exception](info.configuration.md#ini.assert.exception) з
> за допомогою [ini_set()](function.ini-set.md) та
> [ini_get()](function.ini-get.md) відповідно.

### Список параметрів

`what`
| Налаштування | INI-параметр | Значення за замовчуванням | Опис |
|-------------------|-------------------|--------- --------------|----------------------------------- -------------------------------------------------|
| ASSERT_ACTIVE | assert.active | 1 | включення механізму перевірки тверджень
| ASSERT_WARNING | assert.warning | 1 | виведення попередження PHP для кожної невдалої перевірки
| ASSERT_BAIL | assert.bail | 0 | завершити виконання у разі невдалої перевірки |
| ASSERT_QUIET_EVAL | assert.quiet_eval | 0 | відключити error_reporting під час перевірки затвердження |
| ASSERT_CALLBACK | assert.callback | (**`null`**) | Callback-функція, яку необхідно викликати для затвердження, що провалило |

**Налаштування механізму перевірки тверджень**

`value`
Необов'язковий аргумент, нове значення налаштування.

Callback-функція, встановлена за допомогою **`ASSERT_CALLBACK`** або
assert.callback, повинен мати наступний підпис:

**assert_callback**(
string `$file`,
int `$line`,
string `$assertion`,
string `$description` u003d ?
): void

`file`
Файл, у якому було викликано [assert()](function.assert.md).

`line`
Рядок, в якому був викликаний [assert()](function.assert.md).

`assertion`
Твердження, яке було передано в [assert()](function.assert.md),
перетворене на рядок.

`description`
Опис, який було передано в [assert()](function.assert.md).

Передача порожнього рядка `value` скидає assert callback.

### Значення, що повертаються

Повертає вихідне значення налаштування або **`false`** у випадку
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **assert_options()****

` <?php// Наша функція обробник// невдалих перевірокfunction function assert_failure($file, $line, $assertion, $message){    echo "Перевірка $assertion в $| Тестовая функцияfunction test_assert($parameter){    assert(is_bool($parameter));}// настройки проверкиassert_options(ASSERT_ACTIVE,   true);assert_options(ASSERT_BAIL,     true);assert_options(ASSERT_WARNING,  false);assert_options(ASSERT_CALLBACK, 'assert_failure') ;// заздалегідь помильне затвердженняtest_assert(1);// Цей код не буде виконуватися, поки ASSERT_BAIL// рівний trueecho 'Ніколи не 'буде 

### Дивіться також

- [assert()](function.assert.md) - Перевіряє, чи є
затвердження false

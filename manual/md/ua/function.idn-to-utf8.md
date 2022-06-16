- [« idn_to_ascii](function.idn-to-ascii.md)
- [IntlChar »](class.intlchar.md)

- [PHP Manual](index.md)
- [Функції IDN](ref.intl.idn.md)
- Перетворення доменного імені з IDNA ASCII на Unicode

#idn_to_utf8

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8, PECL intl \>u003d 1.0.2, PECL idn \>u003d 0.1)

idn_to_utf8 — Перетворення доменного імені з IDNA ASCII на Unicode

### Опис

Процедурний стиль

**idn_to_utf8**(
string `$domain`,
int `$flags` u003d IDNA_DEFAULT,
int `$variant` u003d **`INTL_IDNA_VARIANT_UTS46`**,
array `&$idna_info` u003d **`null`**
): string\|false

Ця функція перетворює доменні імена з формату IDNA ASCII в Unicode,
у кодуванні UTF-8.

### Список параметрів

`domain`
Ім'я домену у форматі IDNA ASCII.

`flags`
Опції перетворення - комбінація констант IDNA (крім констант
IDNA_ERROR\_\*).

`variant`
**`INTL_IDNA_VARIANT_2003`** (оголошена застарілою починаючи з PHP 7.2.0)
для IDNA 2003 або **`INTL_IDNA_VARIANT_UTS46`** (доступна лише з ICU
4.6) для UTS # 46.

`idna_info`
Цей параметр використовується лише якщо використовується
**`INTL_IDNA_VARIANT_UTS46`** в `variant`. В цьому випадку він буде
заповнений масивом з ключами ``result'`, можливими помилковими
результатами перетворення, ``isTransitionalDifferent'`, логічне
вираз означає змінило або могло б змінити результат при
використання наскрізного механізму UTS #46, і ``errors'`, що містять
цілісне уявлення бітової маски з констант IDNA_ERROR\_\*.

### Значення, що повертаються

Доменне ім'я в Unicode, у кодуванні UTF-8 або **`false`** у випадку
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- |
| 7.4.0 | Тепер значення за умовчанням `variant` змінено на **`INTL_IDNA_VARIANT_UTS46`** замість застарілої константи **`INTL_IDNA_VARIANT_2003`**. |
| 7.2.0 | **`INTL_IDNA_VARIANT_2003`** оголошена застарілою, замість неї використовуйте **`INTL_IDNA_VARIANT_UTS46`**. |

### Приклади

**Приклад #1 Приклад використання **idn_to_utf8()****

` <?phpecho idn_to_utf8('xn--tst-qla.de');?> `

Результат виконання цього прикладу:

täst.de

### Дивіться також

- [idn_to_ascii()](function.idn-to-ascii.md) - Перетворити
доменне ім'я у форматі IDNA ASCII

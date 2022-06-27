- [« Типи ресурсів](intl.resources.md)
- [Приклади »](intl.examples.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Обумовлені константи

# Зумовлені константи

**`INTL_ICU_VERSION`** (string)
Поточна версія бібліотеки ICU у вигляді чисел із точковими роздільниками.

**`INTL_MAX_LOCALE_LEN`** (int)
Задає довжину імені локалі. Для PHP встановлено 80. Імена локалей
більше цього значення не приймаються.

**`IDNA_DEFAULT`** (int)
Заборонити передачу невизначених кодів символів функції IDN і не
перевіряти введення відповідності правилам доменних імен ASCII.

**`IDNA_ALLOW_UNASSIGNED`** (int)
Дозволити передачу невизначених кодів символів функції IDN

**`IDNA_USE_STD3_RULES`** (int)
Перевірити введення для функцій IDN на відповідність правилам доменних імен
ASCII.

**`IDNA_CHECK_BIDI`** (int)
Перевірити, чи введення правил BiDi. Ігнорується в
реалізації IDNA2003, яка завжди здійснює цю перевірку.

**`IDNA_CHECK_CONTEXTJ`** (int)
Перевірити, чи відповідає введення правил CONTEXTJ. Ігнорується в
реалізації IDNA2003, так як цю перевірку введено в IDNA2008.

**`IDNA_NONTRANSITIONAL_TO_ASCII`** (int)
Опція для ненаскрізної обробки
[idn_to_ascii()](function.idn-to-ascii.md). Наскрізне оброблення
активовано за замовчуванням. Ігнорується у реалізації IDNA2003.

**`IDNA_NONTRANSITIONAL_TO_UNICODE`** (int)
Опція для ненаскрізної обробки
[idn_to_utf8()](function.idn-to-utf8.md). Наскрізне оброблення
активовано за замовчуванням. Ігнорується у реалізації IDNA2003.

**`INTL_IDNA_VARIANT_2003`** (int)
Використовувати алгоритм IDNA 2003
[idn_to_utf8()](function.idn-to-utf8.md) та
[idn_to_ascii()](function.idn-to-ascii.md). Встановлено за замовчуванням. Ця
константа та те, що вона використовується за умовчанням, оголошено застарілим
у PHP 7.2.0.

**`INTL_IDNA_VARIANT_UTS46`** (int)
Використовувати алгоритм UTS #46
[idn_to_utf8()](function.idn-to-utf8.md) та
[idn_to_ascii()](function.idn-to-ascii.md). Доступно з ICU 4.6.

**`IDNA_ERROR_EMPTY_LABEL`** (int)
**`IDNA_ERROR_LABEL_TOO_LONG`** (int)
**`IDNA_ERROR_DOMAIN_NAME_TOO_LONG`** (int)
**`IDNA_ERROR_LEADING_HYPHEN`** (int)
**`IDNA_ERROR_TRAILING_HYPHEN`** (int)
**`IDNA_ERROR_HYPHEN_3_4`** (int)
**`IDNA_ERROR_LEADING_COMBINING_MARK`** (int)
**`IDNA_ERROR_DISALLOWED`** (int)
**`IDNA_ERROR_PUNYCODE`** (int)
**`IDNA_ERROR_LABEL_HAS_DOT`** (int)
**`IDNA_ERROR_INVALID_ACE_LABEL`** (int)
**`IDNA_ERROR_BIDI`** (int)
**`IDNA_ERROR_CONTEXTJ`** (int)
При використанні алгоритму UTS #46
[idn_to_utf8()](function.idn-to-utf8.md) та
[idn_to_ascii()](function.idn-to-ascii.md), помилки повертаються у вигляді
побитової маски.

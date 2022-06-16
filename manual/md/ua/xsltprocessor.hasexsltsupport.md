- [«
XSLTProcessor::getSecurityPrefs](xsltprocessor.getsecurityprefs.md)
- [XSLTProcessor::importStylesheet
»](xsltprocessor.importstylesheet.md)

- [PHP Manual](index.md)
- [XSLTProcessor](class.xsltprocessor.md)
- Визначає чи PHP підтримку EXSLT

# XSLTProcessor::hasExsltSupport

(PHP 5 \>u003d 5.0.4, PHP 7, PHP 8)

XSLTProcessor::hasExsltSupport — Визначає чи PHP підтримку EXSLT

### Опис

public **XSLTProcessor::hasExsltSupport**(): bool

Цей метод визначає чи був PHP налаштований з [» бібліотекою
EXSLT](http://xmlsoft.org/XSLT/EXSLT/index.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Перевірка підтримки EXSLT**

` <?php$proc u003d new XSLTProcessor;if (!$proc->hasExsltSupport()) {    die('EXSLT support not available');}// виконання деяких  S>.

- [« DOMDocument::importNode](domdocument.importnode.md)
- [DOMDocument::loadHTML »](domdocument.loadhtml.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Завантаження XML із файлу

# DOMDocument::load

(PHP 5, PHP 7, PHP 8)

DOMDocument::load — Завантаження XML із файлу

### Опис

public **DOMDocument::load**(string `$filename`, int `$options` u003d 0):
[DOMDocument](class.domdocument.md)\|bool

Завантажує XML-документ із файлу.

**Увага**

Шляхи до файлів у стилі Unix із прямими слішами можуть негативно
позначитися на працездатності скриптів серед Windows; використовуйте
функцію [realpath()](function.realpath.md) для виключення подібних
ситуацій.

### Список параметрів

`filename`
Шлях до документа XML.

`options`
[Побітове `АБО`](language.operators.bitwise.md) [констант опцій
libxml] (libxml.constants.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. При статичному виклику повертає об'єкт
класу [DOMDocument](class.domdocument.md) або **`false`** у разі
виникнення помилки.

### Помилки

Якщо через аргумент `filename` передано порожній рядок або файл нічого не
містить, буде згенероване попередження. Це попередження
генерується не libxml, тому воно не може бути оброблене
обробниками помилок бібліотеки libxml.

До PHP 8.0.0 метод *може* викликатись статично, але викличе помилку
**`E_DEPRECATED`**. Починаючи з PHP 8.0.0, виклик цього методу статично
викидає виняток [Error](class.error.md).

### Приклади

**Приклад #1 Створення документа**

` <?php$doc u003d new DOMDocument();$doc->load('book.xml');echo $doc->saveXML();?> `

### Дивіться також

- [DOMDocument::loadXML()](domdocument.loadxml.md) - Завантаження XML з
рядки
- [DOMDocument::save()](domdocument.save.md) - Зберігає XML-дерево
із внутрішнього подання до файлу
- [DOMDocument::saveXML()](domdocument.savexml.md) - Зберігає
XML-дерево з внутрішнього уявлення у вигляді рядка

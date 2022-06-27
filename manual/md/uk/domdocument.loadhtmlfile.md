- [« DOMDocument::loadHTML](domdocument.loadhtml.md)
- [DOMDocument::loadXML »](domdocument.loadxml.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Завантаження HTML із файлу

# DOMDocument::loadHTMLFile

(PHP 5, PHP 7, PHP 8)

DOMDocument::loadHTMLFile — Завантаження HTML із файлу

### Опис

public **DOMDocument::loadHTMLFile**(string `$filename`, int `$options`
u003d 0): [DOMDocument](class.domdocument.md)\|bool

Функція розбирає HTML-документ із файлу `filename`. На відміну від
завантаження XML, HTML має бути правильно побудованим (well-formed).

### Список параметрів

`filename`
Шлях до HTML-файлу.

`options`
Починаючи з версії Libxml 2.6.0, також можна використовувати параметр
`options` для вказівки [додаткових параметрів
Libxml] (libxml.constants.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. Якщо викликано статично, повертає об'єкт
класу [DOMDocument](class.domdocument.md) або **`false`** у разі
виникнення помилки.

### Помилки

Якщо через аргумент `filename` передано порожній рядок або файл нічого не
містить, буде згенероване попередження. Це попередження
генерується не libxml, тому воно не може бути оброблене [функціями
обробки помилок libxml] (function.libxml-use-internal-errors.md).

До PHP 8.0.0 метод *може* викликатись статично, але викличе помилку
**`E_DEPRECATED`**. Починаючи з PHP 8.0.0, виклик цього методу статично
викидає виняток [Error](class.error.md).

Незважаючи на те, що некоректний HTML зазвичай успішно завантажується, дана
функція може генерувати помилки рівня **`E_WARNING`** при виявленні
погана розмітка. Для обробки даних помилок можна скористатися
[функціями обробки помилок
libxml](function.libxml-use-internal-errors.md).

### Приклади

**Приклад #1 Створення документа**

` <?php$doc u003d new DOMDocument();$doc->loadHTMLFile("filename.md");echo $doc->saveHTML();?> `

### Дивіться також

- [DOMDocument::loadHTML()](domdocument.loadhtml.md) - Завантаження HTML
з рядка
- [DOMDocument::saveHTML()](domdocument.savehtml.md) - Зберігає
документ із внутрішнього подання до рядка, використовуючи
форматування HTML
- [DOMDocument::saveHTMLFile()](domdocument.savehtmlfile.md) -
Зберігає документ із внутрішнього представлення у файл, використовуючи
форматування HTML

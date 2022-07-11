- [« DOMDocument::load](domdocument.load.md)
- [DOMDocument::loadHTMLFile »](domdocument.loadhtmlfile.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Завантаження HTML з рядка

# DOMDocument::loadHTML

(PHP 5, PHP 7, PHP 8)

DOMDocument::loadHTML — Завантаження HTML із рядка

### Опис

public **DOMDocument::loadHTML**(string `$source`, int `$options` u003d 0):
[DOMDocument](class.domdocument.md)\|bool

Функція розбирає HTML, що міститься в рядку `source`. На відміну від
завантаження XML, HTML не має бути правильно побудованим (well-formed)
документом. Ця функція також може бути викликана статично для завантаження
та створення об'єкта класу [DOMDocument](class.domdocument.md).
Статичний виклик може використовуватись у випадках, коли ні
необхідності встановлювати значення параметрів об'єкта
[DOMDocument](class.domdocument.md) до завантаження документа.

### Список параметрів

`source`
HTML-рядок.

`options`
Починаючи з версії Libxml 2.6.0, також можна використовувати параметр
`options` для вказівки [додаткових параметрів
Libxml] (libxml.constants.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. У разі статичного виклику повертає
об'єкт класу [DOMDocument](class.domdocument.md) або **`false`**
у разі виникнення помилки.

### Помилки

Якщо через аргумент `source` передано порожній рядок, буде згенеровано
попередження. Це попередження генерується не libxml, тому воно
не може бути оброблено функціями обробки помилок libxml.

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

` <?php$doc u003d new DOMDocument();$doc->loadHTML("<html><body>Test<br></body></html>");echo $doc->saveHTML();? > `

### Дивіться також

- [DOMDocument::loadHTMLFile()](domdocument.loadhtmlfile.md) -
Завантаження HTML із файлу
- [DOMDocument::saveHTML()](domdocument.savehtml.md) - Зберігає
документ із внутрішнього подання до рядка, використовуючи
форматування HTML
- [DOMDocument::saveHTMLFile()](domdocument.savehtmlfile.md) -
Зберігає документ із внутрішнього представлення у файл, використовуючи
форматування HTML

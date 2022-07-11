- [« XMLWriter::openMemory](xmlwriter.openmemory.md)
- [XMLWriter::outputMemory »](xmlwriter.outputmemory.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Створити новий об'єкт XMLWriter, використовуючи вихідний URI для виводу

# XMLWriter::openUri

#xmlwriter_open_uri

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::openUri -- xmlwriter_open_uri — Створити новий об'єкт
XMLWriter, використовуючи вихідний URI для виводу

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::openUri**(string `$uri`): bool

Процедурний стиль

**xmlwriter_open_uri**(string `$uri`):
[XMLWriter](class.xmlwriter.md)\|false

Створює новий об'єкт [XMLWriter](class.xmlwriter.md), використовуючи `uri`
для виведення.

### Список параметрів

`uri`
URI ресурс для виведення.

### Значення, що повертаються

Об'єктно-орієнтований стиль: Повертає **`true`** у разі успішного
виконання або **`false`** у разі виникнення помилки.

Процедурний стиль: Повертає новий [XMLWriter](class.xmlwriter.md)
для подальшого використання функціями xmlwriter у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------------------------|
| 8.0.0 | Функція повертає екземпляр [XMLWriter](class.xmlwriter.md) у разі успішного виконання. Раніше у цьому випадку повертався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Прямий висновок XML**

Можна безпосередньо виводити XML, використовуючи [обгортку потоку
php://output](wrappers.php.md#wrappers.php.output).

` <?php$out u003dnew XMLWriter();$out->openURI('php://output');?> `

### Примітки

> **Примітка**:
>
> У Windows файли, відкриті за допомогою цієї функції, блокуються доти
> доки засіб запису не буде звільнено.

### Дивіться також

- [XMLWriter::openMemory()](xmlwriter.openmemory.md) - Створити новий
об'єкт XMLWriter, використовуючи пам'ять для рядкового виводу

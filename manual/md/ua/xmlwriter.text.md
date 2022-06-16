- [« XMLWriter::startPi](xmlwriter.startpi.md)
- [XMLWriter::writeAttribute »](xmlwriter.writeattribute.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Записати текст

# XMLWriter::text

#xmlwriter_text

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::text -- xmlwriter_text — Записати текст

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::text**(string `$content`): bool

Процедурний стиль

**xmlwriter_text**([XMLWriter](class.xmlwriter.md) `$writer`, string
`$content`): bool

Записує текст.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`content`
Вміст тексту. Символи `<`, `>`, `&` та `"` записуються як посилання
на сутності (тобто `<`, `>`, `&` та `"`, відповідно).
Всі інші символи в тому числі записуються буквально. Щоб
записувати спеціальні символи XML буквально або записувати буквальні
посилання на сутності необхідно використовувати
[xmlwriter_write_raw()](xmlwriter.writeraw.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

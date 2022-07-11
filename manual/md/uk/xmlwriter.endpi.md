- [« XMLWriter::endElement](xmlwriter.endelement.md)
- [XMLWriter::flush »](xmlwriter.flush.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Завершити поточну інструкцію обробки (PI)

# XMLWriter::endPi

#xmlwriter_end_pi

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::endPi -- xmlwriter_end_pi — Завершити поточну інструкцію
обробки (PI)

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::endPi**(): bool

Процедурний стиль

**xmlwriter_end_pi**([XMLWriter](class.xmlwriter.md) `$writer`): bool

Завершує поточну інструкцію з обробки.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::startPi()](xmlwriter.startpi.md) - Створити стартовий
тег PI
- [XMLWriter::writePi()](xmlwriter.writepi.md) - Записати інструкцію
обробки (PI)

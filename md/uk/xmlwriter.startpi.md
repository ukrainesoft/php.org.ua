- [« XMLWriter::startElementNs](xmlwriter.startelementns.md)
- [XMLWriter::text »](xmlwriter.text.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Створити стартовий тег PI

# XMLWriter::startPi

#xmlwriter_start_pi

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::startPi -- xmlwriter_start_pi — Створити стартовий тег PI

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::startPi**(string `$target`): bool

Процедурний стиль

**xmlwriter_start_pi**([XMLWriter](class.xmlwriter.md) `$writer`,
string `$target`): bool

Починає тег інструкції з обробки (PI).

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`target`
Ціль інструкції обробки.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::endPi()](xmlwriter.endpi.md) - Завершити поточну
інструкцію обробки (PI)
- [XMLWriter::writePi()](xmlwriter.writepi.md) - Записати інструкцію
обробки (PI)

- [« XMLReader::isValid](xmlreader.isvalid.md)
- [XMLReader::moveToAttribute »](xmlreader.movetoattribute.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Знайти простір імен для префіксу

# XMLReader::lookupNamespace

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

XMLReader::lookupNamespace — Знайти простір імен для префіксу

### Опис

public **XMLReader::lookupNamespace**(string `$prefix`): ?string

Пошук у контексті простору імен для цього префікса.

### Список параметрів

`prefix`
Рядок, що містить префікс.

### Значення, що повертаються

Значення простору імен або **`null`**, якщо простору імен не
існує.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------|
| 8.0.0 | Функція більше не може повертати **`false`**. |

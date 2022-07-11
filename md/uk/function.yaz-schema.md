- [« yaz_scan](function.yaz-scan.md)
- [yaz_search »](function.yaz-search.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- Встановлює схему для значень, що повертаються.

# yaz_schema

(PHP 4 u003d 4.2.0, PECL yaz u003d 0.9.0)

yaz_schema — Встановлює схему для значень, що повертаються.

### Опис

**yaz_schema**(resource `$id`, string `$schema`): void

**yaz_schema()** встановлює схему для значень, що повертаються.

Функція має бути викликана до [yaz_search()](function.yaz-search.md)
або [yaz_present()](function.yaz-present.md).

### Список параметрів

`id`
Дескриптор з'єднання, повернутий
[yaz_connect()](function.yaz-connect.md).

`schema`
Схема має бути визначена як OID (Object Identifier) у вихідному
поданні з роздільниками у вигляді точок (наприклад
`1.2.840.10003.13.4`) або як одна з відомих форм імені схеми:
`GILS-schema`, `Holdings`, `Zthes`, ...

### Значення, що повертаються

Функція не повертає значення після виконання.

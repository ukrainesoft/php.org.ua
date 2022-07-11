- [« Функції Yaml](ref.yaml.md)
- [yaml_emit »] (function.yaml-emit.md)

- [PHP Manual](index.md)
- [Функції Yaml](ref.yaml.md)
- Відправляє YAML-подання значення у файл

# yaml_emit_file

(PECL yaml \>u003d 0.5.0)

yaml_emit_file — Відправляє YAML-подання значення файлу

### Опис

**yaml_emit_file**(
string `$filename`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data`,
int `$encoding` u003d YAML_ANY_ENCODING,
int `$linebreak` u003d YAML_ANY_BREAK,
array `$callbacks` u003d **`null`**
): bool

Генерує YAML-подання з даних `data` і відправляє в
`filename`.

### Список параметрів

`filename`
Шлях до файлу.

`data`
Параметр 'data' кодується. Допускається будь-який тип даних крім
ресурсу (resource).

`encoding`
Кодування виводу вибирається з **`YAML_ANY_ENCODING`**,
**`YAML_UTF8_ENCODING`**, **`YAML_UTF16LE_ENCODING`**,
**`YAML_UTF16BE_ENCODING`**.

`linebreak`
Символ кінця рядка виведення вибирається з **`YAML_ANY_BREAK`**,
**`YAML_CR_BREAK`**, **`YAML_LN_BREAK`**, **`YAML_CRLN_BREAK`**.

callbacks
Обробники контенту для створення вузлів YAML. Асоціативний масив
(array), де як ключі використовуються імена класів, а як
значень callback-функції ([callable](language.types.callable.md)),
які створюватимуть вузли для цих класів. Більше подробиць можна
дізнатися у розділі про [публікуючі
callback-функції] (yaml.callbacks.emit.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання.

### Список змін

| Версія | Опис |
|-----------------|------------------------------- -|
| PECL yaml 1.1.0 | Доданий аргумент `callbacks`. |

### Дивіться також

- [yaml_emit()](function.yaml-emit.md) - Повертає
YAML-подання значення
- [yaml_parse()](function.yaml-parse.md) - Розбирає потік YAML

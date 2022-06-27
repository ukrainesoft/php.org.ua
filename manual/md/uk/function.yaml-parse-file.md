- [« yaml_emit](function.yaml-emit.md)
- [yaml_parse_url »](function.yaml-parse-url.md)

- [PHP Manual](index.md)
- [Функції Yaml](ref.yaml.md)
- Розбирає YAML-потік із файлу

# yaml_parse_file

(PECL yaml \>u003d 0.4.0)

yaml_parse_file — Розбирає потоки YAML з файлу

### Опис

**yaml_parse_file**(
string `$filename`,
int `$pos` u003d 0,
int `&$ndocs` u003d ?,
array `$callbacks` u003d **`null`**
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Конвертує повністю або частково потік YAML-документів, що читаються з
файлу в змінну PHP.

### Список параметрів

`filename`
Шлях до файлу.

`pos`
Індекс документа для вилучення з потоку (`-1` для всіх документів, `0`
для першого документа, ...).

`ndocs`
Якщо `ndocs` передано, то він буде заповнений кількістю документів,
знайдених у потоці.

callbacks
Обробники вмісту для вузлів YAML. Асоціативний масив (array),
ключі якого є тегами YAML, а значення callback-функціями
([callable](language.types.callable.md)), які будуть їх
обробляти. Докладніше цей механізм описаний у розділі
[callback-функції аналізу](yaml.callbacks.parse.md).

### Значення, що повертаються

Повертає значення, закодоване в `input`, у відповідному PHP
типі або **`false`** у разі виникнення помилки. Якщо параметр `pos`
дорівнює `-1`, то буде повернутий масив (array), що містить по одній
запис для кожного документа, знайденого в потоці.

### Примітки

**Увага**

Обробляти неперевірене введення користувача за допомогою функції
**yaml_parse_file()** у випадку, якщо дозволено використовувати
[unserialize()](function.unserialize.md) для вузлів із тегом
`!php/object` - дуже небезпечно. Така поведінка може бути заборонена з
за допомогою ini-налаштування `yaml.decode_php`.

### Дивіться також

- [yaml_parse()](function.yaml-parse.md) - Розбирає потік YAML
- [yaml_parse_url()](function.yaml-parse-url.md) - Розбирає
YAML-потік з URL
- [yaml_emit()](function.yaml-emit.md) - Повертає
YAML-подання значення

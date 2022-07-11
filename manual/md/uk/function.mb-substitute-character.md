- [«mb_strwidth](function.mb-strwidth.md)
- [mb_substr_count »](function.mb-substr-count.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Встановити/отримати символ заміни

#mb_substitute_character

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

mb_substitute_character — Встановити/отримати символ заміни

### Опис

**mb_substitute_character**(string\|int\|null `$substitute_character` u003d
**`null`**): string\|int\|bool

Задає символ, що заміщає, на випадок, коли кодування вхідних даних
задана неправильно або код символу не існує у кодуванні вихідних
даних. Неприпустимі символи можуть бути замінені на "none" (ні
виводу), рядок (string) або числове значення (int) (код символу
Юнікоду).

Ця установка впливає на поведінку таких функцій:
[mb_convert_encoding()](function.mb-convert-encoding.md),
[mb_convert_variables()](function.mb-convert-variables.md),
[mb_output_handler()](function.mb-output-handler.md), та
[mb_send_mail()](function.mb-send-mail.md).

### Список параметрів

`substitute_character`
Задає значення Юнікоду у вигляді числа (int) або одного з наступних рядків
string:

- ``none'` : немає висновку
- ``long'` : код кінцевого (у вихідному кодуванні) символу (Приклад:
`U+3000`, `JIS+7E7E`)
- ``entity'` : сутність кінцевого (у вихідному кодуванні) символу
(Приклад: `Ȁ`)

### Значення, що повертаються

Якщо аргумент `substitute_character` заданий, функція поверне **`true`** в
у разі успішного виконання, **`false`** в іншому випадку. Якщо
`substitute_character` не заданий, буде повернуто поточне налаштування.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- --------------------|
| 8.0.0 | Передача порожнього рядка в `substitute_character` більше не підтримується; замість цього використовуйте ``none'`. |
| 8.0.0 | Тепер параметр `encoding` може набувати значення **`null`**. |

### Приклади

**Приклад #1 Приклад використання **mb_substitute_character()****

`<?php/* Установка замінного символу Unicode U+3013 (GETA MARK) */mb_substitute_character(0x3013);/* Задаємо шістнадцятковий формат */mb_substitu ?> `

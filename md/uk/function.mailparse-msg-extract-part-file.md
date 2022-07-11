- [«mailparse_msg_create](function.mailparse-msg-create.md)
- [mailparse_msg_extract_part
»](function.mailparse-msg-extract-part.md)

- [PHP Manual](index.md)
- [Mailparse](ref.mailparse.md)
- Вийняти/декодувати секцію з повідомленням із файлу

#mailparse_msg_extract_part_file

(PECL mailparse \>u003d 0.9.0)

mailparse_msg_extract_part_file — Витягти/декодувати секцію з
повідомленням з файлу

### Опис

**mailparse_msg_extract_part_file**(resource `$mimemail`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$filename`, [callable](language.types.callable.md) `$callbackfunc` u003d
?): string

Вийняти/декодувати секцію з повідомленням із вказаного файлу.

Контент повідомлення буде декодований відповідно до кодування
пересилання. Підтримуються такі кодування: base64, quoted-printable
та uuencoded.

### Список параметрів

`mimemail`
Коректний `MIME`-ресурс, створений
[mailparse_msg_create()](function.mailparse-msg-create.md).

`filename`
Назва файлу або коректний потоковий ресурс.

callbackfunc
Якщо задано, то цю функцію буде надіслано вилучене повідомлення. Якщо
**`null`**, то одержане повідомлення буде просто повернено.

Якщо не встановлено, то контент буде спрямований на стандартний висновок
(stdout).

### Значення, що повертаються

Якщо `callbackfunc` не **`null`**, то поверне **`true`** у разі
успішного виконання.

Якщо `callbackfunc` задана як **`null`**, поверне вилучену секцію
повідомлення у вигляді рядка.

Поверне **`false`** у разі виникнення помилки.

### Дивіться також

- [mailparse_msg_extract_part()](function.mailparse-msg-extract-part.md) -
Вийняти/декодувати секцію із повідомленням
- [mailparse_msg_extract_whole_part_file()](function.mailparse-msg-extract-whole-part-file.md) -
Вийняти секцію повідомлення разом із заголовками без декодування

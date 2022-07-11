- [«mb_convert_kana](function.mb-convert-kana.md)
- [mb_decode_mimeheader »](function.mb-decode-mimeheader.md)

- [PHP Manual](index.md)
- [Функції для роботи з багатобайтовими рядками](ref.mbstring.md)
- Перетворює символи на змінну з одного кодування на інше

#mb_convert_variables

(PHP 4 \>u003d 4.0.6, PHP 5, PHP 7, PHP 8)

mb_convert_variables — Перетворює символи на змінну з однієї
кодування в інше

### Опис

**mb_convert_variables**(
string `$to_encoding`,
array\|string `$from_encoding`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$var`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&...$vars`
): string\|false

Конвертує символи в змінних `var` та `vars` з кодування
`from_encoding` у кодування `to_encoding`.

**mb_convert_variables()** об'єднує рядки з масиву або об'єкта для
визначення їх кодування, тому що у разі коротких рядків визначити
кодування часто не вдається. Внаслідок цього, неприпустимо поміщати в
один масив або об'єкт рядка у різних кодуваннях.

### Список параметрів

`to_encoding`
Кодування, в яке потрібно перекодувати рядок (string).

`from_encoding`
`from_encoding` задається у вигляді масиву (array) або рядка (string) з
розділеними комами кодуванням. Функція спробує визначити
кодування вихідного рядка на основі списку можливих кодувань
аргумент "from-coding". Якщо `from_encoding` опущений, використовується
`detect_order`.

`var`
`var` - посилання на змінну, вміст якої необхідний
перетворити. Це може бути рядок, масив чи об'єкт.
**mb_convert_variables()** приймає, що всі ці аргументи мають
однакове кодування.

`vars`
Додаткові `var`.

### Значення, що повертаються

Вихідне кодування у разі успішного виконання або **`false`**
у разі невдачі.

### Приклади

**Приклад #1 Приклад використання **mb_convert_variables()****

` <?php/* Перетворення змінних $post1, $post2 во внутрішнє кодування скрипта */$interenc u003d mb_internal_encoding();$inputenc u003d mb_convert_variables($interenc, $$AS post2);?> `

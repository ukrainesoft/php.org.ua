- [«gnupg_sign](function.gnupg-sign.md)
- [wkhtmltox »] (book.wkhtmltox.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Перевіряє підпис тексту

#gnupg_verify

(PECL gnupg \>u003d 0.1)

gnupg_verify — Перевірка підпису тексту

### Опис

**gnupg_verify**(
resource `$identifier`,
string `$signed_text`,
string `$signature`,
string `&$plaintext` u003d ?
): array

Перевіряє підпис переданого у параметрі `signed_text` тексту та
повертає інформацію про підпис.

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`signed_text`
Підписаний текст.

`signature`
Підпис. Щоб перевірити прозорий підпис, параметр повинен дорівнювати
**`false`**.

`plaintext`
Звичайний текст. Якщо цей необов'язковий параметр потрібно передати, то
він заповнюється простим текстом.

### Значення, що повертаються

У разі успішного виконання, функція повертає інформацію про підпис. В
у разі виникнення помилки функція повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **gnupg_verify()** у процедурному
стилі**

` <?php$plaintext u003d "";$res u003d gnupg_init();// прозорий підпис$info u003d gnupg_verify($res, $signed_text, false, $plaintext);print_r($info);// $ u003d gnupg_verify($res, $signed_text, $signature);print_r($info);?> `

**Приклад #2 Приклад використання **gnupg_verify()** в
об'єктно-орієнтованому стилі**

` <?php$plaintext u003d "";$gpg u003d new gnupg();// прозорий підпис$info u003d $gpg->verify($signed_text, false, $plaintext);print_r($info);// розділ $info u003d $gpg->verify($signed_text, $signature);print_r($info);?> `

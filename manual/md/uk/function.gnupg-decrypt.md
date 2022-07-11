- [«gnupg_clearsignkeys](function.gnupg-clearsignkeys.md)
- [gnupg_decryptverify »](function.gnupg-decryptverify.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Розшифровує переданий текст

#gnupg_decrypt

(PECL gnupg \>u003d 0.1)

gnupg_decrypt — Розшифровує переданий текст

### Опис

**gnupg_decrypt**(resource `$identifier`, string `$text`): string

Розшифровує переданий текст ключами, встановленими раніше за допомогою
[gnupg_adddecryptkey](function.gnupg-adddecryptkey.md).

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`text`
Текст, що розшифровується.

### Значення, що повертаються

У разі успішного виконання ця функція повертає розшифрований
текст. У разі виникнення помилки ця функція повертає
**`false`**.

### Приклади

**Приклад #1 Процедурний приклад використання **gnupg_decrypt()****

`<?php$res u003d|gnupg_init();gnupg_adddecryptkey($res, "8660281B6051D071D94B5B230549F9DC851566DC", "test");$plain u003d 

**Приклад #2 Об'єктно-орієнтований приклад використання
**gnupg_decrypt()****

`<?php$gpg u003d new gnupg();$gpg->adddecryptkey("8660281B6051D071D94B5B230549F9DC851566DC","test");$plain u003d $gp

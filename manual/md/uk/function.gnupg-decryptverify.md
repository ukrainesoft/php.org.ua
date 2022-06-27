- [«gnupg_decrypt](function.gnupg-decrypt.md)
- [gnupg_deletekey »](function.gnupg-deletekey.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Розшифровує та перевіряє підпис переданого тексту

#gnupg_decryptverify

(PECL gnupg \>u003d 0.2)

gnupg_decryptverify — Розшифровує та перевіряє підпис переданого
тексту

### Опис

**gnupg_decryptverify**(resource `$identifier`, string `$text`, string
`&$plaintext`): array

Розшифровує та перевіряє підпис переданого тексту та повертає
інформацію про підпис.

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`text`
Текст для розшифрування.

`plaintext`
Параметру 'plaintext' передається розшифрований текст.

### Значення, що повертаються

У разі успішного виконання функція повертає інформацію про підпис та
передає параметр "plaintext" розшифрований текст. В разі
виникнення помилки функція повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **gnupg_decryptverify()** у процедурному
стилі**

` <?php$plaintext u003d "";$res u003d gnupg_init();gnupg_adddecryptkey($res, "8660281B6051D071D94B5B230549F9DC851566DC", "test");$info u003d gnupg_decryptverify($res, $text, $plaintext);print_r($info );?> `

**Приклад #2 Приклад використання **gnupg_decryptverify()** в
об'єктно-орієнтованому стилі**

`<?php$plaintext u003d "";$gpg u003d new gnupg();$gpg->adddecryptkey("8660281B6051D071D94B5B230549F9DC851566DC","$$; ($ info);?> `

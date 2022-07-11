- [«gnupg_deletekey](function.gnupg-deletekey.md)
- [gnupg_encryptsign »](function.gnupg-encryptsign.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Шифрує заданий текст

#gnupg_encrypt

(PECL gnupg \>u003d 0.1)

gnupg_encrypt — Шифрує заданий текст

### Опис

**gnupg_encrypt**(resource `$identifier`, string `$plaintext`): string

Шифрує заданий текст `plaintext` за допомогою ключа, заданого раніше з
за допомогою функції [gnupg_addencryptkey](function.gnupg-addencryptkey.md)
та повертає результат.

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`plaintext`
Текст для шифрування.

### Значення, що повертаються

У разі успішного виконання, повертає зашифрований текст. В разі
виникнення помилки повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **gnupg_encrypt()** у процедурному
стилі**

` <?php$res u003d gnupg_init();gnupg_addencryptkey($res,"8660281B6051D071D94B5B230549F9DC851566DC");$enc u003d gnupg_encrypt($res,$', 

**Приклад #2 Приклад використання **gnupg_encrypt()** в
об'єктно-орієнтованому стилі**

` <?php$gpg u003d new gnupg();$gpg->addencryptkey("8660281B6051D071D94B5B230549F9DC851566DC");$enc u003d $gpg->encrypt

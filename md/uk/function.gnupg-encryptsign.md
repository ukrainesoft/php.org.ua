- [«gnupg_encrypt](function.gnupg-encrypt.md)
- [gnupg_export »](function.gnupg-export.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Шифрує та підписує переданий текст

#gnupg_encryptsign

(PECL gnupg \>u003d 0.2)

gnupg_encryptsign — Шифрує та підписує надісланий текст

### Опис

**gnupg_encryptsign**(resource `$identifier`, string `$plaintext`):
string

Шифрує та підписує переданий у параметрі `plaintext` текст ключами,
які були встановлені
[gnupg_addsignkey](function.gnupg-addsignkey.md) та
[gnupg_addencryptkey](function.gnupg-addencryptkey.md) раніше та
повертає зашифрований та підписаний текст.

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`plaintext`
Текст для шифрування.

### Значення, що повертаються

У разі успішного виконання, ця функція повертає зашифрований та
підписаний текст. У разі виникнення помилки ця функція повертає
**`false`**.

### Приклади

**Приклад #1 Процедурний приклад використання **gnupg_encryptsign()****

` <?php$res u003d gnupg_init();gnupg_addencryptkey($res, "8660281B6051D071D94B5B230549F9DC851566DC");gnupg_addsignkey($res, "8660281B6051D071D94B5B230549F9DC851566DC", "test");$enc u003d gnupg_encryptsign($res, "просто тест");echo $enc;?> `

**Приклад #2 Об'єктно-орієнтований приклад використання
**gnupg_encryptsign()****

` <?php$gpg u003d new gnupg();$gpg->addencryptkey("8660281B6051D071D94B5B230549F9DC851566DC");$gpg->addsignkey("8660281B6051D071D94B5B230549F9DC851566DC","test");$enc u003d $gpg->encryptsign("just a test");echo $enc;?> `

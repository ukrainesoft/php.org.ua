- [«gnupg_decryptverify](function.gnupg-decryptverify.md)
- [gnupg_encrypt »](function.gnupg-encrypt.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Видаляє ключ із зв'язування ключів

#gnupg_deletekey

(PECL gnupg \>u003d 0.5)

gnupg_deletekey — Видаляє ключ із зв'язування ключів

### Опис

**gnupg_deletekey**(resource `$identifier`, string `$key`, bool
`$allow_secret`): bool

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`key`
Ключ для видалення.

`allow_secret`
Вказує, чи слід видаляти секретні ключі.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **gnupg_deletekey()** у процедурному
стилі**

` <?php$res u003d gnupg_init();gnupg_deletekey($res, "8660281B6051D071D94B5B230549F9DC851566DC");?> `

**Приклад #2 Приклад використання **gnupg_deletekey()** в
об'єктно-орієнтованому стилі**

` <?php$gpg u003d new gnupg();$gpg->deletekey("8660281B6051D071D94B5B230549F9DC851566DC");?> `

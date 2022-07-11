- [«gnupg_addencryptkey](function.gnupg-addencryptkey.md)
- [gnupg_cleardecryptkeys »](function.gnupg-cleardecryptkeys.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Додати ключ для підписання

#gnupg_addsignkey

(PECL gnupg \>u003d 0.5)

gnupg_addsignkey — Додати ключ для підписання

### Опис

**gnupg_addsignkey**(resource `$identifier`, string `$fingerprint`,
string `$passphrase` u003d ?): bool

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`fingerprint`
Відбиток ключа.

`passphrase`
Пароль.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Процедурний приклад використання **gnupg_addsignkey()****

` <?php$res u003d gnupg_init();gnupg_addsignkey($res, "8660281B6051D071D94B5B230549F9DC851566DC", "test");?> `

**Приклад #2 Об'єктно-орієнтований приклад використання
**gnupg_addsignkey()****

` <?php$gpg u003d new gnupg();$gpg->addsignkey("8660281B6051D071D94B5B230549F9DC851566DC","test");?> `

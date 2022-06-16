- [« Функції GnuPG](ref.gnupg.md)
- [gnupg_addencryptkey »](function.gnupg-addencryptkey.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Додати ключ для розшифровки

#gnupg_adddecryptkey

(PECL gnupg \>u003d 0.5)

gnupg_adddecryptkey — Додати ключ для розшифровки

### Опис

**gnupg_adddecryptkey**(resource `$identifier`, string `$fingerprint`,
string `$passphrase`): bool

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`fingerprint`
Відбиток ключа.

`passphrase`
Кодове слово.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **gnupg_adddecryptkey()** у процедурному
стилі**

` <?php$res u003d gnupg_init();gnupg_adddecryptkey($res,"8660281B6051D071D94B5B230549F9DC851566DC","test");?> `

**Приклад #2 Приклад використання **gnupg_adddecryptkey()** в
об'єктно-орієнтованому стилі**

` <?php$gpg u003d new gnupg();$gpg->adddecryptkey("8660281B6051D071D94B5B230549F9DC851566DC","test");?> `

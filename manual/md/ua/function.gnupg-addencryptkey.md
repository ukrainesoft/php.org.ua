- [«gnupg_adddecryptkey](function.gnupg-adddecryptkey.md)
- [gnupg_addsignkey »](function.gnupg-addsignkey.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Додає ключ для шифрування

#gnupg_addencryptkey

(PECL gnupg \>u003d 0.5)

gnupg_addencryptkey — Додає ключ для шифрування

### Опис

**gnupg_addencryptkey**(resource `$identifier`, string `$fingerprint`):
bool

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`fingerprint`
Відбиток ключа.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Процедурний приклад використання **gnupg_addencryptkey()****

` <?php$res u003d gnupg_init();gnupg_addencryptkey($res, "8660281B6051D071D94B5B230549F9DC851566DC");?> `

**Приклад #2 Об'єктно-орієнтований приклад використання
**gnupg_addencryptkey()****

` <?php$gpg u003d new gnupg();$gpg->addencryptkey("8660281B6051D071D94B5B230549F9DC851566DC");?> `

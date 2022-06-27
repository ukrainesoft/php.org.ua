- [«gnupg_cleardecryptkeys](function.gnupg-cleardecryptkeys.md)
- [gnupg_clearsignkeys »](function.gnupg-clearsignkeys.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Видаляє всі ключі, які були встановлені для шифрування раніше

#gnupg_clearencryptkeys

(PECL gnupg \>u003d 0.5)

gnupg_clearencryptkeys — Видаляє всі ключі, встановлені для
шифрування раніше

### Опис

**gnupg_clearencryptkeys**(resource `$identifier`): bool

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Процедурний приклад використання
**gnupg_clearencryptkeys()****

` <?php$res u003d gnupg_init();gnupg_clearencryptkeys($res);?> `

**Приклад #2 Об'єктно-орієнтований приклад використання
**gnupg_clearencryptkeys()****

` <?php$gpg u003d new gnupg();$gpg->clearencryptkeys();?> `

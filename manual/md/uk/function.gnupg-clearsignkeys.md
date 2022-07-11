- [«gnupg_clearencryptkeys](function.gnupg-clearencryptkeys.md)
- [gnupg_decrypt »](function.gnupg-decrypt.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Видаляє всі ключі, які були встановлені для підписання раніше

#gnupg_clearsignkeys

(PECL gnupg \>u003d 0.5)

gnupg_clearsignkeys — Видаляє всі ключі, встановлені для
підписання раніше

### Опис

**gnupg_clearsignkeys**(resource `$identifier`): bool

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Процедурний приклад використання **gnupg_clearsignkeys()****

` <?php$res u003d gnupg_init();gnupg_clearsignkeys($res);?> `

**Приклад #2 Об'єктно-орієнтований приклад використання
**gnupg_clearsignkeys()****

` <?php$gpg u003d new gnupg();$gpg->clearsignkeys();?> `

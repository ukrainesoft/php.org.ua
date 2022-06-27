- [«gnupg_gettrustlist](function.gnupg-gettrustlist.md)
- [gnupg_init »](function.gnupg-init.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Імпортує ключ

#gnupg_import

(PECL gnupg \>u003d 0.3)

gnupg_import — Імпортує ключ

### Опис

**gnupg_import**(resource `$identifier`, string `$keydata`): array

Імпортує ключ `keydata` та повертає масив з інформацією про процес
імпорту.

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`keydata`
Ключ імпорту.

### Значення, що повертаються

У разі успішного виконання повертає масив з інформацією про процес
імпорту. У разі виникнення помилки повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **gnupg_import()** у процедурному
стилі**

` <?php$res u003d gnupg_init();$info u003d gnupg_import($res,$keydata);print_r($info);?> `

**Приклад #2 Приклад використання **gnupg_import()** в
об'єктно-орієнтованому стилі**

` <?php$gpg u003d new gnupg();$info u003d $gpg->import($keydata);print_r($info);?> `

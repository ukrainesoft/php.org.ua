- [«gnupg_init](function.gnupg-init.md)
- [gnupg_listsignatures »](function.gnupg-listsignatures.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Повертає масив з інформацією про всі ключі, які
відповідають заданому шаблону

#gnupg_keyinfo

(PECL gnupg \>u003d 0.1)

gnupg_keyinfo — Повертає масив з інформацією про всі ключі, які
відповідають заданому шаблону

### Опис

**gnupg_keyinfo**(resource `$identifier`, string `$pattern`): array

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`pattern`
Шаблон, що перевіряється на відповідність.

### Значення, що повертаються

Повертає масив з інформацією про всі ключі, які відповідають
заданому шаблону або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **gnupg_keyinfo()** у процедурному
стилі**

` <?php$res u003d gnupg_init();$info u003d gnupg_keyinfo($res, 'test');print_r($info);?> `

**Приклад #2 Приклад використання **gnupg_keyinfo()** в
об'єктно-орієнтованому стилі**

` <?php$gpg u003d new gnupg();$info u003d $gpg->keyinfo("test");print_r($info);?> `

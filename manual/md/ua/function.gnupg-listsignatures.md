- [«gnupg_keyinfo](function.gnupg-keyinfo.md)
- [gnupg_setarmor »](function.gnupg-setarmor.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Перераховує підписи ключа

#gnupg_listsignatures

(PECL gnupg \>u003d 0.5)

gnupg_listsignatures — Перерахунок підпису ключа

### Опис

**gnupg_listsignatures**(resource `$identifier`, string `$keyid`): array

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`keyid`
Ідентифікатор ключа списку підписів.

### Значення, що повертаються

У разі успішного виконання, функція повертає масив підписів ключів.
У разі помилки функція повертає **`null`**.

### Приклади

**Приклад #1 Приклад використання **gnupg_listsignatures()** в
процедурному стилі**

` <?php$res u003d gnupg_init();$signatures u003d gnupg_listsignatures($res, "8660281B6051D071D94B5B230549F9DC851566DC");print_r($signatures);

**Приклад #2 Приклад використання **gnupg_listsignatures()** в
об'єктно-орієнтованому стилі**

` <?php$gpg u003d new gnupg();$signatures u003d $gpg->listsignatures("8660281B6051D071D94B5B230549F9DC851566DC");print_r($signatures);

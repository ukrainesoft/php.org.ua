- [«gnupg_encryptsign](function.gnupg-encryptsign.md)
- [gnupg_getengineinfo »](function.gnupg-getengineinfo.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Експортує ключ

#gnupg_export

(PECL gnupg \>u003d 0.1)

gnupg_export — Експортує ключ

### Опис

**gnupg_export**(resource `$identifier`, string `$fingerprint`): string

Експортує ключ `fingerprint`.

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`fingerprint`
Відбиток ключа.

### Значення, що повертаються

У разі успішного виконання, функція повертає ключ. В разі
виникнення помилки функція повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **gnupg_export()** у процедурному
стилі**

` <?php$res u003d gnupg_init();$export u003d gnupg_export($res, "8660281B6051D071D94B5B230549F9DC851566DC");echo $export;?> `

**Приклад #2 Приклад використання **gnupg_export()** в
об'єктно-орієнтованому стилі**

` <?php$gpg u003d new gnupg();$export u003d $gpg->export("8660281B6051D071D94B5B230549F9DC851566DC");?> `

- [«gnupg_geterrorinfo](function.gnupg-geterrorinfo.md)
- [gnupg_gettrustlist »](function.gnupg-gettrustlist.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Повертає поточний активний протокол для всіх операцій

#gnupg_getprotocol

(PECL gnupg \>u003d 0.1)

gnupg_getprotocol — Повертає поточний активний протокол для всіх
операцій

### Опис

**gnupg_getprotocol**(resource `$identifier`): int

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

### Значення, що повертаються

Повертає поточний активний протокол, який може бути одним з
**`GNUPG_PROTOCOL_OpenPGP`** або **`GNUPG_PROTOCOL_CMS`**.

### Приклади

**Приклад #1 Приклад використання **gnupg_getprotocol()** у процедурному
стилі**

` <?php$res u003d gnupg_init();echo gnupg_getprotocol($res);?> `

**Приклад #2 Приклад використання **gnupg_getprotocol()** в
об'єктно-орієнтованому стилі**

` <?php$gpg u003d new gnupg();echo $gpg->getprotocol();?> `

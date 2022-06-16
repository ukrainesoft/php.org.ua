- [« svn_repos_recover](function.svn-repos-recover.md)
- [svn_status »](function.svn-status.md)

- [PHP Manual](index.md)
- [Функції SVN](ref.svn.md)
- Скасує локальні зміни робочої копії

# svn_revert

(PECL svn \>u003d 0.3.0)

svn_revert — Скасує локальні зміни робочої копії

### Опис

**svn_revert**(string `$path`, bool `$recursive` u003d **`false`**): bool

Скасує всі локальні зміни файлів, розміщених у робочій копії.

### Список параметрів

`path`
Шлях до робочої копії.

`recursive`
Опціональний параметр рекурсивного скасування правок.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [svn_delete()](function.svn-delete.md) - Видаляє елементи з
робочої копії або репозиторію
- [svn_export()](function.svn-export.md) - Експортує вміст
директорії SVN

- [« svn_diff](function.svn-diff.md)
- [svn_fs_abort_txn »](function.svn-fs-abort-txn.md)

- [PHP Manual](index.md)
- [Функції SVN](ref.svn.md)
- Експортує вміст директорії SVN

# svn_export

(PECL svn \>u003d 0.3.0)

svn_export — Експортує вміст директорії SVN

### Опис

**svn_export**(
string `$frompath`,
string `$topath`,
bool `$working_copy` u003d **`true`**,
int `$revision_no` u003d -1
): bool

Експортує дані як з робочої копії, так і з репозиторію в
'чисту' директорію.

### Список параметрів

`frompath`
Шлях до поточного репозиторію або робочої копії.

`topath`
Шлях до "чистої" папки для експорту.

`working_copy`
При **`true`** з робочої копії будуть також експортовані
ненаправлені в репозиторій файли.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **svn_export()****

` <?php$working_dir     u003d '../';$new_working_dir u003d '/home/user/devel/foo/trunk';svn_export($working_dir, $new_working_dir);?> `

### Дивіться також

- [svn_import()](function.svn-import.md) - Імпортувати шляхи без версії в
репозиторії

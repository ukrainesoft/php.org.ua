- [« svn_auth_set_parameter](function.svn-auth-set-parameter.md)
- [svn_cat »] (function.svn-cat.md)

- [PHP Manual](index.md)
- [Функції SVN](ref.svn.md)
- Построчно виводить автора та редакцію для файлу

# svn_blame

(PECL svn \>u003d 0.3.0)

svn_blame — Построчно виводить автора та редакцію для файлу

### Опис

**svn_blame**(string `$repository_url`, int `$revision_no` u003d
SVN_REVISION_HEAD): array

Построчно виводить автора та редакцію для файлу з репозиторію.

### Список параметрів

`repository_url`
URL-репозиторія.

`revision_no`
Номер ревізії.

### Значення, що повертаються

array Порядковий масив з такою інформацією: номер ревізії, номер
рядки, рядок коду, автор та дата.

### Приклади

**Приклад #1 Приклад використання функції **svn_blame()****

` <?php$svnurl u003d 'http://svn.example.org/svnroot/foo/trunk/index.php';print_r( svn_blame($svnurl) );?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[0] u003d Array
(
[rev] u003d 1
[line_no] u003d 1
[line] u003d Hello World
[author] u003d joesmith
[date] u003d 2007-07-02T05:51:26.628396Z
)
[1] u003d Array
...

### Дивіться також

- [svn_diff()](function.svn-diff.md) - Рекурсивно показує
відмінності двох файлів
- **svn_logs()**
- [svn_status()](function.svn-status.md) - Повертає SVN-статус
файлів та директорій робочої копії

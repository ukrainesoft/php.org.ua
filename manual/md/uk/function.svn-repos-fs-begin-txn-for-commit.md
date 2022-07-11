- [« svn_repos_create](function.svn-repos-create.md)
- [svn_repos_fs_commit_txn »](function.svn-repos-fs-commit-txn.md)

- [PHP Manual](index.md)
- [Функції SVN](ref.svn.md)
- Створення нової транзакції

# svn_repos_fs_begin_txn_for_commit

(PECL svn \>u003d 0.2.0)

svn_repos_fs_begin_txn_for_commit — Створення нової транзакції

### Опис

**svn_repos_fs_begin_txn_for_commit**(
resource `$repos`,
int `$rev`,
string `$author`,
string `$log_msg`
): resource

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

Створення нової транзакції.

### Примітки

**Увага**

Ця функція є ЕКСПЕРИМЕНТАЛЬНОЮ. Поведінка цієї функції, її ім'я
і документація, що відноситься до неї, можуть змінитися в наступних версіях
PHP без попередження. Використовуйте цю функцію на свій страх та ризик.

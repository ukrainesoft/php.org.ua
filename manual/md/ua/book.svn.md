- [« SVMModel::save](svmmodel.save.md)
- [Вступ »](intro.svn.md)

- [PHP Manual](index.md)
- [Інші служби](refs.remote.other.md)
- Subversion

# Subversion

- [Вступ](intro.svn.md)
- [Встановлення та налаштування](svn.setup.md)
- [Вимоги](svn.requirements.md)
- [Установка](svn.installation.md)
- [Налаштування під час виконання](svn.configuration.md)
- [Типи ресурсів](svn.resources.md)
- [Предвизначені константи](svn.constants.md)
- [Функції SVN](ref.svn.md)
- [svn_add](function.svn-add.md) — Додає елементи до списку
запланованих для додавання до робочої копії
- [svn_auth_get_parameter](function.svn-auth-get-parameter.md) -
Повертає параметр аутентифікації
- [svn_auth_set_parameter](function.svn-auth-set-parameter.md) -
Встановлює параметр автентифікації
- [svn_blame](function.svn-blame.md) — Построчно виводить автора
та редакцію для файлу
- [svn_cat](function.svn-cat.md) — Повертає вміст файлу до
репозиторії
- [svn_checkout](function.svn-checkout.md) - Отримує робочу
копію з репозиторію
- [svn_cleanup](function.svn-cleanup.md) - Рекурсивно очищає
робочу копію директорії, завершує незакінчені операції та
знімає блокування
- [svn_client_version](function.svn-client-version.md) -
Повертає версію клієнтських бібліотек SVN
- [svn_commit](function.svn-commit.md) — надсилає зміни з
робочої директорії до репозиторію
- [svn_delete](function.svn-delete.md) — Видаляє елементи з
робочої копії або репозиторію
- [svn_diff](function.svn-diff.md) - Рекурсивно показує
відмінності двох файлів
- [svn_export](function.svn-export.md) — Експортує вміст
директорії SVN
- [svn_fs_abort_txn](function.svn-fs-abort-txn.md) — Скасує
транзакцію
- [svn_fs_apply_text](function.svn-fs-apply-text.md) — Створює та
повертає потік, який буде використаний для заміни
- [svn_fs_begin_txn2](function.svn-fs-begin-txn2.md) — Створює
нову транзакцію
- [svn_fs_change_node_prop](function.svn-fs-change-node-prop.md)
— Повертає true, якщо операція пройшла успішно або false
інакше
- [svn_fs_check_path](function.svn-fs-check-path.md) -
Визначає, яка сутність знаходиться у дорозі репозиторію fsroot
- [svn_fs_contents_changed](function.svn-fs-contents-changed.md)
— Повертає true, якщо вміст відрізняється або false
інакше
- [svn_fs_copy](function.svn-fs-copy.md) — копіює файл або
директорію
- [svn_fs_delete](function.svn-fs-delete.md) — Видалення файлу або
директорію
- [svn_fs_dir_entries](function.svn-fs-dir-entries.md) -
Перераховує елементи директорії заданим шляхом; повертає
хеш імен директорій та типів файлів
- [svn_fs_file_contents](function.svn-fs-file-contents.md) -
Повертає потік для доступу до вмісту файлу з цього
файлової системи
- [svn_fs_file_length](function.svn-fs-file-length.md) -
Повертає довжину файлу з даної файлової системи
- [svn_fs_is_dir](function.svn-fs-is-dir.md) - Визначає
чи знаходиться директорія цим шляхом
- [svn_fs_is_file](function.svn-fs-is-file.md) — Визначає якщо
чи знаходиться файл по даному шляху
- [svn_fs_make_dir](function.svn-fs-make-dir.md) — Створює нову
порожню директорію
- [svn_fs_make_file](function.svn-fs-make-file.md) — Створює
новий порожній файл
- [svn_fs_node_created_rev](function.svn-fs-node-created-rev.md)
— Повертає номер ревізії, коли було створено шлях у файловій
системі
- [svn_fs_node_prop](function.svn-fs-node-prop.md) — Повертає
значення якості для вузла
- [svn_fs_props_changed](function.svn-fs-props-changed.md) -
Повертає true, якщо властивості різні або false у протилежному
випадку
- [svn_fs_revision_prop](function.svn-fs-revision-prop.md) -
Повертає значення цієї властивості
- [svn_fs_revision_root](function.svn-fs-revision-root.md) -
Повертає дескриптор певної версії кореневої директорії
репозиторія
- [svn_fs_txn_root](function.svn-fs-txn-root.md) — Створює та
повертає корінь транзакції
- [svn_fs_youngest_rev](function.svn-fs-youngest-rev.md) -
Повертає номер найранішої ревізії у файловій системі
- [svn_import](function.svn-import.md) — Імпортувати дорогу без версії
у репозиторії
- [svn_log](function.svn-log.md) — Повертає коментарі до
правкам у репозиторії
- [svn_ls](function.svn-ls.md) — Повертає список вмісту
директорії репозиторію URL, опціонально для конкретної ревізії
- [svn_mkdir](function.svn-mkdir.md) — Створює директорію в
робочої копії або у репозиторії
- [svn_repos_create](function.svn-repos-create.md) — Створення
нового репозиторію Subversion
- [svn_repos_fs_begin_txn_for_commit](function.svn-repos-fs-begin-txn-for-commit.md)
- Створення нової транзакції
- [svn_repos_fs_commit_txn](function.svn-repos-fs-commit-txn.md)
— Надсилання транзакції та повернення номера ревізії
- [svn_repos_fs](function.svn-repos-fs.md) - Повертає
дескриптор файлової системи для репозиторію
- [svn_repos_hotcopy](function.svn-repos-hotcopy.md) — Створює
свіжу копію репозиторію за адресою repospath і копіює в
destpath
- [svn_repos_open](function.svn-repos-open.md) - Відкриває
репозиторій із загальним блокуванням
- [svn_repos_recover](function.svn-repos-recover.md) - Запускає
процедури відновлення репозиторію
- [svn_revert](function.svn-revert.md) — скасовує локальні
зміни робочої копії
- [svn_status](function.svn-status.md) - Повертає SVN-статус
файлів та директорій робочої копії
- [svn_update](function.svn-update.md) — Оновлює робочу копію

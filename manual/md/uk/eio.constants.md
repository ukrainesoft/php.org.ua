- [« Типи ресурсів] (eio.resources.md)
- [Приклади »](eio.examples.md)

- [PHP Manual](index.md)
- [Eio](book.eio.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

Константи пріоритету запиту:

**`EIO_PRI_MIN`** (int)
Мінімальний пріоритет запиту

**`EIO_PRI_DEFAULT`** (int)
Пріоритет за замовчуванням

**`EIO_PRI_MAX`** (int)
Максимальний пріоритет запиту

Аргумент `whence` функції [eio_seek()](function.eio-seek.md):

**`EIO_SEEK_SET`** (int)
Усунення `offset`, задане в байтах.

**`EIO_SEEK_CUR`** (int)
Зміщення `offset`, задане у байтах від поточного значення.

**`EIO_SEEK_END`** (int)
Усунення `offset`, задане в байтах від розміру файлу.

Прапори, що використовуються в [eio_readdir()](function.eio-readdir.md):

**`EIO_READDIR_DENTS`** (int)
Прапор [eio_readdir()](function.eio-readdir.md). Якщо зазначено, аргумент
для виконання callback-функції стає масивом із наступними
ключами: `names`` - масив імен директорії ``dents'` - масив масивів
виду `struct eio_dirent`, кожен з яких має ключі: ``name'` - ім'я
директорії; `'type'` - одна з констант *EIO_DT\_\**; ``inode'` - Номер
inode, якщо він доступний, інакше значення не вказується;

**`EIO_READDIR_DIRS_FIRST`** (int)
Коли прапор вказано, імена будуть повернуті у порядку, за якого будуть
повернені першими директоріями в оптимальному порядку.

**`EIO_READDIR_STAT_ORDER`** (int)
Коли прапор вказано, імена будуть повернуті у порядку, залежно від
`stat` кожного з них. Якщо планується виконати
[stat()](function.stat.md) для всіх файлів у директорії, такий порядок
буде, швидше за все, найшвидшим.

**`EIO_READDIR_FOUND_UNKNOWN`** (int)

**`EIO_DT_UNKNOWN`** (int)
Невідомий тип вузла (дуже поширений). Далі потрібен виклик
[stat()](function.stat.md).

**`EIO_DT_FIFO`** (int)
Тип FIFO вузла

**`EIO_DT_CHR`** (int)
Тип вузла

**`EIO_DT_MPC`** (int)
Тип вузла мультиплексний символьний пристрій (v7+coherent)

**`EIO_DT_DIR`** (int)
Тип вузла директорія

**`EIO_DT_NAM`** (int)
Тип вузла - спеціальний іменований файл Xenix (Xenix special named file)

**`EIO_DT_BLK`** (int)
Тип вузла

**`EIO_DT_MPB`** (int)
Тип вузла мультиплексний блоковий пристрій (Multiplexed block device)
(v7+coherent)

**`EIO_DT_REG`** (int)
Тип вузла

**`EIO_DT_NWK`** (int)

**`EIO_DT_CMP`** (int)
Тип вузла HP-UX network special

**`EIO_DT_LNK`** (int)
Тип вузла посилання

**`EIO_DT_SOCK`** (int)
Тип вузла сокет

**`EIO_DT_DOOR`** (int)
Тип вузла Solaris door

**`EIO_DT_WHT`** (int)
Тип вузла

**`EIO_DT_MAX`** (int)
Найбільше значення типу вузла

Режими доступу для [eio_open()](function.eio-open.md) аргумент
`flags`:

**`EIO_O_RDONLY`** (int)

**`EIO_O_WRONLY`** (int)

**`EIO_O_RDWR`** (int)

**`EIO_O_NONBLOCK`** (int)

**`EIO_O_APPEND`** (int)

**`EIO_O_CREAT`** (int)

**`EIO_O_TRUNC`** (int)

**`EIO_O_EXCL`** (int)

**`EIO_O_FSYNC`** (int)

Прапори аргументу `mode` функції [eio_open()](function.eio-open.md):

**`EIO_S_IRUSR`** (int)

**`EIO_S_IWUSR`** (int)

**`EIO_S_IXUSR`** (int)

**`EIO_S_IRGRP`** (int)

**`EIO_S_IWGRP`** (int)

**`EIO_S_IXGRP`** (int)

**`EIO_S_IROTH`** (int)

**`EIO_S_IWOTH`** (int)

**`EIO_S_IXOTH`** (int)

**`EIO_S_IFREG`** (int)

**`EIO_S_IFCHR`** (int)

**`EIO_S_IFBLK`** (int)

**`EIO_S_IFIFO`** (int)

**`EIO_S_IFSOCK`** (int)

Прапори функції
[eio_sync_file_range()](function.eio-sync-file-range.md):

**`EIO_SYNC_FILE_RANGE_WAIT_BEFORE`** (int)

**`EIO_SYNC_FILE_RANGE_WRITE`** (int)

**`EIO_SYNC_FILE_RANGE_WAIT_AFTER`** (int)

Прапори функції [eio_fallocate()](function.eio-fallocate.md):

**`EIO_FALLOC_FL_KEEP_SIZE`** (int)

> **Примітка**:
>
> Константи *EIO_S\_I\** мають те саме значення, що їх колеги *S_I\**
> POSIX.

> **Примітка**:
>
> *EIO_SYNC_FILE\_\** мають те саме значення, що й колеги
> *SYNC_FILE\_\*\**.

> **Примітка**:
>
> *EIO_O\_\** мають те саме значення, що їх колеги *O\_\** у POSIX.

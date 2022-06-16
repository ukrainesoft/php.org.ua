- [« Помилки та їх обробка](pdo.error-handling.md)
- [PDO »](class.pdo.md)

- [PHP Manual](index.md)
- [PDO](book.pdo.md)
- Великі об'єкти (LOB)

# Великі об'єкти (LOB)

Іноді для роботи програми необхідно зберігати "великі" порції даних
у основі. Зазвичай, під великим розуміють обсяг даних "близько 4 кілобайт або
більше", хоча деякі бази даних можуть спокійно обробляти до 32
кілобайт, перш ніж розмір даних стає "великим". Великі об'єкти
можуть бути текстовими чи двійковими. PDO дозволяє працювати з такими
об'єктами шляхом встановлення типу даних **`PDO::PARAM_LOB`** у методах
[PDOStatement::bindParam()](pdostatement.bindparam.md) або
[PDOStatement::bindColumn()](pdostatement.bindcolumn.md).
**`PDO::PARAM_LOB`** повідомляє PDO, що потрібно помітити ці дані, як
потік. І відповідно працювати з такими об'єктами можна, використовуючи
[API потоків PHP](ref.stream.md).

**Приклад #1 Виведення зображення, що зберігається в базі даних**

У цьому прикладі змінної $lob задають у відповідність великий об'єкт LOB,
а потім відсилають її до браузера за допомогою функції
[fpassthru()](function.fpassthru.md). Оскільки LOB представляється в
вигляді потоку, з ним можуть працювати такі функції, як
[fgets()](function.fgets.md), [fread()](function.fread.md) та
[stream_get_contents()](function.stream-get-contents.md).

` <?php$db u003d new PDO('odbc:SAMPLE', 'db2inst1', 'ibmdb2');$stmt u003d $db->prepare("select contenttype, imagedata from images where idu003d?"); ->execute(array($_GET['id']));$stmt->bindColumn(1, $type, PDO::PARAM_STR, 256);$stmt->bindColumn(2, $lob, PDO::PARAM_LOB );$stmt->fetch(PDO::FETCH_BOUND);header("Content-Type: $type");fpassthru($lob);?> `

**Приклад #2 Вставляння зображення в базу даних**

У цьому прикладі буде відкриватися файл із зображенням, його файловий
покажчик передається PDO, який в свою чергу вставляє зображення в
основу як LOB. PDO витягне вміст файлу і помістить його в базу
найефективнішим способом.

` <?php$db u003d new PDO('odbc:SAMPLE', 'db2inst1', 'ibmdb2');$stmt u003d $db->prepare("insert into images (id, contenttype, imagedata) valu values , ?)");$id u003d get_new_id(); // якась функція для виділення нового ID// припустимо,що ми перебуваємо на сторінці завантаження файлів на віддалений сервер$fp u003d fopen($_FILES['$' >bindParam(1, $id);$stmt->bindParam(2, $_FILES['file']['type']);$stmt->bindParam(3, $fp, PDO::PARAM_LOB);$db ->beginTransaction();$stmt->execute();$db->commit();?> `

**Приклад #3 Вставлення зображення до бази даних: Oracle**

У випадку з базами Oracle потрібен інший синтаксис для
вилучення вмісту файлу та приміщення в базу. Також необхідно
виконувати вставку в рамках транзакції, інакше вставлений LOB буде
зафіксований в базі з нульовою довжиною, тому що якщо не позначити межі
транзакції, зміни фіксуватимуться після кожного виконаного
запиту.

` <?php$db u003d new PDO('oci:', 'scott', 'tiger');$stmtu003du003d$db->prepare("insert into images (id, contenttype, imagedata) " ."VALUES (?) , ?, EMPTY_BLOB()) RETURNING imagedata INTO ?");$id u003d get_new_id(); // якась функція для виділення ID// припустимо,що ми перебуваємо на сторінці завантаження файлів на віддалений сервер$fp u003d fopen($_FILES['file']''t'; bindParam(1, $id);$stmt->bindParam(2, $_FILES['file']['type']);$stmt->bindParam(3, $fp, PDO::PARAM_LOB);$db- >beginTransaction();$stmt->execute();$db->commit();?> `

- [« Атака за допомогою ін'єкцій у
скриптах](mongodb.security.script_injection.md)
- [MongoDB\Driver\Manager »](class.mongodb-driver-manager.md)

- [PHP Manual](index.md)
- [MongoDB](set.mongodb.md)
- Класи драйвера MongoDB

# Класи драйвера MongoDB

- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md) - Клас
MongoDB\Driver\Manager
- [MongoDB\Driver\Manager::addSubscriber](mongodb-driver-manager.addsubscriber.md)
— Реєструє передплатника на подію моніторингу в цьому
об'єкті Manager
- [MongoDB\Driver\Manager::\_\_construct](mongodb-driver-manager.construct.md)
- Створює новий Manager MongoDB
- [MongoDB\Driver\Manager::createClientEncryption](mongodb-driver-manager.createclientencryption.md)
— Створення нового об'єкта ClientEncryption
- [MongoDB\Driver\Manager::executeBulkWrite](mongodb-driver-manager.executebulkwrite.md)
— Виконує одну або кілька операцій запису
- [MongoDB\Driver\Manager::executeCommand](mongodb-driver-manager.executecommand.md)
- Виконує команду бази даних
- [MongoDB\Driver\Manager::executeQuery](mongodb-driver-manager.executequery.md)
— Виконує запит до бази даних
- [MongoDB\Driver\Manager::executeReadCommand](mongodb-driver-manager.executereadcommand.md)
- Виконує команду бази даних, яка читає
- [MongoDB\Driver\Manager::executeReadWriteCommand](mongodb-driver-manager.executereadwritecommand.md)
— Виконує команду бази даних, яка читає та пише
- [MongoDB\Driver\Manager::executeWriteCommand](mongodb-driver-manager.executewritecommand.md)
- Виконує команду бази даних, яка пише
- [MongoDB\Driver\Manager::getEncryptedFieldsMap](mongodb-driver-manager.getencryptedfieldsmap.md)
— Повертає опцію автоматичного шифрування encryptedFieldsMap
для Manager
- [MongoDB\Driver\Manager::getReadConcern](mongodb-driver-manager.getreadconcern.md)
— Повертає ReadConcern для Manager
- [MongoDB\Driver\Manager::getReadPreference](mongodb-driver-manager.getreadpreference.md)
— Повертає ReadPreference для Manager
- [MongoDB\Driver\Manager::getServers](mongodb-driver-manager.getservers.md)
— Повертає сервери, до яких підключено менеджера
- [MongoDB\Driver\Manager::getWriteConcern](mongodb-driver-manager.getwriteconcern.md)
— Повертає WriteConcern для Manager
- [MongoDB\Driver\Manager::removeSubscriber](mongodb-driver-manager.removesubscriber.md)
— Скасує реєстрацію передплатника на подію моніторингу
даному об'єкті Manager
- [MongoDB\Driver\Manager::selectServer](mongodb-driver-manager.selectserver.md)
— Вибрати сервер, який відповідає перевагам читання
- [MongoDB\Driver\Manager::startSession](mongodb-driver-manager.startsession.md)
— Запускає новий сеанс клієнта для використання з цим
клієнтом
- [MongoDB\Driver\Command](class.mongodb-driver-command.md) - Клас
The MongoDB\Driver\Command
- [MongoDB\Driver\Command::\_\_construct](mongodb-driver-command.construct.md)
— Створює новий об'єкт Command
- [MongoDB\Driver\Query](class.mongodb-driver-query.md) - Клас
MongoDB\Driver\Query
- [MongoDB\Driver\Query::\_\_construct](mongodb-driver-query.construct.md)
- Створює новий запит
- [MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md) -
Клас MongoDB\Driver\BulkWrite
- [MongoDB\Driver\BulkWrite::\_\_construct](mongodb-driver-bulkwrite.construct.md)
— Створює новий об'єкт BulkWrite
- [MongoDB\Driver\BulkWrite::count](mongodb-driver-bulkwrite.count.md)
- Підраховує кількість операцій запису в порції
- [MongoDB\Driver\BulkWrite::delete](mongodb-driver-bulkwrite.delete.md)
— Додавання операції видалення порції
- [MongoDB\Driver\BulkWrite::insert](mongodb-driver-bulkwrite.insert.md)
- Додати операцію вставки в порцію
- [MongoDB\Driver\BulkWrite::update](mongodb-driver-bulkwrite.update.md)
— Додати операцію оновлення до порції
- [MongoDB\Driver\Session](class.mongodb-driver-session.md) - Клас
MongoDB\Driver\Session
- [MongoDB\Driver\Session::abortTransaction](mongodb-driver-session.aborttransaction.md)
- Перериває транзакцію
- [MongoDB\Driver\Session::advanceClusterTime](mongodb-driver-session.advanceclustertime.md)
- Збільшує час кластера для сеансу
- [MongoDB\Driver\Session::advanceOperationTime](mongodb-driver-session.advanceoperationtime.md)
- Збільшує час операції для сеансу
- [MongoDB\Driver\Session::commitTransaction](mongodb-driver-session.committransaction.md)
- Фіксує транзакцію
- [MongoDB\Driver\Session::\_\_construct](mongodb-driver-session.construct.md)
- Створює новий сеанс (не використовується)
- [MongoDB\Driver\Session::endSession](mongodb-driver-session.endsession.md)
- Завершує сеанс
- [MongoDB\Driver\Session::getClusterTime](mongodb-driver-session.getclustertime.md)
— Повертає час кластера для цього сеансу
- [MongoDB\Driver\Session::getLogicalSessionId](mongodb-driver-session.getlogicalsessionid.md)
— Повертає логічний ідентифікатор сеансу для цього сеансу
- [MongoDB\Driver\Session::getOperationTime](mongodb-driver-session.getoperationtime.md)
— Повертає час операції для цього сеансу
- [MongoDB\Driver\Session::getServer](mongodb-driver-session.getserver.md)
— Повертає сервер, до якого прив'язана поточна сесія.
- [MongoDB\Driver\Session::getTransactionOptions](mongodb-driver-session.gettransactionoptions.md)
— Повертає установки поточної транзакції
- [MongoDB\Driver\Session::getTransactionState](mongodb-driver-session.gettransactionstate.md)
— Повертає статус транзакції для поточної сесії
- [MongoDB\Driver\Session::isDirty](mongodb-driver-session.isdirty.md)
— Повертає, чи сесія була позначена як брудна
- [MongoDB\Driver\Session::isInTransaction](mongodb-driver-session.isintransaction.md)
— Визначає, чи наразі відбувається багатодокументна
транзакція
- [MongoDB\Driver\Session::startTransaction](mongodb-driver-session.starttransaction.md)
- Запускає транзакцію
- [MongoDB\Driver\ClientEncryption](class.mongodb-driver-clientencryption.md)
- Клас MongoDB\Driver\ClientEncryption
- [MongoDB\Driver\ClientEncryption::\_\_construct](mongodb-driver-clientencryption.construct.md)
— Створює новий об'єкт ClientEncryption
- [MongoDB\Driver\ClientEncryption::createDataKey](mongodb-driver-clientencryption.createdatakey.md)
— Створює ключ шифрування
- [MongoDB\Driver\ClientEncryption::decrypt](mongodb-driver-clientencryption.decrypt.md)
— Розшифрувати дані
- [MongoDB\Driver\ClientEncryption::encrypt](mongodb-driver-clientencryption.encrypt.md)
- Шифрує дані
- [MongoDB\Driver\ServerApi](class.mongodb-driver-serverapi.md) -
Клас MongoDB\Driver\ServerApi
- [MongoDB\Driver\ServerApi::bsonSerialize](mongodb-driver-serverapi.bsonserialize.md)
— Повертає об'єкт для серіалізації BSON
- [MongoDB\Driver\ServerApi::\_\_construct](mongodb-driver-serverapi.construct.md)
— Створює новий примірник ServerApi
- [MongoDB\Driver\ServerApi::serialize](mongodb-driver-serverapi.serialize.md)
- Серіалізує ServerApi
- [MongoDB\Driver\ServerApi::unserialize](mongodb-driver-serverapi.unserialize.md)
- Десеріалізує ServerApi
- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- Клас MongoDB\Driver\WriteConcern
- [MongoDB\Driver\WriteConcern::bsonSerialize](mongodb-driver-writeconcern.bsonserialize.md)
— Повертає об'єкт серіалізації BSON
- [MongoDB\Driver\WriteConcern::\_\_construct](mongodb-driver-writeconcern.construct.md)
- Створити новий WriteConcern
- [MongoDB\Driver\WriteConcern::getJournal](mongodb-driver-writeconcern.getjournal.md)
— Повертає опцію journal WriteConcern
- [MongoDB\Driver\WriteConcern::getW](mongodb-driver-writeconcern.getw.md)
- Повертає опцію "w" WriteConcern
- [MongoDB\Driver\WriteConcern::getWtimeout](mongodb-driver-writeconcern.getwtimeout.md)
- Повертає опцію "wtimeout" WriteConcern
- [MongoDB\Driver\WriteConcern::isDefault](mongodb-driver-writeconcern.isdefault.md)
— Перевіряє, чи є гарантія запису за замовчуванням
- [MongoDB\Driver\WriteConcern::serialize](mongodb-driver-writeconcern.serialize.md)
- Серіалізація WriteConcern
- [MongoDB\Driver\WriteConcern::unserialize](mongodb-driver-writeconcern.unserialize.md)
- Десеріалізація WriteConcern
- [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
- Клас MongoDB\Driver\ReadPreference
- [MongoDB\Driver\ReadPreference::bsonSerialize](mongodb-driver-readpreference.bsonserialize.md)
— Повертає об'єкт серіалізації BSON
- [MongoDB\Driver\ReadPreference::\_\_construct](mongodb-driver-readpreference.construct.md)
— Створити новий ReadPreference
- [MongoDB\Driver\ReadPreference::getHedge](mongodb-driver-readpreference.gethedge.md)
— Повертає опцію "hedge" із ReadPreference
- [MongoDB\Driver\ReadPreference::getMaxStalenessSeconds](mongodb-driver-readpreference.getmaxstalenessseconds.md)
— Повертає параметр "maxStalenessSeconds" ReadPreference
- [MongoDB\Driver\ReadPreference::getMode](mongodb-driver-readpreference.getmode.md)
— Повертає параметр "mode" ReadPreference
- [MongoDB\Driver\ReadPreference::getModeString](mongodb-driver-readpreference.getmodestring.md)
- Повертає опцію "mode" об'єкта ReadPreference у вигляді рядка
- [MongoDB\Driver\ReadPreference::getTagSets](mongodb-driver-readpreference.gettagsets.md)
- Повертає параметр "tagSets" ReadPreference
- [MongoDB\Driver\ReadPreference::serialize](mongodb-driver-readpreference.serialize.md)
— Серіалізація ReadPreference
- [MongoDB\Driver\ReadPreference::unserialize](mongodb-driver-readpreference.unserialize.md)
- Десеріалізація ReadPreference
- [MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md)
- Клас MongoDB\Driver\ReadConcern
- [MongoDB\Driver\ReadConcern::bsonSerialize](mongodb-driver-readconcern.bsonserialize.md)
— Повертає об'єкт для серіалізації BSON
- [MongoDB\Driver\ReadConcern::\_\_construct](mongodb-driver-readconcern.construct.md)
- Створює новий ReadConcern
- [MongoDB\Driver\ReadConcern::getLevel](mongodb-driver-readconcern.getlevel.md)
- Повертає опцію "level" ReadConcern
- [MongoDB\Driver\ReadConcern::isDefault](mongodb-driver-readconcern.isdefault.md)
— Перевіряє, чи є гарантією прочитання за замовчуванням
- [MongoDB\Driver\ReadConcern::serialize](mongodb-driver-readconcern.serialize.md)
- Серіалізація ReadConcern
- [MongoDB\Driver\ReadConcern::unserialize](mongodb-driver-readconcern.unserialize.md)
- Десеріалізація ReadConcern
- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md) - Клас
MongoDB\Driver\Cursor
- [MongoDB\Driver\Cursor::\_\_construct](mongodb-driver-cursor.construct.md)
- Створює новий об'єкт Cursor (не використовується)
- [MongoDB\Driver\Cursor::current](mongodb-driver-cursor.current.md)
— Повертає поточний елемент
- [MongoDB\Driver\Cursor::getId](mongodb-driver-cursor.getid.md)
— Повертає ідентифікатор курсору
- [MongoDB\Driver\Cursor::getServer](mongodb-driver-cursor.getserver.md)
— Повертає сервер, пов'язаний із курсором
- [MongoDB\Driver\Cursor::isDead](mongodb-driver-cursor.isdead.md)
— Перевіряє, чи курсор вичерпано чи може містити
додаткові результати
- [MongoDB\Driver\Cursor::key](mongodb-driver-cursor.key.md) -
Повертає індекс поточного результату у курсорі
- [MongoDB\Driver\Cursor::next](mongodb-driver-cursor.next.md) -
Переміщує курсор на наступний результат
- [MongoDB\Driver\Cursor::rewind](mongodb-driver-cursor.rewind.md)
— Переміщує курсор до першого результату
- [MongoDB\Driver\Cursor::setTypeMap](mongodb-driver-cursor.settypemap.md)
— Встановлює карту типу для десеріалізації BSON
- [MongoDB\Driver\Cursor::toArray](mongodb-driver-cursor.toarray.md)
— Повертає масив, який містить усі результати курсору
- [MongoDB\Driver\Cursor::valid](mongodb-driver-cursor.valid.md)
— Перевіряє, чи поточна позиція курсору коректна.
- [MongoDB\Driver\CursorId](class.mongodb-driver-cursorid.md) -
Клас MongoDB\Driver\CursorId
- [MongoDB\Driver\CursorId::\_\_construct](mongodb-driver-cursorid.construct.md)
- Створює новий об'єкт CursorId (не використовується)
- [MongoDB\Driver\CursorId::serialize](mongodb-driver-cursorid.serialize.md)
- Серіалізація CursorId
- [MongoDB\Driver\CursorId::\_\_toString](mongodb-driver-cursorid.tostring.md)
— Строкове представлення ідентифікатора курсору
- [MongoDB\Driver\CursorId::unserialize](mongodb-driver-cursorid.unserialize.md)
- Десеріалізація CursorId
- [MongoDB\Driver\CursorInterface](class.mongodb-driver-cursorinterface.md)
- Інтерфейс MongoDB\Driver\CursorInterface
- [MongoDB\Driver\CursorInterface::getId](mongodb-driver-cursorinterface.getid.md)
- Повертає ідентифікатор курсору
- [MongoDB\Driver\CursorInterface::getServer](mongodb-driver-cursorinterface.getserver.md)
— Повертає сервер, з яким пов'язаний курсор
- [MongoDB\Driver\CursorInterface::isDead](mongodb-driver-cursorinterface.isdead.md)
— Перевірити, чи можна ще отримати з курсору результати
- [MongoDB\Driver\CursorInterface::setTypeMap](mongodb-driver-cursorinterface.settypemap.md)
— Задати порівняння типів десеріалізації BSON
- [MongoDB\Driver\CursorInterface::toArray](mongodb-driver-cursorinterface.toarray.md)
— Повернути всі результати для цього курсору у вигляді масиву
- [MongoDB\Driver\Server](class.mongodb-driver-server.md) - Клас
MongoDB\Driver\Server
- [MongoDB\Driver\Server::\_\_construct](mongodb-driver-server.construct.md)
- Створює новий Server (не використовується)
- [MongoDB\Driver\Server::executeBulkWrite](mongodb-driver-server.executebulkwrite.md)
— Виконати одну або кілька операцій запису на сервері
- [MongoDB\Driver\Server::executeCommand](mongodb-driver-server.executecommand.md)
— Виконати команду бази даних на сервері
- [MongoDB\Driver\Server::executeQuery](mongodb-driver-server.executequery.md)
— Виконує запит до бази даних на сервері
- [MongoDB\Driver\Server::executeReadCommand](mongodb-driver-server.executereadcommand.md)
- Виконує команду бази даних, яка читає на сервері
- [MongoDB\Driver\Server::executeReadWriteCommand](mongodb-driver-server.executereadwritecommand.md)
— Виконує команду бази даних, яка читає та пише на
сервері
- [MongoDB\Driver\Server::executeWriteCommand](mongodb-driver-server.executewritecommand.md)
- Виконує команду бази даних, яка пише на сервері
- [MongoDB\Driver\Server::getHost](mongodb-driver-server.gethost.md)
— Повертає ім'я сервера хоста
- [MongoDB\Driver\Server::getInfo](mongodb-driver-server.getinfo.md)
— Повертає масив інформації, що описує сервер
- [MongoDB\Driver\Server::getLatency](mongodb-driver-server.getlatency.md)
— Повертає затримку сервера у мілісекундах
- [MongoDB\Driver\Server::getPort](mongodb-driver-server.getport.md)
— Повертає порт, який слухає сервер
- [MongoDB\Driver\Server::getServerDescription](mongodb-driver-server.getserverdescription.md)
— Повертає ServerDescription сервера
- [MongoDB\Driver\Server::getTags](mongodb-driver-server.gettags.md)
— Повертає масив тегів, що описують сервер у наборі реплік
- [MongoDB\Driver\Server::getType](mongodb-driver-server.gettype.md)
— Повертає ціле число, яке позначає тип сервера
- [MongoDB\Driver\Server::isArbiter](mongodb-driver-server.isarbiter.md)
— Перевіряє, чи є сервер-арбітром у наборі реплік
- [MongoDB\Driver\Server::isHidden](mongodb-driver-server.ishidden.md)
— Перевіряє, чи сервер є прихованим членом набору реплік
- [MongoDB\Driver\Server::isPassive](mongodb-driver-server.ispassive.md)
— Перевіряє, чи сервер є пасивним членом набору реплік
- [MongoDB\Driver\Server::isPrimary](mongodb-driver-server.isprimary.md)
— Перевіряє, чи сервер є основним членом набору реплік
- [MongoDB\Driver\Server::isSecondary](mongodb-driver-server.issecondary.md)
— Перевіряє, чи цей сервер є другорядним членом
набору реплік
- [MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)
- Клас MongoDB\Driver\ServerDescription
- [MongoDB\Driver\ServerDescription::getHelloResponse](mongodb-driver-serverdescription.gethelloresponse.md)
— Повертає останню відповідь сервера "hello"
- [MongoDB\Driver\ServerDescription::getHost](mongodb-driver-serverdescription.gethost.md)
— Повертає ім'я сервера хоста
- [MongoDB\Driver\ServerDescription::getLastUpdateTime](mongodb-driver-serverdescription.getlastupdatetime.md)
— Повертає час останнього оновлення сервера у мікросекундах
- [MongoDB\Driver\ServerDescription::getPort](mongodb-driver-serverdescription.getport.md)
— Повертає порт, на якому прослуховується цей сервер
- [MongoDB\Driver\ServerDescription::getRoundTripTime](mongodb-driver-serverdescription.getroundtriptime.md)
— Повертає час обходу сервера в мілісекундах
- [MongoDB\Driver\ServerDescription::getType](mongodb-driver-serverdescription.gettype.md)
— Повертає рядок, який позначає тип сервера
- [MongoDB\Driver\TopologyDescription](class.mongodb-driver-topologydescription.md)
- Клас MongoDB\Driver\TopologyDescription
- [MongoDB\Driver\TopologyDescription::getServers](mongodb-driver-topologydescription.getservers.md)
— Повертає сервери у топології
- [MongoDB\Driver\TopologyDescription::getType](mongodb-driver-topologydescription.gettype.md)
— Повертає рядок, що позначає тип топології
- [MongoDB\Driver\TopologyDescription::hasReadableServer](mongodb-driver-topologydescription.hasreadableserver.md)
— Повертає, чи є у топології сервер, доступний для читання
- [MongoDB\Driver\TopologyDescription::hasWritableServer](mongodb-driver-topologydescription.haswritableserver.md)
— Повертає, чи є у топології сервер, доступний для запису
- [MongoDB\Driver\WriteConcernError](class.mongodb-driver-writeconcernerror.md)
- Клас The MongoDB\Driver\WriteConcernError
- [MongoDB\Driver\WriteConcernError::getCode](mongodb-driver-writeconcernerror.getcode.md)
— Повертає код помилки WriteConcernError
- [MongoDB\Driver\WriteConcernError::getInfo](mongodb-driver-writeconcernerror.getinfo.md)
— Повертає документ метаданих для WriteConcernError
- [MongoDB\Driver\WriteConcernError::getMessage](mongodb-driver-writeconcernerror.getmessage.md)
— Повертає повідомлення про помилку WriteConcernError
- [MongoDB\Driver\WriteError](class.mongodb-driver-writeerror.md) -
Клас MongoDB\Driver\WriteError
- [MongoDB\Driver\WriteError::getCode](mongodb-driver-writeerror.getcode.md)
— Повертає код помилки WriteError
- [MongoDB\Driver\WriteError::getIndex](mongodb-driver-writeerror.getindex.md)
— Повертає індекс запису, який відповідає цьому WriteError
- [MongoDB\Driver\WriteError::getInfo](mongodb-driver-writeerror.getinfo.md)
— Повертає документ метаданих для WriteError
- [MongoDB\Driver\WriteError::getMessage](mongodb-driver-writeerror.getmessage.md)
— Повертає повідомлення про помилку WriteError
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
- Клас MongoDB\Driver\WriteResult
- [MongoDB\Driver\WriteResult::getDeletedCount](mongodb-driver-writeresult.getdeletedcount.md)
— Повертає кількість видалених документів
- [MongoDB\Driver\WriteResult::getInsertedCount](mongodb-driver-writeresult.getinsertedcount.md)
— Повертає кількість вставлених документів (за винятком
злиття)
- [MongoDB\Driver\WriteResult::getMatchedCount](mongodb-driver-writeresult.getmatchedcount.md)
— Повертає кількість вибраних документів для оновлення
- [MongoDB\Driver\WriteResult::getModifiedCount](mongodb-driver-writeresult.getmodifiedcount.md)
— Повертає кількість існуючих оновлених документів
- [MongoDB\Driver\WriteResult::getServer](mongodb-driver-writeresult.getserver.md)
— Повертає сервер, пов'язаний із цим результатом запису
- [MongoDB\Driver\WriteResult::getUpsertedCount](mongodb-driver-writeresult.getupsertedcount.md)
— Повертає кількість документів, вставлених злиттям
- [MongoDB\Driver\WriteResult::getUpsertedIds](mongodb-driver-writeresult.getupsertedids.md)
— Повертає масив ідентифікаторів для об'єднаних документів
- [MongoDB\Driver\WriteResult::getWriteConcernError](mongodb-driver-writeresult.getwriteconcernerror.md)
— Повертає будь-яку помилку гарантій запису, що відбувся
- [MongoDB\Driver\WriteResult::getWriteErrors](mongodb-driver-writeresult.getwriteerrors.md)
— Повертає будь-які помилки запису, що відбулися
- [MongoDB\Driver\WriteResult::isAcknowledged](mongodb-driver-writeresult.isacknowledged.md)
— Повертає, чи був запис підтверджений

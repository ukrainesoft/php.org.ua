- [« Множинні запити](mysqli.quickstart.multiple-statement.md)
- [Метадані »](mysqli.quickstart.metadata.md)

- [PHP Manual](index.md)
- [Короткий посібник](mysqli.quickstart.md)
- API підтримка транзакцій

## API підтримка транзакцій

Підтримка транзакцій в СУБД MySQL залежить від використовуваного двигуна
сховища даних. Починаючи з MySQL 5.5, за замовчуванням використовується двигун
InnoDB. InnoDB повністю підтримує модель транзакцій ACID.

Транзакціями можна управляти як засобами SQL, і викликами
API-функцій. Для увімкнення та вимкнення режиму автофіксації змін
(`autocommit`) рекомендується користуватися API функціями.

**Приклад #1 Встановлення режиму автофіксації (`autocommit`) засобами SQL
та функціями API**

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("example.com", "user", "password", "database");/* Рекомендується ми  (false);/* Не розпізнаватиметься і враховуватись плагінами реплікації і балансування навантаження */$mysqli->query('SET AUTOCOMMIT u003d 0'); `

Додаткові служби сервера, такі як плагіни реплікації та
балансування навантаження можуть відслідковувати виклики API-функцій. Плагін
реплікації може повідомляти балансувальнику навантаження про запущене
транзакції, якщо ця транзакція обслуговується функціями API. Сервер не
зможе розподіляти навантаження між репліками бази, якщо зміна режиму
автофіксації (`autocommit`), фіксація та відкат транзакцій здійснюються
SQL запитами.

**Приклад #2 Фіксація та відкат**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("example.com", "user", "password", "database");$mysqli->autocommit(false> "INSERT INTO test(id) VALUES (1)");$mysqli->rollback();$mysqli->query("INSERT INTO test(id) VALUES (2)");$mysqli->commit(); `

Слід зазначити, що MySQL сервер не може відкотити результати всіх
запитів. Деякі зміни фіксуються неявно.

*Дивіться також*

- [mysqli::autocommit()](mysqli.autocommit.md)
- [mysqli::begin_transaction()](mysqli.begin-transaction.md)
- [mysqli::commit()](mysqli.commit.md)
- [mysqli::rollback()](mysqli.rollback.md)

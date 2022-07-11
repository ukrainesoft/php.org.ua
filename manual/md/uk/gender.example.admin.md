- [« Приклади](gender.examples.md)
- [Gender\Gender »](class.gender.md)

- [PHP Manual](index.md)
- [Приклади](gender.examples.md)
- приклад використання

## Приклад використання

Приклад використання класу Gender.

**Приклад #1 Приклад використання.**

` <?phpnamespace Gender;$gender u003d new Gender;$name u003d "Milene";$country u003d Gender::FRANCE;$result u003d $gender->get($name, $country);$data u003d $gender-> country ($country);
", $name, $data['country']);    break;    case Gender::IS_MOSTLY_FEMALE:        printf("%s  - це швидше                         —яКІЯ
", $name, $data['country']);    break;    case Gender::IS_MALE:         printf("%s - це чоловіче ім'я в 
", $name, $data['country']);    break;    case Gender::IS_MOSTLY_MALE:        printf("%s  - це скоріше всього  
", $name, $data['country']);    break;    case Gender::IS_UNISEX_NAME:        printf("Ім'я %s годиться і для жінок|
", $name, $data['country']);    break;    case Gender::IS_A_COUPLE:        printf("Ім'я %s може і і           
", $name, $data['country']);    break;    case Gender::NAME_NOT_FOUND:        printf("Ім'я %s не найдено для страни
", $name, $data['country']);    break;    case Gender::ERROR_IN_NAME:        echo "В заданому імені помилка!
";    break;   default:        echo "Сталася помилка!
";    break;} `

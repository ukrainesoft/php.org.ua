- [« Приклади](svm.examples.md)
- [SVM::\_\_construct »](svm.construct.md)

- [PHP Manual](index.md)
- [SVM](book.svm.md)
- Клас SVM

# Клас SVM

(PECL svm \>u003d 0.1.0)

## Вступ

## Огляд класів

class **SVM** {

/\* Константи \*/

const int `C_SVC` u003d 0;

const int `NU_SVC` u003d 1;

const int `ONE_CLASS` u003d 2;

const int `EPSILON_SVR` u003d 3;

const int `NU_SVR` u003d 4;

const int `KERNEL_LINEAR` u003d 0;

const int `KERNEL_POLY` u003d 1;

const int `KERNEL_RBF` u003d 2;

const int `KERNEL_SIGMOID` u003d 3;

const int `KERNEL_PRECOMPUTED` u003d 4;

const int `OPT_TYPE` u003d 101;

const int `OPT_KERNEL_TYPE` u003d 102;

const int `OPT_DEGREE` u003d 103;

const int `OPT_SHRINKING` u003d 104;

const int `OPT_PROPABILITY` u003d 105;

const int `OPT_GAMMA` u003d 201;

const int `OPT_NU` u003d 202;

const int `OPT_EPS` u003d 203;

const int `OPT_P` u003d 204;

const int `OPT_COEF_ZERO` u003d 205;

const int `OPT_C` u003d 206;

const int `OPT_CACHE_SIZE` u003d 207;

/\* Методи \*/

public [\_\_construct](svm.construct.md)()

public [svm::crossvalidate](svm.crossvalidate.md)(array `$problem`,
int `$number_of_folds`): float

public [getOptions](svm.getoptions.md)(): array

public [setOptions](svm.setoptions.md)(array `$params`): bool

public [svm::train](svm.train.md)(array `$problem`, array `$weights` u003d
?): [SVMModel](class.svmmodel.md)

}

## Зумовлені константи

## Константи SVM

**`SVM::C_SVC`**
Базовий тип SVM. Тип за замовчуванням, добрий для початку.

**`SVM::NU_SVC`**
Тип NU_SVC використовує інший, більш гнучкий підхід до розважування помилок.

**`SVM::ONE_CLASS`**
Однокласова модель. Тренує лише на одному класі, використовуючи
"випадають" дані як негативні приклади

**`SVM::EPSILON_SVR`**
Тип для регресії (прогнозування значення, а не класу)

**`SVM::NU_SVR`**
Тип регресії SVM у стилі NU

**`SVM::KERNEL_LINEAR`**
Дуже просте ядро, яке добре працює для класифікації проблем
великих документів

**`SVM::KERNEL_POLY`**
Поліномінальне ядро

**`SVM::KERNEL_RBF`**
Стандартне Гаусове RBD ядро. Добре обробляє нелінійні проблеми та
є добрим значенням за умовчанням для класифікації

**`SVM::KERNEL_SIGMOID`**
Ядро, що базується на сигмоїдній функції. Дуже схоже на використання
дворівневої сигмоїдної нейронної мережі

**`SVM::KERNEL_PRECOMPUTED`**
Попередньо обчислене ядро – зараз не підтримується

**`SVM::OPT_TYPE`**
Опціональний ключ типу SVM

**`SVM::OPT_KERNEL_TYPE`**
Опціональний ключ типу ядра

**`SVM::OPT_DEGREE`**

**`SVM::OPT_SHRINKING`**
Параметр навчання, логічне значення, що визначає використання
скорочує евристики

**`SVM::OPT_PROBABILITY`**
Параметр навчання, логічне значення, що визначає, чи будуть
збиратися та використовуватися оцінки ймовірності

**`SVM::OPT_GAMMA`**
Параметр алгоритму для наступних типів ядра: Поліномінальний, RBF та
Сигмоїдне

**`SVM::OPT_NU`**
Опціональний ключ параметра nu. Використовується лише з типами NU\_
SVM

**`SVM::OPT_EPS`**
Опціональний ключ для Epsilon. Використовується тільки в
Епсилон-регресії

**`SVM::OPT_P`**
Навчальний параметр для Епсілон-регресії SVR

**`SVM::OPT_COEF_ZERO`**
Параметр алгоритму для поліномінального та сигмоїдного ядра

**`SVM::OPT_C`**
Опція параметра вартості, що контролює компроміс між помилками
та невизначеності - фактично штраф за помилкову класифікацію
навчальних прикладів.

**`SVM::OPT_CACHE_SIZE`**
Розмір кешу в пам'яті у мегабайтах

## Зміст

- [SVM::\_\_construct](svm.construct.md) - Конструктор класу SVM
- [SVM::crossvalidate](svm.crossvalidate.md) — Тестування
навчальних параметрів на підмножинах навчальних даних
- [SVM::getOptions](svm.getoptions.md) — Отримати поточні установки
навчання
- [SVM::setOptions](svm.setoptions.md) — Встановити установки
навчання
- [SVM::train](svm.train.md) — Створити SVMModel на основі учнів
даних

- [« Атрибути](language.attributes.md)
- [Синтаксис атрибутів »](language.attributes.syntax.md)

- [PHP Manual](index.md)
- [Атрибути](language.attributes.md)
- Введення в атрибути

## Введення в атрибути

(PHP 8)

Атрибути пропонують можливість додавати структуровані,
машиночитані метадані для наступних декларацій у коді: класи,
методи, функції, параметри, властивості та константи класу. Прив'язані
метадані можна отримати під час виконання, використовуючи [Reflection
API] (book.reflection.md). Таким чином, атрибути можна розглядати
як мову конфігурації, вбудований у код.

За допомогою атрибутів можна розділити абстрактну реалізацію будь-якої
функціональності та особливості її використання в коді. У деякому
сенсі це можна порівняти з поділом інтерфейсу та його реалізацій. Але
інтерфейси та реалізації - це про код, а атрибути - для додавання
додаткової інформації та конфігурацію. Інтерфейси можуть
реалізовуватися тільки класами, тоді як атрибути також застосовні для
методів, функцій, параметрів, властивостей та констант класів. Таким чином,
вони є набагато більш гнучкий механізм, ніж інтерфейси.

Розберемо використання атрибутів на простому прикладі реалізації
Опціональні методи для інтерфейсу. Припустимо, що інтерфейс
ActionHandler описує якусь операцію в додатку. Одні реалізації
цього інтерфейсу вимагають попереднього налаштування, а інші - ні. І
замість того, щоб вносити в інтерфейс ActionHandler додатковий
метод `setUp()`, який для частини реалізацій буде порожнім, можна
використовувати атрибут. Однією з переваг цього підходу є те,
що ми можемо використати атрибут кілька разів.

**Приклад #1 Реалізація опціональних методів інтерфейсу за допомогою
атрибутів**

` <?phpinterface ActionHandler{    public function execute();}#[Attribute]class SetUp {}class CopyFile implements ActionHandler{    public string $fileName; public string $targetDirectory; #[SetUp]     public function fileExists()   {|     }   }                                                     } elseif (!is_dir($this->targetDirectory)) {            throw new RuntimeException("Target directory $this->targetDirectory is not a; }    }    public function execute()    {       copy($this->fileName, $this->targetDirectory . '/' . basename($th;) }}function executeAction(ActionHandler $actionHandler){   $reflection u003d new ReflectionObject($actionHandler); foreach ($reflection->getMethods() as $method) {        $attributes u003d $method->getAttributes(SetUp::class); if (count($attributes) > 0) {            $methodName u003d $method->getName(); $actionHandler->$methodName(); }    }    $actionHandler->execute();}$copyAction u003d new CopyFile();$copyAction->fileName u003d "/tmp/foo.jpg";$copyAction->targetDirectory u003d $" copyAction); `

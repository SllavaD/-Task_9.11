const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Мария",
            "id_2": "Алина",
            "id_3": "Екатерина",
            "id_4": "Вера",
            "id_5": "Надежда",
            "id_6": "Любовь",
            "id_7": "Юлия",
            "id_8": "Эльвира",
            "id_9": "Дарья",
            "id_10": "Елизавета"
        }
    }`,
    

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {

        return this.person.gender = this.randomIntNumber() === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;

    },

    randomBirthYear: function() {

        return this.person.birthYear = this.randomIntNumber(1950, 2023);
         

    },

    randomFirstName: function() {

        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        };
      
    },


     randomSurname: function() {

        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'а';
        };

    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.birthYear = this.randomBirthYear();
        return this.person;
    }
};

/**
 * Класс User
 * @param fullName
 * @param birthday
 * @constructor
 */
function User(fullName, birthday){
    this.birthday = birthday;
    this.fullName = fullName;
    function toString() {
        return this.fullName;
    }

    /**
     * Объявляем/изменяем свойства
     */
    Object.defineProperties(this, {
        firstName:{
            set:function(firstName){
                this.fullName = firstName + ' ' + this.lastName;
            },
            get:function() {
                return  this.fullName.split(' ')[0];
            }
        },

        lastName:{
            // writable: true,
            enumerable: true,
            set: function(lastName) {
                this.fullName = this.firstName + ' ' + lastName;
            },
            get: function() {
                return this.fullName.split(' ')[1];
            }
        },

        toString:{
            // не определяется в for ... in
            enumerable: false
        },
        age:{
            get: function() {
                var today = new Date();
                var age = today.getFullYear() - this.birthday.getFullYear();
                if(today.getMonth() > this.birthday.getMonth()
                    || today.getMonth() > this.birthday.getMonth() && today.getDate() >= birthday.getDate()) {
                    return age;
                }
                return age - 1;
            }
        }

    });
}
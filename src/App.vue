<template>
  <div id="app">
    <form class="form" @submit.prevent="submit">
      <BaseInput label="Фамилия" v-model="v$.attributes.lastname.$model" style="grid-area: lastname;"
                 :errors="v$.attributes.lastname.$errors" required/>
      <BaseInput label="Имя" v-model="v$.attributes.firstname.$model" style="grid-area: firstname;"
                 :errors="v$.attributes.firstname.$errors" required/>
      <BaseInput label="Отчество" v-model="v$.attributes.surname.$model" style="grid-area: surname;"
                 :errors="v$.attributes.surname.$errors"/>
      <BaseInput label="Номер телефона" v-model="v$.attributes.phoneNumber.$model" :max-length=10 type="tel"
                 style="grid-area: phone;" :errors="v$.attributes.phoneNumber.$errors" required/>
      <BaseInput label="Дата рождения" v-model="v$.attributes.birthday.$model" type="date" style="grid-area: birthday;"
                 :errors="v$.attributes.birthday.$errors" required/>
      <BaseRadioButtonGroup v-model="attributes.selectedGender" label="Пол" :options="genderList" name="gender"
                        style="grid-area: gender;"/>
      <base-select :options="doctorList" label="Лечащий врач" style="grid-area: doctor;"
                   v-model="attributes.selectedDoctor"/>
      <base-select :options="groupList" label="Группа клиентов" style="grid-area: group;"
                   v-model="v$.attributes.selectedGroup.$model" :errors="v$.attributes.selectedGroup.$errors" multiple
                   required/>
      <div style="grid-area: dismsg;">
        <base-checkbox v-model="attributes.allowMsg" option="Не отправлять СМС" name="disallow"/>
      </div>
      <BaseInput label="Индекс" v-model="v$.address.index.$model" type="number" style="grid-area: index;" :errors="v$.address.index.$errors"/>
      <BaseInput label="Страна" v-model="v$.address.country.$model" style="grid-area: country;" :errors="v$.address.country.$errors"/>
      <BaseInput label="Область" v-model="v$.address.region.$model" style="grid-area: region;" :errors="v$.address.region.$errors"/>
      <BaseInput label="Город" v-model="v$.address.city.$model" style="grid-area: city;" :errors="v$.address.city.$errors" required/>
      <BaseInput label="Улица" v-model="v$.address.street.$model" style="grid-area: street;" :errors="v$.address.street.$errors"/>
      <BaseInput label="Дом" v-model="v$.address.house.$model" type="number" style="grid-area: house;" :errors="v$.address.house.$errors"/>

      <base-select :options="documentTypes" label="Тип документа" style="grid-area: documentType;"
                   v-model="v$.passport.selectedType.$model" :errors="v$.passport.selectedType.$errors" required/>
      <BaseInput label="Серия" v-model="v$.passport.series.$model" type="number" style="grid-area: series;" :errors="v$.passport.series.$errors"/>
      <BaseInput label="Номер" v-model="v$.passport.number.$model" type="number" style="grid-area: documentNumber;" :errors="v$.passport.number.$errors"/>
      <BaseInput label="Кем выдан" v-model="passport.issuedBy" style="grid-area: issuedBy;"/>
      <BaseInput label="Дата выдачи" v-model="v$.passport.issueDate.$model" type="date" style="grid-area: issueDate;" :errors="v$.passport.issueDate.$errors"
                 required/>
      <base-button style="grid-area: submit;">Создать</base-button>
    </form>
    <base-popup ref="popup">Пользователь успешно создан!</base-popup>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import BaseButton from "@/components/BaseButton.vue";
import BasePopup from "@/components/BasePopup.vue";
import {useVuelidate} from '@vuelidate/core'
import {helpers, integer, maxLength, minLength, required} from '@vuelidate/validators'
import BaseRadioButtonGroup from "@/components/BaseRadioButtonGroup.vue";

const alpha = helpers.regex(/[A-zА-яЁё]/)

export default {
  name: 'App',
  components: {
    BaseButton,
    BaseCheckbox,
    BaseSelect,
    BaseRadioButtonGroup,
    BaseInput,
    BasePopup
  },
  setup: () => ({v$: useVuelidate()}),
  validations() {
    return {
      attributes: {
        firstname: {
          required: helpers.withMessage('Заполните поле', required),
          alpha: helpers.withMessage('Можно использовать только буквы', alpha),
        },
        lastname: {
          required: helpers.withMessage('Заполните поле', required),
          alpha: helpers.withMessage('Можно использовать только буквы', alpha),
        },
        surname: {
          alpha: helpers.withMessage('Можно использовать только буквы', alpha),
        },
        birthday: {
          required: helpers.withMessage('Заполните поле', required),
        },
        phoneNumber: {
          required: helpers.withMessage('Заполните поле', required),
          integer: helpers.withMessage('Можно использовать только цифры', integer),
          minLength: helpers.withMessage(({$params}) => `Минимальное количество символов - ${$params.min}`, minLength(10)),
          maxLength: helpers.withMessage(({$params}) => `Максимальное количество символов - ${$params.max}`, maxLength(10))
        },
        selectedGroup: {
          required: helpers.withMessage('Заполните поле', required),
        },
      },
      address: {
        index: {
          integer: helpers.withMessage('Можно использовать только цифры', integer),
        },
        country: {
          alpha: helpers.withMessage('Можно использовать только буквы', alpha),
        },
        region: {
          alpha: helpers.withMessage('Можно использовать только буквы', alpha),
        },
        city: {
          required: helpers.withMessage('Заполните поле', required),
          alpha: helpers.withMessage('Можно использовать только буквы', alpha),
        },
        street: {
          alpha: helpers.withMessage('Можно использовать только буквы', alpha),
        },
        house: {
          integer: helpers.withMessage('Можно использовать только цифры', integer),
        },
      },
      passport: {
        selectedType: {
          required: helpers.withMessage('Заполните поле', required),
        },
        series: {
          integer: helpers.withMessage('Можно использовать только цифры', integer),
          minLength: helpers.withMessage(({$params}) => `Минимальное количество символов - ${$params.min}`, minLength(4)),
          maxLength: helpers.withMessage(({$params}) => `Максимальное количество символов - ${$params.max}`, maxLength(4))
        },
        number: {
          integer: helpers.withMessage('Можно использовать только цифры', integer),
          minLength: helpers.withMessage(({$params}) => `Минимальное количество символов - ${$params.min}`, minLength(6)),
          maxLength: helpers.withMessage(({$params}) => `Максимальное количество символов - ${$params.max}`, maxLength(6))
        },
        issueDate: {
          required: helpers.withMessage('Заполните поле', required),
        },
      },
    }
  },
  data() {
    return {
      genderList: ['Мужской', 'Женский'],
      groupList: ['VIP', 'Проблемные', 'ОМС'],
      doctorList: ['Иванов', 'Захаров', 'Чернышева'],
      documentTypes: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение'],
      attributes: {
        firstname: '',
        lastname: '',
        surname: '',
        birthday: '',
        phoneNumber: '',
        selectedGender: '',
        selectedGroup: [],
        selectedDoctor: 'Иванов',
        allowMsg: false,
      },
      address: {
        index: null,
        country: '',
        region: '',
        city: '',
        street: '',
        house: null,
      },
      passport: {
        selectedType: 'Паспорт',
        series: null,
        number: null,
        issuedBy: '',
        issueDate: ''
      }
    }
  },
  methods: {
    async submit() {
      const result = await this.v$.$validate()
      if (!result) {
        return;
      }
      this.$refs.popup.showPopup();
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  place-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 2rem 1rem;
}

.form {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'firstname lastname'
    'surname birthday'
    'phone phone'
    'gender gender'
    'group doctor'
    'dismsg dismsg'
    'index country'
    'region city'
    'street house'
    'documentType documentType'
    'series documentNumber'
    'issuedBy issueDate'
    'submit submit';

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-areas:
    'firstname'
    'lastname'
    'surname'
    'birthday'
    'phone'
    'gender'
    'group'
    'doctor'
    'dismsg'
    'index'
    'country'
    'region'
    'city'
    'street'
    'house'
    'documentType'
    'series'
    'documentNumber'
    'issuedBy'
    'issueDate'
    'submit ';
  }
}
</style>

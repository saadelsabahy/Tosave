export default (t) => ({
  comment: {required: {value: true, message: 'you must provide comment'}},

  email: {
    required: {value: true, message: 'Email is required'},
    pattern: {
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Invalid Email Format',
    },
  },
  password: {
    required: {
      value: true,
      message: t('validation:required', {fieldName: t('login:password')}),
    },
    minLength: {
      value: 6,
      message: t('validation:minLength', {
        fieldName: t('login:password'),
        minLength: 6,
      }),
    },
  },
  name: {
    required: {
      value: true,
      message: t('validation:required', {fieldName: t('login:userName')}),
    },
    minLength: {
      value: 2,
      message: t('validation:minLength', {
        fieldName: t('login:userName'),
        minLength: 2,
      }),
    },
  },
});

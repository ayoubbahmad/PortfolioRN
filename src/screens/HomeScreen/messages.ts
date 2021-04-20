/*
 * HomeScreen Messages
 *
 * This contains all the text for the HomeScreen Screen.
 */

export const scope = 'app.screen.HomeScreen';

const messages = {
  header: {
    scope: `${scope}.header`,
    options: {
      defaultValue: 'This is the HomeScreen Screen!',
    },
  },
  name: {
    scope: `${scope}.name`,
    options: {
      defaultValue: 'Ayoub bahmad',
    },
  },
  introduction: {
    scope: `${scope}.introduction`,
    options: {
      defaultValue:
        'I enjoy helping small agencies and businesses to bring their ideas to life.',
    },
  },
};

export default messages;

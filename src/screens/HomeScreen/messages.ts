export const scope = 'app.containers.OrdersAnalytics';

const messages = {
  test: {
    scope: `${scope}.test`,
    options: {
      defaultValue: 'This is the OrdersAnalytics container!',
    },
  },

  title: {
    scope: `${scope}.title`,
    options: {
      defaultValue: 'a title',
    },
  },
};

export default messages;

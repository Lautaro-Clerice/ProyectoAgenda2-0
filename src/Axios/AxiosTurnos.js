export const CreateOrder = async (order, dispatch, currentUser) => {
    try {
      const response = await axios.post(`${BASE_URL}orders`, order, {
        headers: {
          'x-token': currentUser.token,
        },
      });
      if (response) {
        getOrders(dispatch, currentUser);
      }
    } catch (err) {
      dispatch(createOrderFail());
    }
  };
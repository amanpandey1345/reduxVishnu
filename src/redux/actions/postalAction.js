import axios from "axios";

export const postal = (pincode) => async (dispatch) => {
  try {
    dispatch({ type: "postalRequest" });
    const { data } = await axios.get(
      `https://api.postalpincode.in/pincode/${pincode}`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    // console.log(data);
    dispatch({ type: "postalSuccess", payload:data});
  } catch (error) {
    dispatch({type:"postalFail", payload: error.response.data})
    console.log(error);
  }
};

export const ifsc = (ifscCode) => async (dispatch) => {
  try {
    dispatch({ type: "ifscRequest" });
    const { data } = await axios.get(
      `https://ifsc.razorpay.com/${ifscCode}`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    // console.log(data);
    dispatch({ type: "ifscSuccess", payload:data});
  } catch (error) {
    dispatch({type:"ifscFail", payload: error.response.data})
    console.log(error);
  }
};

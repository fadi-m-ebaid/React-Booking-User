import axiosConfig from '../../axiosConfig/axiosConfig';

export default function setcity() {
  return (dispatch) => {
    return axiosConfig
      .get(`/Cities`)
      .then((res) => {
        dispatch({ type: 'GET_city', payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

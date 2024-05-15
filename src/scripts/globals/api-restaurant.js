import CONFIGURASION from "./configurasion";

const API_RESTAURANT = {
  LIST_RESTAURANT: `${CONFIGURASION.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIGURASION.BASE_URL}/detail/${id}`,
};

export default API_RESTAURANT;

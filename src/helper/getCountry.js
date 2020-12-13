import Axios from "axios";
import { getIpPublicClient } from "./getIpPublicClient";

export const getCountry = async () => {
  const { data } = await getIpPublicClient();
  return await Axios.get(`https://freegeoip.live/json/${data}`);
};

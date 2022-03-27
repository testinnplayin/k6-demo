import { check, sleep } from 'k6';
import http from 'k6/http';

export const DURATION = __ENV.DURATION;
export const NUMBER_OF_USERS = __ENV.NUMBER_OF_USERS;
export const TEST_URL = __ENV.TEST_URL;

export const options = {
  vus: parseInt(NUMBER_OF_USERS),
  duration: DURATION,
};

// export default function () {
//   http.get(TEST_URL);

//   sleep(1);
// }

export default function () {
  const response = http.get(TEST_URL);

  check(response, {
    "is status 200": (res) => res.status === 200,
    "is status 404": (res) => res.status === 404,
  });
}
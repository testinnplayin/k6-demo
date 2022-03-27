/**
 * This is just a basic test to show what 10 virtual users over a duration of 10s looks like
 * We ping the k6 test directly
 */
import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  vus: 10,
  duration: '10s',
};

export default function () {
  http.get('http://test.k6.io');

  sleep(1);
}
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws'

import { GC_AUTH_TOKEN } from './components/constants'

const store = new Store(new RecordSource())

export const fetchQuery = (operation, variables) => {
  // 4
  return fetch('https://api.graph.cool/relay/v1/cjwaft7uh5r0s01269acx96u0', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(GC_AUTH_TOKEN)}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

// 2
const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text

  const subscriptionClient = new SubscriptionClient('wss://subscriptions.graph.cool/v1/cjwaft7uh5r0s01269acx96u0', { reconnect: true })
  subscriptionClient.subscribe({ query, variables }, (error, result) => {
    observer.onNext({ data: result })
  })
}

// 3
const network = Network.create(fetchQuery, setupSubscription)

// 5
const environment = new Environment({
  network,
  store,
})

// 6
export default environment
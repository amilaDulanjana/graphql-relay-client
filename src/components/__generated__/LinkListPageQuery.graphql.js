/**
 * @flow
 * @relayHash b1437ca126f76e5a0bbd6a343bf35b68
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LinkList_viewer$ref = any;
export type LinkListPageQueryVariables = {||};
export type LinkListPageQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: LinkList_viewer$ref
  |}
|};
export type LinkListPageQuery = {|
  variables: LinkListPageQueryVariables,
  response: LinkListPageQueryResponse,
|};
*/


/*
query LinkListPageQuery {
  viewer {
    ...LinkList_viewer
    id
  }
}

fragment LinkList_viewer on Viewer {
  allLinks(last: 100, orderBy: createdAt_DESC) {
    edges {
      node {
        ...Link_link
        id
      }
    }
  }
}

fragment Link_link on Link {
  id
  url
  createdAt
  postedBy {
    id
    name
  }
  votes {
    count
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LinkListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "LinkList_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LinkListPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allLinks",
            "storageKey": "allLinks(last:100,orderBy:\"createdAt_DESC\")",
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 100
              },
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "createdAt_DESC"
              }
            ],
            "concreteType": "LinkConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "LinkEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Link",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "url",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "createdAt",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "postedBy",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          (v0/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "name",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "votes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "VoteConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "count",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LinkListPageQuery",
    "id": null,
    "text": "query LinkListPageQuery {\n  viewer {\n    ...LinkList_viewer\n    id\n  }\n}\n\nfragment LinkList_viewer on Viewer {\n  allLinks(last: 100, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...Link_link\n        id\n      }\n    }\n  }\n}\n\nfragment Link_link on Link {\n  id\n  url\n  createdAt\n  postedBy {\n    id\n    name\n  }\n  votes {\n    count\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2c2833bffc47f6918a457dc5fe6b01ca';
module.exports = node;
